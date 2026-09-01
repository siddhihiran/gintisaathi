import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onStartGuide: () => void;
  onAskAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartGuide, onAskAI }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-civic-blue-600/15 via-civic-teal-500/10 to-civic-saffron-500/15 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-civic-saffron-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-civic-teal-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Civic Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-civic-saffron-500/30 text-civic-saffron-300 text-xs sm:text-sm font-semibold shadow-glow-saffron animate-in fade-in slide-in-from-top-2 duration-300">
            <span className="w-2 h-2 rounded-full bg-civic-saffron-400 animate-ping" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.hero.headlinePart1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-civic-saffron-400 via-amber-300 to-civic-teal-400">
              {t.hero.headlinePart2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* Privacy Banner Callout */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.hero.privacyNotice}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <GuidedDemoButton />

            <button
              onClick={onAskAI}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-navy-900 hover:bg-navy-800 border border-navy-700 text-slate-100 font-bold text-base hover:border-civic-teal-500/50 hover:shadow-glow-teal hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-5 h-5 text-civic-teal-400 animate-pulse" />
              <span>{t.hero.askCta}</span>
            </button>
          </div>

          {/* 4 Quick Stat Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-navy-800/80">
            <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-navy-800 text-center">
              <div className="text-xl sm:text-2xl font-black text-white">{t.hero.stat1Val}</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{t.hero.stat1Label}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-navy-800 text-center">
              <div className="text-xl sm:text-2xl font-black text-civic-teal-400">{t.hero.stat2Val}</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{t.hero.stat2Label}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-navy-800 text-center">
              <div className="text-xl sm:text-2xl font-black text-civic-saffron-400">{t.hero.stat3Val}</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{t.hero.stat3Label}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-navy-800 text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">{t.hero.stat4Val}</div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{t.hero.stat4Label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
