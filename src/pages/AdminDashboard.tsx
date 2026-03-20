import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { Village, Idea, User } from '../types';
import { useIdeas } from '../context/IdeaContext';
import { useVillages } from '../context/VillageContext';
import { Card, Button, Badge } from '../components/UI';
import { 
  Users, 
  FileText, 
  Clock, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  MoreHorizontal,
  TrendingUp,
  BarChart3,
  Plus,
  Trash2,
  Edit2
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { ideas, updateIdeaStatus, loading: ideasLoading } = useIdeas();
  const { villages, addVillage, updateVillage, deleteVillage, loading: villagesLoading } = useVillages();
  const [users, setUsers] = useState<User[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [isAddingVillage, setIsAddingVillage] = useState(false);
  const [editingVillage, setEditingVillage] = useState<Village | null>(null);
  const [newVillage, setNewVillage] = useState({ name: '', description: '', color: 'emerald' });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'users'), (snapshot) => {
      const fetchedUsers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as User[];
      setUsers(fetchedUsers);
      setUsersLoading(false);
    }, (error) => {
      console.error("Users fetch error:", error);
      setUsersLoading(false);
    });
    return () => unsub();
  }, []);

  const pendingIdeas = ideas.filter(i => i.status === 'pending');
  
  const getGrowth = (items: any[]) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const newItems = items.filter(item => {
      const createdAt = item.createdAt ? new Date(item.createdAt) : new Date(0);
      return createdAt > oneWeekAgo;
    });
    if (items.length === 0) return 0;
    return Math.round((newItems.length / items.length) * 100);
  };

  const stats = [
    { label: 'Total Ideas', value: ideas.length, icon: FileText, color: 'emerald', growth: getGrowth(ideas) },
    { label: 'Total Users', value: users.length, icon: Users, color: 'indigo', growth: getGrowth(users) },
    { label: 'Pending Review', value: pendingIdeas.length, icon: Clock, color: 'amber', growth: 0 },
    { label: 'Villages', value: villages.length, icon: Layers, color: 'purple', growth: getGrowth(villages) },
  ];

  const handleApprove = async (id: string) => {
    await updateIdeaStatus(id, 'published');
  };

  const handleReject = async (id: string) => {
    await updateIdeaStatus(id, 'draft');
  };

  const handleAddVillage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newVillage.name && newVillage.description) {
      await addVillage(newVillage);
      setNewVillage({ name: '', description: '', color: 'emerald' });
      setIsAddingVillage(false);
    }
  };

  const handleUpdateVillage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingVillage && editingVillage.name && editingVillage.description) {
      await updateVillage(editingVillage.id, editingVillage);
      setEditingVillage(null);
    }
  };

  if (ideasLoading || villagesLoading || usersLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Admin Control Center</h1>
          <p className="text-slate-500">Monitor system activity and moderate community submissions.</p>
        </div>
        <Button variant="outline">
          <BarChart3 className="w-4 h-4" />
          Full Reports
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <Card key={i} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 flex items-center justify-center text-${stat.color}-600`}>
                <stat.icon className="w-6 h-6" />
              </div>
              {stat.growth > 0 && (
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                  <TrendingUp className="w-3 h-3" />
                  +{stat.growth}%
                </div>
              )}
            </div>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Submissions Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Pending Submissions</h2>
            <Button variant="ghost" className="text-xs h-8">View All</Button>
          </div>
          
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Idea</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Author</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">AI Score</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Moderate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pendingIdeas.map((idea) => (
                    <tr key={idea.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 text-sm">{idea.title}</span>
                          <span className="text-[10px] text-slate-500 uppercase font-bold">
                            {villages.find(v => v.id === idea.villageId)?.name || 'Unknown'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-600">{idea.authorName}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm">
                          {(idea.confidenceScore * 100).toFixed(0)}%
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            className="p-2 h-8 w-8 text-emerald-600 hover:bg-emerald-50"
                            onClick={() => handleApprove(idea.id)}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="p-2 h-8 w-8 text-red-600 hover:bg-red-50"
                            onClick={() => handleReject(idea.id)}
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {pendingIdeas.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-slate-400 text-sm italic">
                        No pending submissions to review.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Sidebar: Village Management */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Villages</h2>
            <Button variant="ghost" className="text-xs h-8" onClick={() => setIsAddingVillage(!isAddingVillage)}>
              {isAddingVillage ? 'Cancel' : 'Manage'}
            </Button>
          </div>
          
          {isAddingVillage && (
            <Card className="p-4 bg-slate-50 border-emerald-200">
              <form onSubmit={handleAddVillage} className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 mb-2">New Village</h3>
                <input 
                  type="text" 
                  placeholder="Village Name" 
                  className="w-full p-2 text-sm border rounded-lg"
                  value={newVillage.name}
                  onChange={e => setNewVillage({...newVillage, name: e.target.value})}
                  required
                />
                <textarea 
                  placeholder="Description" 
                  className="w-full p-2 text-sm border rounded-lg h-20"
                  value={newVillage.description}
                  onChange={e => setNewVillage({...newVillage, description: e.target.value})}
                  required
                />
                <select 
                  className="w-full p-2 text-sm border rounded-lg"
                  value={newVillage.color}
                  onChange={e => setNewVillage({...newVillage, color: e.target.value})}
                >
                  <option value="emerald">Emerald</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="amber">Amber</option>
                  <option value="rose">Rose</option>
                </select>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-grow h-9 text-xs">Create</Button>
                  <Button variant="ghost" className="h-9 text-xs" onClick={() => setIsAddingVillage(false)}>Cancel</Button>
                </div>
              </form>
            </Card>
          )}

          {editingVillage && (
            <Card className="p-4 bg-slate-50 border-blue-200">
              <form onSubmit={handleUpdateVillage} className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Edit Village</h3>
                <input 
                  type="text" 
                  placeholder="Village Name" 
                  className="w-full p-2 text-sm border rounded-lg"
                  value={editingVillage.name}
                  onChange={e => setEditingVillage({...editingVillage, name: e.target.value})}
                  required
                />
                <textarea 
                  placeholder="Description" 
                  className="w-full p-2 text-sm border rounded-lg h-20"
                  value={editingVillage.description}
                  onChange={e => setEditingVillage({...editingVillage, description: e.target.value})}
                  required
                />
                <select 
                  className="w-full p-2 text-sm border rounded-lg"
                  value={editingVillage.color}
                  onChange={e => setEditingVillage({...editingVillage, color: e.target.value})}
                >
                  <option value="emerald">Emerald</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="amber">Amber</option>
                  <option value="rose">Rose</option>
                </select>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-grow h-9 text-xs">Update</Button>
                  <Button variant="ghost" className="h-9 text-xs" onClick={() => setEditingVillage(null)}>Cancel</Button>
                </div>
              </form>
            </Card>
          )}

          <div className="space-y-3">
            {villages.map(village => (
              <Card key={village.id} className="p-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-${village.color}-50 flex items-center justify-center text-${village.color}-600`}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{village.name}</p>
                    <p className="text-[10px] text-slate-500">{ideas.filter(i => i.villageId === village.id).length} Ideas</p>
                  </div>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button 
                    variant="ghost" 
                    className="p-1 h-7 w-7 text-slate-400 hover:text-emerald-600"
                    onClick={() => {
                      setEditingVillage(village);
                      setIsAddingVillage(false);
                    }}
                  >
                    <Edit2 className="w-3 h-3" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="p-1 h-7 w-7 text-slate-400 hover:text-red-600"
                    onClick={() => deleteVillage(village.id)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </Card>
            ))}
            {!isAddingVillage && !editingVillage && (
              <Button variant="outline" className="w-full border-dashed text-xs h-10" onClick={() => setIsAddingVillage(true)}>
                <Plus className="w-3 h-3" />
                Add New Village
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
