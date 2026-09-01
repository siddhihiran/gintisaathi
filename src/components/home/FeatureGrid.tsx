import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, CalendarClock, ShieldAlert, LineChart, ArrowUpRight } from 'lucide-react';

interface FeatureGridProps {
  onSelectFeature: (tab: string) => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ onSelectFeature }) => {
  const { t } = useLanguage();

  const features = [
    {
      id: 'ask-ai',
      title: t.features.askGuideTitle,
      desc: t.features.askGuideDesc,
      icon: Sparkles,
      tag: t.features.askGuideTag,
      gradient: 'from-civic-blue-600/20 via-navy-900 to-navy-900 hover:border-civic-blue-500/50',
      iconBg: 'bg-civic-blue-500/20 text-civic-blue-400 border-civic-blue-500/30',
      badgeClass: 'bg-civic-blue-500/10 text-civic-blue-300 border-civic-blue-500/20',
      accentColor: 'text-civic-blue-400',
    },
    {
      id: 'timeline',
      title: t.features.timelineTitle,
      desc: t.features.timelineDesc,
      icon: CalendarClock,
      tag: t.features.timelineTag,
      gradient: 'from-civic-saffron-600/20 via-navy-900 to-navy-900 hover:border-civic-saffron-500/50',
      iconBg: 'bg-civic-saffron-500/20 text-civic-saffron-400 border-civic-saffron-500/30',
      badgeClass: 'bg-civic-saffron-500/10 text-civic-saffron-300 border-civic-saffron-500/20',
      accentColor: 'text-civic-saffron-400',
    },
    {
      id: 'myth-checker',
      title: t.features.mythCheckerTitle,
      desc: t.features.mythCheckerDesc,
      icon: ShieldAlert,
      tag: t.features.mythCheckerTag,
      gradient: 'from-rose-600/20 via-navy-900 to-navy-900 hover:border-rose-500/50',
      iconBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
      badgeClass: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      accentColor: 'text-rose-400',
    },
    {
      id: 'census-lens',
      title: t.features.censusLensTitle,
      desc: t.features.censusLensDesc,
      icon: LineChart,
      tag: t.features.censusLensTag,
      gradient: 'from-civic-teal-600/20 via-navy-900 to-navy-900 hover:border-civic-teal-500/50',
      iconBg: 'bg-civic-teal-500/20 text-civic-teal-400 border-civic-teal-500/30',
      badgeClass: 'bg-civic-teal-500/10 text-civic-teal-300 border-civic-teal-500/20',
      accentColor: 'text-civic-teal-400',
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.id}
              onClick={() => onSelectFeature(f.id)}
              className={`group relative rounded-3xl bg-gradient-to-b ${f.gradient} border border-navy-800 p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl border ${f.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${f.badgeClass}`}>
                    {f.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-slate-100 transition-colors">
                  {f.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-navy-800/80 flex items-center justify-between text-xs font-semibold">
                <span className={`${f.accentColor} group-hover:underline`}>
                  {t.features.openSection}
                </span>
                <div className={`w-7 h-7 rounded-full bg-navy-800 flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-navy-950 transition-colors`}>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
