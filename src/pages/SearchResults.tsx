import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useIdeas } from '../context/IdeaContext';
import { useVillages } from '../context/VillageContext';
import { Card, Badge, Button } from '../components/UI';
import { Search, Sparkles, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import { useAuth } from '../context/AuthContext';

export const SearchResults: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  const { ideas, loading: ideasLoading } = useIdeas();
  const { villages, loading: villagesLoading } = useVillages();
  const { user } = useAuth();

  const filteredIdeas = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return ideas.filter(idea => 
      idea.status === 'published' || 
      idea.status === 'featured' ||
      (user && idea.authorId === user.id)
    ).filter(idea => 
      idea.title.toLowerCase().includes(lowerQuery) ||
      idea.summary.toLowerCase().includes(lowerQuery) ||
      idea.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      villages.find(v => v.id === idea.villageId)?.name.toLowerCase().includes(lowerQuery)
    );
  }, [ideas, query, villages, user]);

  if (ideasLoading || villagesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <Search className="w-8 h-8 text-emerald-600" />
            Search Results
          </h1>
          <p className="text-slate-500 mt-2">
            Showing results for <span className="font-bold text-slate-900">"{query}"</span>
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-10">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      {filteredIdeas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredIdeas.map((idea, idx) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link to={`/ideas/${idea.id}`}>
                <Card className="p-6 h-full hover:shadow-lg transition-all border-l-4 border-l-emerald-500 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={idea.sourceType === 'ai_matched' ? 'ai' : 'manual'}>
                      {idea.sourceType === 'ai_matched' ? 'AI Matched' : 'Manual Input'}
                    </Badge>
                    <span className="text-xs text-slate-400">{new Date(idea.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{idea.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-grow">{idea.summary}</p>
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
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
          <p className="text-slate-500 max-w-md mx-auto mb-8">
            We couldn't find any ideas matching your search. Try different keywords or browse by village.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/ideas">
              <Button variant="outline">Browse All Ideas</Button>
            </Link>
            <Link to="/villages">
              <Button>Explore Villages</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
