import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { VillageProvider } from './context/VillageContext';
import { IdeaProvider } from './context/IdeaContext';
import { Navbar } from './components/Navbar';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const VillagesOverview = lazy(() => import('./pages/VillagesOverview').then(m => ({ default: m.VillagesOverview })));
const VillageDetail = lazy(() => import('./pages/VillageDetail').then(m => ({ default: m.VillageDetail })));
const IdeaDetail = lazy(() => import('./pages/IdeaDetail').then(m => ({ default: m.IdeaDetail })));
const UploadIdea = lazy(() => import('./pages/UploadIdea').then(m => ({ default: m.UploadIdea })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));
const Register = lazy(() => import('./pages/Register').then(m => ({ default: m.Register })));
const SearchResults = lazy(() => import('./pages/SearchResults').then(m => ({ default: m.SearchResults })));
const IdeasLibrary = lazy(() => import('./pages/IdeasLibrary').then(m => ({ default: m.IdeasLibrary })));
const AwardsArchive = lazy(() => import('./pages/AwardsArchive').then(m => ({ default: m.AwardsArchive })));
const CompetitionGuide = lazy(() => import('./pages/CompetitionGuide').then(m => ({ default: m.CompetitionGuide })));
const SeasonTimeline = lazy(() => import('./pages/SeasonTimeline').then(m => ({ default: m.SeasonTimeline })));
const Glossary = lazy(() => import('./pages/Glossary').then(m => ({ default: m.Glossary })));
const DeliverablesGuide = lazy(() => import('./pages/DeliverablesGuide').then(m => ({ default: m.DeliverablesGuide })));
const OfficialResources = lazy(() => import('./pages/OfficialResources').then(m => ({ default: m.OfficialResources })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const PartsBlast = lazy(() => import('./pages/PartsBlast').then(m => ({ default: m.PartsBlast })));
const PartDetail = lazy(() => import('./pages/PartDetail').then(m => ({ default: m.PartDetail })));

const PageLoading: React.FC = () => (
  <div className="flex items-center justify-center h-[60vh] text-slate-500">Loading page…</div>
);

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
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<CompetitionGuide />} />
            <Route path="/timeline" element={<SeasonTimeline />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/deliverables" element={<DeliverablesGuide />} />
            <Route path="/resources" element={<OfficialResources />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/parts-blast" element={<PartsBlast />} />
            <Route path="/parts/:id" element={<PartDetail />} />
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
        </Suspense>
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
