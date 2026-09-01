import React, { useState } from 'react';
import { Building2, Clock, Sparkles, Menu, HelpCircle, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const NAV_LABELS: Record<string, string> = {
  home: 'home',
  'ask-ai': 'askAi',
  timeline: 'timeline',
  'myth-checker': 'mythChecker',
  'census-lens': 'censusLens',
};

const routes = [
  { id: 'home', icon: Building2 },
  { id: 'ask-ai', icon: Sparkles },
  { id: 'timeline', icon: Clock },
];

export const BottomNav: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const getLabel = (id: string): string => {
    const key = NAV_LABELS[id] as keyof typeof t.nav | undefined;
    return key ? (t.nav[key] as string) : id;
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 flex justify-around bg-ink-900/95 backdrop-blur-xl border-t border-ink-800/80 md:hidden z-30 p-2"
      aria-label="Main navigation"
    >
      {routes.map(route => {
        const Icon = route.icon;
        const isActive = activeTab === route.id;
        return (
          <button
            key={route.id}
            onClick={() => setActiveTab(route.id)}
            className={`flex flex-col items-center text-xs ${isActive ? 'text-marigold-400' : 'text-slate-300'} hover:text-marigold-400 transition-colors`}
            aria-label={getLabel(route.id)}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-marigold-400' : ''}`} aria-hidden="true" />
            <span>{getLabel(route.id)}</span>
          </button>
        );
      })}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="flex flex-col items-center text-xs text-slate-300 hover:text-marigold-400 transition-colors"
        aria-label="More navigation options"
        aria-expanded={isDrawerOpen}
        aria-haspopup="dialog"
      >
        <Menu className="w-5 h-5" aria-hidden="true" />
        <span>More</span>
      </button>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setIsDrawerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="More navigation options"
        >
          <div
            className="absolute bottom-0 w-full bg-ink-900 rounded-t-2xl p-4 space-y-1"
            onClick={e => e.stopPropagation()}
          >
            {[
              { id: 'myth-checker', icon: HelpCircle },
              { id: 'census-lens', icon: BarChart3 },
            ].map(route => {
              const Icon = route.icon;
              return (
                <button
                  key={route.id}
                  onClick={() => { setActiveTab(route.id); setIsDrawerOpen(false); }}
                  className="w-full flex items-center gap-3 py-3 px-2 text-left text-slate-200 hover:text-white hover:bg-ink-800 rounded-xl transition-colors"
                >
                  <Icon className="w-5 h-5 text-marigold-400" aria-hidden="true" />
                  <span>{getLabel(route.id)}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
