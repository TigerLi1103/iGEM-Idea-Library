import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Card } from '../components/UI';
import { Library, Mail, Lock, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleGoogleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Library className="text-white w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome to iGEM Idea Library</h1>
          <p className="text-slate-500 text-sm">Sign in to manage your iGEM ideas</p>
        </div>

        <div className="space-y-4">
          <Button onClick={handleGoogleLogin} className="w-full h-12 rounded-xl text-base flex items-center justify-center gap-3">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </Button>
          
          <p className="text-center text-xs text-slate-400 px-4">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-500">
            Admin access is granted to authorized emails.
          </p>
        </div>
      </Card>
    </div>
  );
};
