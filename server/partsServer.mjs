import express from 'express';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PARTS_PORT || 3031;
const FASTA_PATH = process.env.IGEM_FASTA_PATH || path.resolve(__dirname, '../data/igem_all_parts.fasta');

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
  return chunks.map((chunk) => {
    const lines = chunk.split(/\r?\n/);
    const header = '>' + lines.shift();
    const sequence = normalize(lines.join(''));
    const meta = parseHeader(header);
    return {
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

console.log(`[parts] loading FASTA from ${FASTA_PATH}`);
const parts = parseFasta(FASTA_PATH);
console.log(`[parts] loaded ${parts.length} parts`);

app.get('/api/parts/health', (_req, res) => {
  res.json({ ok: true, count: parts.length, fastaPath: FASTA_PATH });
});

app.get('/api/parts/search', (req, res) => {
  const query = normalize(String(req.query.query || ''));
  const type = String(req.query.type || 'all');
  const category = String(req.query.category || 'all');
  const minIdentity = Number(req.query.minIdentity || 0);
  const limit = Math.min(Number(req.query.limit || 20), 50);

  if (!query) return res.json({ queryLength: 0, total: parts.length, hits: [] });

  const hits = parts
    .filter((part) => type === 'all' || part.type === type)
    .filter((part) => category === 'all' || part.category === category)
    .map((part) => ({ part: { ...part, sequence: undefined }, result: scorePart(query, part.sequence) }))
    .filter(({ result }) => result.identity * 100 >= minIdentity)
    .sort((a, b) => b.result.score - a.result.score || b.result.matches - a.result.matches)
    .slice(0, limit)
    .map(({ part, result }) => ({
      ...part,
      result,
    }));

  res.json({
    queryLength: query.length,
    total: parts.length,
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
