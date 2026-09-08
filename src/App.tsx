import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { QuickRoleBar } from './components/common/QuickRoleBar';
import { ToastContainer } from './components/common/ToastContainer';
import { JoinModal } from './components/common/JoinModal';

// Pages
import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/about/AboutPage';
import { EventsPage } from './components/events/EventsPage';
import { TeamPage } from './components/team/TeamPage';
import { AchievementsPage } from './components/achievements/AchievementsPage';
import { LoginPage } from './components/auth/LoginPage';
import { DashboardPage } from './components/dashboard/DashboardPage';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage />;
      case 'team':
        return <TeamPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'login':
        return <LoginPage />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Test Role Switcher Bar */}
      <QuickRoleBar />

      {/* Main Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Portals */}
      <JoinModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
