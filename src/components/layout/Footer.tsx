import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CENSUS_CONSTANTS } from '../../data/constants';
import { ShieldCheck, ExternalLink, PhoneCall, HeartHandshake, AlertCircle } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, setActiveTab }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-civic-saffron-500 to-civic-teal-500 p-[2px]">
                <div className="w-full h-full bg-navy-950 rounded-[9px] flex items-center justify-center text-civic-saffron-400 font-bold text-base">
                  २७
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                GintiSaathi <span className="text-civic-saffron-400 font-semibold text-sm">| गिनतीसाथी</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
              {t.footer.desc}
            </p>

            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-navy-800 flex items-start gap-3 max-w-lg">
              <AlertCircle className="w-5 h-5 text-civic-saffron-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300">
                <strong className="text-white">{t.footer.safetyNoteTitle} </strong>
                {t.footer.safetyNoteDesc}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.quickNav}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-civic-saffron-400 transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('timeline'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-civic-saffron-400 transition-colors"
                >
                  {t.nav.timeline}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('ask-ai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-civic-saffron-400 transition-colors"
                >
                  {t.nav.askAi}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('myth-checker'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-civic-saffron-400 transition-colors"
                >
                  {t.nav.mythChecker}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('census-lens'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-civic-saffron-400 transition-colors"
                >
                  {t.nav.censusLens}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Helplines & Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.helplinesTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={CENSUS_CONSTANTS.OFFICIAL_CENSUS_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-civic-teal-400 hover:text-civic-teal-300 font-semibold"
                >
                  <span>{t.footer.officialPortalTitle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-slate-500">censusindia.gov.in</p>
              </li>

              <li className="flex items-start gap-2">
                <PhoneCall className="w-4 h-4 text-civic-saffron-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-medium">{t.footer.censusHelpline}</div>
                  <div className="text-xs text-civic-saffron-400 font-bold">{CENSUS_CONSTANTS.OFFICIAL_HELPLINE_TOLL_FREE}</div>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-200 font-medium">{t.footer.cybercrimeHelpline}</div>
                  <div className="text-xs text-rose-400 font-bold">{t.footer.cybercrimeDial}</div>
                </div>
              </li>

              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.footer.pledgeBtn}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-emerald-400/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.footer.zeroRetention}
            </span>
            <button
              onClick={onOpenPrivacy}
              className="text-slate-400 hover:text-slate-200 hover:underline"
            >
              {t.nav.privacy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
