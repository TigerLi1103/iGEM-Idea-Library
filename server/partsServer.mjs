import express from 'express';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PARTS_PORT || 3031;
const FASTA_PATH = process.env.IGEM_FASTA_PATH || path.resolve(__dirname, '../data/igem_all_parts.fasta');
const KMER = Number(process.env.PARTS_KMER || 8);
const MAX_CANDIDATES = Number(process.env.PARTS_MAX_CANDIDATES || 2500);

const normalize = (sequence = '') => sequence.replace(/[^ATCG]/gi, '').toUpperCase();
const reverseComplement = (sequence) =>
  normalize(sequence)
    .split('')
    .reverse()
    .map((base) => ({ A: 'T', T: 'A', C: 'G', G: 'C' }[base] ?? base))
    .join('');

function parseHeader(header) {
  const clean = header.replace(/^>/, '').trim();
  const id = clean.split(/\s+/)[0] || clean;
  const text = clean.slice(id.length).trim();
  const lower = text.toLowerCase();
  let type = 'Unknown';
  if (lower.includes('promoter')) type = 'Promoter';
  else if (lower.includes('terminator')) type = 'Terminator';
  else if (lower.includes('rbs')) type = 'RBS';
  else if (lower.includes('coding') || lower.includes('cds') || lower.includes('protein')) type = 'CDS';
  else if (lower.includes('plasmid')) type = 'Plasmid';
  return { id, name: text || id, description: text || id, type, category: type };
}

function parseFasta(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const chunks = text.split(/^>/m).filter(Boolean);
  return chunks.map((chunk, index) => {
    const lines = chunk.split(/\r?\n/);
    const header = '>' + lines.shift();
    const sequence = normalize(lines.join(''));
    const meta = parseHeader(header);
    return {
      idx: index,
      ...meta,
      sequence,
      length: sequence.length,
      preview: sequence.slice(0, 120),
    };
  }).filter((item) => item.sequence.length > 0);
}

function bestWindowIdentity(query, target) {
  const q = normalize(query);
  const t = normalize(target);
  if (!q || !t) return { identity: 0, matches: 0, alignedLength: 0, start: 0, alignedQuery: '', alignedTarget: '' };
  const shorter = q.length <= t.length ? q : t;
  const longer = q.length <= t.length ? t : q;
  let best = { identity: 0, matches: 0, alignedLength: shorter.length, start: 0, alignedQuery: shorter, alignedTarget: longer.slice(0, shorter.length) };
  for (let i = 0; i <= longer.length - shorter.length; i += 1) {
    const window = longer.slice(i, i + shorter.length);
    let matches = 0;
    for (let j = 0; j < shorter.length; j += 1) if (shorter[j] === window[j]) matches += 1;
    const identity = matches / shorter.length;
    if (identity > best.identity) best = { identity, matches, alignedLength: shorter.length, start: i, alignedQuery: shorter, alignedTarget: window };
  }
  return best;
}

function scorePart(query, target) {
  const forward = bestWindowIdentity(query, target);
  const rc = reverseComplement(query);
  const reverse = bestWindowIdentity(rc, target);
  const best = forward.identity >= reverse.identity
    ? { ...forward, strand: 'forward', queryUsed: normalize(query) }
    : { ...reverse, strand: 'reverse-complement', queryUsed: rc };
  const mismatchCount = best.alignedLength - best.matches;
  const coverage = normalize(query).length ? best.alignedLength / normalize(query).length : 0;
  return {
    ...best,
    mismatchCount,
    coverage,
    eValueLike: Number((1 / Math.max(best.matches, 1)).toExponential(2)),
    bitScore: Math.round(best.identity * 500 + best.matches * 2),
    score: Math.round(best.identity * 1000 + Math.min(normalize(query).length, normalize(target).length)),
  };
}

function kmers(sequence, k = KMER) {
  const seq = normalize(sequence);
  const out = new Set();
  if (seq.length < k) {
    if (seq) out.add(seq);
    return out;
  }
  for (let i = 0; i <= seq.length - k; i += 1) out.add(seq.slice(i, i + k));
  return out;
}

console.log(`[parts] loading FASTA from ${FASTA_PATH}`);
const parts = parseFasta(FASTA_PATH);
console.log(`[parts] loaded ${parts.length} parts`);

console.log(`[parts] building ${KMER}-mer index`);
const kmerIndex = new Map();
for (const part of parts) {
  for (const token of kmers(part.sequence, KMER)) {
    const arr = kmerIndex.get(token);
    if (arr) arr.push(part.idx);
    else kmerIndex.set(token, [part.idx]);
  }
}
console.log(`[parts] k-mer index ready (${kmerIndex.size} unique tokens)`);

function candidateParts(query, type, category, mode) {
  const filtered = (part) => (type === 'all' || part.type === type) && (category === 'all' || part.category === category);
  if (mode === 'exact') return parts.filter(filtered);

  const counts = new Map();
  const qKmers = kmers(query, Math.min(KMER, Math.max(3, normalize(query).length)));
  for (const token of qKmers) {
    const ids = kmerIndex.get(token);
    if (!ids) continue;
    for (const idx of ids) counts.set(idx, (counts.get(idx) || 0) + 1);
  }

  const candidates = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_CANDIDATES)
    .map(([idx]) => parts[idx])
    .filter(Boolean)
    .filter(filtered);

  if (candidates.length) return candidates;
  return parts.filter(filtered).slice(0, MAX_CANDIDATES);
}

app.get('/api/parts/health', (_req, res) => {
  res.json({ ok: true, count: parts.length, fastaPath: FASTA_PATH, kmer: KMER });
});

app.get('/api/parts/search', (req, res) => {
  const query = normalize(String(req.query.query || ''));
  const type = String(req.query.type || 'all');
  const category = String(req.query.category || 'all');
  const minIdentity = Number(req.query.minIdentity || 0);
  const limit = Math.min(Number(req.query.limit || 20), 100);
  const mode = String(req.query.mode || 'approximate');
  const sortBy = String(req.query.sortBy || 'score');

  if (!query) return res.json({ queryLength: 0, total: parts.length, hits: [] });

  const pool = candidateParts(query, type, category, mode);

  const hits = pool
    .map((part) => ({ part, result: scorePart(query, part.sequence) }))
    .filter(({ result }) => result.identity * 100 >= minIdentity)
    .sort((a, b) => {
      if (sortBy === 'identity') return b.result.identity - a.result.identity || b.result.matches - a.result.matches;
      if (sortBy === 'length') return b.part.length - a.part.length;
      return b.result.score - a.result.score || b.result.matches - a.result.matches;
    })
    .slice(0, limit)
    .map(({ part, result }) => ({
      id: part.id,
      name: part.name,
      type: part.type,
      category: part.category,
      description: part.description,
      length: part.length,
      preview: part.preview,
      result,
    }));

  res.json({
    queryLength: query.length,
    total: parts.length,
    scannedCandidates: pool.length,
    mode,
    sortBy,
    hits,
    availableTypes: Array.from(new Set(parts.map((p) => p.type))).sort(),
    availableCategories: Array.from(new Set(parts.map((p) => p.category))).sort(),
  });
});

app.get('/api/parts/:id', (req, res) => {
  const part = parts.find((p) => p.id === req.params.id);
  if (!part) return res.status(404).json({ error: 'not found' });
  res.json(part);
});

app.listen(PORT, () => {
  console.log(`[parts] server listening on http://localhost:${PORT}`);
});
