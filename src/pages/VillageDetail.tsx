import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVillages } from '../context/VillageContext';
import { useIdeas } from '../context/IdeaContext';
import { Card, Button, Badge } from '../components/UI';
import { Search, Filter, ArrowUpDown, Globe, ChevronLeft, Sparkles } from 'lucide-react';

export const VillageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { villages, loading: villagesLoading } = useVillages();
  const { ideas, loading: ideasLoading } = useIdeas();
  const [searchQuery, setSearchQuery] = useState('');

  const village = villages.find(v => v.id === id);
  const villageIdeas = ideas.filter(i => i.villageId === id && i.status === 'published');

  const filteredIdeas = villageIdeas.filter(idea => 
    idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    idea.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (villagesLoading || ideasLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!village) return <div className="max-w-7xl mx-auto px-4 py-20 text-center">Village not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/villages" className="flex items-center gap-1 text-slate-500 hover:text-emerald-600 transition-colors mb-8 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Back to Villages
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="flex-grow max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-${village.color}-50 flex items-center justify-center text-${village.color}-600`}>
              <Globe className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900">{village.name}</h1>
          </div>
          <p className="text-lg text-slate-500 leading-relaxed">{village.description}</p>
        </div>
        
        <Card className="p-6 bg-slate-50 border-dashed w-full md:w-64">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Village Stats</p>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-bold text-slate-900">{villageIdeas.length}</span>
            <span className="text-xs text-emerald-600 font-medium mb-1">Active Ideas</span>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <Link to="/upload">
              <Button className="w-full text-xs h-9">Submit to {village.name}</Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder={`Search in ${village.name}...`} 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="h-11">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
        <Button variant="outline" className="h-11">
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </Button>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map((idea) => (
            <Link key={idea.id} to={`/ideas/${idea.id}`}>
              <Card className="p-6 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={idea.sourceType === 'ai_matched' ? 'ai' : 'manual'}>
                    {idea.sourceType === 'ai_matched' ? 'AI Matched' : 'Manual'}
                  </Badge>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-[10px] font-bold">{(idea.confidenceScore * 100).toFixed(0)}%</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{idea.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow">{idea.summary}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600">
                      {idea.authorName.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-slate-600">{idea.authorName}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">{new Date(idea.createdAt).toLocaleDateString()}</span>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-500">No ideas found in this village yet. Be the first to submit!</p>
          </div>
        )}
      </div>
    </div>
  );
};
