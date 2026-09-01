import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../../types/language';
import { useDemo } from '../../context/DemoContext';
import { ShieldCheck, Globe, Menu, X, ChevronDown, Sparkles, Building2, HelpCircle, BarChart3, Clock } from 'lucide-react';
import { CENSUS_CONSTANTS } from '../../data/constants';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPrivacy: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenPrivacy }) => {
  const { language, setLanguage, t, currentLanguageOption } = useLanguage();
  const { markLanguageSelected } = useDemo();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Minimal header: logo, language selector, privacy button
  return (
    <header className="sticky top-0 z-40 bg-ink-900/90 backdrop-blur-xl border-b border-ink-800/80 transition-all duration-300">
      {/* Top micro alert strip */}
      <div className="bg-gradient-to-r from-marigold-600/90 via-ink-900 to-indigo-600/90 py-1.5 px-4 text-center text-xs font-medium text-white/95 tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
        <span className="truncate">{t.nav.topStrip}</span>
        <span className="hidden md:inline text-white/70">|</span>
        <span className="hidden md:inline text-marigold-200">{t.nav.noOtpNotice}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand / Logo */}
          <div
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-marigold-500 via-indigo-600 to-sage-500 p-[2px] shadow-glow-saffron group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-ink-950 rounded-[10px] flex items-center justify-center text-marigold-400 font-bold text-xl">
                <span>२७</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-sage-500 border-2 border-ink-950 flex items-center justify-center text-[8px] text-white">✓</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-marigold-400 transition-colors">GintiSaathi</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-marigold-500/20 text-marigold-300 font-semibold border border-marigold-500/30">2027</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">गिनतीसाथी • {CENSUS_CONSTANTS.APP_TAGLINE}</p>
            </div>
          </div>

          {/* Controls: Language Selector + Privacy Drawer */}
          <div className="flex items-center gap-2.5">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-ink-900/90 hover:bg-ink-800 border border-ink-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-all shadow-sm"
                aria-label="Select Language"
              >
                <Globe className="w-4 h-4 text-sage-400" />
                <span className="font-semibold">{currentLanguageOption.nativeLabel}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)} />
                  <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-ink-900 border border-ink-700 shadow-2xl p-1.5 z-20 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-ink-800 mb-1">{t.nav.selectLang}</div>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                          markLanguageSelected();
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm transition-colors ${
                          language === lang.code
                            ? 'bg-indigo-600/30 text-indigo-300 font-bold border border-indigo-500/30'
                            : 'text-slate-300 hover:bg-ink-800 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.nativeLabel}</span>
                        </span>
                        <span className="text-[11px] text-slate-400">({lang.label})</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Privacy Button */}
            <button
              onClick={onOpenPrivacy}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-ink-900/90 hover:bg-ink-800 border border-ink-700/80 text-xs sm:text-sm font-medium text-civic-emerald-400 hover:text-civic-emerald-300 transition-all shadow-sm"
              title="Privacy & Safety Guidelines"
            >
              <ShieldCheck className="w-4 h-4 text-civic-emerald-400" />
              <span className="hidden sm:inline">{t.nav.privacy}</span>
            </button>
          </div>
        </div>
              
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileNavOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-civic-blue-600 to-civic-teal-600 text-white'
                        : 'text-slate-300 hover:bg-navy-900 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-civic-saffron-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              <div className="pt-2 mt-2 border-t border-navy-800/80 flex items-center justify-between px-2 text-xs text-slate-400">
                <span>{t.footer.censusHelpline}:</span>
                <a href={`tel:${CENSUS_CONSTANTS.OFFICIAL_HELPLINE_TOLL_FREE}`} className="text-civic-saffron-400 font-bold hover:underline">
                  {CENSUS_CONSTANTS.OFFICIAL_HELPLINE_TOLL_FREE}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
