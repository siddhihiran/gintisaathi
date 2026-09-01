import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ReadinessScoreCard: React.FC = () => {
  const { score } = useDemo();

  const { t } = useLanguage();
  const checks = [
    { key: 'hasSelectedLanguage', label: t.readiness.check1Title },
    { key: 'hasSelectedState', label: t.readiness.check2Title },
    { key: 'hasUsedAiGuide', label: t.readiness.check3Title },
    { key: 'hasCheckedMyth', label: t.readiness.check4Title },
  ] as const;

  return (
    <div className="fixed top-4 right-4 md:top-8 md:right-8 z-30 w-64 bg-navy-900/90 border border-navy-800 rounded-2xl p-4 shadow-lg">
      <h3 className="text-sm font-semibold text-civic-teal-400 mb-2">{t.readiness.cardTitle}</h3>
      <ul className="space-y-2">
        {checks.map((c) => (
          <li key={c.key} className="flex items-center gap-2">
            {score[c.key] ? (
              <CheckCircle className="w-4 h-4 text-civic-teal-400" />
            ) : (
              <CheckCircle className="w-4 h-4 text-slate-600" />
            )}
            <span className="text-xs text-slate-300">{c.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
