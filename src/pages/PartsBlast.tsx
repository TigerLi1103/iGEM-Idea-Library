import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card } from '../components/UI';
import { PARTS_LIBRARY } from '../data/parts';
import { Dna, Search, Sparkles, Filter, TableProperties, Target, Server, Download, ArrowUpDown, ExternalLink } from 'lucide-react';

const normalize = (sequence: string) => sequence.replace(/[^ATCG]/gi, '').toUpperCase();

const reverseComplement = (sequence: string) =>
  normalize(sequence)
    .split('')
    .reverse()
    .map((base) => ({ A: 'T', T: 'A', C: 'G', G: 'C' }[base as 'A' | 'T' | 'C' | 'G'] ?? base))
    .join('');

const bestWindowIdentity = (query: string, target: string) => {
  const q = normalize(query);
  const t = normalize(target);
  if (!q || !t) return { identity: 0, matches: 0, alignedLength: 0, start: 0, alignedQuery: '', alignedTarget: '' };

  const shorter = q.length <= t.length ? q : t;
  const longer = q.length <= t.length ? t : q;
  let best = { identity: 0, matches: 0, alignedLength: shorter.length, start: 0, alignedQuery: shorter, alignedTarget: longer.slice(0, shorter.length) };

  for (let i = 0; i <= longer.length - shorter.length; i += 1) {
    let matches = 0;
    const window = longer.slice(i, i + shorter.length);
    for (let j = 0; j < shorter.length; j += 1) {
      if (shorter[j] === window[j]) matches += 1;
    }
    const identity = matches / shorter.length;
    if (identity > best.identity) {
      best = { identity, matches, alignedLength: shorter.length, start: i, alignedQuery: shorter, alignedTarget: window };
    }
  }

  return best;
};

const scorePart = (query: string, target: string) => {
  const forward = bestWindowIdentity(query, target);
  const reverseQuery = reverseComplement(query);
  const reverse = bestWindowIdentity(reverseQuery, target);
  const best = forward.identity >= reverse.identity
    ? { ...forward, strand: 'forward' as const, queryUsed: normalize(query) }
    : { ...reverse, strand: 'reverse-complement' as const, queryUsed: reverseQuery };

  const mismatchCount = best.alignedLength - best.matches;
  const coverage = normalize(query).length ? best.alignedLength / normalize(query).length : 0;
  const eValueLike = Number((1 / Math.max(best.matches, 1)).toExponential(2));

  return {
    ...best,
    mismatchCount,
    coverage,
    eValueLike,
    bitScore: Math.round(best.identity * 500 + best.matches * 2),
    score: Math.round(best.identity * 1000 + Math.min(normalize(query).length, normalize(target).length)),
  };
};

const buildAlignmentMidline = (a: string, b: string) =>
  a
    .split('')
    .map((char, idx) => (char === b[idx] ? '|' : '.'))
    .join('');

type Hit = {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  length: number;
  preview?: string;
  sequence?: string;
  result: {
    identity: number;
    coverage: number;
    bitScore: number;
    eValueLike: number;
    matches: number;
    mismatchCount: number;
    alignedLength: number;
    start: number;
    strand: string;
    queryUsed: string;
    alignedQuery: string;
    alignedTarget: string;
  };
};

export const PartsBlast: React.FC = () => {
  const [query, setQuery] = useState('ATGCGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCCCAATT');
  const [submittedQuery, setSubmittedQuery] = useState(query);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minIdentity, setMinIdentity] = useState(0);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [serverAvailable, setServerAvailable] = useState(false);
  const [serverCount, setServerCount] = useState<number | null>(null);
  const [serverHits, setServerHits] = useState<Hit[] | null>(null);
  const [serverTypes, setServerTypes] = useState<string[]>([]);
  const [serverCategories, setServerCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'approximate' | 'exact'>('approximate');
  const [sortBy, setSortBy] = useState<'score' | 'identity' | 'length'>('score');
  const [scannedCandidates, setScannedCandidates] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/parts/health')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('no server'))))
      .then((data) => {
        setServerAvailable(true);
        setServerCount(data.count ?? null);
      })
      .catch(() => setServerAvailable(false));
  }, []);

  const demoTypes = useMemo(() => ['all', ...Array.from(new Set(PARTS_LIBRARY.map((p) => p.type)))], []);
  const demoCategories = useMemo(() => ['all', ...Array.from(new Set(PARTS_LIBRARY.map((p) => p.category)))], []);
  const types = serverAvailable && serverTypes.length ? ['all', ...serverTypes] : demoTypes;
  const categories = serverAvailable && serverCategories.length ? ['all', ...serverCategories] : demoCategories;

  const localResults = useMemo(() => {
    const cleaned = normalize(submittedQuery);
    if (!cleaned) return [];

    return PARTS_LIBRARY
      .filter((part) => selectedType === 'all' || part.type === selectedType)
      .filter((part) => selectedCategory === 'all' || part.category === selectedCategory)
      .map((part) => ({ ...part, result: scorePart(cleaned, part.sequence) }))
      .filter((hit) => hit.result.identity * 100 >= minIdentity)
      .sort((a, b) => {
        if (sortBy === 'identity') return b.result.identity - a.result.identity || b.result.matches - a.result.matches;
        if (sortBy === 'length') return b.length - a.length;
        return b.result.score - a.result.score || b.result.matches - a.result.matches;
      });
  }, [submittedQuery, selectedType, selectedCategory, minIdentity, sortBy]);

  const results: Hit[] = serverAvailable ? (serverHits ?? []) : (localResults as Hit[]);

  const selectedHit = useMemo(() => {
    if (!results.length) return null;
    return results.find((r) => r.id === selectedPartId) ?? results[0];
  }, [results, selectedPartId]);

  const cleanedSubmitted = normalize(submittedQuery);

  const runSearch = async () => {
    setSubmittedQuery(query);
    setSelectedPartId(null);

    if (!serverAvailable) return;

    setLoading(true);
    try {
      const params = new URLSearchParams({
        query,
        type: selectedType,
        category: selectedCategory,
        minIdentity: String(minIdentity),
        limit: '20',
        mode,
        sortBy,
      });
      const res = await fetch(`/api/parts/search?${params.toString()}`);
      const data = await res.json();
      setServerHits(data.hits ?? []);
      setServerTypes(data.availableTypes ?? []);
      setServerCategories(data.availableCategories ?? []);
      setServerCount(data.total ?? null);
      setScannedCandidates(data.scannedCandidates ?? null);
    } finally {
      setLoading(false);
    }
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'parts-blast-results.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportCsv = () => {
    const rows = [
      ['id', 'name', 'type', 'category', 'length', 'identity', 'coverage', 'bitScore', 'eValueLike', 'strand'],
      ...results.map((hit) => [
        hit.id,
        hit.name,
        hit.type,
        hit.category,
        String(hit.length),
        (hit.result.identity * 100).toFixed(2),
        (hit.result.coverage * 100).toFixed(2),
        String(hit.result.bitScore),
        String(hit.result.eValueLike),
        hit.result.strand,
      ]),
    ];
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'parts-blast-results.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <section className="max-w-5xl">
        <Badge variant="verified" className="mb-4">iGEM Parts BLAST · v4</Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">真实全量库 + 更快预筛 + 更像 BLAST 的结果页</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          现在这页已经不只是 demo：支持本地 API 读取 2024 全量 FASTA、k-mer 预筛提速、exact / approximate 搜索模式、排序、导出结果，以及独立的 part detail 页面。
        </p>
        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${serverAvailable ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
          <Server className="w-4 h-4" />
          {serverAvailable ? `Live dataset online · ${serverCount ?? '…'} parts` : 'Demo fallback mode'}
        </div>
      </section>

      <section className="max-w-5xl">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Dna className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Sequence Query</h2>
              <p className="text-slate-500 text-sm">仅保留 A / T / C / G 字符，自动忽略空格和其他符号；同时比较 forward 与 reverse-complement。</p>
            </div>
          </div>

          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full min-h-40 rounded-2xl border border-slate-200 p-4 font-mono text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Paste DNA sequence here..."
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={runSearch} disabled={loading}>
              <Search className="w-4 h-4" /> {loading ? 'Running…' : 'Run BLAST'}
            </Button>
            <Button variant="outline" onClick={() => setQuery('ATGCGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCCCAATT')}>
              Use demo GFP fragment
            </Button>
            <Button variant="ghost" onClick={() => setQuery('CAATACGCAAACCGCCTCTCCCCGCGCGTTGGCCGATTCATTAATGCAGC')}>
              Use demo Lac promoter fragment
            </Button>
          </div>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Query length</div><div className="text-3xl font-bold text-slate-900">{cleanedSubmitted.length}</div></Card>
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Indexed parts</div><div className="text-3xl font-bold text-slate-900">{serverAvailable ? (serverCount ?? '…') : PARTS_LIBRARY.length}</div></Card>
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Filtered hits</div><div className="text-3xl font-bold text-slate-900">{results.length}</div></Card>
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Candidates scanned</div><div className="text-3xl font-bold text-slate-900">{serverAvailable ? (scannedCandidates ?? '…') : PARTS_LIBRARY.length}</div></Card>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-6 items-start">
        <Card className="p-6 xl:sticky xl:top-24">
          <div className="flex items-center gap-2 mb-5">
            <Filter className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Filters</h2>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Mode</label>
              <select value={mode} onChange={(e) => setMode(e.target.value as 'approximate' | 'exact')} className="w-full rounded-xl border border-slate-200 px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="approximate">approximate</option>
                <option value="exact">exact</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Sort by</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'score' | 'identity' | 'length')} className="w-full rounded-xl border border-slate-200 px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="score">score</option>
                <option value="identity">identity</option>
                <option value="length">length</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Part type</label>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-emerald-500">
                {types.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-emerald-500">
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Min identity: <span className="font-semibold text-slate-900">{minIdentity}%</span></label>
              <input type="range" min="0" max="100" step="1" value={minIdentity} onChange={(e) => setMinIdentity(Number(e.target.value))} className="w-full accent-emerald-600" />
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 leading-6">
              <div className="font-semibold text-slate-900 mb-1">当前说明</div>
              {serverAvailable
                ? 'approximate 模式会先做 k-mer 预筛，再跑详细比对，速度比全量硬扫好得多。'
                : '当前没连到本地 API，所以页面自动回退到 demo 数据。启动 server 后就会切到真实全量库。'}
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <TableProperties className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">Hit Table</h2>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" onClick={exportJson}><Download className="w-4 h-4" /> JSON</Button>
                <Button variant="outline" onClick={exportCsv}><Download className="w-4 h-4" /> CSV</Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Part</th>
                    <th className="text-left px-4 py-3 font-semibold">Type</th>
                    <th className="text-left px-4 py-3 font-semibold">Identity</th>
                    <th className="text-left px-4 py-3 font-semibold">Coverage</th>
                    <th className="text-left px-4 py-3 font-semibold">Bit score</th>
                    <th className="text-left px-4 py-3 font-semibold">E-like</th>
                    <th className="text-left px-4 py-3 font-semibold">Strand</th>
                    <th className="text-left px-4 py-3 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {results.length ? results.slice(0, 20).map((hit, index) => (
                    <tr key={hit.id} className={`border-t border-slate-100 hover:bg-emerald-50/40 ${selectedHit?.id === hit.id ? 'bg-emerald-50/70' : 'bg-white'}`}>
                      <td className="px-4 py-3 cursor-pointer" onClick={() => setSelectedPartId(hit.id)}>
                        <div className="font-semibold text-slate-900">#{index + 1} {hit.id}</div>
                        <div className="text-xs text-slate-500">{hit.name}</div>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{hit.type}</td>
                      <td className="px-4 py-3 text-slate-900 font-semibold">{(hit.result.identity * 100).toFixed(1)}%</td>
                      <td className="px-4 py-3 text-slate-700">{(hit.result.coverage * 100).toFixed(1)}%</td>
                      <td className="px-4 py-3 text-slate-700">{hit.result.bitScore}</td>
                      <td className="px-4 py-3 text-slate-700">{hit.result.eValueLike.toExponential(2)}</td>
                      <td className="px-4 py-3 text-slate-700">{hit.result.strand}</td>
                      <td className="px-4 py-3">
                        <Link to={`/parts/${encodeURIComponent(hit.id)}`} className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-medium">
                          Open <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={8} className="px-4 py-10 text-center text-slate-500">No hits match the current filters.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>

          {selectedHit && (
            <Card className="p-6 space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <Badge variant="verified">Selected hit</Badge>
                    <Badge>{selectedHit.type}</Badge>
                    <Badge>{selectedHit.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedHit.id} · {selectedHit.name}</h3>
                  <p className="text-slate-600 leading-7 max-w-3xl">{selectedHit.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 min-w-[280px]">
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Matches</div><div className="text-2xl font-bold text-slate-900">{selectedHit.result.matches}</div></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Mismatches</div><div className="text-2xl font-bold text-slate-900">{selectedHit.result.mismatchCount}</div></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Alignment start</div><div className="text-2xl font-bold text-slate-900">{selectedHit.result.start + 1}</div></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Part length</div><div className="text-2xl font-bold text-slate-900">{selectedHit.length}</div></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-lg font-bold text-slate-900">Alignment preview</h4>
                </div>
                <div className="rounded-2xl bg-slate-950 text-emerald-200 p-4 overflow-x-auto text-xs md:text-sm font-mono space-y-1">
                  <div>Query   {selectedHit.result.queryUsed.slice(0, 160)}</div>
                  <div>       {buildAlignmentMidline(selectedHit.result.alignedQuery.slice(0, 160), selectedHit.result.alignedTarget.slice(0, 160))}</div>
                  <div>Target  {selectedHit.result.alignedTarget.slice(0, 160)}</div>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link to={`/parts/${encodeURIComponent(selectedHit.id)}`}>
                  <Button variant="secondary">Open part detail <ExternalLink className="w-4 h-4" /></Button>
                </Link>
              </div>
            </Card>
          )}

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-3 text-slate-900">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-bold">启动真实全量库 server</h2>
            </div>
            <code className="block text-xs md:text-sm bg-slate-950 text-emerald-200 rounded-2xl p-4 overflow-x-auto mb-4">
              npm run parts:server
            </code>
            <div className="text-sm text-slate-500 inline-flex items-center gap-2"><ArrowUpDown className="w-4 h-4" /> 现在支持 approximate / exact 和多种排序。</div>
          </Card>
        </div>
      </section>
    </div>
  );
};
