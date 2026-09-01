import React from 'react';
import { Building2, Clock, Sparkles, HelpCircle, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const NAV_LABELS: Record<string, keyof ReturnType<typeof useLanguage>['t']['nav']> = {
  home: 'home',
  timeline: 'timeline',
  'ask-ai': 'askAi',
  'myth-checker': 'mythChecker',
  'census-lens': 'censusLens',
};

const routes = [
  { id: 'home', icon: Building2 },
  { id: 'timeline', icon: Clock },
  { id: 'ask-ai', icon: Sparkles },
  { id: 'myth-checker', icon: HelpCircle },
  { id: 'census-lens', icon: BarChart3 },
];

export const LeftRail: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();

  const getLabel = (id: string): string => {
    const key = NAV_LABELS[id];
    return key ? (t.nav[key] as string) : id;
  };

  return (
    <aside
      className="hidden md:flex fixed inset-y-0 left-0 w-16 flex-col items-center bg-ink-900/90 backdrop-blur-xl border-r border-ink-800/80 z-20 pt-4"
      aria-label="Side navigation"
    >
      {/* Logo mark */}
      <div className="mb-6 flex items-center justify-center w-10 h-10 rounded-lg bg-ink-800">
        <span className="text-xl" aria-hidden="true">🗺️</span>
      </div>

      {/* Nav icons */}
      <nav className="flex flex-col gap-3">
        {routes.map(route => {
          const Icon = route.icon;
          const isActive = activeTab === route.id;
          const label = getLabel(route.id);
          return (
            <button
              key={route.id}
              onClick={() => setActiveTab(route.id)}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-marigold-500 text-ink-900' : 'text-slate-300 hover:bg-ink-800 hover:text-slate-100'
              }`}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
              {/* Tooltip */}
              <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap bg-ink-800 text-slate-100 text-xs py-1 px-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150" role="tooltip">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
