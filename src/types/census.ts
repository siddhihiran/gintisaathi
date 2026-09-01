export interface StateScheduleItem {
  id: string;
  name: string;
  isUT: boolean;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'Northeast' | 'Islands';
  phase1SelfEnumWindow: string;
  phase1FieldVisitWindow: string;
  phase2Window: string;
  status: 'Scheduled' | 'Notified Soon' | 'Phase I Active' | 'Completed';
  statusBadgeColor: string;
  hasSpecialSchedule: boolean;
  specialNote?: string;
  isNotifiedEarlySeed?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  isStreaming?: boolean;
}

export interface MythItem {
  id: string;
  claim: string;
  verdict: 'Supported' | 'Misleading' | 'Needs official verification';
  verdictBadgeClass: string;
  why: string;
  safeNextStep: string;
  isSensitive: boolean;
  category: 'Security' | 'Process' | 'Documents' | 'General';
}

export interface DemographicMetric {
  id: string;
  name: string;
  category: string;
  unit: string;
  nationalAverage: number;
  dataPoints: {
    label: string;
    value: number;
    color?: string;
  }[];
  civicInsight: string;
  civicUseCase: string;
}

export interface StateCensusLensData {
  stateId: string;
  stateName: string;
  metrics: Record<string, DemographicMetric>;
}
