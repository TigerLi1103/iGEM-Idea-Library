import React, { useMemo, useState } from 'react';
import { Badge, Button, Card } from '../components/UI';
import { PARTS_LIBRARY } from '../data/parts';
import { Dna, Search, Sparkles, Filter, TableProperties, Target } from 'lucide-react';

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

export const PartsBlast: React.FC = () => {
  const [query, setQuery] = useState('ATGCGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCCCAATT');
  const [submittedQuery, setSubmittedQuery] = useState(query);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minIdentity, setMinIdentity] = useState(0);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);

  const types = useMemo(() => ['all', ...Array.from(new Set(PARTS_LIBRARY.map((p) => p.type)))], []);
  const categories = useMemo(() => ['all', ...Array.from(new Set(PARTS_LIBRARY.map((p) => p.category)))], []);

  const results = useMemo(() => {
    const cleaned = normalize(submittedQuery);
    if (!cleaned) return [];

    return PARTS_LIBRARY
      .filter((part) => selectedType === 'all' || part.type === selectedType)
      .filter((part) => selectedCategory === 'all' || part.category === selectedCategory)
      .map((part) => ({ part, result: scorePart(cleaned, part.sequence) }))
      .filter(({ result }) => result.identity * 100 >= minIdentity)
      .sort((a, b) => b.result.score - a.result.score || b.result.matches - a.result.matches);
  }, [submittedQuery, selectedType, selectedCategory, minIdentity]);

  const selectedHit = useMemo(() => {
    if (!results.length) return null;
    return results.find((r) => r.part.id === selectedPartId) ?? results[0];
  }, [results, selectedPartId]);

  const cleanedSubmitted = normalize(submittedQuery);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <section className="max-w-5xl">
        <Badge variant="verified" className="mb-4">iGEM Parts BLAST · v2</Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">在 parts 库里做更像 BLAST 的序列相似搜索</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          这版已经从单纯 MVP 升级成更完整的工具页：支持 DNA 序列输入、type/category 筛选、identity threshold、结果表、命中详情与 alignment preview。
          目前仍然是本地前端算法，不是远程 BLAST 服务，但交互形态已经可以先用来验证产品方向。
        </p>

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
            <Button variant="secondary" onClick={() => { setSubmittedQuery(query); setSelectedPartId(null); }}>
              <Search className="w-4 h-4" /> Run BLAST v2
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
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Indexed parts</div><div className="text-3xl font-bold text-slate-900">{PARTS_LIBRARY.length}</div></Card>
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Filtered hits</div><div className="text-3xl font-bold text-slate-900">{results.length}</div></Card>
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Mode</div><div className="text-3xl font-bold text-slate-900">Local</div></Card>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-6 items-start">
        <Card className="p-6 xl:sticky xl:top-24">
          <div className="flex items-center gap-2 mb-5">
            <Filter className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Filters</h2>
          </div>

          <div className="space-y-5">
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
              这是前端本地“近似 BLAST”版本：适合快速看命中和产品交互。下一步可以继续接真实 Registry 数据、后端索引和更完整的 alignment 算法。
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-2">
              <TableProperties className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-slate-900">Hit Table</h2>
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
                  </tr>
                </thead>
                <tbody>
                  {results.length ? results.slice(0, 20).map(({ part, result }, index) => (
                    <tr key={part.id} className={`border-t border-slate-100 cursor-pointer hover:bg-emerald-50/40 ${selectedHit?.part.id === part.id ? 'bg-emerald-50/70' : 'bg-white'}`} onClick={() => setSelectedPartId(part.id)}>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-slate-900">#{index + 1} {part.id}</div>
                        <div className="text-xs text-slate-500">{part.name}</div>
                      </td>
                      <td className="px-4 py-3 text-slate-700">{part.type}</td>
                      <td className="px-4 py-3 text-slate-900 font-semibold">{(result.identity * 100).toFixed(1)}%</td>
                      <td className="px-4 py-3 text-slate-700">{(result.coverage * 100).toFixed(1)}%</td>
                      <td className="px-4 py-3 text-slate-700">{result.bitScore}</td>
                      <td className="px-4 py-3 text-slate-700">{result.eValueLike.toExponential(2)}</td>
                      <td className="px-4 py-3 text-slate-700">{result.strand}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={7} className="px-4 py-10 text-center text-slate-500">No hits match the current filters.</td>
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
                    <Badge variant="verified">Best view</Badge>
                    <Badge>{selectedHit.part.type}</Badge>
                    <Badge>{selectedHit.part.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedHit.part.id} · {selectedHit.part.name}</h3>
                  <p className="text-slate-600 leading-7 max-w-3xl">{selectedHit.part.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 min-w-[280px]">
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Matches</div><div className="text-2xl font-bold text-slate-900">{selectedHit.result.matches}</div></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Mismatches</div><div className="text-2xl font-bold text-slate-900">{selectedHit.result.mismatchCount}</div></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Alignment start</div><div className="text-2xl font-bold text-slate-900">{selectedHit.result.start + 1}</div></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Part length</div><div className="text-2xl font-bold text-slate-900">{selectedHit.part.length}</div></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-lg font-bold text-slate-900">Alignment preview</h4>
                </div>
                <div className="rounded-2xl bg-slate-950 text-emerald-200 p-4 overflow-x-auto text-xs md:text-sm font-mono space-y-1">
                  <div>Query   {selectedHit.result.queryUsed.slice(0, 120)}</div>
                  <div>       {buildAlignmentMidline(selectedHit.result.alignedQuery.slice(0, 120), selectedHit.result.alignedTarget.slice(0, 120))}</div>
                  <div>Target  {selectedHit.result.alignedTarget.slice(0, 120)}</div>
                </div>
                <p className="mt-3 text-sm text-slate-500 leading-6">
                  这里展示的是当前最佳局部窗口的简化对齐预览。后续如果你要，我可以再加颜色高亮、滚动窗口和完整 alignment block。
                </p>
              </div>

              <div>
                <div className="text-sm text-slate-500 mb-2">Full sequence preview</div>
                <code className="block text-xs md:text-sm bg-slate-950 text-emerald-200 rounded-2xl p-4 overflow-x-auto">
                  {selectedHit.part.sequence}
                </code>
              </div>
            </Card>
          )}

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-3 text-slate-900">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-bold">下一步可继续升级</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">接真实 iGEM Registry / parts metadata</div>
              <div className="rounded-2xl bg-slate-50 p-4">接后端 BLAST / seed index / 更真实 scoring</div>
              <div className="rounded-2xl bg-slate-50 p-4">加 export / copy hit / deep link 到 part detail</div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
