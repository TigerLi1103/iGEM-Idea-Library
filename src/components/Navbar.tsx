import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './UI';
import { Search, Plus, User, LogOut, LayoutDashboard, Settings, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-emerald-100/70 bg-white/70 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-4">
          <div className="flex items-center gap-8 min-w-0">
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center igem-dark-panel">
                <Compass className="text-emerald-200 w-4.5 h-4.5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">iGEM Navigator</span>
            </Link>

            <div className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-600 min-w-0">
              <Link to="/guide" className="hover:text-emerald-700 transition-colors">Guide</Link>
              <Link to="/timeline" className="hover:text-emerald-700 transition-colors">Timeline</Link>
              <Link to="/glossary" className="hover:text-emerald-700 transition-colors">Glossary</Link>
              <Link to="/deliverables" className="hover:text-emerald-700 transition-colors">Deliverables</Link>
              <Link to="/resources" className="hover:text-emerald-700 transition-colors">Resources</Link>
              <Link to="/faq" className="hover:text-emerald-700 transition-colors">FAQ</Link>
              <Link to="/parts-blast" className="hover:text-emerald-700 transition-colors">Parts BLAST</Link>
              <Link to="/ideas" className="hover:text-emerald-700 transition-colors">Library</Link>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center relative">
              <Search className="absolute left-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search library..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-1.5 bg-white/70 border border-emerald-100 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-full text-sm w-56 transition-all outline-none"
              />
            </form>

            {user ? (
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={() => navigate('/upload')} className="hidden sm:flex h-9 px-3">
                  <Plus className="w-4 h-4" />
                  <span>Upload</span>
                </Button>

                <div className="h-8 w-px bg-slate-200 mx-1" />

                <div className="group relative">
                  <button className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-100 transition-colors">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                    ) : (
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                        <User className="w-5 h-5" />
                      </div>
                    )}
                  </button>

                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-900 truncate">{user.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                    </div>
                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>
                    {isAdmin && (
                      <Link to="/admin" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
                        <Settings className="w-4 h-4" />
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
