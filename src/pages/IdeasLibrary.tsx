import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useIdeas } from '../context/IdeaContext';
import { useVillages } from '../context/VillageContext';
import { useAuth } from '../context/AuthContext';
import { Card, Button, Badge } from '../components/UI';
import { Search, Filter, ArrowUpDown, Sparkles, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const IdeasLibrary: React.FC = () => {
  const { ideas, loading: ideasLoading } = useIdeas();
  const { villages, loading: villagesLoading } = useVillages();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVillage, setSelectedVillage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'confidence'>('newest');

  const filteredIdeas = useMemo(() => {
    let result = ideas.filter(i => 
      i.status === 'published' || 
      i.status === 'featured' || 
      (user && i.authorId === user.id)
    );

    if (selectedVillage !== 'all') {
      result = result.filter(i => i.villageId === selectedVillage);
    }

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(i => 
        i.title.toLowerCase().includes(lowerQuery) ||
        i.summary.toLowerCase().includes(lowerQuery) ||
        i.tags.some(t => t.toLowerCase().includes(lowerQuery))
      );
    }

    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else {
      result.sort((a, b) => b.confidenceScore - a.confidenceScore);
    }

    return result;
  }, [ideas, searchQuery, selectedVillage, sortBy]);

  if (ideasLoading || villagesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Idea Library</h1>
        <p className="text-slate-500 max-w-2xl">
          Browse through community-submitted project ideas. Use filters to find concepts within specific villages or search for keywords.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by title, summary, or tags..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2">
            <Globe className="w-4 h-4 text-slate-400" />
            <select 
              className="bg-transparent text-sm font-medium text-slate-700 outline-none"
              value={selectedVillage}
              onChange={e => setSelectedVillage(e.target.value)}
            >
              <option value="all">All Villages</option>
              {villages.map(v => (
                <option key={v.id} value={v.id}>{v.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <select 
              className="bg-transparent text-sm font-medium text-slate-700 outline-none"
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
            >
              <option value="newest">Newest First</option>
              <option value="confidence">Highest AI Score</option>
            </select>
          </div>
          
          <Button variant="outline" className="rounded-2xl">
            <Filter className="w-4 h-4" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map((idea, idx) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link to={`/ideas/${idea.id}`}>
                <Card className="group p-8 h-full flex flex-col hover:border-emerald-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant={idea.sourceType === 'ai_matched' ? 'ai' : 'manual'}>
                      {idea.sourceType === 'ai_matched' ? 'AI Matched' : 'Community'}
                    </Badge>
                    <div className="flex items-center gap-1 text-emerald-600">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{(idea.confidenceScore * 100).toFixed(0)}% Match</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{idea.title}</h3>
                  <p className="text-slate-500 leading-relaxed line-clamp-3 mb-8 flex-grow">{idea.summary}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {idea.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-wider">#{tag}</span>
                    ))}
                    {idea.tags.length > 3 && (
                      <span className="px-3 py-1 bg-slate-50 text-slate-400 rounded-full text-[10px] font-bold uppercase tracking-wider">+{idea.tags.length - 3}</span>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
                        {idea.authorName.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{idea.authorName}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{new Date(idea.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No ideas found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any ideas matching your current filters. Try adjusting your search or selecting a different village.
            </p>
            <Button 
              variant="outline" 
              className="mt-8"
              onClick={() => {
                setSearchQuery('');
                setSelectedVillage('all');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
