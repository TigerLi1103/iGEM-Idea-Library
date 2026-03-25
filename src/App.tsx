import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { VillageProvider } from './context/VillageContext';
import { IdeaProvider } from './context/IdeaContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { VillagesOverview } from './pages/VillagesOverview';
import { VillageDetail } from './pages/VillageDetail';
import { IdeaDetail } from './pages/IdeaDetail';
import { UploadIdea } from './pages/UploadIdea';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { SearchResults } from './pages/SearchResults';
import { IdeasLibrary } from './pages/IdeasLibrary';
import { AwardsArchive } from './pages/AwardsArchive';
import { CompetitionGuide } from './pages/CompetitionGuide';
import { SeasonTimeline } from './pages/SeasonTimeline';
import { Glossary } from './pages/Glossary';
import { DeliverablesGuide } from './pages/DeliverablesGuide';
import { OfficialResources } from './pages/OfficialResources';
import { FAQPage } from './pages/FAQPage';
import { PartsBlast } from './pages/PartsBlast';

const ProtectedRoute: React.FC<{ children: React.ReactNode; adminOnly?: boolean }> = ({ children, adminOnly }) => {
  const { user, loading, isAdmin } = useAuth();

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && !isAdmin) return <Navigate to="/dashboard" />;

  return <>{children}</>;
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="pt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<CompetitionGuide />} />
          <Route path="/timeline" element={<SeasonTimeline />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/deliverables" element={<DeliverablesGuide />} />
          <Route path="/resources" element={<OfficialResources />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/parts-blast" element={<PartsBlast />} />
          <Route path="/villages" element={<VillagesOverview />} />
          <Route path="/villages/:id" element={<VillageDetail />} />
          <Route path="/ideas" element={<IdeasLibrary />} />
          <Route path="/ideas/:id" element={<IdeaDetail />} />
          <Route path="/awards" element={<AwardsArchive />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/upload" element={<ProtectedRoute><UploadIdea /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">© 2026 iGEM Navigator. Built for clearer onboarding, better navigation, and faster project execution.</p>
          <div className="flex justify-center gap-6 mt-4 flex-wrap">
            <a href="#" className="text-xs text-slate-400 hover:text-emerald-600">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-emerald-600">Terms of Service</a>
            <a href="#" className="text-xs text-slate-400 hover:text-emerald-600">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <VillageProvider>
        <IdeaProvider>
          <Router>
            <AppContent />
          </Router>
        </IdeaProvider>
      </VillageProvider>
    </AuthProvider>
  );
}
