import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Card } from '../components/UI';
import { Library, Mail, Lock, User, ArrowRight } from 'lucide-react';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Library className="text-white w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Join the Community</h1>
          <p className="text-slate-500 text-sm">Start sharing and refining your iGEM ideas</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                required
                type="text" 
                placeholder="Jane Doe"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                required
                type="email" 
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                required
                type="password" 
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
            <p className="text-xs text-slate-500">I agree to the iGEM Idea Library terms and conditions and privacy policy.</p>
          </div>

          <Button type="submit" className="w-full h-12 rounded-xl text-base">
            Create Account
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-600 font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
