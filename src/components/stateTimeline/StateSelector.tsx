import React, { useState, useMemo } from 'react';
import { StateScheduleItem } from '../../types/census';
import { useLanguage } from '../../context/LanguageContext';
import { Search, MapPin, Check, Sparkles, Filter } from 'lucide-react';

interface StateSelectorProps {
  states: StateScheduleItem[];
  selectedStateId: string;
  onSelectState: (stateId: string) => void;
}

export const StateSelector: React.FC<StateSelectorProps> = ({
  states,
  selectedStateId,
  onSelectState,
}) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState<string>('All');

  const regions = ['All', 'North', 'South', 'East', 'West', 'Central', 'Northeast', 'Islands'];

  const filteredStates = useMemo(() => {
    return states.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = filterRegion === 'All' || s.region === filterRegion;
      return matchesSearch && matchesRegion;
    });
  }, [states, searchTerm, filterRegion]);

  return (
    <div className="space-y-4">
      {/* Search Bar & Region Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.timeline.stateSelectorPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950/90 border border-navy-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-civic-saffron-500 focus:ring-1 focus:ring-civic-saffron-500 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setFilterRegion(reg)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                filterRegion === reg
                  ? 'bg-civic-blue-600 text-white'
                  : 'bg-navy-900 text-slate-400 hover:text-slate-200 border border-navy-800'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Select Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-56 overflow-y-auto pr-1">
        {filteredStates.map((st) => {
          const isSelected = st.id === selectedStateId;
          return (
            <button
              key={st.id}
              onClick={() => onSelectState(st.id)}
              className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all duration-150 ${
                isSelected
                  ? 'bg-gradient-to-r from-civic-saffron-500/20 to-civic-blue-600/20 border-civic-saffron-500 text-white shadow-md'
                  : 'bg-navy-900/70 border-navy-800 text-slate-300 hover:border-navy-700 hover:text-white'
              }`}
            >
              <div className="flex items-start justify-between gap-1 mb-1">
                <span className="text-xs font-bold truncate">{st.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-civic-saffron-400 shrink-0" />}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-500 font-medium">{st.region}</span>
                {st.isNotifiedEarlySeed && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Notified Early Rollout Model" />
                )}
                {st.hasSpecialSchedule && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" title="Special Terrain Schedule" />
                )}
              </div>
            </button>
          );
        })}

        {filteredStates.length === 0 && (
          <div className="col-span-full py-6 text-center text-xs text-slate-500">
            No State or UT found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};
