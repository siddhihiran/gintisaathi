import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Home, Users, Snowflake, CheckCircle2, ArrowRight } from 'lucide-react';

interface TimelineHowItWorksProps {
  onCheckStateSchedule: () => void;
}

export const TimelineHowItWorks: React.FC<TimelineHowItWorksProps> = ({ onCheckStateSchedule }) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-navy-800/80">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-civic-blue-500/10 text-civic-blue-300 text-xs font-bold uppercase tracking-wider border border-civic-blue-500/20">
          <span>{t.timeline.architectureTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.timeline.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          {t.timeline.subheading}
        </p>
      </div>

      {/* Visual Timeline Cards (Phase 1 vs Phase 2 vs Special Snow-bound) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Phase 1 Card */}
        <div className="relative rounded-3xl bg-navy-900/90 border-2 border-civic-saffron-500/50 p-6 sm:p-8 flex flex-col justify-between shadow-glow-saffron">
          <div className="absolute -top-3.5 left-6 px-3.5 py-1 rounded-full bg-civic-saffron-500 text-navy-950 text-xs font-extrabold uppercase tracking-wider">
            {t.timeline.firstStage}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="p-3 rounded-2xl bg-civic-saffron-500/20 text-civic-saffron-400 border border-civic-saffron-500/30">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {t.timeline.phase1Title}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-civic-saffron-400">
                  {t.timeline.phase1Dates}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {t.timeline.phase1Desc}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-navy-800">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {t.timeline.phase1Collects}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {t.timeline.phase1Items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-civic-saffron-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-navy-800 text-[11px] text-slate-400 italic">
            {t.timeline.phase1Footnote}
          </div>
        </div>

        {/* Phase 2 Card */}
        <div className="relative rounded-3xl bg-navy-900/90 border-2 border-civic-blue-500/50 p-6 sm:p-8 flex flex-col justify-between shadow-glow-blue">
          <div className="absolute -top-3.5 left-6 px-3.5 py-1 rounded-full bg-civic-blue-500 text-white text-xs font-extrabold uppercase tracking-wider">
            {t.timeline.secondStage}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="p-3 rounded-2xl bg-civic-blue-500/20 text-civic-blue-400 border border-civic-blue-500/30">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {t.timeline.phase2Title}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-civic-blue-400">
                  {t.timeline.phase2Dates}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {t.timeline.phase2Desc}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-navy-800">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {t.timeline.phase2Collects}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {t.timeline.phase2Items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-civic-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-navy-800 text-[11px] text-slate-400 italic">
            {t.timeline.phase2Footnote}
          </div>
        </div>

        {/* Special Snow-bound Card */}
        <div className="relative rounded-3xl bg-navy-900/90 border border-civic-teal-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-glow-teal">
          <div className="absolute -top-3.5 left-6 px-3.5 py-1 rounded-full bg-civic-teal-500 text-navy-950 text-xs font-extrabold uppercase tracking-wider">
            {t.timeline.snowBoundTag}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="p-3 rounded-2xl bg-civic-teal-500/20 text-civic-teal-400 border border-civic-teal-500/30">
                <Snowflake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {t.timeline.snowBoundTitle}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-civic-teal-400">
                  {t.timeline.snowBoundDates}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {t.timeline.snowBoundDesc}
            </p>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-navy-800 space-y-2">
              <div className="text-xs font-bold text-civic-teal-300">
                {t.timeline.snowBoundWhyTitle}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.timeline.snowBoundWhyDesc}
              </p>
            </div>
          </div>

          <button
            onClick={onCheckStateSchedule}
            className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-xs sm:text-sm border border-navy-700 transition-colors"
          >
            <span>{t.timeline.diffTableTitle}</span>
            <ArrowRight className="w-4 h-4 text-civic-saffron-400" />
          </button>
        </div>
      </div>

      {/* Difference Table & Key Takeaway Banner */}
      <div className="rounded-3xl bg-navy-900/60 border border-navy-800 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {t.timeline.diffTableTitle}
            </h3>
            <p className="text-xs text-slate-400">
              {t.timeline.diffTableSub}
            </p>
          </div>
          <button
            onClick={onCheckStateSchedule}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-civic-blue-600 hover:bg-civic-blue-500 text-white text-xs font-bold transition-colors"
          >
            <span>{t.timeline.viewMyStateBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="text-[11px] uppercase tracking-wider text-slate-400 bg-navy-950/80 border-b border-navy-800">
              <tr>
                <th className="py-3 px-4 rounded-l-xl">{t.timeline.diffFeatureHeader}</th>
                <th className="py-3 px-4 text-civic-saffron-400">{t.timeline.phase1Title}</th>
                <th className="py-3 px-4 text-civic-blue-400 rounded-r-xl">{t.timeline.phase2Title}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-800/80">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">{t.timeline.diffFocusRow[0]}</td>
                <td className="py-3.5 px-4">{t.timeline.diffFocusRow[1]}</td>
                <td className="py-3.5 px-4">{t.timeline.diffFocusRow[2]}</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">{t.timeline.diffTimelineRow[0]}</td>
                <td className="py-3.5 px-4">{t.timeline.diffTimelineRow[1]}</td>
                <td className="py-3.5 px-4">{t.timeline.diffTimelineRow[2]}</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">{t.timeline.diffUnitRow[0]}</td>
                <td className="py-3.5 px-4">{t.timeline.diffUnitRow[1]}</td>
                <td className="py-3.5 px-4">{t.timeline.diffUnitRow[2]}</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">{t.timeline.diffSelfEnumRow[0]}</td>
                <td className="py-3.5 px-4">{t.timeline.diffSelfEnumRow[1]}</td>
                <td className="py-3.5 px-4">{t.timeline.diffSelfEnumRow[2]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
