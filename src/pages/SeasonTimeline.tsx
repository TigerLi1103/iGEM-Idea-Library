import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button } from '../components/UI';
import { TIMELINE_STAGES } from '../data/guide';
import { ArrowRight } from 'lucide-react';

export const SeasonTimeline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <section className="max-w-3xl">
        <Badge variant="verified" className="mb-4">赛季时间线</Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">把隐性的赛季逻辑，变成显性的行动路线图</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          这一页按比赛推进阶段整理你最该知道的事：现在主要任务是什么、哪些模块应开始推进、常见误区有哪些，以及下一步优先读什么。
        </p>
      </section>

      <section className="space-y-6">
        {TIMELINE_STAGES.map((stage, index) => (
          <Card key={stage.id} className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
              <div className="lg:w-56 shrink-0">
                <div className="text-sm font-semibold text-emerald-600 mb-2">阶段 {index + 1}</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{stage.title}</h2>
                <p className="text-sm text-slate-500">{stage.period}</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-1">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">阶段说明</h3>
                  <p className="text-slate-600 leading-7">{stage.summary}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">当前主要任务</h3>
                  <ul className="space-y-2 text-slate-600">
                    {stage.tasks.map((task) => <li key={task} className="flex gap-2"><span className="text-emerald-600">•</span><span>{task}</span></li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">常见误区</h3>
                  <ul className="space-y-2 text-slate-600 mb-4">
                    {stage.pitfalls.map((pitfall) => <li key={pitfall} className="flex gap-2"><span className="text-rose-500">•</span><span>{pitfall}</span></li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {stage.recommendedLinks.map((link) => (
                      <Link key={link.label} to={link.to}>
                        <Button variant="outline" className="text-xs">{link.label}</Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <section className="rounded-3xl bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h2 className="text-2xl font-bold mb-2">如果你是队长，接下来最该看什么？</h2>
          <p className="text-slate-300">优先看交付物与评审导航，再去看官方资源重组页，建立整个赛季的准备逻辑。</p>
        </div>
        <Link to="/deliverables"><Button variant="secondary">去看交付物与评审 <ArrowRight className="w-4 h-4" /></Button></Link>
      </section>
    </div>
  );
};
