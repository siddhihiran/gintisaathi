import React from 'react';
import { MythItem } from '../../types/census';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, ShieldAlert, AlertTriangle, ArrowRight, Lock, CheckCircle2, XCircle } from 'lucide-react';

interface MythCardProps {
  myth: MythItem;
}

export const MythCard: React.FC<MythCardProps> = ({ myth }) => {
  const { t } = useLanguage();

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'Supported':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Misleading':
        return <XCircle className="w-5 h-5 text-rose-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className={`rounded-3xl bg-navy-900/90 border p-6 sm:p-7 shadow-xl space-y-5 transition-all duration-200 ${
      myth.verdict === 'Supported'
        ? 'border-emerald-500/40 shadow-emerald-950/20'
        : myth.verdict === 'Misleading'
        ? 'border-rose-500/40 shadow-rose-950/20'
        : 'border-amber-500/40 shadow-amber-950/20'
    }`}>
      {/* Top Claim & Verdict Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-navy-800">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
            Examined Claim / दावा:
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
            "{myth.claim}"
          </h3>
        </div>

        {/* Verdict Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-xs sm:text-sm font-extrabold shrink-0 ${myth.verdictBadgeClass}`}>
          {getVerdictIcon(myth.verdict)}
          <span>{myth.verdict}</span>
        </div>
      </div>

      {/* Why & Safe Next Step */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Why Explanation */}
        <div className="p-4 rounded-2xl bg-navy-950/80 border border-navy-800/80 space-y-1.5">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            {t.myth.whyLabel}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {myth.why}
          </p>
        </div>

        {/* Safe Next Step */}
        <div className="p-4 rounded-2xl bg-navy-950/80 border border-navy-800/80 space-y-1.5">
          <div className="text-xs font-bold text-civic-teal-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-civic-teal-400" />
            <span>{t.myth.safeNextStepLabel}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {myth.safeNextStep}
          </p>
        </div>
      </div>

      {/* High Alert for Sensitive Banking / OTP Claims */}
      {myth.isSensitive && (
        <div className="p-3.5 rounded-2xl bg-rose-950/50 border border-rose-500/40 flex items-start gap-3">
          <Lock className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <p className="text-xs text-rose-200 leading-relaxed">
            <strong>Security Warning:</strong> {t.myth.safetyWarning}
          </p>
        </div>
      )}
    </div>
  );
};
