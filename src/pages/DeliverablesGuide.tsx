import React from 'react';
import { Card, Badge } from '../components/UI';

const sections = [
  {
    title: '需要准备哪些核心交付物？',
    points: ['wiki / 网站展示', '项目核心叙事与证据整理', 'presentation / final presentation', '评审对应材料与奖项相关说明'],
  },
  {
    title: '各交付物分别承担什么功能？',
    points: ['wiki：完整呈现项目内容与结构', 'presentation：高密度、短时间展示核心逻辑', '答辩与 judging 材料：帮助评委快速定位亮点与证据'],
  },
  {
    title: 'judges 通常从哪些内容了解项目？',
    points: ['项目问题定义是否清楚', '设计逻辑与执行路径是否成立', '数据与证据链是否支撑结论', '展示结构是否让项目易于理解'],
  },
  {
    title: 'medal 与 special prize 的关系与区别',
    points: ['medal 更像基础完成度与规则达成', 'special prize 更强调特定方向上的突出表现', '奖项目标必须提前规划，不是最后才“顺便申报”'],
  },
];

export const DeliverablesGuide: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <section className="max-w-3xl">
        <Badge variant="verified" className="mb-4">Deliverables & Judging</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">把复杂输出要求，转成清晰准备逻辑</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          这一页面向已经进入执行阶段的团队成员和负责人：你不只是要知道“要交什么”，而是要理解每项交付物为什么存在、评委如何通过它们认识你的项目，以及为什么展示材料必须尽早规划。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Card key={section.title} className="p-7">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
            <ul className="space-y-3 text-slate-600 leading-7">
              {section.points.map((point) => <li key={point} className="flex gap-2"><span className="text-emerald-600">•</span><span>{point}</span></li>)}
            </ul>
          </Card>
        ))}
      </section>
    </div>
  );
};
