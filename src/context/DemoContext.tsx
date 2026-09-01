import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ReadinessScore {
  hasSelectedLanguage: boolean;
  hasSelectedState: boolean;
  hasUsedAiGuide: boolean;
  hasCheckedMyth: boolean;
}

interface DemoContextType {
  // Guided Tour
  isTourActive: boolean;
  currentTourStep: number;
  startTour: () => void;
  nextTourStep: () => void;
  prevTourStep: () => void;
  skipTour: () => void;
  // Readiness Score
  score: ReadinessScore;
  scorePercentage: number;
  markLanguageSelected: () => void;
  markStateSelected: () => void;
  markAiGuideUsed: () => void;
  markMythChecked: () => void;
  resetScore: () => void;
  // Passport
  passportData: Record<string, unknown> | null;
  passportLoading: boolean;
  passportError: string | null;
  generatePassport: (payload: Record<string, unknown>) => Promise<void>;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode; onNavigateTab: (tab: string) => void }> = ({
  children,
  onNavigateTab,
}) => {
  // Passport state
  const [passportData, setPassportData] = useState<any>(null);
  const [passportLoading, setPassportLoading] = useState<boolean>(false);
  const [passportError, setPassportError] = useState<string | null>(null);

  // Function to call backend generate passport API
  const generatePassport = async (payload: any) => {
    setPassportLoading(true);
    setPassportError(null);
    try {
      const res = await fetch('/api/passport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const data = await res.json();
      setPassportData(data);
    } catch (err) {
      console.warn('Passport generation failed, using fallback', err);
      // fallback static plan (simple demo data)
      const fallback = {
        journey: 'Your Census journey will begin with self‑enumeration online.',
        steps: [
          'Gather household documents (as per official list).',
          'Create a free account on the Census portal.',
          'Complete the questionnaire and submit.',
        ],
        readyItems: ['ID proof', 'Address proof'],
        safety: 'Never share OTP, Aadhaar, bank details, or passwords.',
        verify: 'Check official state notifications for dates.',
        support: 'If you need help, ask a family member or visit a local help centre.',
      };
      setPassportData(fallback);
    } finally {
      setPassportLoading(false);
    }
  };

  // Guided Tour Step: 1 (State Timeline) -> 2 (AI Guide) -> 3 (Myth Checker) -> 4 (Census Lens)
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [currentTourStep, setCurrentTourStep] = useState<number>(1);

  const [score, setScore] = useState<ReadinessScore>(() => {
    const saved = localStorage.getItem('gintisaathi_readiness');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // default
      }
    }
    return {
      hasSelectedLanguage: false,
      hasSelectedState: false,
      hasUsedAiGuide: false,
      hasCheckedMyth: false,
    };
  });

  useEffect(() => {
    localStorage.setItem('gintisaathi_readiness', JSON.stringify(score));
  }, [score]);

  // Calculate score percentage (25% each)
  const completedCount = [
    score.hasSelectedLanguage,
    score.hasSelectedState,
    score.hasUsedAiGuide,
    score.hasCheckedMyth,
  ].filter(Boolean).length;
  const scorePercentage = completedCount * 25;

  const markLanguageSelected = () => {
    setScore(prev => ({ ...prev, hasSelectedLanguage: true }));
  };

  const markStateSelected = () => {
    setScore(prev => ({ ...prev, hasSelectedState: true }));
  };

  const markAiGuideUsed = () => {
    setScore(prev => ({ ...prev, hasUsedAiGuide: true }));
  };

  const markMythChecked = () => {
    setScore(prev => ({ ...prev, hasCheckedMyth: true }));
  };

  const resetScore = () => {
    const fresh = {
      hasSelectedLanguage: false,
      hasSelectedState: false,
      hasUsedAiGuide: false,
      hasCheckedMyth: false,
    };
    setScore(fresh);
    localStorage.setItem('gintisaathi_readiness', JSON.stringify(fresh));
  };

  const startTour = () => {
    setIsTourActive(true);
    setCurrentTourStep(1);
    onNavigateTab('timeline');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextTourStep = () => {
    if (currentTourStep === 1) {
      setCurrentTourStep(2);
      onNavigateTab('ask-ai');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentTourStep === 2) {
      setCurrentTourStep(3);
      onNavigateTab('myth-checker');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentTourStep === 3) {
      setCurrentTourStep(4);
      onNavigateTab('census-lens');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Completed tour!
      setIsTourActive(false);
      onNavigateTab('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevTourStep = () => {
    if (currentTourStep === 4) {
      setCurrentTourStep(3);
      onNavigateTab('myth-checker');
    } else if (currentTourStep === 3) {
      setCurrentTourStep(2);
      onNavigateTab('ask-ai');
    } else if (currentTourStep === 2) {
      setCurrentTourStep(1);
      onNavigateTab('timeline');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skipTour = () => {
    setIsTourActive(false);
  };

  return (
    <DemoContext.Provider
      value={{
        isTourActive,
        currentTourStep,
        startTour,
        nextTourStep,
        prevTourStep,
        skipTour,
        score,
        scorePercentage,
        markLanguageSelected,
        markStateSelected,
        markAiGuideUsed,
        markMythChecked,
        resetScore,
        // Passport related
        passportData,
        passportLoading,
        passportError,
        generatePassport,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = (): DemoContextType => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
