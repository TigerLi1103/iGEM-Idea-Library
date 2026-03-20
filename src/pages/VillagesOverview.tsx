import React from 'react';
import { Link } from 'react-router-dom';
import { useVillages } from '../context/VillageContext';
import { useIdeas } from '../context/IdeaContext';
import { Card, Button } from '../components/UI';
import { Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const VillagesOverview: React.FC = () => {
  const { villages, loading: villagesLoading } = useVillages();
  const { ideas, loading: ideasLoading } = useIdeas();

  if (villagesLoading || ideasLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">iGEM Villages</h1>
        <p className="text-slate-500 max-w-2xl">
          Villages are the thematic tracks of the iGEM competition. Explore ideas and historical projects within each domain to find your team's focus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {villages.map((village, idx) => (
          <motion.div
            key={village.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={`/villages/${village.id}`}>
              <Card className="group h-full flex flex-col hover:border-emerald-500 hover:shadow-xl transition-all duration-300 p-8">
                <div className={`w-14 h-14 rounded-2xl bg-${village.color}-50 flex items-center justify-center text-${village.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{village.name}</h3>
                <p className="text-slate-500 leading-relaxed flex-grow">{village.description}</p>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-900">{ideas.filter(i => i.villageId === village.id).length}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Ideas</span>
                  </div>
                  <Button variant="ghost" className="group-hover:text-emerald-600">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
