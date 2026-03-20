import React from 'react';
import { Link } from 'react-router-dom';
import { useIdeas } from '../context/IdeaContext';
import { useVillages } from '../context/VillageContext';
import { useAuth } from '../context/AuthContext';
import { Button, Card, Badge } from '../components/UI';
import { ArrowRight, Sparkles, Search, TrendingUp, Users, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const { ideas, loading: ideasLoading } = useIdeas();
  const { villages, loading: villagesLoading } = useVillages();
  const { user } = useAuth();
  
  const latestIdeas = ideas
    .filter(i => i.status === 'published' || i.status === 'featured' || (user && i.authorId === user.id))
    .slice(0, 4);

  if (ideasLoading || villagesLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="verified" className="mb-6 px-4 py-1">iGEM 2026 Official Idea Hub</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              The Future of <span className="text-emerald-600">Synthetic Biology</span> <br />
              Starts with an Idea.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              A collaborative library for iGEM project ideas. Powered by AI to match your concepts with historical teams, research, and villages.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search by topic, village, or chassis..." 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>
              <Button className="h-14 px-8 text-lg rounded-2xl shadow-lg shadow-emerald-500/20">
                Explore Library
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Total Ideas', value: '1,240+', icon: Sparkles },
            { label: 'Villages', value: '12', icon: Globe },
            { label: 'Active Users', value: '5,000+', icon: Users },
            { label: 'AI Matches', value: '15k+', icon: TrendingUp },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-emerald-600">
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Villages Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Explore by Village</h2>
            <p className="text-slate-500 mt-2">Find inspiration in specific iGEM competition tracks.</p>
          </div>
          <Link to="/villages">
            <Button variant="outline">View All Villages</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {villages.slice(0, 6).map((village) => (
            <Link key={village.id} to={`/villages/${village.id}`}>
              <Card className="group hover:border-emerald-500 hover:shadow-md transition-all p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-${village.color}-50 flex items-center justify-center text-${village.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{village.name}</h3>
                <p className="text-slate-500 text-sm flex-grow">{village.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{ideas.filter(i => i.villageId === village.id).length} Ideas</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Ideas */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Latest Submissions</h2>
            <p className="text-slate-500 mt-2">Fresh concepts from the community, refined by AI.</p>
          </div>
          <Link to="/ideas">
            <Button variant="ghost">Browse All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestIdeas.map((idea) => (
            <Link key={idea.id} to={`/ideas/${idea.id}`}>
              <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-l-emerald-500">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={idea.sourceType === 'ai_matched' ? 'ai' : 'manual'}>
                    {idea.sourceType === 'ai_matched' ? 'AI Matched' : 'Manual Input'}
                  </Badge>
                  <span className="text-xs text-slate-400">{new Date(idea.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{idea.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-2 mb-4">{idea.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {idea.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-medium">#{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600">
                      {idea.authorName.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-slate-600">{idea.authorName}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">AI Score: {(idea.confidenceScore * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project Idea?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Submit your concept and let our AI help you find related historical projects, suggest the best village, and refine your pitch.
          </p>
          <Link to="/upload">
            <Button variant="secondary" className="h-12 px-8 rounded-xl">
              Submit Your Idea
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
