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
    <div className="space-y-18 pb-24">
      <section className="relative pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-[16%] w-[36rem] h-[36rem] bg-emerald-200/45 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[8%] w-[28rem] h-[28rem] bg-cyan-100/55 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="igem-panel igem-hairline p-8 md:p-12 lg:p-14">
            <Badge variant="verified" className="mb-6 px-4 py-1">Start Here · iGEM Navigator</Badge>
            <h1 className="text-balance text-4xl md:text-6xl font-extrabold text-slate-950 mb-6 max-w-5xl leading-[1.06]">
              精准、克制、专业。
              <br />
              做一个真正 <span className="text-emerald-700">iGEM-native</span> 的现代导航入口。
            </h1>
            <p className="text-lg md:text-[1.25rem] text-slate-600 max-w-3xl leading-relaxed mb-9">
              不再是“信息堆叠站”，而是“决策起点”。
              你先回答自己当前阶段，再进入时间线、交付物、术语与官方资源。
              体验向 x.ai 的简洁感靠拢，但语义与色彩严格贴合 iGEM 的科研气质。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/guide"><Button variant="secondary" className="px-5">先了解 iGEM 是什么</Button></Link>
              <Link to="/timeline"><Button variant="outline" className="px-5">看赛季时间线</Button></Link>
              <Link to="/parts-blast"><Button variant="ghost" className="px-5">试试 Parts BLAST</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <Compass className="w-5 h-5 text-emerald-600" />
          <h2 className="text-3xl md:text-[2rem] font-bold text-slate-900">Start Here：按你的状态进入</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {START_PATHS.map((path) => (
            <Link key={path.title} to={path.to}>
              <Card className="p-6 h-full border-emerald-100/70 hover:border-emerald-300/70 hover-lift">
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
        <Card className="p-7 lg:col-span-2 border-emerald-100/70">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">核心导航模块</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUICK_LINKS.map((item) => (
              <Link key={item.title} to={item.to}>
                <div className="rounded-2xl border border-emerald-100 p-5 hover:border-emerald-300/70 transition-colors h-full bg-white/55 hover-lift">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-6">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Card>

        <Card className="p-7 border-emerald-100/70">
          <div className="flex items-center gap-3 mb-4">
            <Library className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">资源区</h2>
          </div>
          <div className="space-y-4 text-slate-600">
            <p>保留原有平台资产，但从“信息堆叠”改为“结构化入口”。</p>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-emerald-600">•</span><span>{ideas.length} 条 Idea Library 内容</span></li>
              <li className="flex gap-2"><span className="text-emerald-600">•</span><span>{villages.length} 个 villages 方向入口</span></li>
              <li className="flex gap-2"><span className="text-emerald-600">•</span><span>Awards Archive 作为案例参考区保留</span></li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              <Link to="/ideas"><Button variant="outline">Idea Library</Button></Link>
              <Link to="/villages"><Button variant="ghost">Villages</Button></Link>
            </div>
          </div>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="igem-dark-panel rounded-3xl p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-200 text-sm font-medium mb-3"><Dna className="w-4 h-4" /> New feature</div>
              <h2 className="text-3xl font-bold mb-3">iGEM Parts BLAST 已接进第一版结构</h2>
              <p className="text-emerald-50/85 leading-7">
                目前已具备可运行 MVP：支持 DNA 序列输入、本地相似搜索与 top hits 返回。
                后续可继续接入 Registry parts 实时数据、过滤器、对齐视图和后端 BLAST 服务。
              </p>
            </div>
            <Link to="/parts-blast"><Button variant="secondary" className="px-5">打开 Parts BLAST</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
