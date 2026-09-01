import React, { useState, useEffect } from 'react';
import { DemoProvider } from './context/DemoContext';
import { ReadinessScoreCard } from './components/readiness/ReadinessScoreCard';
import { GuidedTour } from './components/demo/GuidedTour';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PrivacyDrawer } from './components/layout/PrivacyDrawer';
import { HeroSection } from './components/home/HeroSection';
import { FeatureGrid } from './components/home/FeatureGrid';
import { TimelineHowItWorks } from './components/home/TimelineHowItWorks';
import { SelfEnumerationSteps } from './components/home/SelfEnumerationSteps';
import { StateTimelineView } from './components/stateTimeline/StateTimelineView';
import { ChatInterface } from './components/askGuide/ChatInterface';
import { MythChecker } from './components/mythChecker/MythChecker';
import { CensusLens } from './components/censusLens/CensusLens';
import { Sparkles, ArrowUp } from 'lucide-react';

const AppContent: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-civic-saffron-500 selection:text-white relative">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow" id="main-content">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onStartGuide={() => handleTabChange('timeline')}
              onAskAI={() => handleTabChange('ask-ai')}
            />
            <FeatureGrid onSelectFeature={(tab) => handleTabChange(tab)} />
            <TimelineHowItWorks onCheckStateSchedule={() => handleTabChange('timeline')} />
            <SelfEnumerationSteps />
          </>
        )}
        {activeTab === 'timeline' && <StateTimelineView />}
        {activeTab === 'ask-ai' && <ChatInterface />}
        {activeTab === 'myth-checker' && <MythChecker />}
        {activeTab === 'census-lens' && <CensusLens />}
      </main>

      {/* Floating Ask AI button */}
      {activeTab !== 'ask-ai' && (
        <button
          onClick={() => handleTabChange('ask-ai')}
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-civic-saffron-500 to-amber-500 hover:from-civic-saffron-400 hover:to-amber-400 text-navy-950 font-extrabold text-xs sm:text-sm shadow-2xl shadow-civic-saffron-500/40 hover:scale-105 active:scale-95 transition-all"
          aria-label={t.nav.floatingAi}
        >
          <Sparkles className="w-4 h-4 text-navy-950 animate-spin [animation-duration:4s]" aria-hidden="true" />
          <span>{t.nav.floatingAi}</span>
        </button>
      )}

      {/* Back to top button */}
      {showScrollTop && activeTab === 'home' && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-30 p-3 rounded-2xl bg-navy-900/90 border border-navy-700 text-slate-300 hover:text-white hover:bg-navy-800 shadow-xl transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
        </button>
      )}

      {/* Privacy Drawer */}
      <PrivacyDrawer isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} setActiveTab={handleTabChange} />
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <AuthProvider>
        <DemoProvider onNavigateTab={handleTabChange}>
          <AppContent activeTab={activeTab} setActiveTab={setActiveTab} />
          <ReadinessScoreCard />
          <GuidedTour />
        </DemoProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
