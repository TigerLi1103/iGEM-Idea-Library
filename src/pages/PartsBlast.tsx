import React, { useMemo, useState } from 'react';
import { Badge, Button, Card } from '../components/UI';
import { PARTS_LIBRARY } from '../data/parts';
import { Dna, Search, Sparkles } from 'lucide-react';

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
  if (!q || !t) return { identity: 0, matches: 0, alignedLength: 0, start: 0 };

  const shorter = q.length <= t.length ? q : t;
  const longer = q.length <= t.length ? t : q;
  let best = { identity: 0, matches: 0, alignedLength: shorter.length, start: 0 };

  for (let i = 0; i <= longer.length - shorter.length; i += 1) {
    let matches = 0;
    for (let j = 0; j < shorter.length; j += 1) {
      if (shorter[j] === longer[i + j]) matches += 1;
    }
    const identity = matches / shorter.length;
    if (identity > best.identity) best = { identity, matches, alignedLength: shorter.length, start: i };
  }

  return best;
};

const scorePart = (query: string, target: string) => {
  const forward = bestWindowIdentity(query, target);
  const reverse = bestWindowIdentity(reverseComplement(query), target);
  const best = forward.identity >= reverse.identity ? { ...forward, strand: 'forward' } : { ...reverse, strand: 'reverse-complement' };
  return {
    ...best,
    score: Math.round(best.identity * 1000 + Math.min(normalize(query).length, normalize(target).length)),
  };
};

export const PartsBlast: React.FC = () => {
  const [query, setQuery] = useState('ATGCGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCCCAATT');
  const [submittedQuery, setSubmittedQuery] = useState(query);

  const results = useMemo(() => {
    const cleaned = normalize(submittedQuery);
    if (!cleaned) return [];
    return PARTS_LIBRARY.map((part) => ({ part, result: scorePart(cleaned, part.sequence) }))
      .sort((a, b) => b.result.score - a.result.score)
      .slice(0, 6);
  }, [submittedQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <section className="max-w-4xl">
        <Badge variant="verified" className="mb-4">iGEM Parts BLAST · MVP</Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">在 parts 库里做序列相似搜索</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          我先给你做了一个前端可运行的 MVP：输入 DNA sequence，就能在一个内置 parts 库里做本地相似匹配，返回 top hits、identity、方向和长度信息。
          这不是完整 NCBI BLAST 替代品，但非常适合先把产品形态、交互路径和展示方式做出来。后面你要接真实 iGEM Registry / 后端数据库，我再给你升级。
        </p>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Dna className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Sequence Query</h2>
              <p className="text-slate-500 text-sm">仅保留 A / T / C / G 字符，自动忽略空格和其他符号。</p>
            </div>
          </div>

          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full min-h-40 rounded-2xl border border-slate-200 p-4 font-mono text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Paste DNA sequence here..."
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => setSubmittedQuery(query)}>
              <Search className="w-4 h-4" /> Run BLAST MVP
            </Button>
            <Button variant="outline" onClick={() => setQuery('ATGCGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCCCAATT')}>
              Use demo GFP fragment
            </Button>
          </div>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Query length</div><div className="text-3xl font-bold text-slate-900">{normalize(submittedQuery).length}</div></Card>
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Indexed parts</div><div className="text-3xl font-bold text-slate-900">{PARTS_LIBRARY.length}</div></Card>
        <Card className="p-5"><div className="text-sm text-slate-500 mb-1">Search mode</div><div className="text-3xl font-bold text-slate-900">Local</div></Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-slate-900">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <h2 className="text-2xl font-bold">Top hits</h2>
        </div>

        {results.map(({ part, result }, index) => (
          <Card key={part.id} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="verified">#{index + 1}</Badge>
                  <span className="text-sm font-semibold text-slate-500">{part.id}</span>
                  <span className="text-sm text-emerald-700 font-medium">{part.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{part.name}</h3>
                <p className="text-slate-600 leading-7 max-w-3xl">{part.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 min-w-[260px]">
                <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Identity</div><div className="text-2xl font-bold text-slate-900">{(result.identity * 100).toFixed(1)}%</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Strand</div><div className="text-lg font-bold text-slate-900">{result.strand}</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Aligned</div><div className="text-2xl font-bold text-slate-900">{result.alignedLength} bp</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500 uppercase tracking-wider">Part length</div><div className="text-2xl font-bold text-slate-900">{part.length} bp</div></div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-slate-100">
              <div className="text-sm text-slate-500 mb-2">Sequence preview</div>
              <code className="block text-xs md:text-sm bg-slate-950 text-emerald-200 rounded-2xl p-4 overflow-x-auto">
                {part.sequence.slice(0, 180)}{part.sequence.length > 180 ? '…' : ''}
              </code>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};
