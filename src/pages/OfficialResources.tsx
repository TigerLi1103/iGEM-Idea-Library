import React from 'react';
import { Card, Badge } from '../components/UI';
import { RESOURCE_GROUPS } from '../data/guide';

export const OfficialResources: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <section className="max-w-3xl">
        <Badge variant="verified" className="mb-4">官方资源重组模块</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">不是照搬官网结构，而是按用户任务重组入口</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          用户不需要先理解官方站点怎么组织页面，用户只需要知道：我当前要完成什么任务、应该先看哪几个入口、下一步读什么。这一页先做成第一版导航骨架，后续可以继续补充真实官方链接与分层说明。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESOURCE_GROUPS.map((group) => (
          <Card key={group.title} className="p-7">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{group.title}</h2>
            <ul className="space-y-3 text-slate-600 leading-7">
              {group.items.map((item) => <li key={item} className="flex gap-2"><span className="text-emerald-600">•</span><span>{item}</span></li>)}
            </ul>
          </Card>
        ))}
      </section>
    </div>
  );
};
