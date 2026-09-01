import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CENSUS_CONSTANTS } from '../../data/constants';
import { ShieldCheck, Lock, AlertTriangle, ExternalLink, X, CheckCircle2, UserCheck, ShieldAlert } from 'lucide-react';

interface PrivacyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyDrawer: React.FC<PrivacyDrawerProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const corePledges = [
    {
      icon: Lock,
      color: 'text-civic-teal-400 bg-civic-teal-500/10 border-civic-teal-500/30',
      title: t.privacy.point1Title,
      desc: t.privacy.point1Desc,
    },
    {
      icon: AlertTriangle,
      color: 'text-civic-amber-400 bg-civic-amber-500/10 border-civic-amber-500/30',
      title: t.privacy.point2Title,
      desc: t.privacy.point2Desc,
    },
    {
      icon: ShieldAlert,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      title: t.privacy.point3Title,
      desc: t.privacy.point3Desc,
    },
    {
      icon: CheckCircle2,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      title: t.privacy.point4Title,
      desc: t.privacy.point4Desc,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-3xl transform overflow-hidden rounded-3xl bg-navy-900 border border-navy-700 p-6 sm:p-8 text-left shadow-2xl transition-all animate-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {t.privacy.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {t.privacy.subheading}
              </p>
            </div>
          </div>

          {/* 4 Core Privacy & Safety Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {corePledges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border ${item.color} flex flex-col justify-between`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-navy-950/80 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 pl-10 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Anti-Scam Citizen Checklist: Recognizing Genuine Enumerators */}
          <div className="p-5 rounded-2xl bg-navy-950/90 border border-navy-800 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <UserCheck className="w-5 h-5 text-civic-saffron-400" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {t.privacy.enumeratorTitle}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {t.privacy.enumeratorPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className={`font-bold ${pt.isGood ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {pt.isGood ? '✓' : '✕'}
                  </span>
                  <span>{pt.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-navy-800">
            <a
              href={CENSUS_CONSTANTS.OFFICIAL_CENSUS_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-civic-blue-600 to-civic-teal-600 hover:from-civic-blue-500 hover:to-civic-teal-500 text-white text-sm font-bold shadow-lg shadow-civic-blue-600/30 transition-all"
            >
              <span>{t.privacy.officialLinkBtn}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-sm font-semibold border border-navy-700 transition-colors"
            >
              {t.privacy.closeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
