import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { School, Stethoscope, Bus, Sparkles, Layers } from 'lucide-react';

export const CivicImpactCards: React.FC = () => {
  const { t } = useLanguage();

  const cardIcons = [School, Stethoscope, Bus, Layers];
  const cardColors = [
    'from-blue-600/20 to-navy-900 border-blue-500/30 text-blue-400',
    'from-emerald-600/20 to-navy-900 border-emerald-500/30 text-emerald-400',
    'from-civic-saffron-600/20 to-navy-900 border-civic-saffron-500/30 text-civic-saffron-400',
    'from-purple-600/20 to-navy-900 border-purple-500/30 text-purple-400',
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-civic-teal-400" />
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          {t.lens.superpowersHeading}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.lens.superpowerCards.map((imp, idx) => {
          const Icon = cardIcons[idx] || School;
          const colorClass = cardColors[idx] || cardColors[0];
          return (
            <div
              key={idx}
              className={`p-5 rounded-3xl bg-gradient-to-b ${colorClass} border shadow-lg space-y-3 flex flex-col justify-between`}
            >
              <div>
                <div className="p-2.5 rounded-2xl bg-navy-950/80 w-fit mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white leading-snug mb-1.5">
                  {imp.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {imp.desc}
                </p>
              </div>

              <div className="text-[10px] text-slate-400 uppercase font-bold pt-2 border-t border-white/10">
                Census 2027 Civic Impact
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
