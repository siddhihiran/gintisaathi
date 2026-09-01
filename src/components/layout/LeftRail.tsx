import React from 'react';
import { Building2, Clock, Sparkles, HelpCircle, BarChart3 } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { useLanguage } from '../../context/LanguageContext';

// Route definitions – id matches the tab identifiers used in App.tsx
const routes = [
  { id: 'home', icon: Building2, label: 'home' },
  { id: 'timeline', icon: Clock, label: 'timeline' },
  { id: 'ask-ai', icon: Sparkles, label: 'guide' },
  { id: 'myth-checker', icon: HelpCircle, label: 'mythChecker' },
  { id: 'census-lens', icon: BarChart3, label: 'censusLens' },
];

export const LeftRail: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();
  const { markRouteVisited } = useDemo(); // optional tracking

  return (
    <aside className="fixed inset-y-0 left-0 w-16 flex flex-col items-center bg-ink-900/90 backdrop-blur-xl border-r border-ink-800/80 z-20">
      {/* Logo */}
      <div className="my-4 flex items-center justify-center w-12 h-12 rounded-lg bg-ink-800 shadow-inner">
        <span className="text-2xl font-bold text-marigold">🗺️</span>
      </div>
      {/* Nav icons */}
      <nav className="flex flex-col gap-4 mt-6">
        {routes.map(route => {
          const Icon = route.icon;
          const isActive = activeTab === route.id;
          return (
            <button
              key={route.id}
              onClick={() => {
                setActiveTab(route.id);
                markRouteVisited?.();
              }}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-200 ${isActive ? 'bg-marigold text-ink-900' : 'text-slate-300 hover:bg-ink-800 hover:text-slate-100'}`}
              aria-label={t.nav[route.id] || route.label}
            >
              <Icon className="w-5 h-5" />
              {/* Tooltip */}
              <span className="absolute left-full ml-2 whitespace-nowrap bg-ink-800 text-slate-100 text-xs py-1 px-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                {t.nav[route.id] || route.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
