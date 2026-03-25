import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button } from '../components/UI';
import { ArrowRight, Network, Trophy, Users, BookOpen } from 'lucide-react';

const sections = [
  {
    title: 'iGEM 的基本性质与特点',
    text: 'iGEM 不是单纯的科研竞赛，也不是只看实验结果的项目展示。它更像一个把项目设计、团队协作、技术实现、社会连接与最终表达整合在一起的综合型 synthetic biology competition。',
    icon: Trophy,
  },
  {
    title: '团队、项目、模块、赛季的关系',
    text: '一支队伍在一个赛季里推进一个项目，而项目的推进通常需要实验、建模、HP、设计、wiki、展示等多个模块协同。模块不是分裂的任务包，而是共同服务于项目主线的不同工作面。',
    icon: Users,
  },
  {
    title: '从前期准备到最终展示的完整流程',
    text: '赛季前期先建立比赛认知和团队结构，中期推进项目设计与执行，后期集中完成展示、交付物和评审表达。真正高质量的团队通常不是最后冲刺，而是从早期就开始同步记录与构建 narrative。',
    icon: Network,
  },
  {
    title: '项目、wiki、judging、awards 的逻辑关联',
    text: '项目本身是核心，但 judges 并不是直接“看到项目本体”，而是通过 wiki、presentation、deliverables 和答辩去理解项目。因此项目质量与展示质量必须对应，awards 也需要建立在清晰的证据链和叙事结构之上。',
    icon: BookOpen,
  },
];

export const CompetitionGuide: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <section className="text-center max-w-3xl mx-auto">
        <Badge variant="verified" className="mb-4">iGEM 机制说明</Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">先看全局图，再决定下一步</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          这一页不是给你塞更多名词，而是帮你把 iGEM 的核心结构看成一张图：比赛是什么、团队怎么运作、评审如何理解你的项目、为什么展示逻辑和项目本身同样重要。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Card key={section.title} className="p-7 h-full">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <section.icon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{section.title}</h2>
            <p className="text-slate-600 leading-7">{section.text}</p>
          </Card>
        ))}
      </section>

      <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">下一步建议</h2>
          <p className="text-slate-600">如果你已经看懂了整体结构，下一步最适合去看赛季时间线或交付物与评审导航。</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/timeline"><Button variant="secondary">去看赛季时间线</Button></Link>
          <Link to="/deliverables"><Button variant="outline">去看交付物与评审</Button></Link>
          <Link to="/faq"><Button variant="ghost">常见问题 <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>
    </div>
  );
};
