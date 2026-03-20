import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useIdeas } from '../context/IdeaContext';
import { useAuth } from '../context/AuthContext';
import { useVillages } from '../context/VillageContext';
import { Badge, Card, Button, cn } from '../components/UI';
import { 
  Calendar, 
  User, 
  Tag, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Target,
  MessageSquare,
  Share2,
  Bookmark,
  ChevronLeft
} from 'lucide-react';
import { motion } from 'motion/react';

export const IdeaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getIdeaById, updateIdeaStatus, loading: ideasLoading } = useIdeas();
  const { isAdmin } = useAuth();
  const { villages, loading: villagesLoading } = useVillages();
  const navigate = useNavigate();
  const idea = getIdeaById(id || '');
  const village = villages.find(v => v.id === idea?.villageId);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleApprove = async () => {
    if (idea) {
      setIsUpdating(true);
      await updateIdeaStatus(idea.id, 'published');
      setIsUpdating(false);
    }
  };

  const handleFeature = async () => {
    if (idea) {
      setIsUpdating(true);
      await updateIdeaStatus(idea.id, 'featured');
      setIsUpdating(false);
    }
  };

  if (ideasLoading || villagesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Idea not found</h2>
        <Link to="/ideas" className="text-emerald-600 hover:underline mt-4 inline-block">Back to library</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Link to="/ideas" className="flex items-center gap-1 text-slate-500 hover:text-emerald-600 transition-colors mb-8 text-sm font-medium">
        <ChevronLeft className="w-4 h-4" />
        Back to Library
      </Link>

      {isAdmin && idea.status === 'pending' && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-900">Pending Review</p>
              <p className="text-xs text-amber-700">This idea is only visible to you and the author. Review and publish it to make it public.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="bg-white border-amber-200 text-amber-700 hover:bg-amber-100"
              onClick={handleApprove}
              disabled={isUpdating}
            >
              {isUpdating ? 'Publishing...' : 'Publish Idea'}
            </Button>
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white border-none"
              onClick={handleFeature}
              disabled={isUpdating}
            >
              {isUpdating ? 'Featuring...' : 'Publish & Feature'}
            </Button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <section>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant={idea.sourceType === 'ai_matched' ? 'ai' : 'manual'}>
                {idea.sourceType === 'ai_matched' ? 'AI Matched' : 'Manual Input'}
              </Badge>
              {idea.verifiedStatus && <Badge variant="verified">Admin Verified</Badge>}
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                <Calendar className="w-3 h-3" />
                Updated {new Date(idea.updatedAt).toLocaleDateString()}
              </div>
            </div>

            <h1 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {idea.title}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
              {idea.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {idea.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-emerald-600" />
                Problem Statement
              </h3>
              <p className="text-slate-700 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100 italic">
                "{idea.problemStatement}"
              </p>

              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
                Proposed Solution
              </h3>
              <p className="text-slate-700 mb-8">
                {idea.proposedSolution}
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Detailed Description</h3>
              <p className="text-slate-700 whitespace-pre-wrap leading-relaxed mb-10">
                {idea.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Innovation Points
                  </h4>
                  <ul className="space-y-2">
                    {idea.innovationPoints.map((point, idx) => (
                      <li key={idx} className="text-sm text-emerald-800 flex gap-2">
                        <span className="text-emerald-400">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100">
                  <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Potential Risks
                  </h4>
                  <ul className="space-y-2">
                    {idea.risks.map((risk, idx) => (
                      <li key={idx} className="text-sm text-amber-800 flex gap-2">
                        <span className="text-amber-400">•</span>
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AI Matching Section - Distinctive Styling */}
          <section className="relative p-8 bg-slate-900 rounded-3xl overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Sparkles className="w-8 h-8 text-emerald-500/20" />
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Intelligence Report</h3>
                <p className="text-slate-400 text-xs">Historical matching & similarity analysis</p>
              </div>
              <div className="ml-auto">
                <div className="text-right">
                  <p className="text-emerald-500 font-bold text-lg">{(idea.confidenceScore * 100).toFixed(0)}%</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest">Confidence</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Matched iGEM Teams</h4>
                <div className="grid grid-cols-1 gap-4">
                  {idea.aiMatchedTeams.map((team, idx) => (
                    <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{team.teamName} ({team.year})</h5>
                        <a href={team.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-xs text-slate-400 mb-2 italic">"{team.projectTitle}"</p>
                      <p className="text-xs text-slate-300 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                        <span className="font-bold text-emerald-500">Match Logic:</span> {team.matchReason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {idea.relatedProjects.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Similar Library Ideas</h4>
                  <div className="flex flex-wrap gap-3">
                    {idea.relatedProjects.map(proj => (
                      <Link key={proj.id} to={`/ideas/${proj.id}`} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300 hover:border-emerald-500/50 transition-all">
                        {proj.title} ({(proj.similarity * 100).toFixed(0)}%)
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {idea.potentialAwards && idea.potentialAwards.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Potential Special Prizes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {idea.potentialAwards.map((award, idx) => (
                      <div key={idx} className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          <h5 className="font-bold text-white text-sm">{award.name}</h5>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{award.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-lg">
                {idea.authorName.charAt(0)}
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Submitted by</p>
                <p className="font-bold text-slate-900">{idea.authorName}</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Village</span>
                <span className="font-semibold text-emerald-600">{village?.name}</span>
              </div>
              {idea.chassis && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Chassis</span>
                  <span className="font-semibold text-slate-700">{idea.chassis}</span>
                </div>
              )}
              {idea.applicationArea && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Application</span>
                  <span className="font-semibold text-slate-700">{idea.applicationArea}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Status</span>
                <span className="capitalize font-semibold text-slate-700">{idea.status}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Verified</span>
                <span className={idea.verifiedStatus ? 'text-emerald-600 font-bold' : 'text-slate-400'}>
                  {idea.verifiedStatus ? 'Yes' : 'No'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={isBookmarked ? 'secondary' : 'outline'} 
                className="w-full"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={cn("w-4 h-4", isBookmarked && "fill-current")} />
                {isBookmarked ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" className="w-full">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-slate-50 border-dashed">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Community Feedback
            </h4>
            <div className="space-y-4">
              <p className="text-xs text-slate-500 text-center py-4">
                No comments yet. Be the first to provide feedback on this idea!
              </p>
              <textarea 
                placeholder="Add a suggestion..." 
                className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-24 resize-none"
              />
              <Button className="w-full text-xs h-9">Post Comment</Button>
            </div>
          </Card>

          {village && (
            <Card className="p-6">
              <h4 className="font-bold text-slate-900 mb-2">About {village.name}</h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">{village.description}</p>
              <Link to={`/villages/${village.id}`}>
                <Button variant="ghost" className="w-full text-xs h-8">More from this Village</Button>
              </Link>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
