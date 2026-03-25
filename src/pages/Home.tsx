import React from 'react';
import { Link } from 'react-router-dom';
import { useIdeas } from '../context/IdeaContext';
import { useVillages } from '../context/VillageContext';
import { Button, Card, Badge } from '../components/UI';
import { START_PATHS, QUICK_LINKS } from '../data/guide';
import { ArrowRight, Compass, Library, Dna, BookOpen } from 'lucide-react';

export const Home: React.FC = () => {
  const { ideas, loading: ideasLoading } = useIdeas();
  const { villages, loading: villagesLoading } = useVillages();

  if (ideasLoading || villagesLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-20">
      <section className="relative pt-18 pb-10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <Badge variant="verified" className="mb-6 px-4 py-1">Start Here · iGEM Navigator</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-5xl">
            不是把资料堆给你，<br />而是先告诉你 <span className="text-emerald-600">现在该往哪走</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            这个网站现在升级为面向 iGEM 新手和团队成员的任务导向导航站：先帮你定位身份和阶段，再给你机制说明、时间线、术语库、交付物导航、官方资源重组，以及保留下来的 Idea Library 与 Parts BLAST。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/guide"><Button variant="secondary">先了解 iGEM 是什么</Button></Link>
            <Link to="/timeline"><Button variant="outline">看赛季时间线</Button></Link>
            <Link to="/parts-blast"><Button variant="ghost">试试 Parts BLAST</Button></Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <Compass className="w-5 h-5 text-emerald-600" />
          <h2 className="text-3xl font-bold text-slate-900">Start Here：按你的状态进入</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {START_PATHS.map((path) => (
            <Link key={path.title} to={path.to}>
              <Card className="p-6 h-full hover:border-emerald-500 hover:shadow-md transition-all">
                {path.badge && <Badge className="mb-4">{path.badge}</Badge>}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{path.title}</h3>
                <p className="text-slate-600 leading-7 mb-5">{path.description}</p>
                <div className="text-emerald-700 font-medium inline-flex items-center gap-2">进入路径 <ArrowRight className="w-4 h-4" /></div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-7 lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">核心导航模块</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUICK_LINKS.map((item) => (
              <Link key={item.title} to={item.to}>
                <div className="rounded-2xl border border-slate-200 p-5 hover:border-emerald-500 transition-colors h-full bg-slate-50/60">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-6">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Card>

        <Card className="p-7">
          <div className="flex items-center gap-3 mb-4">
            <Library className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">资源区</h2>
          </div>
          <div className="space-y-4 text-slate-600">
            <p>保留你原来的平台资产，但位置从首页主角调整为辅助资源：</p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-emerald-600">•</span><span>{ideas.length} 条 Idea Library 内容</span></li>
              <li className="flex gap-2"><span className="text-emerald-600">•</span><span>{villages.length} 个 villages 方向入口</span></li>
              <li className="flex gap-2"><span className="text-emerald-600">•</span><span>Awards Archive 保留为案例参考区</span></li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              <Link to="/ideas"><Button variant="outline">Idea Library</Button></Link>
              <Link to="/villages"><Button variant="ghost">Villages</Button></Link>
            </div>
          </div>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-300 text-sm font-medium mb-3"><Dna className="w-4 h-4" /> New feature</div>
              <h2 className="text-3xl font-bold mb-3">iGEM Parts BLAST 已接进第一版结构</h2>
              <p className="text-slate-300 leading-7">
                现在已经有一个可运行的 MVP 页面：支持 DNA 序列输入、本地相似搜索、返回 top hits。后面你如果要接真实 Registry parts 数据、过滤器、对齐视图或后端 BLAST 服务，都可以继续扩。
              </p>
            </div>
            <Link to="/parts-blast"><Button variant="secondary">打开 Parts BLAST</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
