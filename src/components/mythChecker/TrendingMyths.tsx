import React from 'react';
import { SEEDED_MYTHS } from '../../data/mythsData';
import { useLanguage } from '../../context/LanguageContext';
import { HelpCircle, ChevronRight } from 'lucide-react';

interface TrendingMythsProps {
  onSelectClaim: (claim: string) => void;
}

export const TrendingMyths: React.FC<TrendingMythsProps> = ({ onSelectClaim }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-civic-saffron-400" />
          <span>{t.myth.sampleHeading}</span>
        </h3>
        <span className="text-xs text-slate-500 font-medium">{t.myth.sampleSub}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {SEEDED_MYTHS.map((m) => (
          <button
            key={m.id}
            onClick={() => onSelectClaim(m.claim)}
            className="p-4 rounded-2xl bg-navy-950/80 hover:bg-navy-900 border border-navy-800 hover:border-civic-saffron-500/50 text-left transition-all duration-200 flex flex-col justify-between group shadow-sm hover:scale-[1.01]"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                  m.verdict === 'Supported'
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                    : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                }`}>
                  {m.verdict}
                </span>
                <span className="text-[10px] text-slate-500">{m.category}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white leading-snug">
                "{m.claim}"
              </p>
            </div>

            <div className="pt-3 mt-2 border-t border-navy-800/80 flex items-center justify-between text-[11px] text-civic-saffron-400 group-hover:underline">
              <span>{t.myth.viewVerification}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
