import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ArrowRight, ArrowLeft, X, CheckCircle, Compass, Calendar, Bot, ShieldAlert, BarChart3 } from 'lucide-react';

export const GuidedTour: React.FC = () => {
  const { isTourActive, currentTourStep, nextTourStep, prevTourStep, skipTour } = useDemo();
  const { t } = useLanguage();

  if (!isTourActive) return null;

  const stepMeta = [
    {
      step: 1,
      icon: Calendar,
      title: t.demoTour.step1Title,
      desc: t.demoTour.step1Desc,
      tabName: 'State Timeline',
      color: 'from-civic-saffron-500 to-amber-500',
      badge: '1 / 4',
    },
    {
      step: 2,
      icon: Bot,
      title: t.demoTour.step2Title,
      desc: t.demoTour.step2Desc,
      tabName: 'Ask AI',
      color: 'from-civic-blue-500 to-civic-teal-500',
      badge: '2 / 4',
    },
    {
      step: 3,
      icon: ShieldAlert,
      title: t.demoTour.step3Title,
      desc: t.demoTour.step3Desc,
      tabName: 'Myth Checker',
      color: 'from-rose-500 to-amber-500',
      badge: '3 / 4',
    },
    {
      step: 4,
      icon: BarChart3,
      title: t.demoTour.step4Title,
      desc: t.demoTour.step4Desc,
      tabName: 'Census Lens',
      color: 'from-civic-teal-500 to-emerald-500',
      badge: '4 / 4',
    },
  ];

  const current = stepMeta[currentTourStep - 1] || stepMeta[0];
  const StepIcon = current.icon;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-xl z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="relative rounded-3xl bg-navy-950/95 backdrop-blur-2xl border-2 border-civic-saffron-500/80 shadow-2xl shadow-civic-saffron-500/20 p-5 sm:p-6 text-white">
        {/* Glow halo */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-civic-saffron-500/20 rounded-full blur-2xl pointer-events-none" />
        
        {/* Header strip */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-civic-saffron-500/20 to-amber-500/20 text-civic-saffron-300 text-xs font-black uppercase tracking-wider border border-civic-saffron-500/40">
              <Compass className="w-3.5 h-3.5 animate-spin [animation-duration:8s]" />
              <span>{t.demoTour.tourBadge}</span>
            </span>
            <span className="text-xs font-bold text-slate-400">
              {t.demoTour.stepOf} {current.badge}
            </span>
          </div>

          <button
            onClick={skipTour}
            className="p-1.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-400 hover:text-white transition-colors"
            title={t.demoTour.skipBtn}
            aria-label="Close tour"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {stepMeta.map((s) => {
            const isCompleted = s.step < currentTourStep;
            const isCurrent = s.step === currentTourStep;
            return (
              <div
                key={s.step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? 'bg-civic-saffron-400 ring-2 ring-civic-saffron-400/40'
                    : isCompleted
                    ? 'bg-emerald-500'
                    : 'bg-navy-800'
                }`}
              />
            );
          })}
        </div>

        {/* Step Content */}
        <div className="flex items-start gap-3.5 mb-5">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-navy-900 to-navy-800 border border-navy-700 text-civic-saffron-400 shrink-0 shadow-inner">
            <StepIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-extrabold text-white leading-tight mb-1">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-navy-800/80">
          <div>
            {currentTourStep > 1 && (
              <button
                onClick={prevTourStep}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white text-xs font-bold transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t.demoTour.prevBtn}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={skipTour}
              className="px-3 py-2 rounded-xl text-slate-400 hover:text-slate-200 text-xs font-semibold transition-colors"
            >
              {t.demoTour.skipBtn}
            </button>

            <button
              onClick={nextTourStep}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-civic-saffron-500 to-amber-500 hover:from-civic-saffron-400 hover:to-amber-400 text-navy-950 font-black text-xs sm:text-sm shadow-lg shadow-civic-saffron-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{currentTourStep === 4 ? t.demoTour.finishBtn : t.demoTour.nextBtn}</span>
              {currentTourStep === 4 ? (
                <CheckCircle className="w-4 h-4 text-navy-950" />
              ) : (
                <ArrowRight className="w-4 h-4 text-navy-950" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
