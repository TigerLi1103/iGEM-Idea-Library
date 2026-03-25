import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from '../components/UI';
import { GLOSSARY_TERMS } from '../data/guide';
import { Search } from 'lucide-react';

export const Glossary: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GLOSSARY_TERMS;
    return GLOSSARY_TERMS.filter((item) =>
      [item.term, item.category, item.definition, item.whyItMatters, item.stage, item.misconception]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <section className="max-w-3xl">
        <Badge variant="verified" className="mb-4">术语与概念解释</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">术语库：不只是看懂名词，而是看懂系统</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          iGEM 的难点常常不是单个术语本身，而是这些术语分别出现在什么阶段、承担什么作用、彼此如何连接。这一页用统一模板把核心概念讲清楚。
        </p>

        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索术语、阶段或关键词…"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <Card key={item.term} className="p-7">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{item.term}</h2>
                <p className="text-sm text-slate-500 mt-1">{item.category}</p>
              </div>
              <Badge>{item.stage}</Badge>
            </div>

            <div className="space-y-4 text-slate-600 leading-7">
              <div><span className="font-semibold text-slate-900">概念定义：</span>{item.definition}</div>
              <div><span className="font-semibold text-slate-900">作用说明：</span>{item.whyItMatters}</div>
              <div><span className="font-semibold text-slate-900">常见误解：</span>{item.misconception}</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.resources.map((resource) => (
                <Link key={resource.label} to={resource.to} className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">
                  {resource.label} →
                </Link>
              ))}
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};
