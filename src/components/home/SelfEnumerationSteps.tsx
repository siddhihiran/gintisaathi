import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { Smartphone, FileText, QrCode, UserCheck, Check, Sparkles, Shield, Copy, CheckCheck } from 'lucide-react';

export const SelfEnumerationSteps: React.FC = () => {
  const { t } = useLanguage();
  const { user, saveSEID } = useAuth();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [generatedId, setGeneratedId] = useState<string>(user?.savedSEID || '');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const stepIcons = [Smartphone, FileText, QrCode, UserCheck];

  const handleGenerateDemoSEID = () => {
    const randomCode = 'SE27-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    setGeneratedId(randomCode);
    saveSEID(randomCode);
    setActiveStep(3);
  };

  const handleCopy = () => {
    if (generatedId) {
      navigator.clipboard.writeText(generatedId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const currentStepData = t.simulator.steps[activeStep - 1] || t.simulator.steps[0];
  const StepIcon = stepIcons[activeStep - 1] || Smartphone;

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-navy-800/80">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-civic-teal-500/10 text-civic-teal-300 text-xs font-bold uppercase tracking-wider border border-civic-teal-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.simulator.tag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.simulator.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          {t.simulator.subheading}
        </p>
      </div>

      {/* Step Pills Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {t.simulator.steps.map((s, idx) => {
          const stepNum = idx + 1;
          const Icon = stepIcons[idx];
          const isActive = activeStep === stepNum;
          return (
            <button
              key={stepNum}
              onClick={() => setActiveStep(stepNum)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                isActive
                  ? 'bg-navy-900 border-civic-saffron-500/60 shadow-lg shadow-civic-saffron-500/10'
                  : 'bg-navy-950/70 border-navy-800 hover:border-navy-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                  isActive ? 'bg-civic-saffron-500 text-navy-950' : 'bg-navy-800 text-slate-400'
                }`}>
                  {stepNum}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-civic-saffron-400' : 'text-slate-500'}`} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white truncate">{s.title}</div>
              <div className="text-[11px] text-slate-400 truncate">{s.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="rounded-3xl bg-navy-900/90 border border-navy-700 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950 text-slate-300 text-xs font-bold border border-navy-800">
              <span>{t.simulator.stepOf} {activeStep} / 4</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentStepData.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentStepData.desc}
            </p>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-navy-800 flex items-start gap-3">
              <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-emerald-400">{t.simulator.citizenTip}: </strong>
                {currentStepData.tip}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {activeStep > 1 && (
                <button
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-xs font-bold text-slate-200"
                >
                  {t.simulator.prevStep}
                </button>
              )}
              {activeStep < 4 ? (
                <button
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-civic-saffron-500 to-civic-saffron-600 hover:from-civic-saffron-400 hover:to-civic-saffron-500 text-xs font-bold text-white shadow-md shadow-civic-saffron-500/20"
                >
                  {t.simulator.nextStep} ({activeStep + 1}/4) →
                </button>
              ) : (
                <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> {t.simulator.readyBadge}
                </div>
              )}
            </div>
          </div>

          {/* Visual Simulator Widget: SE ID Simulator */}
          <div className="lg:col-span-5 bg-navy-950 rounded-2xl border border-navy-800 p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-civic-blue-600 to-civic-teal-500 p-[2px] mb-4 shadow-glow-teal">
              <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center text-white">
                <StepIcon className="w-7 h-7 text-civic-teal-400" />
              </div>
            </div>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.simulator.demoArtifactTag}
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              {t.simulator.sampleIdTitle}
            </h4>
            <p className="text-xs text-slate-400 mb-4 max-w-xs">
              {t.simulator.sampleIdSub}
            </p>

            {generatedId ? (
              <div className="w-full p-4 rounded-xl bg-navy-900 border-2 border-dashed border-civic-teal-500/60 mb-4 animate-in zoom-in-95">
                <div className="text-[11px] text-civic-teal-400 font-semibold mb-1">
                  {t.simulator.officialAckLabel}
                </div>
                <div className="font-mono text-lg font-black text-white tracking-widest my-1">
                  {generatedId}
                </div>
                <div className="text-[10px] text-slate-400">
                  {t.simulator.readyToShareLabel}
                </div>
                <button
                  onClick={handleCopy}
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-xs text-slate-200 font-medium border border-navy-700"
                >
                  {isCopied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? t.common.copied : t.simulator.copySampleBtn}</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleGenerateDemoSEID}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-civic-teal-600 to-civic-blue-600 hover:from-civic-teal-500 hover:to-civic-blue-500 text-white text-xs font-bold shadow-md transition-all mb-4"
              >
                {t.simulator.simulateBtn}
              </button>
            )}

            <div className="text-[11px] text-slate-500 italic">
              {t.simulator.disclaimer}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
