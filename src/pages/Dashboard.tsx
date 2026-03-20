import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useIdeas } from '../context/IdeaContext';
import { useVillages } from '../context/VillageContext';
import { Card, Button, Badge } from '../components/UI';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Settings, 
  FileText, 
  Clock, 
  CheckCircle2, 
  MoreVertical,
  Edit2,
  Trash2,
  Eye
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { getIdeasByAuthor, loading: ideasLoading } = useIdeas();
  const { villages, loading: villagesLoading } = useVillages();
  const userIdeas = getIdeasByAuthor(user?.id || '');

  if (ideasLoading || villagesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const stats = [
    { label: 'Total Ideas', value: userIdeas.length, icon: FileText, color: 'blue' },
    { label: 'Published', value: userIdeas.filter(i => i.status === 'published').length, icon: CheckCircle2, color: 'emerald' },
    { label: 'Pending', value: userIdeas.filter(i => i.status === 'pending').length, icon: Clock, color: 'amber' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Welcome back, {user?.name}</h1>
          <p className="text-slate-500">Manage your iGEM project ideas and track their status.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/upload">
            <Button>
              <Plus className="w-4 h-4" />
              New Idea
            </Button>
          </Link>
          <Button variant="outline">
            <Settings className="w-4 h-4" />
            Profile Settings
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <Card key={i} className="p-6 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 flex items-center justify-center text-${stat.color}-600`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Ideas Table/List */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Your Submissions</h2>
          <div className="flex gap-2">
            <Button variant="ghost" className="text-xs h-8">All</Button>
            <Button variant="ghost" className="text-xs h-8">Published</Button>
            <Button variant="ghost" className="text-xs h-8">Drafts</Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Idea Title</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Village</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Last Updated</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {userIdeas.length > 0 ? (
                  userIdeas.map((idea) => (
                    <tr key={idea.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900">{idea.title}</span>
                          <span className="text-xs text-slate-500 truncate max-w-xs">{idea.summary}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-600">
                          {villages.find(v => v.id === idea.villageId)?.name || 'Unknown'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={idea.status === 'published' ? 'verified' : 'pending'}>
                          {idea.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-500">{new Date(idea.updatedAt).toLocaleDateString()}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Link to={`/ideas/${idea.id}`}>
                            <Button variant="ghost" className="p-2 h-8 w-8">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" className="p-2 h-8 w-8">
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" className="p-2 h-8 w-8 text-red-600 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center text-slate-500">
                      You haven't submitted any ideas yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
