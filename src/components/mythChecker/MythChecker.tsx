import React, { useState } from 'react';
import { MythItem } from '../../types/census';
import { useLanguage } from '../../context/LanguageContext';
import { verifyClaim } from '../../services/api';
import { MythCard } from './MythCard';
import { TrendingMyths } from './TrendingMyths';
import { ShieldAlert, Search, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { SEEDED_MYTHS } from '../../data/mythsData';

export const MythChecker: React.FC = () => {
  const { language, t } = useLanguage();
  const [claimInput, setClaimInput] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [currentResult, setCurrentResult] = useState<MythItem | null>(() => SEEDED_MYTHS[0]);

  const handleVerify = async (claimToTest?: string) => {
    const text = (claimToTest || claimInput).trim();
    if (!text || isVerifying) return;

    setIsVerifying(true);
    try {
      const response = await verifyClaim(text, language);
      const matchedLocal = SEEDED_MYTHS.find(m => m.claim.toLowerCase() === text.toLowerCase());

      const newItem: MythItem = {
        id: 'chk-' + Date.now(),
        claim: response.claim || text,
        verdict: response.verdict,
        verdictBadgeClass: response.verdictBadgeClass,
        why: response.why,
        safeNextStep: response.safeNextStep,
        isSensitive: response.isSensitive,
        category: matchedLocal ? matchedLocal.category : 'General',
      };

      setCurrentResult(newItem);
      if (!claimToTest) setClaimInput('');
    } catch (err) {
      console.error('Error verifying claim:', err);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-500/20">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>{t.myth.tag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.myth.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          {t.myth.subheading}
        </p>
      </div>

      {/* Input Form for Pasting Claims */}
      <div className="rounded-3xl bg-navy-900/90 border border-navy-700 p-6 sm:p-8 shadow-2xl space-y-4">
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
          {t.myth.inputLabel}
        </label>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={claimInput}
              onChange={(e) => setClaimInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleVerify();
                }
              }}
              placeholder={t.myth.inputPlaceholder}
              disabled={isVerifying}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-navy-950/90 border border-navy-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all disabled:opacity-50"
            />
          </div>

          <button
            onClick={() => handleVerify()}
            disabled={isVerifying || !claimInput.trim()}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-civic-saffron-600 hover:from-rose-500 hover:to-civic-saffron-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
          >
            {isVerifying ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{t.myth.checkingBtn}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{t.myth.checkBtn}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{t.myth.disclaimer}</span>
        </div>
      </div>

      {/* Result Card */}
      {currentResult && (
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {t.myth.verdictLabel}:
          </div>
          <MythCard myth={currentResult} />
        </div>
      )}

      {/* Pre-seeded Trending Rumors */}
      <TrendingMyths onSelectClaim={(claim) => handleVerify(claim)} />
    </section>
  );
};
