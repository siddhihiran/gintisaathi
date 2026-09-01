import React from 'react';
import { StateScheduleItem } from '../../types/census';
import { useLanguage } from '../../context/LanguageContext';
import { CENSUS_CONSTANTS } from '../../data/constants';
import { MapPin, Calendar, Clock, ExternalLink, AlertCircle, Info, Sparkles } from 'lucide-react';

interface TimelineCardProps {
  stateItem: StateScheduleItem;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ stateItem }) => {
  const { t } = useLanguage();

  return (
    <div className="rounded-3xl bg-navy-900/90 border border-navy-700 p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
      {/* Top Header Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-navy-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-civic-saffron-400" />
              {stateItem.isUT ? 'Union Territory' : 'State'} • {stateItem.region} Region
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-navy-950 text-slate-400 border border-navy-800 font-mono">
              {t.common.demoTag}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {stateItem.name}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-2xl border text-xs sm:text-sm font-bold uppercase tracking-wider ${stateItem.statusBadgeColor}`}>
            {stateItem.status}
          </div>
        </div>
      </div>

      {/* Special Notified Banner if Seed or Terrain */}
      {stateItem.isNotifiedEarlySeed && (
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-200 leading-relaxed">
            <strong>{t.common.verified}: </strong>
            {t.timeline.notifiedSeedNote}
          </div>
        </div>
      )}

      {stateItem.hasSpecialSchedule && (
        <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs text-blue-200 leading-relaxed">
            <strong>{t.timeline.snowBoundTag}: </strong>
            {stateItem.specialNote || t.timeline.snowBoundDesc}
          </div>
        </div>
      )}

      {/* Schedule Dual Windows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Self Enumeration Window */}
        <div className="p-5 rounded-2xl bg-navy-950/90 border border-navy-800/90 space-y-2">
          <div className="flex items-center gap-2 text-civic-teal-400 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>{t.timeline.selfEnumWindow}</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-white leading-snug">
            {stateItem.phase1SelfEnumWindow}
          </div>
          <p className="text-xs text-slate-400">
            {t.timeline.selfEnumSub}
          </p>
        </div>

        {/* Enumerator Field Visit Window */}
        <div className="p-5 rounded-2xl bg-navy-950/90 border border-navy-800/90 space-y-2">
          <div className="flex items-center gap-2 text-civic-saffron-400 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>{t.timeline.enumeratorVisit}</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-white leading-snug">
            {stateItem.phase1FieldVisitWindow}
          </div>
          <p className="text-xs text-slate-400">
            {t.timeline.enumeratorSub}
          </p>
        </div>
      </div>

      {/* Phase 2 Reference */}
      <div className="p-4 rounded-2xl bg-navy-950/60 border border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
        <div>
          <span className="font-bold text-white">{t.timeline.phase2Ref}: </span>
          <span>{stateItem.phase2Window}</span>
        </div>
        <span className="text-slate-500 text-[11px]">{t.timeline.diffTimelineRow[2]}</span>
      </div>

      {/* CTA: Official Gazette schedule button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-civic-saffron-400 shrink-0" />
          <span>{t.timeline.operationalDatesNote}</span>
        </div>

        <a
          href={CENSUS_CONSTANTS.OFFICIAL_CENSUS_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-civic-blue-600 to-civic-teal-600 hover:from-civic-blue-500 hover:to-civic-teal-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-civic-blue-600/30 transition-all"
        >
          <span>{t.timeline.checkOfficialSchedule}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
