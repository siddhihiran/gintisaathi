import React, { useState } from 'react';
import { Building2, Clock, Sparkles, Menu } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { useLanguage } from '../../context/LanguageContext';

const routes = [
  { id: 'home', icon: Building2, label: 'home' },
  { id: 'ask-ai', icon: Sparkles, label: 'guide' },
  { id: 'timeline', icon: Clock, label: 'timeline' },
];

export const BottomNav: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();
  const { markRouteVisited } = useDemo();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePress = (id: string) => {
    setActiveTab(id);
    markRouteVisited?.();
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 flex justify-around bg-ink-900/95 backdrop-blur-xl border-t border-ink-800/80 md:hidden z-30 p-2">
      {routes.map(route => {
        const Icon = route.icon;
        const isActive = activeTab === route.id;
        return (
          <button
            key={route.id}
            onClick={() => handlePress(route.id)}
            className={`flex flex-col items-center text-xs ${isActive ? 'text-marigold' : 'text-slate-300'} hover:text-marigold`}
            aria-label={t.nav[route.id] || route.label}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-marigold' : ''}`} />
            <span>{t.nav[route.id] || route.label}</span>
          </button>
        );
      })}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="flex flex-col items-center text-xs text-slate-300 hover:text-marigold"
        aria-label="More"
      >
        <Menu className="w-5 h-5" />
        <span>More</span>
      </button>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setIsDrawerOpen(false)}>
          <div className="absolute bottom-0 w-full bg-ink-900 rounded-t-lg p-4" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => { handlePress('myth-checker'); setIsDrawerOpen(false); }}
              className="w-full py-2 text-left text-slate-300 hover:text-marigold"
            >
              {t.nav.mythChecker}
            </button>
            <button
              onClick={() => { handlePress('census-lens'); setIsDrawerOpen(false); }}
              className="w-full py-2 text-left text-slate-300 hover:text-marigold"
            >
              {t.nav.censusLens}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
