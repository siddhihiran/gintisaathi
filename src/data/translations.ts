import { SupportedLanguage } from '../types/language';

export interface TranslationDict {
  nav: {
    home: string;
    timeline: string;
    askAi: string;
    mythChecker: string;
    censusLens: string;
    privacy: string;
    officialPortal: string;
    topStrip: string;
    noOtpNotice: string;
    selectLang: string;
    floatingAi: string;
    guidedTourBtn: string;
  };
  demoTour: {
    tourBadge: string;
    tourTitle: string;
    stepOf: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    nextBtn: string;
    prevBtn: string;
    finishBtn: string;
    skipBtn: string;
  };
  readiness: {
    cardTitle: string;
    cardSub: string;
    statusGettingStarted: string;
    statusHalfway: string;
    statusReady: string;
    readyDesc: string;
    check1Title: string;
    check1Sub: string;
    check2Title: string;
    check2Sub: string;
    check3Title: string;
    check3Sub: string;
    check4Title: string;
    check4Sub: string;
    actionGo: string;
    resetBtn: string;
    badgePercent: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    startCta: string;
    askCta: string;
    guidedDemoCta: string;
    privacyNotice: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    stat4Val: string;
    stat4Label: string;
  };
  features: {
    askGuideTitle: string;
    askGuideDesc: string;
    askGuideTag: string;
    timelineTitle: string;
    timelineDesc: string;
    timelineTag: string;
    mythCheckerTitle: string;
    mythCheckerDesc: string;
    mythCheckerTag: string;
    censusLensTitle: string;
    censusLensDesc: string;
    censusLensTag: string;
    openSection: string;
  };
  timeline: {
    architectureTag: string;
    heading: string;
    subheading: string;
    firstStage: string;
    phase1Title: string;
    phase1Dates: string;
    phase1Desc: string;
    phase1Collects: string;
    phase1Items: string[];
    phase1Footnote: string;
    secondStage: string;
    phase2Title: string;
    phase2Dates: string;
    phase2Desc: string;
    phase2Collects: string;
    phase2Items: string[];
    phase2Footnote: string;
    snowBoundTag: string;
    snowBoundTitle: string;
    snowBoundDates: string;
    snowBoundDesc: string;
    snowBoundWhyTitle: string;
    snowBoundWhyDesc: string;
    diffTableTitle: string;
    diffTableSub: string;
    viewMyStateBtn: string;
    diffFeatureHeader: string;
    diffFocusRow: [string, string, string];
    diffTimelineRow: [string, string, string];
    diffUnitRow: [string, string, string];
    diffSelfEnumRow: [string, string, string];
    stateSelectorLabel: string;
    stateSelectorPlaceholder: string;
    statusBadge: string;
    selfEnumWindow: string;
    selfEnumSub: string;
    enumeratorVisit: string;
    enumeratorSub: string;
    phase2Ref: string;
    checkOfficialSchedule: string;
    notifiedSeedNote: string;
    operationalDatesNote: string;
    checklistTitle: string;
    checklistSub: string;
    checklistReady: string;
    checklistItem1: string;
    checklistItem1Sub: string;
    checklistItem2: string;
    checklistItem2Sub: string;
    checklistItem3: string;
    checklistItem3Sub: string;
    checklistItem4: string;
    checklistItem4Sub: string;
    seIdGoldenRule: string;
    seIdCrucialTag: string;
    seIdNote: string;
  };
  simulator: {
    tag: string;
    heading: string;
    subheading: string;
    stepOf: string;
    citizenTip: string;
    prevStep: string;
    nextStep: string;
    readyBadge: string;
    demoArtifactTag: string;
    sampleIdTitle: string;
    sampleIdSub: string;
    officialAckLabel: string;
    readyToShareLabel: string;
    copySampleBtn: string;
    simulateBtn: string;
    disclaimer: string;
    steps: {
      title: string;
      subtitle: string;
      desc: string;
      tip: string;
    }[];
  };
  chat: {
    tag: string;
    heading: string;
    subheading: string;
    guideName: string;
    guideSub: string;
    onlineBadge: string;
    inputPlaceholder: string;
    sendBtn: string;
    disclaimer: string;
    suggestedHeading: string;
    prompts: [string, string, string, string];
    clearChat: string;
    welcomeMsg: string;
    resetMsg: string;
    typingMsg: string;
    emptyChatTitle: string;
    emptyChatDesc: string;
    privacyRefusalAlert: string;
  };
  myth: {
    tag: string;
    heading: string;
    subheading: string;
    inputLabel: string;
    inputPlaceholder: string;
    checkBtn: string;
    checkingBtn: string;
    disclaimer: string;
    sampleHeading: string;
    sampleSub: string;
    examinedClaim: string;
    verdictLabel: string;
    whyLabel: string;
    safeNextStepLabel: string;
    safetyWarning: string;
    viewVerification: string;
    emptyStateTitle: string;
    emptyStateDesc: string;
  };
  lens: {
    tag: string;
    heading: string;
    subheading: string;
    disclaimer: string;
    selectState: string;
    selectCategory: string;
    comparingWith: string;
    dynamicInsightTitle: string;
    civicUseTitle: string;
    nationalAvg: string;
    primaryIndicator: string;
    breakdownTitle: string;
    footnote: string;
    superpowersHeading: string;
    superpowerCards: {
      title: string;
      desc: string;
    }[];
  };
  privacy: {
    heading: string;
    subheading: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    point4Title: string;
    point4Desc: string;
    enumeratorTitle: string;
    enumeratorPoints: {
      isGood: boolean;
      text: string;
    }[];
    closeBtn: string;
    officialLinkBtn: string;
  };
  footer: {
    desc: string;
    safetyNoteTitle: string;
    safetyNoteDesc: string;
    quickNav: string;
    helplinesTitle: string;
    officialPortalTitle: string;
    censusHelpline: string;
    cybercrimeHelpline: string;
    cybercrimeDial: string;
    pledgeBtn: string;
    copyright: string;
    zeroRetention: string;
  };
  common: {
    loading: string;
    verified: string;
    learnMore: string;
    copied: string;
    copy: string;
    demoTag: string;
    allRegions: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDict> = {
  en: {
    nav: {
      home: 'Home',
      timeline: 'State Timeline',
      askAi: 'Ask GintiSaathi',
      mythChecker: 'Myth Checker',
      censusLens: 'Census Lens',
      privacy: 'Safety & Privacy',
      officialPortal: 'Official Portal',
      topStrip: 'India’s First Fully Digital Census • Prepare your household with confidence',
      noOtpNotice: 'No OTP or Banking details required here',
      selectLang: 'Select Language',
      floatingAi: 'Ask GintiSaathi AI',
      guidedTourBtn: '✨ Guided Demo',
    },
    demoTour: {
      tourBadge: 'Guided Demo Tour',
      tourTitle: 'Interactive Walkthrough for Hackathon Judges',
      stepOf: 'Step',
      step1Title: 'Step 1: State Timeline & Readiness Checklist',
      step1Desc: 'Explore model state schedules (Andhra, Haryana, Ladakh, Maharashtra) with the 15-day digital window and readiness checklist.',
      step2Title: 'Step 2: Ask GintiSaathi AI Assistant',
      step2Desc: 'Try asking sample prompt pills or custom questions. Strict safety prompt refuses Aadhaar and OTPs in all 5 languages.',
      step3Title: 'Step 3: Myth & Scam Checker',
      step3Desc: 'Test viral WhatsApp rumors (Bank PIN requests, WhatsApp OTPs, Biometric third-party apps) with instant verdicts and safe actions.',
      step4Title: 'Step 4: Census Lens Data Explorer',
      step4Desc: 'Interact with SVG Donut & Bar charts to see how sample data shapes schools, hospitals, and transport planning.',
      nextBtn: 'Next Section →',
      prevBtn: '← Previous',
      finishBtn: '🎉 Complete Tour',
      skipBtn: 'Exit Tour',
    },
    readiness: {
      cardTitle: 'Census 2027 Readiness Score',
      cardSub: 'Complete these 4 civic checks to get 100% prepared for Digital Self-Enumeration.',
      statusGettingStarted: 'Getting Started',
      statusHalfway: 'Making Progress',
      statusReady: '100% Census Ready!',
      readyDesc: 'Your household is fully equipped for India’s Digital Census 2027 self-enumeration!',
      check1Title: '1. Language Selected',
      check1Sub: 'Chosen your preferred language for UI and AI assistant.',
      check2Title: '2. State / UT Schedule Explored',
      check2Sub: 'Checked your state’s self-enumeration timeline and readiness checklist.',
      check3Title: '3. Consulted GintiSaathi AI',
      check3Sub: 'Asked a question about Phase 1 vs Phase 2 or SE ID procedures.',
      check4Title: '4. Verified a Viral Rumor',
      check4Sub: 'Tested a rumor in Myth Checker to learn scam prevention.',
      actionGo: 'Go to Section →',
      resetBtn: 'Reset Score',
      badgePercent: 'Ready',
    },
    hero: {
      badge: 'Official Citizen Preparation Guide • Census 2027',
      headlinePart1: 'Every household counts.',
      headlinePart2: 'Let’s make yours easier.',
      subtitle: 'India’s first fully digital census is here. Understand the two phases, find your state schedule, verify rumors, and get instant answers in your language.',
      startCta: 'Start my Census guide',
      askCta: 'Ask GintiSaathi AI',
      guidedDemoCta: '✨ Launch Guided Demo',
      privacyNotice: '🔒 No OTP, Aadhaar number, bank detail, or payment is required here.',
      stat1Val: '2 Phases',
      stat1Label: 'Housing (2026) & Population (2027)',
      stat2Val: '100% Digital',
      stat2Label: 'Self-Enumeration & Handheld Devices',
      stat3Val: '36 States/UTs',
      stat3Label: 'All Districts Across India Covered',
      stat4Val: '5 Languages',
      stat4Label: 'English, हिन्दी, मराठी, தமிழ், বাংলা',
    },
    features: {
      askGuideTitle: 'Ask GintiSaathi AI',
      askGuideDesc: 'Get clear answers on two phases, self-enumeration steps, and guidelines in 5 languages.',
      askGuideTag: 'Interactive AI Guide',
      timelineTitle: 'State Timeline & Checklist',
      timelineDesc: 'Check your state’s self-enumeration window, enumerator visit schedule, and required details.',
      timelineTag: '36 States & UTs Explorer',
      mythCheckerTitle: 'Myth & Rumor Checker',
      mythCheckerDesc: 'Fact-check viral WhatsApp messages, fake forms, and payment scams in real-time.',
      mythCheckerTag: 'Scam & Rumor Buster',
      censusLensTitle: 'Census Lens Explorer',
      censusLensDesc: 'Explore interactive sample indicators showing how census data shapes civic infrastructure.',
      censusLensTag: 'Data Visualization',
      openSection: 'Open Section',
    },
    timeline: {
      architectureTag: 'Operational Architecture',
      heading: 'How Census 2027 Works',
      subheading: 'A transparent two-phase digital process designed for 1.4 billion citizens.',
      firstStage: 'First Stage',
      phase1Title: 'Phase 1: Houselisting & Housing Census',
      phase1Dates: 'April to September 2026',
      phase1Desc: 'Collects structural details of dwellings, basic amenities (clean drinking water, lighting, sanitation, cooking fuel, and household assets).',
      phase1Collects: 'What Phase 1 collects:',
      phase1Items: [
        'Building & house construction materials (roof, wall, floor)',
        'Drinking water source & access availability',
        'Sanitation, toilet facilities & drainage type',
        'Electricity & main source of domestic lighting',
        'Cooking fuel (LPG / PNG / Firewood / Biogas)',
        'Household assets (Radio, TV, Internet, Vehicles)',
      ],
      phase1Footnote: '* Self-enumeration window opens ~15 days prior to field enumerator visits.',
      secondStage: 'Second Stage',
      phase2Title: 'Phase 2: Population Enumeration',
      phase2Dates: 'February 2027',
      phase2Desc: 'Collects individual demographic details: age, marital status, education, occupation, religion, and mother tongue.',
      phase2Collects: 'What Phase 2 collects:',
      phase2Items: [
        'Full roster of household resident members',
        'Age, sex, date of birth & marital status',
        'Religion, Scheduled Caste / Scheduled Tribe status',
        'Educational attainment & literacy status',
        'Economic activity, occupation & industry',
        'Mother tongue & other languages known',
      ],
      phase2Footnote: '* Covers every individual citizen residing in India on the reference moment.',
      snowBoundTag: 'Special Terrain Schedule',
      snowBoundTitle: 'Special Snow-bound Schedule',
      snowBoundDates: 'September 2026',
      snowBoundDesc: 'Ladakh and notified high-altitude snow-bound areas of Jammu & Kashmir, Himachal Pradesh, and Uttarakhand are scheduled for September 2026.',
      snowBoundWhyTitle: 'Why a separate schedule?',
      snowBoundWhyDesc: 'Due to heavy winter snowfall and mountain pass road blockages from November to May, high-altitude snow-bound circles conduct field operations in September before winter onset.',
      diffTableTitle: 'Phase 1 vs Phase 2: Quick Key Differences',
      diffTableSub: 'Understanding what information belongs to which phase',
      viewMyStateBtn: 'View My State Window',
      diffFeatureHeader: 'Feature',
      diffFocusRow: ['Primary Focus', 'Dwelling structure, amenities & household facilities', 'Individual resident demographics & socio-economic profile'],
      diffTimelineRow: ['Execution Timeline', 'April to September 2026 (State-specific cycles)', 'February 2027 (Synchronous nationwide)'],
      diffUnitRow: ['Unit of Counting', 'Housing Census Houses & Household Units', 'Every Living Citizen / Household Member'],
      diffSelfEnumRow: ['Digital Self-Enumeration', 'Available (~15 days prior to field visit)', 'Available prior to February 2027 field count'],
      stateSelectorLabel: 'Select your State or Union Territory:',
      stateSelectorPlaceholder: 'Search State / UT...',
      statusBadge: 'Schedule Status',
      selfEnumWindow: 'Self-Enumeration Window',
      selfEnumSub: 'Digital self-enumeration opens on censusindia.gov.in prior to field visits.',
      enumeratorVisit: 'Enumerator Field Visits',
      enumeratorSub: 'Authorized enumerators visit each household for handheld tablet verification.',
      phase2Ref: 'Phase 2 (Population Enumeration)',
      checkOfficialSchedule: 'Check Official Gazette Schedule',
      notifiedSeedNote: 'Phase I field operations commenced following the notified 15-day digital self-enumeration window.',
      operationalDatesNote: 'Operational dates are notified circle-wise by the State Directorate. Verify through official notification.',
      checklistTitle: 'What will I need for Self-Enumeration?',
      checklistSub: 'Check your household readiness before self-enumerating online.',
      checklistReady: 'Ready',
      checklistItem1: 'Active Mobile Number for OTP login on the official portal.',
      checklistItem1Sub: 'Used solely for sending a one-time OTP for logging into the portal.',
      checklistItem2: 'Basic household details (roof/wall materials, drinking water source, toilet facility).',
      checklistItem2Sub: 'Basic knowledge of your house type, drinking water source, toilet, lighting & cooking fuel.',
      checklistItem3: 'Approx. 15 minutes of uninterrupted time to review entries.',
      checklistItem3Sub: 'A quiet 15 minutes to fill and review all household details before final submit.',
      checklistItem4: 'No documents or uploads are needed during self-enumeration.',
      checklistItem4Sub: 'Zero document uploads. No Aadhaar card, bank passbook, or identity proofs required.',
      seIdGoldenRule: 'The SE ID Golden Rule',
      seIdCrucialTag: 'Crucial Step',
      seIdNote: 'Important: After submission, you will receive a Self-Enumeration ID (SE ID). Keep this ID ready to share with the visiting enumerator for instant verification!',
    },
    simulator: {
      tag: 'Self-Enumeration Walkthrough',
      heading: 'What happens during Digital Self-Enumeration?',
      subheading: 'Self-enumeration lets you complete your family’s census data safely from home in 4 simple steps.',
      stepOf: 'Step',
      citizenTip: 'Citizen Tip',
      prevStep: '← Previous Step',
      nextStep: 'Next Step',
      readyBadge: 'Ready for Census 2027!',
      demoArtifactTag: 'Interactive Demo Artifact',
      sampleIdTitle: 'Sample Self-Enumeration ID (SE ID)',
      sampleIdSub: 'This is the format of the official acknowledgement you receive after submitting.',
      officialAckLabel: 'OFFICIAL SE ID ACKNOWLEDGMENT',
      readyToShareLabel: 'Status: Ready to share with visiting enumerator',
      copySampleBtn: 'Copy Sample SE ID',
      simulateBtn: '✨ Simulate Generating Sample SE ID',
      disclaimer: '* For illustration purposes only. Real SE ID is issued only by censusindia.gov.in',
      steps: [
        {
          title: 'Login on Official Portal',
          subtitle: 'Use active mobile number',
          desc: 'During your state’s self-enumeration window, visit censusindia.gov.in and log in securely with your mobile number via OTP.',
          tip: 'No Aadhaar number or password is required.',
        },
        {
          title: 'Fill Questionnaire',
          subtitle: 'At your convenience (~15 mins)',
          desc: 'Fill in your household dwelling details (roof/walls, drinking water, lighting, sanitation, cooking fuel, and assets).',
          tip: 'You can save as draft and resume anytime.',
        },
        {
          title: 'Get Your SE ID',
          subtitle: 'Self-Enumeration ID & QR',
          desc: 'Upon successful online submission, the system generates a unique Self-Enumeration ID (e.g. SE-2027-IND-XXXX) and SMS confirmation.',
          tip: 'Save the SMS or download the PDF acknowledgment.',
        },
        {
          title: 'Show to Visiting Enumerator',
          subtitle: 'Fast 1-minute verification',
          desc: 'When the official enumerator visits your house with their handheld device, simply show them your SE ID to instantly verify your record.',
          tip: 'You won’t have to answer the questionnaire again!',
        },
      ],
    },
    chat: {
      tag: 'Verified AI Citizen Assistant',
      heading: 'Ask GintiSaathi (गिनतीसाथी)',
      subheading: 'Your conversational guide for digital census procedures, phase differences, and safety.',
      guideName: 'GintiSaathi Guide',
      guideSub: 'Guarding privacy • Multilingual Gemini Assistant',
      onlineBadge: 'Online',
      inputPlaceholder: 'Ask anything about Census 2027 (e.g. Can I fill it in Hindi?)...',
      sendBtn: 'Ask AI',
      disclaimer: 'AI guide — always verify critical operational details through official Census channels at censusindia.gov.in.',
      suggestedHeading: 'Suggested Questions:',
      prompts: [
        'What is the difference between the two phases?',
        'Can I fill it in Hindi?',
        'What should I do after self-enumeration?',
        'Is this WhatsApp message true?',
      ],
      clearChat: 'Reset Chat',
      welcomeMsg: '🇮🇳 **Welcome to GintiSaathi AI (गिनतीसाथी)!**\n\nI am your verified digital guide for **Census 2027**.\n\nYou can ask me about:\n• Difference between Phase 1 (Housing) and Phase 2 (Population)\n• Digital Self-Enumeration steps & obtaining your SE ID\n• Languages supported & state schedules\n• What to prepare for visiting enumerators\n\n*(Note: I never ask for or accept OTPs, Aadhaar numbers, or bank details).*',
      resetMsg: '🇮🇳 **Chat Reset.** I am ready to answer your questions about Census 2027 in your chosen language!',
      typingMsg: 'GintiSaathi is preparing guidance...',
      emptyChatTitle: 'Ask anything about Census 2027',
      emptyChatDesc: 'Choose a question pill above or type your query below in your preferred language.',
      privacyRefusalAlert: '⚠️ Security Guard: Never share Aadhaar, OTPs, or passwords with AI chat.',
    },
    myth: {
      tag: 'Real-time Civic Rumor Verification',
      heading: 'Census 2027 Myth & Rumor Checker',
      subheading: 'Safeguard your household against scams, misinformation, and fake WhatsApp forwards.',
      inputLabel: 'Paste any message, rumor, or WhatsApp claim to verify:',
      inputPlaceholder: 'Paste any suspicious message, claim, or SMS here...',
      checkBtn: 'Verify Claim',
      checkingBtn: 'Checking against Census Gazette...',
      disclaimer: 'GintiSaathi evaluates claims against official Ministry & Census Commissioner guidelines.',
      sampleHeading: 'Or select a common viral claim to test:',
      sampleSub: 'Click to fact check',
      examinedClaim: 'Examined Claim / दावा:',
      verdictLabel: 'Verification Verdict',
      whyLabel: 'Why is this so?',
      safeNextStepLabel: 'Safe Next Step for Citizens',
      safetyWarning: 'Critical Safety Rule: The Census of India NEVER asks for bank passwords, UPI PINs, Aadhaar numbers, or fees. Never share OTPs with unverified callers.',
      viewVerification: 'View Verification',
      emptyStateTitle: 'No claim entered yet',
      emptyStateDesc: 'Paste a social media forward above or pick a viral claim below to inspect its authenticity.',
    },
    lens: {
      tag: 'Interactive Civic Data Explorer',
      heading: 'Census Lens: Interactive Civic Data Explorer',
      subheading: 'Understand how census statistics empower local governance, public health, and school planning.',
      disclaimer: 'Illustrative demo data — not official Census 2027 results.',
      selectState: 'Select State / Region:',
      selectCategory: 'Select Demographic Metric:',
      comparingWith: 'Comparing with national baseline estimates.',
      dynamicInsightTitle: 'Local Census Insight',
      civicUseTitle: 'How this Census data is used:',
      nationalAvg: 'National Average',
      primaryIndicator: 'Primary Indicator',
      breakdownTitle: 'Category Breakdown:',
      footnote: '* Illustrative demo data — not official Census 2027 results. Generated dynamically to demonstrate civic governance applications.',
      superpowersHeading: 'Why Your Census Response Matters: 4 Civic Superpowers',
      superpowerCards: [
        {
          title: 'Planning Schools & Anganwadis',
          desc: 'Accurate child population cohorts (ages 0-6 and 6-14) determine exact locations for primary schools, mid-day meal programs, and teacher allocations.',
        },
        {
          title: 'Healthcare & Hospital Capacities',
          desc: 'Identifies demographic age pyramids to establish Primary Health Centers (PHCs), hospital beds, maternal care clinics, and ambulance dispatch radius.',
        },
        {
          title: 'Public Transit & Road Networks',
          desc: 'Worker migration flows and commuting patterns guide metro line extensions, bus feeder corridors, and rural all-weather connectivity roads.',
        },
        {
          title: 'Welfare & Direct Benefit Delivery',
          desc: 'Household housing quality and amenity deficit maps enable transparent targeted distribution of clean water, electricity, and clean cooking subsidies.',
        },
      ],
    },
    privacy: {
      heading: 'Privacy, Trust & Anti-Scam Safeguards',
      subheading: 'GintiSaathi is committed to zero data retention and strict citizen protection.',
      point1Title: 'This demo does not collect your census response',
      point1Desc: 'This portal is purely an informational and educational guide. We do not store or transmit any census survey forms.',
      point2Title: 'Never enter personal census details into the AI chat',
      point2Desc: 'Do not type personal names, family details, or private identification into conversational prompts.',
      point3Title: 'Never share OTPs, passwords, bank details, or Aadhaar numbers',
      point3Desc: 'Official Census enumerators will never demand financial credentials, payment, or OTP forwards.',
      point4Title: 'Use official Census channels for final submission',
      point4Desc: 'All authentic self-enumerations must be completed exclusively on the official government website: censusindia.gov.in.',
      enumeratorTitle: 'How to recognize genuine Census Enumerators during field visits:',
      enumeratorPoints: [
        { isGood: true, text: 'They carry an official Government ID badge with their photo & circle code.' },
        { isGood: true, text: 'They operate an official handheld tablet running the authorized Census app.' },
        { isGood: false, text: 'They will NEVER ask for bank account details, credit cards, or cash.' },
        { isGood: false, text: 'They will NEVER ask you to share your mobile banking OTP.' },
      ],
      closeBtn: 'Close Privacy Drawer',
      officialLinkBtn: 'Visit Official Census Portal (censusindia.gov.in)',
    },
    footer: {
      desc: 'India’s first fully digital population census is a historic civic milestone. GintiSaathi is built to empower every household with transparent phase timelines, scam-safe self-enumeration guidance, and real-time rumor verification in 5 Indian languages.',
      safetyNoteTitle: 'Strict Civic Safety:',
      safetyNoteDesc: 'This portal does not collect census records, Aadhaar numbers, OTPs, or fees. Always verify state schedules via official Gazette notifications.',
      quickNav: 'Quick Navigation',
      helplinesTitle: 'Official & Emergency Helplines',
      officialPortalTitle: 'Official Census Portal',
      censusHelpline: 'Census Toll-Free Helpline',
      cybercrimeHelpline: 'National Cybercrime Helpline',
      cybercrimeDial: 'Dial 1930 (cybercrime.gov.in)',
      pledgeBtn: 'Citizen Privacy & Trust Pledge',
      copyright: '© 2026–2027 GintiSaathi. Built for India’s Digital Census Awareness.',
      zeroRetention: '100% Client Privacy • Zero Data Retention',
    },
    common: {
      loading: 'Processing...',
      verified: 'Verified Official Pattern',
      learnMore: 'Learn More',
      copied: 'Copied to clipboard!',
      copy: 'Copy',
      demoTag: 'DEMO DATA',
      allRegions: 'All',
    },
  },
  hi: {
    nav: {
      home: 'मुख्य पृष्ठ',
      timeline: 'राज्य समय-सारणी',
      askAi: 'गिनतीसाथी AI से पूछें',
      mythChecker: 'भ्रम निवारक (तथ्य जांच)',
      censusLens: 'जनगणना लेंस',
      privacy: 'सुरक्षा एवं गोपनीयता',
      officialPortal: 'आधिकारिक पोर्टल',
      topStrip: 'भारत की पहली पूर्ण डिजिटल जनगणना • विश्वास के साथ अपने परिवार की तैयारी करें',
      noOtpNotice: 'यहाँ किसी OTP या बैंक विवरण की आवश्यकता नहीं है',
      selectLang: 'भाषा चुनें',
      floatingAi: 'गिनतीसाथी AI से पूछें',
      guidedTourBtn: '✨ मार्गदर्शित डेमो',
    },
    demoTour: {
      tourBadge: 'मार्गदर्शित डेमो टूर',
      tourTitle: 'हैकथॉन जजों हेतु इंटरैक्टिव वॉकथ्रू',
      stepOf: 'चरण',
      step1Title: 'चरण 1: राज्य समय-सारणी एवं चेकलिस्ट',
      step1Desc: 'आंध्र प्रदेश, हरियाणा, लद्दाख या अपने राज्य का 15-दिवसीय डिजिटल समय और तैयारी चेकलिस्ट देखें।',
      step2Title: 'चरण 2: गिनतीसाथी AI सहायक से पूछें',
      step2Desc: 'अपनी भाषा में प्रश्न पूछें। सख्त सुरक्षा प्रणाली आधार और ओटीपी को तुरंत अस्वीकार करती है।',
      step3Title: 'चरण 3: भ्रम व अफवाह निवारक',
      step3Desc: 'व्हाट्सएप पर फैल रहे बैंक पिन व ओटीपी घोटालों की 1-क्लिक में सत्यता परखें।',
      step4Title: 'चरण 4: जनगणना लेंस (डेटा अन्वेषक)',
      step4Desc: 'देखें कि जनगणना के आंकड़े स्कूल, अस्पताल और सड़कों के विकास को कैसे आकार देते हैं।',
      nextBtn: 'अगला भाग →',
      prevBtn: '← पिछला',
      finishBtn: '🎉 टूर समाप्त करें',
      skipBtn: 'टूर छोड़ें',
    },
    readiness: {
      cardTitle: 'जनगणना 2027 तैयारी स्कोर (Readiness Score)',
      cardSub: 'डिजिटल स्व-गणना के लिए 100% तैयार होने के लिए ये 4 नागरिक कदम पूरे करें।',
      statusGettingStarted: 'शुरुआत कर रहे हैं',
      statusHalfway: 'प्रगति पर है',
      statusReady: '100% जनगणना हेतु तैयार!',
      readyDesc: 'आपका परिवार डिजिटल जनगणना 2027 की स्व-गणना के लिए पूर्णतः तैयार है!',
      check1Title: '1. भाषा चुनी गई',
      check1Sub: 'वेबसाइट और AI सहायक के लिए अपनी पसंदीदा भाषा का चयन किया।',
      check2Title: '2. राज्य अनुसूची देखी गई',
      check2Sub: 'अपने राज्य की स्व-गणना तिथि और तैयारी चेकलिस्ट की जांच की।',
      check3Title: '3. गिनतीसाथी AI से परामर्श लिया',
      check3Sub: 'चरण 1 और 2 के अंतर या SE ID प्रक्रिया पर प्रश्न पूछा।',
      check4Title: '4. अफवाह की सत्यता जांची',
      check4Sub: 'भ्रम निवारक में दावा जांचकर घोटालों से बचाव सीखा।',
      actionGo: 'इस भाग पर जाएं →',
      resetBtn: 'स्कोर रीसेट करें',
      badgePercent: 'तैयार',
    },
    hero: {
      badge: 'नागरिक मार्गदर्शिका • डिजिटल जनगणना 2027',
      headlinePart1: 'हर परिवार महत्वपूर्ण है।',
      headlinePart2: 'आइए इसे आपके लिए आसान बनाएं।',
      subtitle: 'भारत की पहली पूर्णतः डिजिटल जनगणना में आपका स्वागत है। दोनों चरणों को समझें, अपने राज्य का शेड्यूल देखें और अपनी भाषा में तुरंत सहायता पाएं।',
      startCta: 'जनगणना गाइड शुरू करें',
      askCta: 'गिनतीसाथी AI से पूछें',
      guidedDemoCta: '✨ मार्गदर्शित डेमो शुरू करें',
      privacyNotice: '🔒 यहाँ किसी OTP, आधार संख्या, बैंक विवरण या भुगतान की आवश्यकता नहीं है।',
      stat1Val: '2 चरण',
      stat1Label: 'मकान गणना (2026) व जनसंख्या गणना (2027)',
      stat2Val: '100% डिजिटल',
      stat2Label: 'स्व-गणना व डिजिटल हैंडहेल्ड उपकरण',
      stat3Val: '36 राज्य/UTs',
      stat3Label: 'देश भर के सभी जिले सम्मिलित',
      stat4Val: '5 भाषाएँ',
      stat4Label: 'English, हिन्दी, मराठी, தமிழ், বাংলা',
    },
    features: {
      askGuideTitle: 'गिनतीसाथी AI गाइड',
      askGuideDesc: 'चरण 1 और 2 के अंतर, स्व-गणना नियम और सहायता अपनी भाषा में तुरंत प्राप्त करें।',
      askGuideTag: 'इंटरैक्टिव AI गाइड',
      timelineTitle: 'राज्य समय-सारणी एवं चेकलिस्ट',
      timelineDesc: 'अपने राज्य की स्व-गणना तिथि, प्रगणक आगमन समय और आवश्यक तैयारी की जाँच करें।',
      timelineTag: '36 राज्य व केंद्रशासित प्रदेश',
      mythCheckerTitle: 'भ्रम व अफवाह निवारक',
      mythCheckerDesc: 'व्हाट्सएप और सोशल मीडिया पर फैल रहे फर्जी दावों और घोटालों की त्वरित जाँच करें।',
      mythCheckerTag: 'अफवाह व घोटाला रोधी',
      censusLensTitle: 'जनगणना लेंस (डेटा अवलोकन)',
      censusLensDesc: 'देखें कि जनगणना के आँकड़े स्कूलों, अस्पतालों और नागरिक सुविधाओं को कैसे तय करते हैं।',
      censusLensTag: 'डेटा विज़ुअलाइज़ेशन',
      openSection: 'अनुभाग खोलें',
    },
    timeline: {
      architectureTag: 'कार्यप्रणाली संरचना',
      heading: 'जनगणना 2027 कैसे काम करती है?',
      subheading: '140 करोड़ नागरिकों के लिए एक पारदर्शी और सुरक्षित द्वि-चरणीय डिजिटल प्रक्रिया।',
      firstStage: 'प्रथम चरण',
      phase1Title: 'चरण 1: मकान सूचीकरण व मकान गणना',
      phase1Dates: 'अप्रैल से सितम्बर 2026',
      phase1Desc: 'मकान की संरचना, पीने का पानी, शौचालय, प्रकाश व्यवस्था, रसोई ईंधन और घरेलू संपत्तियों का विवरण।',
      phase1Collects: 'चरण 1 में क्या दर्ज होता है:',
      phase1Items: [
        'भवन निर्माण सामग्री (छत, दीवार, फर्श का प्रकार)',
        'पेयजल स्रोत एवं परिसर में उपलब्धता',
        'शौचालय सुविधा एवं जल निकासी प्रणाली',
        'बिजली व प्रकाश का मुख्य स्रोत',
        'रसोई गैस / एलपीजी / ईंधन का प्रकार',
        'घरेलू परिसंपत्तियां (रेडियो, टीवी, इंटरनेट, वाहन)',
      ],
      phase1Footnote: '* प्रगणक भ्रमण से लगभग 15 दिन पहले स्व-गणना विंडो खुलती है।',
      secondStage: 'द्वितीय चरण',
      phase2Title: 'चरण 2: जनसंख्या गणना',
      phase2Dates: 'फरवरी 2027',
      phase2Desc: 'प्रत्येक सदस्य की व्यक्तिगत जानकारी: आयु, वैवाहिक स्थिति, शिक्षा, व्यवसाय, धर्म एवं मातृभाषा।',
      phase2Collects: 'चरण 2 में क्या दर्ज होता है:',
      phase2Items: [
        'परिवार के सभी सदस्यों का पूरा नाम व विवरण',
        'आयु, लिंग, जन्मतिथि व वैवाहिक स्थिति',
        'धर्म, अनुसूचित जाति / जनजाति वर्ग',
        'शैक्षणिक योग्यता व साक्षरता स्थिति',
        'आर्थिक कार्यकलाप, पेशा व व्यवसाय',
        'मातृभाषा व अन्य ज्ञात भाषाएँ',
      ],
      phase2Footnote: '* संदर्भ तिथि पर भारत में निवासरत प्रत्येक नागरिक को शामिल करता है।',
      snowBoundTag: 'विशेष भौगोलिक क्षेत्र अनुसूची',
      snowBoundTitle: 'बर्फबारी वाले क्षेत्रों हेतु विशेष समय',
      snowBoundDates: 'सितम्बर 2026',
      snowBoundDesc: 'लद्दाख तथा जम्मू-कश्मीर, हिमाचल प्रदेश व उत्तराखंड के बर्फबारी वाले क्षेत्रों के लिए सितम्बर 2026 का समय निर्धारित है।',
      snowBoundWhyTitle: 'अलग समय-सारणी क्यों?',
      snowBoundWhyDesc: 'नवंबर से मई तक भारी बर्फबारी और मार्ग बंद होने के कारण उच्च पर्वतीय क्षेत्रों में काम सितंबर में ही पूरा किया जाता है।',
      diffTableTitle: 'चरण 1 बनाम चरण 2: मुख्य अंतर',
      diffTableSub: 'जानिए कौन सी जानकारी किस चरण में ली जाती है',
      viewMyStateBtn: 'अपने राज्य की तिथि देखें',
      diffFeatureHeader: 'मापदंड',
      diffFocusRow: ['मुख्य ध्यान', 'मकान संरचना, बुनियादी सुविधाएं व घरेलू संपत्तियां', 'प्रत्येक व्यक्ति का जनसांख्यिकी व सामाजिक-आर्थिक विवरण'],
      diffTimelineRow: ['संचालन अवधि', 'अप्रैल से सितम्बर 2026 (राज्यानुसार चक्र)', 'फरवरी 2027 (पूरे देश में एक साथ)'],
      diffUnitRow: ['गणना इकाई', 'मकान व पारिवारिक आवास इकाई', 'प्रत्येक जीवित नागरिक / परिवार सदस्य'],
      diffSelfEnumRow: ['डिजिटल स्व-गणना', 'उपलब्ध (क्षेत्रीय भ्रमण से 15 दिन पूर्व)', 'फरवरी 2027 गणना से पूर्व उपलब्ध'],
      stateSelectorLabel: 'अपना राज्य या केंद्र शासित प्रदेश चुनें:',
      stateSelectorPlaceholder: 'राज्य खोजें...',
      statusBadge: 'अनुसूची स्थिति',
      selfEnumWindow: 'स्व-गणना (ऑनलाइन) अवधि',
      selfEnumSub: 'प्रगणक आने से पहले censusindia.gov.in पर ऑनलाइन भर सकते हैं।',
      enumeratorVisit: 'प्रगणक (Enumerator) गृह भ्रमण',
      enumeratorSub: 'अधिकृत प्रगणक आपके घर आकर टैबलेट पर सत्यापन करेंगे।',
      phase2Ref: 'चरण 2 (जनसंख्या गणना)',
      checkOfficialSchedule: 'आधिकारिक राजपत्र अनुसूची देखें',
      notifiedSeedNote: 'अधिसूचित 15-दिवसीय डिजिटल स्व-गणना के बाद चरण 1 के क्षेत्रीय कार्य प्रारंभ हुए।',
      operationalDatesNote: 'सटीक तिथियाँ राज्य जनगणना निदेशालय द्वारा अधिसूचित की जाती हैं। आधिकारिक अधिसूचना से सत्यापित करें।',
      checklistTitle: 'स्व-गणना के लिए मुझे क्या तैयार रखना होगा?',
      checklistSub: 'ऑनलाइन स्व-गणना शुरू करने से पहले अपनी तैयारी जांचें।',
      checklistReady: 'तैयार',
      checklistItem1: 'आधिकारिक पोर्टल पर लॉगिन हेतु सक्रिय मोबाइल नंबर।',
      checklistItem1Sub: 'केवल लॉगिन हेतु एकमुश्त OTP प्राप्त करने के लिए उपयोग किया जाता है।',
      checklistItem2: 'घर की बुनियादी जानकारी (दीवार/छत का प्रकार, पेयजल स्रोत, शौचालय सुविधा)।',
      checklistItem2Sub: 'पेयजल, प्रकाश, ईंधन और घर के प्रकार की सामान्य जानकारी।',
      checklistItem3: 'समीक्षा के लिए लगभग 15 मिनट का समय।',
      checklistItem3Sub: 'विवरण भरने और जांचने के लिए 15 मिनट का शांत समय।',
      checklistItem4: 'स्व-गणना में किसी भी दस्तावेज़ को अपलोड करने की आवश्यकता नहीं है।',
      checklistItem4Sub: 'शून्य अपलोड। कोई आधार कार्ड या बैंक पासबुक नहीं मांगी जाती।',
      seIdGoldenRule: 'SE ID का स्वर्णिम नियम',
      seIdCrucialTag: 'अति महत्वपूर्ण',
      seIdNote: 'महत्वपूर्ण: सबमिट करने के बाद आपको एक SE ID (स्व-गणना कोड) मिलेगा। प्रगणक के आने पर केवल यह SE ID दिखाएं और 1 मिनट में सत्यापन पाएं!',
    },
    simulator: {
      tag: 'स्व-गणना मार्गदर्शन',
      heading: 'डिजिटल स्व-गणना में क्या होता है?',
      subheading: 'स्व-गणना आपको घर बैठे 4 सरल चरणों में परिवार की जानकारी दर्ज करने की सुविधा देती है।',
      stepOf: 'चरण',
      citizenTip: 'नागरिक सुझाव',
      prevStep: '← पिछला चरण',
      nextStep: 'अगला चरण',
      readyBadge: 'जनगणना 2027 हेतु तैयार!',
      demoArtifactTag: 'डेमो पावती पत्र',
      sampleIdTitle: 'नमूना Self-Enumeration ID (SE ID)',
      sampleIdSub: 'फॉर्म सबमिट करने पर आपको इसी प्रारूप में पावती मिलती है।',
      officialAckLabel: 'आधिकारिक स्व-गणना पावती',
      readyToShareLabel: 'स्थिति: प्रगणक को दिखाने हेतु तैयार',
      copySampleBtn: 'नमूना SE ID कॉपी करें',
      simulateBtn: '✨ नमूना SE ID बनाकर देखें',
      disclaimer: '* केवल प्रदर्शन हेतु। असली SE ID केवल censusindia.gov.in से जारी होती है।',
      steps: [
        {
          title: 'आधिकारिक पोर्टल पर लॉगिन करें',
          subtitle: 'सक्रिय मोबाइल नंबर द्वारा',
          desc: 'अपने राज्य की स्व-गणना अवधि में censusindia.gov.in पर जाएं और मोबाइल नंबर व OTP से सुरक्षित लॉगिन करें।',
          tip: 'किसी आधार नंबर या पासवर्ड की आवश्यकता नहीं है।',
        },
        {
          title: 'प्रश्नावली भरें',
          subtitle: 'अपनी सुविधानुसार (~15 मिनट)',
          desc: 'अपने घर की स्थिति, पीने का पानी, शौचालय, प्रकाश, रसोई ईंधन और परिसंपत्तियों का विवरण दर्ज करें।',
          tip: 'आप ड्राफ्ट सेव करके कभी भी दोबारा शुरू कर सकते हैं।',
        },
        {
          title: 'अपना SE ID प्राप्त करें',
          subtitle: 'स्व-गणना कोड व QR',
          desc: 'सबमिट करने पर स्क्रीन पर विशिष्ट SE ID (जैसे SE27-4921-X9K2) और SMS पावती प्राप्त होती है।',
          tip: 'इस SMS या पावती का स्क्रीनशॉट सुरक्षित रखें।',
        },
        {
          title: 'आने वाले प्रगणक को दिखाएं',
          subtitle: '1 मिनट में त्वरित सत्यापन',
          desc: 'जब प्रगणक आपके घर आएं, तो बस उन्हें यह SE ID दिखाएं। वे टैबलेट पर स्कैन करके सत्यापन पूरा कर लेंगे।',
          tip: 'आपको दोबारा कोई प्रश्न उत्तर नहीं देना होगा!',
        },
      ],
    },
    chat: {
      tag: 'सत्यापित AI नागरिक सहायक',
      heading: 'गिनतीसाथी (GintiSaathi) से पूछें',
      subheading: 'डिजिटल जनगणना प्रक्रियाओं एवं सुरक्षा से जुड़े हर सवाल का सरल जवाब।',
      guideName: 'गिनतीसाथी गाइड',
      guideSub: 'गोपनीयता रक्षक • बहुभाषी जेमिनी AI',
      onlineBadge: 'सक्रिय',
      inputPlaceholder: 'जनगणना 2027 से जुड़ा कोई भी प्रश्न पूछें...',
      sendBtn: 'पूछें',
      disclaimer: 'AI सहायक — अंतिम एवं आधिकारिक जानकारी के लिए censusindia.gov.in पर जाएँ।',
      suggestedHeading: 'सुझाए गए प्रश्न:',
      prompts: [
        'दो चरणों के बीच क्या अंतर है?',
        'क्या मैं इसे हिंदी में भर सकता हूँ?',
        'स्व-गणना (Self-Enumeration) के बाद मुझे क्या करना चाहिए?',
        'क्या यह व्हाट्सएप संदेश सच है?',
      ],
      clearChat: 'चैट रीसेट करें',
      welcomeMsg: '🇮🇳 **गिनतीसाथी AI में आपका स्वागत है!**\n\nमैं **जनगणना 2027** के लिए आपका डिजिटल मार्गदर्शक हूँ।\n\nआप मुझसे पूछ सकते हैं:\n• चरण 1 (मकान) और चरण 2 (जनसंख्या) के बीच अंतर\n• ऑनलाइन स्व-गणना व SE ID प्राप्त करने का तरीका\n• भाषाएँ और राज्य समय-सारणी\n• प्रगणक आने पर क्या तैयारी रखनी है\n\n*(नोट: मैं कभी भी आधार, ओटीपी या बैंक विवरण नहीं मांगता)।*',
      resetMsg: '🇮🇳 **चैट रीसेट हो गई है।** मैं आपकी पसंदीदा भाषा में जनगणना 2027 पर मार्गदर्शन देने के लिए तैयार हूँ!',
      typingMsg: 'गिनतीसाथी उत्तर तैयार कर रहा है...',
      emptyChatTitle: 'जनगणना 2027 के बारे में कुछ भी पूछें',
      emptyChatDesc: 'ऊपर दिए गए सुझाव पर क्लिक करें या नीचे अपनी भाषा में प्रश्न टाइप करें।',
      privacyRefusalAlert: '⚠️ सुरक्षा नियम: कभी भी आधार संख्या, ओटीपी या पासवर्ड साझा न करें।',
    },
    myth: {
      tag: 'तथ्य जांच व अफवाह निवारण',
      heading: 'जनगणना 2027 भ्रम व अफवाह जांच',
      subheading: 'ऑनलाइन घोटालों, फर्जी फॉर्म और भ्रामक संदेशों से अपने परिवार को सुरक्षित रखें।',
      inputLabel: 'यहाँ कोई भी संदिग्ध संदेश, दावा या एसएमएस पेस्ट करें:',
      inputPlaceholder: 'यहाँ कोई भी संदिग्ध संदेश या दावा पेस्ट करें...',
      checkBtn: 'सत्यता जांचें',
      checkingBtn: 'राजपत्र अधिसूचना से मिलान जारी है...',
      disclaimer: 'गिनतीसाथी आधिकारिक मंत्रालय एवं महारजिस्ट्रार दिशा-निर्देशों के आधार पर दावों की जांच करता है।',
      sampleHeading: 'या प्रचलित दावों में से एक चुनकर देखें:',
      sampleSub: 'क्लिक करके सत्यता परखें',
      examinedClaim: 'परीक्षित दावा / संदेश:',
      verdictLabel: 'सत्यापन परिणाम',
      whyLabel: 'कारण क्या है?',
      safeNextStepLabel: 'नागरिकों के लिए सुरक्षित कदम',
      safetyWarning: 'अति महत्वपूर्ण: भारत की जनगणना में कभी भी बैंक पासवर्ड, यूपीआई पिन, ओटीपी या शुल्क नहीं मांगा जाता है।',
      viewVerification: 'सत्यापन देखें',
      emptyStateTitle: 'अभी तक कोई दावा दर्ज नहीं किया गया',
      emptyStateDesc: 'ऊपर कोई संदेश पेस्ट करें या नीचे से एक प्रचलित अफवाह चुनकर सत्यता देखें।',
    },
    lens: {
      tag: 'सहभागी डेटा अन्वेषक',
      heading: 'जनगणना लेंस: सहभागी डेटा अन्वेषक',
      subheading: 'जानिए कैसे जनगणना के आंकड़े देश के विकास और बुनियादी ढांचे की नींव रखते हैं।',
      disclaimer: 'प्रदर्शनात्मक नमूना डेटा — आधिकारिक जनगणना 2027 परिणाम नहीं।',
      selectState: 'राज्य / क्षेत्र चुनें:',
      selectCategory: 'जनसांख्यिकीय संकेतक चुनें:',
      comparingWith: 'राष्ट्रीय औसत अनुमानों से तुलना।',
      dynamicInsightTitle: 'क्षेत्रीय विश्लेषण',
      civicUseTitle: 'इस डेटा का उपयोग कहाँ होता है:',
      nationalAvg: 'राष्ट्रीय औसत',
      primaryIndicator: 'मुख्य संकेतक',
      breakdownTitle: 'श्रेणी विभाजन:',
      footnote: '* प्रदर्शनात्मक नमूना डेटा — आधिकारिक जनगणना 2027 परिणाम नहीं। नागरिक शासन उपयोगिता दर्शाने हेतु गतिशील रूप से निर्मित।',
      superpowersHeading: 'आपकी जनगणना भागीदारी क्यों महत्वपूर्ण है: 4 नागरिक शक्तियां',
      superpowerCards: [
        {
          title: 'स्कूलों व आंगनवाड़ियों का नियोजन',
          desc: 'बच्चों की सटीक संख्या (0-6 व 6-14 वर्ष) से नए प्राथमिक विद्यालयों, मिड-डे मील और शिक्षकों की नियुक्ति तय होती है।',
        },
        {
          title: 'अस्पताल व स्वास्थ्य केंद्र क्षमता',
          desc: 'आयु संरचना के आधार पर प्राथमिक स्वास्थ्य केंद्र (PHC), अस्पताल बेड और एम्बुलेंस सेवाओं की योजना बनती है।',
        },
        {
          title: 'सड़कें व सार्वजनिक परिवहन',
          desc: 'कार्यकर्ताओं के आवागमन और आबादी घनत्व से मेट्रो विस्तार, बस रूट और बारहमासी ग्रामीण सड़कें बनती हैं।',
        },
        {
          title: 'कल्याणकारी योजनाओं का पारदर्शी लाभ',
          desc: 'पेयजल, स्वच्छता और पक्के आवास के अभाव वाले क्षेत्रों में सरकारी योजनाओं का सीधा लाभ पहुंचाया जाता है।',
        },
      ],
    },
    privacy: {
      heading: 'गोपनीयता, विश्वास एवं सुरक्षा प्रतिज्ञा',
      subheading: 'गिनतीसाथी आपकी निजता और नागरिक सुरक्षा के प्रति पूर्णतः समर्पित है।',
      point1Title: 'यह पोर्टल आपका जनगणना उत्तर एकत्र नहीं करता',
      point1Desc: 'यह केवल जागरूकता और तैयारी हेतु एक नागरिक सहायता प्लेटफॉर्म है।',
      point2Title: 'AI चैट में कभी भी व्यक्तिगत विवरण दर्ज न करें',
      point2Desc: 'चैट में अपना पूरा नाम, आधार संख्या या गोपनीय पारिवारिक जानकारी न लिखें।',
      point3Title: 'ओटीपी, पासवर्ड, बैंक विवरण या आधार कभी साझा न करें',
      point3Desc: 'असली जनगणना अधिकारी कभी भी बैंक खाते या वित्तीय जानकारी नहीं मांगते।',
      point4Title: 'अंतिम सबमिशन केवल आधिकारिक चैनल पर करें',
      point4Desc: 'सभी वैध स्व-गणना केवल आधिकारिक सरकारी पोर्टल censusindia.gov.in पर ही मान्य हैं।',
      enumeratorTitle: 'गृह भ्रमण पर आने वाले असली प्रगणक की पहचान कैसे करें:',
      enumeratorPoints: [
        { isGood: true, text: 'उनके पास फोटो व सर्किल कोड युक्त आधिकारिक सरकारी पहचान पत्र (ID) होता है।' },
        { isGood: true, text: 'वे अधिकृत जनगणना ऐप वाले सरकारी टैबलेट पर कार्य करते हैं।' },
        { isGood: false, text: 'वे कभी भी बैंक खाता, क्रेडिट कार्ड या पैसों की मांग नहीं करेंगे।' },
        { isGood: false, text: 'वे कभी भी आपका मोबाइल बैंकिंग ओटीपी नहीं मांगेंगे।' },
      ],
      closeBtn: 'गोपनीयता विंडो बंद करें',
      officialLinkBtn: 'आधिकारिक जनगणना पोर्टल (censusindia.gov.in)',
    },
    footer: {
      desc: 'भारत की पहली पूर्णतः डिजिटल जनगणना एक ऐतिहासिक नागरिक कदम है। गिनतीसाथी हर परिवार को समय-सारणी, सुरक्षित स्व-गणना और अफवाहों से बचाव की जानकारी 5 भाषाओं में प्रदान करता है।',
      safetyNoteTitle: 'सख्त नागरिक सुरक्षा:',
      safetyNoteDesc: 'यह पोर्टल जनगणना रिकॉर्ड, आधार संख्या, ओटीपी या शुल्क एकत्र नहीं करता। आधिकारिक सूचनाओं के लिए राजपत्र देखें।',
      quickNav: 'त्वरित नेविगेशन',
      helplinesTitle: 'आधिकारिक एवं आपातकालीन हेल्पलाइन',
      officialPortalTitle: 'आधिकारिक जनगणना पोर्टल',
      censusHelpline: 'जनगणना टोल-फ्री हेल्पलाइन',
      cybercrimeHelpline: 'राष्ट्रीय साइबर अपराध हेल्पलाइन',
      cybercrimeDial: 'डायल करें 1930 (cybercrime.gov.in)',
      pledgeBtn: 'नागरिक गोपनीयता व विश्वास प्रतिज्ञा',
      copyright: '© 2026–2027 गिनतीसाथी (GintiSaathi). डिजिटल जनगणना जागरूकता हेतु समर्पित।',
      zeroRetention: '100% निजता सुरक्षा • शून्य डेटा संग्रहण',
    },
    common: {
      loading: 'प्रक्रिया जारी है...',
      verified: 'आधिकारिक प्रारूप सत्यापित',
      learnMore: 'अधिक जानें',
      copied: 'कॉपी कर लिया गया!',
      copy: 'कॉपी करें',
      demoTag: 'डेमो डेटा',
      allRegions: 'सभी',
    },
  },
  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      timeline: 'राज्य वेळापत्रक',
      askAi: 'गिनतीसाथी AI ला विचारा',
      mythChecker: 'अफवा निवारक (तथ्य तपासणी)',
      censusLens: 'जनगणना लेन्स',
      privacy: 'सुरक्षा व गोपनीयता',
      officialPortal: 'अधिकृत पोर्टल',
      topStrip: 'भारताची पहिली पूर्ण डिजिटल जनगणना • विश्वासाने आपल्या कुटुंबाची तयारी करा',
      noOtpNotice: 'येथे कोणताही OTP किंवा बँक माहिती आवश्यक नाही',
      selectLang: 'भाषा निवडा',
      floatingAi: 'गिनतीसाथी AI ला विचारा',
      guidedTourBtn: '✨ मार्गदर्शित डेमो',
    },
    demoTour: {
      tourBadge: 'मार्गदर्शित डेमो टूर',
      tourTitle: 'हॅकथॉन मार्गदर्शक वॉकथ्रू',
      stepOf: 'टप्पा',
      step1Title: 'टप्पा 1: राज्य वेळापत्रक व चेकलिस्ट',
      step1Desc: 'आपल्या राज्याचा 15 दिवसांचा डिजिटल नोंदणी कालावधी आणि चेकलिस्ट तपासा.',
      step2Title: 'टप्पा 2: गिनतीसाथी AI ला विचारा',
      step2Desc: 'मराठीत प्रश्न विचारा. सुरक्षा प्रणाली आधार व बँक माहिती त्वरित नाकारते.',
      step3Title: 'टप्पा 3: अफवा व तथ्य तपासणी',
      step3Desc: 'व्हॉट्सॲपवरील फसव्या मेसेजची 1-क्लिकमध्ये पडताळणी करा.',
      step4Title: 'टप्पा 4: जनगणना लेन्स (डेटा अन्वेषक)',
      step4Desc: 'जनगणनेचा डेटा शाळा, आरोग्य व रस्ते नियोजनासाठी कसा वापरला जातो ते पहा.',
      nextBtn: 'पुढील विभाग →',
      prevBtn: '← मागील',
      finishBtn: '🎉 टूर समाप्त करा',
      skipBtn: 'टूर सोडा',
    },
    readiness: {
      cardTitle: 'जनगणना 2027 तयारी स्कोअर (Readiness Score)',
      cardSub: 'डिजिटल स्वयं-नोंदणीसाठी 100% तयार होण्यासाठी हे 4 नागरी टप्पे पूर्ण करा.',
      statusGettingStarted: 'सुरुवात करत आहात',
      statusHalfway: 'प्रगतीपथावर',
      statusReady: '100% जनगणनेसाठी सज्ज!',
      readyDesc: 'आपले कुटुंब डिजिटल जनगणना 2027 च्या नोंदणीसाठी पूर्णपणे सज्ज आहे!',
      check1Title: '1. भाषा निवडली',
      check1Sub: 'वेबसाइट व AI सहाय्यकासाठी आपली पसंतीची भाषा निवडली.',
      check2Title: '2. राज्य वेळापत्रक पाहिले',
      check2Sub: 'आपल्या राज्यातील नोंदणी कालावधी व तयारी चेकलिस्ट तपासली.',
      check3Title: '3. गिनतीसाथी AI चा सल्ला घेतला',
      check3Sub: 'टप्पा 1 व 2 च्या फरकावर किंवा SE ID वर प्रश्न विचारला.',
      check4Title: '4. अफवेची पडताळणी केली',
      check4Sub: 'अफवा निवारक मध्ये दावा तपासून फसवणुकीपासून संरक्षणाची माहिती घेतली.',
      actionGo: 'या विभागाकडे जा →',
      resetBtn: 'स्कोअर रीसेट करा',
      badgePercent: 'सज्ज',
    },
    hero: {
      badge: 'नागरिक मार्गदर्शिका • डिजिटल जनगणना 2027',
      headlinePart1: 'प्रत्येक कुटुंब महत्त्वाचे आहे.',
      headlinePart2: 'चला तुमची नोंदणी सोपी करूया.',
      subtitle: 'भारताच्या पहिल्या पूर्ण डिजिटल जनगणनेमध्ये आपले स्वागत आहे. दोन्ही टप्पे समजून घ्या, आपल्या राज्याचे वेळापत्रक तपासा आणि मराठीत त्वरित मार्गदर्शन मिळवा.',
      startCta: 'जनगणना मार्गदर्शक सुरू करा',
      askCta: 'गिनतीसाथी AI ला विचारा',
      guidedDemoCta: '✨ मार्गदर्शित डेमो सुरू करा',
      privacyNotice: '🔒 येथे कोणताही OTP, आधार क्रमांक, बँक माहिती किंवा शुल्क आवश्यक नाही.',
      stat1Val: '2 टप्पे',
      stat1Label: 'गृहगणना (2026) व लोकसंख्या गणना (2027)',
      stat2Val: '100% डिजिटल',
      stat2Label: 'स्वयं-नोंदणी व डिजिटल हँडहेल्ड उपकरणे',
      stat3Val: '36 राज्ये/UTs',
      stat3Label: 'देशभरातील सर्व जिल्ह्यांचा समावेश',
      stat4Val: '5 भाषा',
      stat4Label: 'English, हिन्दी, मराठी, தமிழ், বাংলা',
    },
    features: {
      askGuideTitle: 'गिनतीसाथी AI सहाय्यक',
      askGuideDesc: 'टप्पा 1 व 2 मधील फरक आणि स्वयं-नोंदणीचे नियम आपल्या भाषेत जाणून घ्या.',
      askGuideTag: 'इंटरॅक्टिव्ह AI गाइड',
      timelineTitle: 'राज्य वेळापत्रक व चेकलिस्ट',
      timelineDesc: 'आपल्या राज्यातील स्वयं-नोंदणी कालावधी आणि प्रगणक भेटीचे वेळापत्रक पहा.',
      timelineTag: '36 राज्ये व केंद्रशासित प्रदेश',
      mythCheckerTitle: 'अफवा व तथ्य पडताळणी',
      mythCheckerDesc: 'व्हॉट्सॲपवरील खोटे संदेश आणि आर्थिक फसवणुकीपासून स्वतःचे रक्षण करा.',
      mythCheckerTag: 'अफवा विरोधी मंच',
      censusLensTitle: 'जनगणना लेन्स',
      censusLensDesc: 'जनगणनेचा डेटा शाळा, आरोग्य आणि रस्ते विकासासाठी कसा उपयुक्त ठरतो ते पहा.',
      censusLensTag: 'डेटा विश्लेषण',
      openSection: 'विभाग उघडा',
    },
    timeline: {
      architectureTag: 'कार्यप्रणाली रचना',
      heading: 'जनगणना 2027 कशी पूर्ण होते?',
      subheading: '140 कोटी नागरिकांसाठी पारदर्शक आणि सुरक्षित दोन टप्प्यांची डिजिटल प्रक्रिया.',
      firstStage: 'पहिला टप्पा',
      phase1Title: 'टप्पा 1: घरांची यादी व गृहगणना',
      phase1Dates: 'एप्रिल ते सप्टेंबर 2026',
      phase1Desc: 'घराची स्थिती, पिण्याचे पाणी, स्वच्छतागृह, वीज, स्वयंपाकाचे इंधन व कौटुंबिक मालमत्ता.',
      phase1Collects: 'टप्पा 1 मध्ये काय नोंदवले जाते:',
      phase1Items: [
        'घराचे बांधकाम स्वरूप (छत, भिंती व फरशी)',
        'पिण्याच्या पाण्याचा स्रोत व उपलब्धता',
        'स्वच्छतागृह सुविधा व सांडपाणी व्यवस्था',
        'घरातील वीज व प्रकाशाचा मुख्य स्रोत',
        'स्वयंपाकाचे इंधन (एलपीजी / पीएनजी / बायोमॅस)',
        'कौटुंबिक मालमत्ता (टीव्ही, इंटरनेट, वाहने)',
      ],
      phase1Footnote: '* प्रगणक भेटीच्या 15 दिवस आधी स्वयं-नोंदणी विंडो खुली होते.',
      secondStage: 'दुसरा टप्पा',
      phase2Title: 'टप्पा 2: लोकसंख्या गणना',
      phase2Dates: 'फेब्रुवारी 2027',
      phase2Desc: 'वैयक्तिक माहिती: वय, शिक्षण, व्यवसाय, धर्म, वैवाहिक स्थिती आणि मातृभाषा.',
      phase2Collects: 'टप्पा 2 मध्ये काय नोंदवले जाते:',
      phase2Items: [
        'कुटुंबातील सर्व सदस्यांची नावे व माहिती',
        'वय, लिंग, जन्मतारीख व वैवाहिक स्थिती',
        'धर्म, अनुसूचित जाती / जमाती प्रवर्ग',
        'शिक्षण व साक्षरता स्थिती',
        'व्यवसाय, नोकरी व कामाचे स्वरूप',
        'मातृभाषा व इतर अवगत भाषा',
      ],
      phase2Footnote: '* संदर्भ दिनांकास भारतात राहणाऱ्या प्रत्येक नागरिकाचा समावेश.',
      snowBoundTag: 'विशेष दुर्गम भाग वेळापत्रक',
      snowBoundTitle: 'बर्फाच्छादित भागांसाठी विशेष वेळापत्रक',
      snowBoundDates: 'सप्टेंबर 2026',
      snowBoundDesc: 'लडाख तसेच जम्मू-काश्मीर, हिमाचल प्रदेश आणि उत्तराखंडच्या दुर्गम भागांसाठी सप्टेंबर 2026 निश्चित करण्यात आले आहे.',
      snowBoundWhyTitle: 'स्वतंत्र वेळापत्रक का?',
      snowBoundWhyDesc: 'नोव्हेंबर ते मे दरम्यान अतिबर्फवृष्टी व रस्ते बंद होत असल्याने या भागात सप्टेंबरमध्येच काम पूर्ण केले जाते.',
      diffTableTitle: 'टप्पा 1 विरूद्ध टप्पा 2: मुख्य फरक',
      diffTableSub: 'कोणती माहिती कोणत्या टप्प्यात गोळा केली जाते ते समजून घ्या',
      viewMyStateBtn: 'माझ्या राज्याची तारीख पहा',
      diffFeatureHeader: 'वैशिष्ट्य',
      diffFocusRow: ['मुख्य उद्देश', 'घराचे स्वरूप, सुविधा व मालमत्ता', 'वैयक्तिक माहिती, शिक्षण व व्यवसाय'],
      diffTimelineRow: ['कालावधी', 'एप्रिल ते सप्टेंबर 2026 (राज्यानुसार)', 'फेब्रुवारी 2027 (देशभर एकाच वेळी)'],
      diffUnitRow: ['गणना घटक', 'घर व कौटुंबिक निवासस्थान', 'प्रत्येक जिवंत नागरिक'],
      diffSelfEnumRow: ['डिजिटल नोंदणी', 'उपलब्ध (भेटीच्या 15 दिवस आधी)', 'फेब्रुवारी 2027 पूर्वी उपलब्ध'],
      stateSelectorLabel: 'आपले राज्य किंवा केंद्रशासित प्रदेश निवडा:',
      stateSelectorPlaceholder: 'राज्य शोधा...',
      statusBadge: 'वेळापत्रक स्थिती',
      selfEnumWindow: 'स्वयं-नोंदणी कालावधी',
      selfEnumSub: 'प्रगणक येण्यापूर्वी censusindia.gov.in वर स्वतः भरू शकता.',
      enumeratorVisit: 'प्रगणक (Enumerator) प्रत्यक्ष भेट',
      enumeratorSub: 'अधिकृत प्रगणक घरी येऊन टॅब्लेटवर पडताळणी करतील.',
      phase2Ref: 'टप्पा 2 (लोकसंख्या गणना)',
      checkOfficialSchedule: 'अधिकृत सरकारी वेळापत्रक तपासा',
      notifiedSeedNote: 'अधिसूचित 15 दिवसांच्या डिजिटल स्वयं-नोंदणीनंतर टप्पा 1 चे क्षेत्रीय काम सुरू झाले.',
      operationalDatesNote: 'अचूक तारखा राज्य जनगणना संचालनालयाकडून जाहीर केल्या जातात. अधिकृत अधिसूचनेद्वारे पडताळणी करा.',
      checklistTitle: 'स्वयं-नोंदणीसाठी मला काय आवश्यक आहे?',
      checklistSub: 'ऑनलाइन नोंदणी करण्यापूर्वी आपली तयारी तपासा.',
      checklistReady: 'तयार',
      checklistItem1: 'अधिकृत पोर्टलवर लॉगिनसाठी सक्रिय मोबाईल क्रमांक.',
      checklistItem1Sub: 'केवळ लॉगिन करण्यासाठी एकवेळचा OTP मिळवण्यासाठी वापरला जातो.',
      checklistItem2: 'घराची प्राथमिक माहिती (छत/भिंतीचा प्रकार, पाण्याचा स्रोत, स्वच्छतागृह).',
      checklistItem2Sub: 'घरातील पाणी, वीज, इंधन व सोयीसुविधांची सर्वसाधारण माहिती.',
      checklistItem3: 'माहिती तपासण्यासाठी सुमारे 15 मिनिटांचा वेळ.',
      checklistItem3Sub: 'शांतपणे माहिती भरण्यासाठी 15 मिनिटे.',
      checklistItem4: 'कोणतेही कागदपत्र किंवा पुरावा अपलोड करण्याची गरज नाही.',
      checklistItem4Sub: 'शून्य अपलोड. आधार किंवा बँक पासबुकची गरज नाही.',
      seIdGoldenRule: 'SE ID चा सुवर्ण नियम',
      seIdCrucialTag: 'महत्त्वाचे पाऊल',
      seIdNote: 'महत्त्वाचे: सबमिट केल्यानंतर तुम्हाला एक SE ID मिळेल. प्रगणक आल्यावर फक्त हा SE ID दाखवा आणि 1 मिनिटात पडताळणी पूर्ण करा!',
    },
    simulator: {
      tag: 'स्वयं-नोंदणी मार्गदर्शक',
      heading: 'डिजिटल स्वयं-नोंदणीमध्ये काय होते?',
      subheading: 'स्वयं-नोंदणीमुळे आपण घरबसल्या 4 सोप्या टप्प्यांत माहिती सुरक्षितपणे भरू शकता.',
      stepOf: 'टप्पा',
      citizenTip: 'नागरिक टीप',
      prevStep: '← मागील टप्पा',
      nextStep: 'पुढील टप्पा',
      readyBadge: 'जनगणना 2027 साठी सज्ज!',
      demoArtifactTag: 'डेमो पावती',
      sampleIdTitle: 'नमुना Self-Enumeration ID (SE ID)',
      sampleIdSub: 'फॉर्म सबमिट केल्यावर अशा स्वरूपाची पावती मिळते.',
      officialAckLabel: 'अधिकृत स्वयं-नोंदणी पावती',
      readyToShareLabel: 'स्थिती: प्रगणकास दाखवण्यासाठी सज्ज',
      copySampleBtn: 'नमुना SE ID कॉपी करा',
      simulateBtn: '✨ नमुना SE ID तयार करून पहा',
      disclaimer: '* केवळ प्रात्यक्षिकासाठी. खरा SE ID censusindia.gov.in वरूनच मिळतो.',
      steps: [
        {
          title: 'अधिकृत पोर्टलवर लॉगिन करा',
          subtitle: 'सक्रिय मोबाईल क्रमांकाने',
          desc: 'आपल्या राज्याच्या नोंदणी काळात censusindia.gov.in ला भेट द्या आणि मोबाईल OTP द्वारे लॉगिन करा.',
          tip: 'कोणत्याही पासवर्ड किंवा आधार क्रमांकाची गरज नाही.',
        },
        {
          title: 'प्रश्नावली भरा',
          subtitle: 'सोयीनुसार (~15 मिनिटे)',
          desc: 'घराची रचना, पिण्याचे पाणी, स्वच्छतागृह, वीज, स्वयंपाकाचे इंधन व मालमत्तेची माहिती भरा.',
          tip: 'माहिती सेव्ह करून नंतरही पूर्ण करू शकता.',
        },
        {
          title: 'SE ID मिळवा',
          subtitle: 'नोंदणी कोड व QR कोड',
          desc: 'सबमिट केल्यावर स्क्रीनवर व SMS द्वारे विशिष्ट SE ID मिळतो.',
          tip: 'हा SMS किंवा पावतीचा स्क्रीनशॉट जपून ठेवा.',
        },
        {
          title: 'भेट देणाऱ्या प्रगणकास दाखवा',
          subtitle: '1 मिनिटात जलद पडताळणी',
          desc: 'प्रगणक घरी आल्यावर त्यांना फक्त हा SE ID दाखवा. ते टॅब्लेटवर स्कॅन करून पडताळणी करतील.',
          tip: 'तुम्हाला पुन्हा प्रश्न उत्तरे द्यावी लागणार नाहीत!',
        },
      ],
    },
    chat: {
      tag: 'सत्यापित AI नागरिक सहाय्यक',
      heading: 'गिनतीसाथी (GintiSaathi) सहाय्यक',
      subheading: 'डिजिटल जनगणना, स्वयं-नोंदणी आणि सुरक्षा संदर्भातील सर्व शंकांचे निरसन.',
      guideName: 'गिनतीसाथी गाइड',
      guideSub: 'गोपनीयता रक्षक • बहुभाषिक जेमिनी AI',
      onlineBadge: 'सक्रिय',
      inputPlaceholder: 'जनगणना 2027 बद्दल काहीही विचारा...',
      sendBtn: 'विचारा',
      disclaimer: 'AI सहाय्यक — अधिकृत माहितीसाठी नेहमी censusindia.gov.in ला भेट द्या.',
      suggestedHeading: 'सुचवलेले प्रश्न:',
      prompts: [
        'दोन टप्प्यांमध्ये काय फरक आहे?',
        'मी मराठीत फॉर्म भरू शकतो का?',
        'स्वयं-नोंदणी केल्यानंतर काय करावे?',
        'हा व्हॉट्सॲप संदेश खरा आहे का?',
      ],
      clearChat: 'चॅट रीसेट करा',
      welcomeMsg: '🇮🇳 **गिनतीसाथी AI मध्ये आपले स्वागत आहे!**\n\nमी **जनगणना 2027** चा आपला डिजिटल मार्गदर्शक आहे.\n\nआपण मला विचारू शकता:\n• टप्पा 1 व टप्पा 2 मधील फरक\n• ऑनलाइन स्वयं-नोंदणी व SE ID मिळवण्याची पद्धत\n• भाषा व राज्य वेळापत्रक\n• प्रगणक आल्यावर काय तयारी करावी\n\n*(टीप: मी कधीही आधार, ओटीपी किंवा बँक माहिती मागत नाही).*',
      resetMsg: '🇮🇳 **चॅट रीसेट झाले आहे.** मी आपल्या भाषेत मार्गदर्शन करण्यास तयार आहे!',
      typingMsg: 'गिनतीसाथी उत्तर तयार करत आहे...',
      emptyChatTitle: 'जनगणना 2027 बद्दल काहीही विचारा',
      emptyChatDesc: 'वरील सुचवलेल्या प्रश्नांवर क्लिक करा किंवा खाली आपल्या भाषेत प्रश्न विचारा.',
      privacyRefusalAlert: '⚠️ सुरक्षा नियम: आधार क्रमांक, ओटीपी किंवा पासवर्ड कधीही शेअर करू नका.',
    },
    myth: {
      tag: 'तथ्य पडताळणी मंच',
      heading: 'जनगणना 2027 अफवा व तथ्य तपासणी',
      subheading: 'फसवणूक, बनावट मेसेज आणि अफवांपासून कुटुंबाचे रक्षण करा.',
      inputLabel: 'संशयास्पद मेसेज किंवा दावा येथे पेस्ट करा:',
      inputPlaceholder: 'कोणताही संशयास्पद मेसेज किंवा दावा येथे पेस्ट करा...',
      checkBtn: 'पडताळणी करा',
      checkingBtn: 'सरकारी राजपत्राशी पडताळणी करत आहे...',
      disclaimer: 'गिनतीसाथी अधिकृत सरकारी नियमांच्या आधारे दाव्यांची पडताळणी करतो.',
      sampleHeading: 'किंवा खालीलपैकी एक दावा निवडून तपासा:',
      sampleSub: 'तपासण्यासाठी क्लिक करा',
      examinedClaim: 'तपासलेला दावा / मेसेज:',
      verdictLabel: 'पडताळणी निकाल',
      whyLabel: 'याचे कारण काय?',
      safeNextStepLabel: 'नागरिकांसाठी सुरक्षित पाऊल',
      safetyWarning: 'अति महत्त्वाचे: भारतीय जनगणना कधीही बँक तपशील, पासवर्ड, आधार किंवा पैशांची मागणी करत नाही.',
      viewVerification: 'पडताळणी पहा',
      emptyStateTitle: 'अद्याप कोणताही दावा टाकला नाही',
      emptyStateDesc: 'वर संशयास्पद मेसेज पेस्ट करा किंवा खालीलपैकी एक अफवा निवडून पडताळणी करा.',
    },
    lens: {
      tag: 'डेटा अन्वेषक',
      heading: 'जनगणना लेन्स: डेटा अन्वेषक',
      subheading: 'जनगणनेची आकडेवारी देशाच्या विकासाचा पाया कशी रचते ते समजून घ्या.',
      disclaimer: 'प्रात्यक्षिक नमुना डेटा — अधिकृत जनगणना 2027 चे निकाल नाहीत.',
      selectState: 'राज्य निवडा:',
      selectCategory: 'मापदंड निवडा:',
      comparingWith: 'राष्ट्रीय सरासरी अंदाजाशी तुलना.',
      dynamicInsightTitle: 'स्थानिक निरीक्षण',
      civicUseTitle: 'हा डेटा कुठे वापरला जातो:',
      nationalAvg: 'राष्ट्रीय सरासरी',
      primaryIndicator: 'मुख्य संकेतक',
      breakdownTitle: 'श्रेणीनिहाय विभागणी:',
      footnote: '* प्रात्यक्षिक नमुना डेटा — अधिकृत जनगणना 2027 चे निकाल नाहीत. नागरी विकासाचे महत्त्व दर्शवण्यासाठी डायनॅमिक निर्मिती.',
      superpowersHeading: 'आपला सहभाग का महत्त्वाचा: 4 नागरी शक्ती',
      superpowerCards: [
        {
          title: 'शाळा व अंगणवाड्यांचे नियोजन',
          desc: 'मुलांच्या वयोगटानुसार (0-6 व 6-14) प्राथमिक शाळा, पोषण आहार आणि शिक्षकांची संख्या ठरते.',
        },
        {
          title: 'आरोग्य केंद्रे व रुग्णालये',
          desc: 'वयाच्या रचनेनुसार प्राथमिक आरोग्य केंद्र (PHC), खाटांची संख्या आणि रुग्णवाहिका सुविधा आखल्या जातात.',
        },
        {
          title: 'सार्वजनिक वाहतूक व रस्ते',
          desc: 'नागरिकांचे स्थलांतर आणि प्रवासाच्या सवयींनुसार मेट्रो, बस मार्ग आणि ग्रामीण रस्त्यांचे नियोजन होते.',
        },
        {
          title: 'सरकारी योजनांचा थेट लाभ',
          desc: 'पाणी, वीज, पक्की घरे नसलेल्या गरजू घटकांपर्यंत सरकारी योजनांचा लाभ पारदर्शकपणे पोहोचवला जातो.',
        },
      ],
    },
    privacy: {
      heading: 'गोपनीयता आणि सुरक्षा मार्गदर्शक',
      subheading: 'गिनतीसाथी नागरिकांच्या सुरक्षिततेसाठी आणि शून्य डेटा संकलनासाठी वचनबद्ध आहे.',
      point1Title: 'हे ॲप तुमची जनगणना माहिती गोळा करत नाही',
      point1Desc: 'हे केवळ मार्गदर्शन आणि जनजागृतीसाठी तयार केलेले व्यासपीठ आहे.',
      point2Title: 'AI चॅटमध्ये कधीही वैयक्तिक माहिती टाकू नका',
      point2Desc: 'चॅटमध्ये आधार क्रमांक, नाव किंवा खाजगी माहिती लिहू नका.',
      point3Title: 'OTP, पासवर्ड किंवा बँक तपशील कधीही शेअर करू नका',
      point3Desc: 'अधिकृत प्रगणक कधीही पैशांची किंवा बँकिंग माहितीची मागणी करत नाहीत.',
      point4Title: 'अधिकृत पोर्टलवरच अंतिम नोंदणी करा',
      point4Desc: 'केवळ censusindia.gov.in या अधिकृत शासकीय पोर्टलवरच नोंदणी वैध मानली जाते.',
      enumeratorTitle: 'घरी भेट देणाऱ्या अधिकृत प्रगणकाची ओळख कशी पटवावी:',
      enumeratorPoints: [
        { isGood: true, text: 'त्यांच्याकडे फोटो व प्रभाग क्रमांक असलेले अधिकृत सरकारी ओळखपत्र (ID) असते.' },
        { isGood: true, text: 'ते अधिकृत जनगणना ॲप असलेल्या सरकारी टॅब्लेटवर काम करतात.' },
        { isGood: false, text: 'ते कधीही बँक खाते, क्रेडिट कार्ड किंवा पैशांची मागणी करणार नाहीत.' },
        { isGood: false, text: 'ते कधीही तुमचा मोबाईल बँकिंग OTP मागणार नाहीत.' },
      ],
      closeBtn: 'बंद करा',
      officialLinkBtn: 'अधिकृत जनगणना पोर्टल (censusindia.gov.in)',
    },
    footer: {
      desc: 'भारताची पहिली पूर्ण डिजिटल जनगणना हा एक ऐतिहासिक टप्पा आहे. गिनतीसाथी प्रत्येक कुटुंबाला सुरक्षित स्वयं-नोंदणी, अचूक वेळापत्रक व अफवांपासून संरक्षणाची माहिती 5 भाषांमध्ये देते.',
      safetyNoteTitle: 'सक्त नागरी सुरक्षा:',
      safetyNoteDesc: 'हे पोर्टल कोणतीही वैयक्तिक माहिती, आधार, ओटीपी किंवा पैसे गोळा करत नाही. अधिकृत माहितीसाठी सरकारी पोर्टल पहा.',
      quickNav: 'जलद नेव्हिगेशन',
      helplinesTitle: 'अधिकृत व आपत्कालीन हेल्पलाईन',
      officialPortalTitle: 'अधिकृत जनगणना पोर्टल',
      censusHelpline: 'जनगणना टोल-फ्री हेल्पलाईन',
      cybercrimeHelpline: 'राष्ट्रीय सायबर गुन्हे हेल्पलाईन',
      cybercrimeDial: 'डायल करा 1930 (cybercrime.gov.in)',
      pledgeBtn: 'नागरिक गोपनीयता व विश्वास प्रतिज्ञा',
      copyright: '© 2026–2027 गिनतीसाथी (GintiSaathi). डिजिटल जनगणना जनजागृतीसाठी.',
      zeroRetention: '100% गोपनीयता • शून्य डेटा साठवणूक',
    },
    common: {
      loading: 'प्रक्रिया सुरू आहे...',
      verified: 'अधिकृत स्वरूप',
      learnMore: 'अधिक माहिती',
      copied: 'कॉपी झाले!',
      copy: 'कॉपी करा',
      demoTag: 'डेमो डेटा',
      allRegions: 'सर्व',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      timeline: 'மாநில கால அட்டவணை',
      askAi: 'கணக்கெடுப்பு AI',
      mythChecker: 'வதந்தி சரிபார்ப்பு',
      censusLens: 'மக்கள் தொகை லென்ஸ்',
      privacy: 'பாதுகாப்பு & தனியுரிமை',
      officialPortal: 'அதிகாரப்பூர்வ தளம்',
      topStrip: 'இந்தியாவின் முதல் முழு டிஜிட்டல் மக்கள் தொகை கணக்கெடுப்பு • நம்பிக்கையுடன் தயாராகுங்கள்',
      noOtpNotice: 'இங்கு OTP அல்லது வங்கி விவரங்கள் தேவையில்லை',
      selectLang: 'மொழியைத் தேர்வு செய்க',
      floatingAi: 'கணக்கெடுப்பு AI உடன் பேசு',
      guidedTourBtn: '✨ செயல்விளக்கம்',
    },
    demoTour: {
      tourBadge: 'செயல்விளக்க சுற்றுலா',
      tourTitle: 'ஹேக்கத்தான் நடுவர்களுக்கான வழிகாட்டல்',
      stepOf: 'படி',
      step1Title: 'படி 1: மாநில கால அட்டவணை & சரிபார்ப்புப் பட்டியல்',
      step1Desc: 'உங்கள் மாநிலத்தின் 15 நாள் டிஜிட்டல் கால அளவையும் தயார்நிலை பட்டியலையும் பாருங்கள்.',
      step2Title: 'படி 2: கணக்கெடுப்பு AI உடன் பேசுங்கள்',
      step2Desc: 'தமிழில் கேள்வி கேளுங்கள். பாதுகாப்பு விதிகள் ஆதார் மற்றும் OTP-ஐ உடனடியாக நிராகரிக்கும்.',
      step3Title: 'படி 3: வதந்தி & தகவல் சரிபார்ப்பு',
      step3Desc: 'வாட்ஸ்அப் வதந்திகளை (வங்கி PIN, OTP, பயோமெட்ரிக் ஆப்) 1-கிளிக்கில் சரிபார்க்கவும்.',
      step4Title: 'படி 4: மக்கள் தொகை லென்ஸ் (தரவு ஆய்வு)',
      step4Desc: 'கணக்கெடுப்பு புள்ளிவிவரங்கள் பள்ளிகள், மருத்துவமனைகள், சாலைகளை எவ்வாறு திட்டமிடுகின்றன என்பதை பாருங்கள்.',
      nextBtn: 'அடுத்த பகுதி →',
      prevBtn: '← முந்தைய',
      finishBtn: '🎉 செயல்விளக்கத்தை முடிக்கவும்',
      skipBtn: 'வெளியேறு',
    },
    readiness: {
      cardTitle: 'கணக்கெடுப்பு தயார்நிலை மதிப்பெண் (Readiness Score)',
      cardSub: 'டிஜிட்டல் சுய பதிவுக்கு 100% தயாராக இந்த 4 படிகளை முடிக்கவும்.',
      statusGettingStarted: 'தொடங்குகிறது',
      statusHalfway: 'முன்னேறுகிறது',
      statusReady: '100% முழு தயார்நிலை!',
      readyDesc: 'உங்கள் குடும்பம் மக்கள் தொகை கணக்கெடுப்பு 2027-க்கு முழுமையாக தயாராகிவிட்டது!',
      check1Title: '1. மொழி தேர்வு செய்யப்பட்டது',
      check1Sub: 'தளத்திற்கும் AI-க்கும் விருப்பமான மொழியை தேர்வு செய்துள்ளீர்கள்.',
      check2Title: '2. மாநில அட்டவணை பார்க்கப்பட்டது',
      check2Sub: 'உங்கள் மாநிலத்தின் கால அளவு மற்றும் சரிபார்ப்பு பட்டியலை பார்த்துள்ளீர்கள்.',
      check3Title: '3. கணக்கெடுப்பு AI ஆலோசனை',
      check3Sub: 'கட்டம் 1 vs கட்டம் 2 அல்லது SE ID பற்றி கேள்வி கேட்டுள்ளீர்கள்.',
      check4Title: '4. வதந்தி சரிபார்க்கப்பட்டது',
      check4Sub: 'வதந்தி சரிபார்ப்பில் தகவலை சரிபார்த்து மோசடி விழிப்புணர்வு பெற்றுள்ளீர்கள்.',
      actionGo: 'பகுதிக்குச் செல்லவும் →',
      resetBtn: 'மீட்டமைக்க',
      badgePercent: 'தயார்',
    },
    hero: {
      badge: 'அதிகாரப்பூர்வ குடிமக்கள் வழிகாட்டி • மக்கள் தொகை கணக்கெடுப்பு 2027',
      headlinePart1: 'ஒவ்வொரு குடும்பமும் முக்கியம்.',
      headlinePart2: 'உங்கள் பதிவை எளிதாக்குவோம்.',
      subtitle: 'இந்தியாவின் முதல் முழு டிஜிட்டல் மக்கள் தொகை கணக்கெடுப்புக்கு வரவேற்கிறோம். இரண்டு கட்டங்களை அறிந்து உங்கள் மாநிலத்தில் சரியான நேரத்தில் சுயமாக பதிவு செய்யுங்கள்.',
      startCta: 'வழிகாட்டியைத் தொடங்கு',
      askCta: 'கணக்கெடுப்பு AI உடன் பேசு',
      guidedDemoCta: '✨ செயல்விளக்கத்தை தொடங்கு',
      privacyNotice: '🔒 இங்கு OTP, ஆதார் எண், வங்கி விவரங்கள் அல்லது கட்டணம் தேவையில்லை.',
      stat1Val: '2 கட்டங்கள்',
      stat1Label: 'வீட்டு வசதி (2026) & மக்கள் தொகை (2027)',
      stat2Val: '100% டிஜிட்டல்',
      stat2Label: 'சுய பதிவு மற்றும் மின்னணு டேப்லெட்',
      stat3Val: '36 மாநிலங்கள்/UTs',
      stat3Label: 'நாடு முழுவதும் உள்ள அனைத்து மாவட்டங்களும்',
      stat4Val: '5 மொழிகள்',
      stat4Label: 'English, हिन्दी, मराठी, தமிழ், বাংলা',
    },
    features: {
      askGuideTitle: 'கணக்கெடுப்பு AI வழிகாட்டி',
      askGuideDesc: 'இரண்டு கட்டங்களின் வேறுபாடுகள் மற்றும் சுய-பதிவு முறைகளை தமிழில் தெரிந்து கொள்ளுங்கள்.',
      askGuideTag: 'AI உதவி மையம்',
      timelineTitle: 'மாநில அட்டவணை & சரிபார்ப்புப் பட்டியல்',
      timelineDesc: 'உங்கள் மாநிலத்திற்கான சுய-பதிவு தேதி மற்றும் கணக்கெடுப்பாளர் வருகை அட்டவணையை பாருங்கள்.',
      timelineTag: '36 மாநிலங்கள் & யூனியன் பிரதேசங்கள்',
      mythCheckerTitle: 'வதந்தி & தகவல் சரிபார்ப்பு',
      mythCheckerDesc: 'வாட்ஸ்அப் போலி செய்திகள் மற்றும் மோசடிகளில் இருந்து பாதுகாப்பாக இருங்கள்.',
      mythCheckerTag: 'வதந்தி முறியடிப்பு',
      censusLensTitle: 'மக்கள் தொகை லென்ஸ்',
      censusLensDesc: 'கணக்கெடுப்பு புள்ளிவிவரங்கள் பள்ளிகள், மருத்துவமனைகள் மற்றும் சாலைகளை எவ்வாறு திட்டமிடுகின்றன என்பதை அறியுங்கள்.',
      censusLensTag: 'தரவு ஆய்வு',
      openSection: 'பகுதியைத் திறக்கவும்',
    },
    timeline: {
      architectureTag: 'கட்டமைப்பு',
      heading: 'மக்கள் தொகை கணக்கெடுப்பு 2027 எவ்வாறு செயல்படுகிறது?',
      subheading: '140 கோடி மக்களுக்கான வெளிப்படையான இரண்டு கட்ட டிஜிட்டல் முறை.',
      firstStage: 'முதல் கட்டம்',
      phase1Title: 'கட்டம் 1: வீடுகள் பட்டியல் & வீட்டு வசதி கணக்கெடுப்பு',
      phase1Dates: 'ஏப்ரல் முதல் செப்டம்பர் 2026',
      phase1Desc: 'வீட்டின் கட்டமைப்பு, குடிநீர் வசதி, கழிப்பறை, மின்சாரம், சமையல் எரிவாயு மற்றும் குடும்ப சொத்துக்கள் பற்றிய விவரங்கள்.',
      phase1Collects: 'கட்டம் 1-ல் என்ன விவரங்கள் சேகரிக்கப்படும்:',
      phase1Items: [
        'வீட்டின் கட்டுமான பொருட்கள் (சுவர், கூரை வகை)',
        'குடிநீர் ஆதாரம் மற்றும் இருப்பிடத்தில் கிடைக்கும் வசதி',
        'கழிப்பறை வசதி மற்றும் கழிவுநீர் வெளியேற்றம்',
        'மின்சாரம் மற்றும் வெளிச்சத்திற்கான ஆதாரம்',
        'சமையல் எரிபொருள் (LPG / PNG / விறகு)',
        'குடும்ப சொத்துக்கள் (வானொலி, டிவி, வாகனம்)',
      ],
      phase1Footnote: '* கணக்கெடுப்பாளர் வருகைக்கு 15 நாட்களுக்கு முன் சுய-பதிவு தொடங்குகிறது.',
      secondStage: 'இரண்டாம் கட்டம்',
      phase2Title: 'கட்டம் 2: மக்கள் தொகை கணக்கெடுப்பு',
      phase2Dates: 'பிப்ரவரி 2027',
      phase2Desc: 'தனிநபர் விவரங்கள்: வயது, கல்வி, வேலை, மதம், திருமண நிலை மற்றும் தாய்மொழி.',
      phase2Collects: 'கட்டம் 2-ல் என்ன விவரங்கள் சேகரிக்கப்படும்:',
      phase2Items: [
        'குடும்ப உறுப்பினர்களின் முழு பட்டியல்',
        'வயது, பாலினம், பிறந்த தேதி மற்றும் திருமண நிலை',
        'மதம், பட்டியல் இனம் / பழங்குடியினர் விவரம்',
        'கல்வி தகுதி மற்றும் எழுத்தறிவு',
        'தொழில் மற்றும் பொருளாதார நடவடிக்கைகள்',
        'தாய்மொழி மற்றும் தெரிந்த பிற மொழிகள்',
      ],
      phase2Footnote: '* குறிப்பிட்ட தேதியில் இந்தியாவில் வசிக்கும் அனைத்து மக்களையும் உள்ளடக்கும்.',
      snowBoundTag: 'மலைப்பகுதி சிறப்பு அட்டவணை',
      snowBoundTitle: 'பனிப்பொழிவு பகுதிகளுக்கான சிறப்பு அட்டவணை',
      snowBoundDates: 'செப்டம்பர் 2026',
      snowBoundDesc: 'லடாக் மற்றும் ஜம்மு-காஷ்மீர், இமாச்சல், உத்தரகாண்டின் மலைப்பகுதிகளுக்கு செப்டம்பர் 2026 நிர்ணயிக்கப்பட்டுள்ளது.',
      snowBoundWhyTitle: 'தனி அட்டவணை ஏன்?',
      snowBoundWhyDesc: 'நவம்பர் முதல் கடுமையான பனிப்பொழிவால் சாலைகள் மூடப்படுவதால் செப்டம்பரில் இப்பணிகள் முடிக்கப்படுகின்றன.',
      diffTableTitle: 'கட்டம் 1 மற்றும் கட்டம் 2: முக்கிய வேறுபாடுகள்',
      diffTableSub: 'எந்த விவரம் எந்தக் கட்டத்தில் சேகரிக்கப்படுகிறது என்பதை அறியுங்கள்',
      viewMyStateBtn: 'என் மாநில அட்டவணையை பார்க்கவும்',
      diffFeatureHeader: 'அம்சம்',
      diffFocusRow: ['முக்கிய நோக்கம்', 'வீட்டின் கட்டமைப்பு மற்றும் வீட்டு வசதிகள்', 'தனிநபர் விவரங்கள் மற்றும் வேலைவாய்ப்பு'],
      diffTimelineRow: ['கால அளவு', 'ஏப்ரல் - செப்டம்பர் 2026 (மாநில சுழற்சி)', 'பிப்ரவரி 2027 (நாடு முழுவதும் ஒரே நேரத்தில்)'],
      diffUnitRow: ['கணக்கீட்டு அலகு', 'வீடுகள் மற்றும் குடியிருப்பு வளாகம்', 'ஒவ்வொரு தனிநபர் குடிமகன்'],
      diffSelfEnumRow: ['டிஜிட்டல் சுய பதிவு', 'உள்ளது (வருகைக்கு 15 நாட்கள் முன்)', 'பிப்ரவரி 2027-க்கு முன் உள்ளது'],
      stateSelectorLabel: 'உங்கள் மாநிலம் அல்லது யூனியன் பிரதேசத்தை தேர்வு செய்யவும்:',
      stateSelectorPlaceholder: 'மாநிலத்தைத் தேடுங்கள்...',
      statusBadge: 'அட்டவணை நிலை',
      selfEnumWindow: 'சுய கணக்கெடுப்பு காலம்',
      selfEnumSub: 'censusindia.gov.in தளத்தில் முன்கூட்டியே பூர்த்தி செய்யலாம்.',
      enumeratorVisit: 'கணக்கெடுப்பாளர் வருகை',
      enumeratorSub: 'அதிகாரப்பூர்வ கணக்கெடுப்பாளர் டேப்லெட்டில் சரிபார்ப்பார்.',
      phase2Ref: 'கட்டம் 2 (மக்கள் தொகை கணக்கெடுப்பு)',
      checkOfficialSchedule: 'அதிகாரப்பூர்வ அட்டவணையை பார்க்கவும்',
      notifiedSeedNote: 'அறிவிக்கப்பட்ட 15 நாள் டிஜிட்டல் சுய கணக்கெடுப்புக்குப் பிறகு முதல் கட்ட களப்பணிகள் தொடங்கின.',
      operationalDatesNote: 'துல்லியமான தேதிகள் மாநில கணக்கெடுப்பு இயக்குநரகத்தால் அறிவிக்கப்படும். அதிகாரப்பூர்வ அறிவிப்பை பார்க்கவும்.',
      checklistTitle: 'சுய கணக்கெடுப்புக்கு என்ன தேவை?',
      checklistSub: 'ஆன்லைன் பதிவுக்கு முன் உங்கள் தயார்நிலையை சரிபார்க்கவும்.',
      checklistReady: 'தயார்',
      checklistItem1: 'அதிகாரப்பூர்வ தளத்தில் லாகின் செய்ய செயலில் உள்ள மொபைல் எண்.',
      checklistItem1Sub: 'லாகின் செய்ய ஒருமுறை OTP பெற மட்டுமே இது பயன்படுகிறது.',
      checklistItem2: 'வீட்டின் அடிப்படை தகவல்கள் (சுவர்/கூரை வகை, குடிநீர் ஆதாரம், கழிப்பறை வசதி).',
      checklistItem2Sub: 'வீட்டு வசதிகள் மற்றும் எரிபொருள் பற்றிய பொதுவான தகவல்கள்.',
      checklistItem3: 'விவரங்களை சரிபார்க்க சுமார் 15 நிமிடங்கள் நேரம்.',
      checklistItem3Sub: 'விவரங்களை பதிவு செய்ய 15 நிமிடங்கள் அமைதியான நேரம்.',
      checklistItem4: 'எந்த ஆவணங்களையும் பதிவேற்ற தேவையில்லை.',
      checklistItem4Sub: 'எந்த ஆவணங்களும் அல்லது வங்கி புத்தகமும் தேவையில்லை.',
      seIdGoldenRule: 'SE ID தங்க விதி',
      seIdCrucialTag: 'முக்கிய படி',
      seIdNote: 'முக்கியம்: சமர்ப்பித்த பின் கிடைக்கும் SE ID ஐ கணக்கெடுப்பாளர் வரும்போது காட்டினால் 1 நிமிடத்தில் சரிபார்ப்பு முடிந்துவிடும்!',
    },
    simulator: {
      tag: 'சுய பதிவு செயல்முறை',
      heading: 'டிஜிட்டல் சுய கணக்கெடுப்பில் என்ன நடக்கும்?',
      subheading: '4 எளிய படிகளில் வீட்டிலிருந்தே பாதுகாப்பாக கணக்கெடுப்பை முடிக்கலாம்.',
      stepOf: 'படி',
      citizenTip: 'பயனுள்ள குறிப்பு',
      prevStep: '← முந்தைய படி',
      nextStep: 'அடுத்த படி',
      readyBadge: 'கணக்கெடுப்பு 2027-க்கு தயார்!',
      demoArtifactTag: 'மாதிரி ரசீது',
      sampleIdTitle: 'மாதிரி Self-Enumeration ID (SE ID)',
      sampleIdSub: 'விண்ணப்பித்த பின் இந்த வடிவில் ரசீது கிடைக்கும்.',
      officialAckLabel: 'அதிகாரப்பூர்வ சுய பதிவு ரசீது',
      readyToShareLabel: 'நிலை: கணக்கெடுப்பாளரிடம் காட்ட தயார்',
      copySampleBtn: 'மாதிரி SE ID ஐ நகலெடு',
      simulateBtn: '✨ மாதிரி SE ID ஐ உருவாக்கி பார்',
      disclaimer: '* விளக்க மாதிரி மட்டுமே. உண்மையான SE ID censusindia.gov.in மூலம் மட்டுமே வழங்கப்படும்.',
      steps: [
        {
          title: 'அதிகாரப்பூர்வ தளத்தில் நுழையவும்',
          subtitle: 'மொபைல் எண் மூலம்',
          desc: 'உங்கள் மாநில சுய பதிவு காலத்தில் censusindia.gov.in தளத்தில் மொபைல் OTP மூலம் நுழையவும்.',
          tip: 'கடவுச்சொல் அல்லது ஆதார் எண் தேவையில்லை.',
        },
        {
          title: 'கேள்விகளுக்கு பதிலளிக்கவும்',
          subtitle: 'உங்கள் வசதிக்கேற்ப (~15 நிமிடங்கள்)',
          desc: 'வீட்டின் நிலை, குடிநீர், கழிப்பறை, மின்சாரம், சமையல் எரிவாயு விவரங்களை உள்ளிடவும்.',
          tip: 'சேமித்து வைத்து எப்போது வேண்டுமானாலும் தொடரலாம்.',
        },
        {
          title: 'SE ID ஐ பெறவும்',
          subtitle: 'பதிவு எண் & QR குறியீடு',
          desc: 'சமர்ப்பித்தவுடன் தனித்துவமான SE ID மற்றும் SMS ரசீது திரையில் தோன்றும்.',
          tip: 'இந்த SMS அல்லது ரசீதை சேமித்து வைக்கவும்.',
        },
        {
          title: 'கணக்கெடுப்பாளரிடம் காட்டவும்',
          subtitle: '1 நிமிட விரைவு சரிபார்ப்பு',
          desc: 'கணக்கெடுப்பாளர் வரும்போது இந்த SE ID ஐ காட்டினால் டேப்லெட்டில் நொடிகளில் பதிவை முடிப்பார்கள்.',
          tip: 'மீண்டும் எந்த கேள்விக்கும் பதிலளிக்க தேவையில்லை!',
        },
      ],
    },
    chat: {
      tag: 'சரிபார்க்கப்பட்ட AI வழிகாட்டி',
      heading: 'கணக்கெடுப்பு வழிகாட்டி AI (GintiSaathi)',
      subheading: 'டிஜிட்டல் மக்கள் தொகை கணக்கெடுப்பு பற்றிய அனைத்து கேள்விகளுக்கும் உடனடி பதில்.',
      guideName: 'கணக்கெடுப்பு வழிகாட்டி',
      guideSub: 'தனியுரிமை காவலன் • பன்மொழி ஜெமினி AI',
      onlineBadge: 'நேரலை',
      inputPlaceholder: 'கணக்கெடுப்பு 2027 பற்றி எது வேண்டுமானாலும் கேளுங்கள்...',
      sendBtn: 'கேள்',
      disclaimer: 'AI வழிகாட்டி — முக்கியமான விவரங்களை censusindia.gov.in தளத்தில் சரிபார்க்கவும்.',
      suggestedHeading: 'பரிந்துரைக்கப்பட்ட கேள்விகள்:',
      prompts: [
        'இரண்டு கட்டங்களுக்கு என்ன வித்தியாசம்?',
        'நான் தமிழில் பூர்த்தி செய்யலாமா?',
        'சுய கணக்கெடுப்பு முடித்த பின் என்ன செய்ய வேண்டும்?',
        'இந்த வாட்ஸ்அப் செய்தி உண்மையா?',
      ],
      clearChat: 'அழித்து மீண்டும் தொடங்கு',
      welcomeMsg: '🇮🇳 **கணக்கெடுப்பு வழிகாட்டி AI-க்கு வரவேற்கிறோம்!**\n\nநான் **மக்கள் தொகை கணக்கெடுப்பு 2027** வழிகாட்டி.\n\nநீங்கள் கேட்கலாம்:\n• கட்டம் 1 மற்றும் கட்டம் 2 வேறுபாடுகள்\n• ஆன்லைன் சுய-பதிவு மற்றும் SE ID பெறும் முறை\n• மொழி மற்றும் மாநில அட்டவணை விவரங்கள்\n\n*(குறிப்பு: நான் ஆதார், OTP அல்லது வங்கி விவரங்களை கேட்க மாட்டேன்).*',
      resetMsg: '🇮🇳 **அரட்டை மீட்டமைக்கப்பட்டது.** உங்கள் மொழியில் உதவ தயாராக உள்ளேன்!',
      typingMsg: 'பதில் தயாராகிறது...',
      emptyChatTitle: 'கணக்கெடுப்பு 2027 பற்றி கேளுங்கள்',
      emptyChatDesc: 'மேலே உள்ள கேள்வியை தேர்வு செய்யவும் அல்லது உங்கள் கேள்வியை தட்டச்சு செய்யவும்.',
      privacyRefusalAlert: '⚠️ பாதுகாப்பு விதி: ஆதார் எண், OTP அல்லது கடவுச்சொல்லை பகிர வேண்டாம்.',
    },
    myth: {
      tag: 'வதந்தி சரிபார்ப்பு',
      heading: 'மக்கள் தொகை கணக்கெடுப்பு வதந்தி சரிபார்ப்பு',
      subheading: 'போலி செய்திகள், தவறான தகவல்கள் மற்றும் ஆன்லைன் மோசடிகளில் இருந்து தப்பிக்கவும்.',
      inputLabel: 'சந்தேகத்திற்கிடமான செய்தியை இங்கு ஒட்டவும்:',
      inputPlaceholder: 'சந்தேகத்திற்கிடமான செய்தி அல்லது தகவலை இங்கு ஒட்டவும்...',
      checkBtn: 'சரிபார்',
      checkingBtn: 'அரசு அறிவிப்புகளுடன் சரிபார்க்கிறது...',
      disclaimer: 'அரசாங்க விதிமுறைகளின் அடிப்படையில் தகவல்கள் சரிபார்க்கப்படுகின்றன.',
      sampleHeading: 'அல்லது பொதுவான வதந்திகளில் ஒன்றை தேர்வு செய்து சோதிக்கவும்:',
      sampleSub: 'சரிபார்க்க கிளிக் செய்யவும்',
      examinedClaim: 'ஆய்வு செய்யப்பட்ட தகவல்:',
      verdictLabel: 'சரிபார்ப்பு முடிவு',
      whyLabel: 'காரணம் என்ன?',
      safeNextStepLabel: 'பாதுகாப்பான அடுத்த கட்ட நடவடிக்கை',
      safetyWarning: 'அதிமுக்கிய எச்சரிக்கை: இந்திய மக்கள் தொகை கணக்கெடுப்பில் வங்கி கடவுச்சொல், OTP, ஆதார் எண் அல்லது பணம் ஒருபோதும் கேட்கப்படாது.',
      viewVerification: 'சரிபார்ப்பைப் பார்க்கவும்',
      emptyStateTitle: 'செய்தி எதுவும் உள்ளிடப்படவில்லை',
      emptyStateDesc: 'மேலே செய்தியை ஒட்டவும் அல்லது கீழே உள்ள வதந்தியை தேர்வு செய்யவும்.',
    },
    lens: {
      tag: 'தரவு ஆய்வு மையம்',
      heading: 'மக்கள் தொகை லென்ஸ்: தரவு ஆய்வு',
      subheading: 'கணக்கெடுப்பு தரவுகள் நாட்டின் வளர்ச்சிக்கு எவ்வாறு உதவுகின்றன என்பதை புரிந்து கொள்ளுங்கள்.',
      disclaimer: 'விளக்க மாதிரி தரவு — அதிகாரப்பூர்வ Census 2027 முடிவுகள் அல்ல.',
      selectState: 'மாநிலத்தைத் தேர்ந்தெடுக்கவும்:',
      selectCategory: 'அளவீட்டைத் தேர்ந்தெடுக்கவும்:',
      comparingWith: 'தேசிய சராசரி மதிப்பீட்டுடன் ஒப்பீடு.',
      dynamicInsightTitle: 'உள்ளூர் தரவுப் பார்வை',
      civicUseTitle: 'இந்தத் தரவு எங்கு பயன்படுகிறது:',
      nationalAvg: 'தேசிய சராசரி',
      primaryIndicator: 'முதன்மைக் குறியீடு',
      breakdownTitle: 'பிரிவு வாரியான விவரம்:',
      footnote: '* விளக்க மாதிரி தரவு — அதிகாரப்பூர்வ Census 2027 முடிவுகள் அல்ல. திட்டமிடல் தேவைகளை விளக்க உருவாக்கப்பட்ட தரவு.',
      superpowersHeading: 'கணக்கெடுப்பு ஏன் முக்கியம்: 4 முக்கிய பலன்கள்',
      superpowerCards: [
        {
          title: 'பள்ளிகள் & அங்கன்வாடி திட்டமிடல்',
          desc: 'குழந்தைகளின் துல்லியமான எண்ணிக்கையைக் கொண்டு புதிய தொடக்கப் பள்ளிகள் மற்றும் மதிய உணவுத் திட்டங்கள் ஒதுக்கப்படுகின்றன.',
        },
        {
          title: 'மருத்துவமனை மற்றும் சுகாதார வசதிகள்',
          desc: 'வயது விவரங்களின் அடிப்படையில் ஆரம்ப சுகாதார நிலையங்கள் (PHC) மற்றும் ஆம்புலன்ஸ் சேவைகள் திட்டமிடப்படுகின்றன.',
        },
        {
          title: 'போக்குவரத்து & சாலை வசதிகள்',
          desc: 'மக்களின் பயணத் தேவைகளுக்கேற்ப மெட்ரோ மற்றும் பேருந்து வழித்தடங்கள் அமைக்கப்படுகின்றன.',
        },
        {
          title: 'அரசு நலத்திட்டங்கள்',
          desc: 'குடிநீர் மற்றும் வீட்டு வசதி தேவைப்படும் ஏழை குடும்பங்களுக்கு அரசு திட்டங்கள் நேரடியாக சென்றடைகின்றன.',
        },
      ],
    },
    privacy: {
      heading: 'தனியுரிமை மற்றும் பாதுகாப்பு வழிகாட்டுதல்',
      subheading: 'GintiSaathi குடிமக்களின் தரவுப் பாதுகாப்பிற்கு முழு உத்தரவாதம் அளிக்கிறது.',
      point1Title: 'இந்தத் தளம் உங்கள் கணக்கெடுப்புத் தகவலை சேமிக்காது',
      point1Desc: 'இது பொதுமக்களுக்கான தகவல் மற்றும் விழிப்புணர்வு வழிகாட்டி மட்டுமே.',
      point2Title: 'AI அரட்டையில் தனிப்பட்ட விவரங்களை உள்ளிட வேண்டாம்',
      point2Desc: 'ஆதார் எண், பெயர் அல்லது ரகசிய குடும்ப தகவல்களை உள்ளிட வேண்டாம்.',
      point3Title: 'OTP அல்லது வங்கி விவரங்களை பகிர வேண்டாம்',
      point3Desc: 'அதிகாரப்பூர்வ கணக்கெடுப்பாளர்கள் வங்கி தகவல்களையோ கட்டணத்தையோ கேட்க மாட்டார்கள்.',
      point4Title: 'அதிகாரப்பூர்வ தளத்தில் மட்டும் இறுதிப் பதிவைச் செய்யுங்கள்',
      point4Desc: 'அனைத்து சுய பதிவுகளும் censusindia.gov.in தளத்தில் மட்டுமே செல்லுபடியாகும்.',
      enumeratorTitle: 'நேரில் வரும் கணக்கெடுப்பாளரை எவ்வாறு கண்டறிவது:',
      enumeratorPoints: [
        { isGood: true, text: 'அவர்களிடம் அரசு வழங்கிய அடையாள அட்டை (ID Card) இருக்கும்.' },
        { isGood: true, text: 'அவர்கள் கணக்கெடுப்பு செயலி உள்ள அதிகாரப்பூர்வ டேப்லெட்டை பயன்படுத்துவார்கள்.' },
        { isGood: false, text: 'அவர்கள் வங்கி கணக்கு அல்லது பணத்தை ஒருபோதும் கேட்க மாட்டார்கள்.' },
        { isGood: false, text: 'அவர்கள் உங்கள் மொபைல் வங்கி OTP ஐ கேட்க மாட்டார்கள்.' },
      ],
      closeBtn: 'மூடு',
      officialLinkBtn: 'அதிகாரப்பூர்வ இணையதளம் (censusindia.gov.in)',
    },
    footer: {
      desc: 'இந்தியாவின் முதல் முழு டிஜிட்டல் மக்கள் தொகை கணக்கெடுப்பு ஒரு வரலாற்று நிகழ்வு. GintiSaathi குடும்பங்களுக்கு அட்டவணை மற்றும் பாதுகாப்பான பதிவு வழிகாட்டுதலை 5 மொழிகளில் வழங்குகிறது.',
      safetyNoteTitle: 'பாதுகாப்பு குறிப்பு:',
      safetyNoteDesc: 'இந்தத் தளம் ஆதார், OTP அல்லது கட்டணம் வசூலிப்பதில்லை. அரசு அறிவிப்புகளை மட்டும் பின்பற்றவும்.',
      quickNav: 'விரைவு வழிசெலுத்தல்',
      helplinesTitle: 'உதவி எண்கள்',
      officialPortalTitle: 'அதிகாரப்பூர்வ தளம்',
      censusHelpline: 'கணக்கெடுப்பு கட்டணமில்லா எண்',
      cybercrimeHelpline: 'சைபர் கிரைம் உதவி எண்',
      cybercrimeDial: 'அழைக்கவும் 1930 (cybercrime.gov.in)',
      pledgeBtn: 'தனியுரிமை உறுதிமொழி',
      copyright: '© 2026–2027 GintiSaathi. மக்கள் தொகை கணக்கெடுப்பு விழிப்புணர்வுக்காக.',
      zeroRetention: '100% தனியுரிமை • தகவல்கள் சேமிக்கப்படாது',
    },
    common: {
      loading: 'செயலாக்குகிறது...',
      verified: 'அதிகாரப்பூர்வ வடிவம்',
      learnMore: 'மேலும் அறிக',
      copied: 'நகலெடுக்கப்பட்டது!',
      copy: 'நகலெடு',
      demoTag: 'மாதிரி தரவு',
      allRegions: 'அனைத்தும்',
    },
  },
  bn: {
    nav: {
      home: 'নীড়পাতা',
      timeline: 'রাজ্য সময়সূচি',
      askAi: 'গিনতিসাথী AI',
      mythChecker: 'গুজব যাচাইকারী',
      censusLens: 'আদমশুমারি লেন্স',
      privacy: 'সুরক্ষা ও গোপনীয়তা',
      officialPortal: 'অফিসিয়াল পোর্টাল',
      topStrip: 'ভারতের প্রথম সম্পূর্ণ ডিজিটাল আদমশুমারি • আস্থার সাথে পরিবারের প্রস্তুতি নিন',
      noOtpNotice: 'এখানে কোনো OTP বা ব্যাংক তথ্যের প্রয়োজন নেই',
      selectLang: 'ভাষা নির্বাচন করুন',
      floatingAi: 'গিনতিসাথী AI-কে জিজ্ঞাসা করুন',
      guidedTourBtn: '✨ নির্দেশিত ডেমো',
    },
    demoTour: {
      tourBadge: 'নির্দেশিত ডেমো ট্যুর',
      tourTitle: 'হ্যাক্যাথন বিচারকদের জন্য ইন্টারঅ্যাক্টিভ ওয়াকথ্রু',
      stepOf: 'ধাপ',
      step1Title: 'ধাপ ১: রাজ্য সময়সূচি ও চেকলিস্ট',
      step1Desc: 'আপনার রাজ্যের ১৫ দিনের ডিজিটাল উইন্ডো ও প্রস্তুতি চেকলিস্ট দেখুন।',
      step2Title: 'ধাপ ২: গিনতিসাথী AI সহায়ক',
      step2Desc: 'বাংলায় প্রশ্ন জিজ্ঞাসা করুন। নিরাপত্তা ব্যবস্থা আধার ও ওটিপি চাওয়া অবিলম্বে বাতিল করে।',
      step3Title: 'ধাপ ৩: গুজব ও জালিয়াতি যাচাইকারী',
      step3Desc: 'হোয়াটসঅ্যাপ গুজব (ব্যাংক পিন, ওটিপি, বায়োমেট্রিক অ্যাপ) ১-ক্লিকে যাচাই করুন।',
      step4Title: 'ধাপ ৪: আদমশুমারি লেন্স (তথ্য অন্বেষণ)',
      step4Desc: 'আদমশুমারির তথ্য কীভাবে স্কুল, হাসপাতাল ও সড়ক পরিকল্পনায় সাহায্য করে তা দেখুন।',
      nextBtn: 'পরবর্তী বিভাগ →',
      prevBtn: '← পূর্ববর্তী',
      finishBtn: '🎉 ট্যুর সমাপ্ত করুন',
      skipBtn: 'ট্যুর বন্ধ করুন',
    },
    readiness: {
      cardTitle: 'আদমশুমারি ২০২৭ প্রস্তুতি স্কোর (Readiness Score)',
      cardSub: 'ডিজিটাল স্ব-গণনার জন্য ১০০% প্রস্তুত হতে এই ৪টি নাগরিক পদক্ষেপ সম্পন্ন করুন।',
      statusGettingStarted: 'শুরু হচ্ছে',
      statusHalfway: 'অগ্রগতি চলছে',
      statusReady: '১০০% আদমশুমারির জন্য প্রস্তুত!',
      readyDesc: 'আপনার পরিবার ডিজিটাল আদমশুমারি ২০২৭-এর স্ব-গণনার জন্য সম্পূর্ণ প্রস্তুত!',
      check1Title: '১. ভাষা নির্বাচিত হয়েছে',
      check1Sub: 'পোর্টাল ও AI সহায়কের জন্য পছন্দের ভারতীয় ভাষা নির্বাচন করেছেন।',
      check2Title: '২. রাজ্য সময়সূচি দেখা হয়েছে',
      check2Sub: 'আপনার রাজ্যের সময়কাল এবং প্রস্তুতি চেকলিস্ট পরীক্ষা করেছেন।',
      check3Title: '৩. গিনতিসাথী AI-এর পরামর্শ নেওয়া হয়েছে',
      check3Sub: '১ম বনাম ২য় পর্যায় বা SE ID পদ্ধতি নিয়ে প্রশ্ন করেছেন।',
      check4Title: '৪. গুজব যাচাই করা হয়েছে',
      check4Sub: 'গুজব যাচাইকারীতে তথ্য পরীক্ষা করে প্রতারণা প্রতিরোধ শিখেছেন।',
      actionGo: 'বিভাগে যান →',
      resetBtn: 'স্কোর রিসেট করুন',
      badgePercent: 'প্রস্তুত',
    },
    hero: {
      badge: 'নাগরিক প্রস্তুতি নির্দেশিকা • ডিজিটাল আদমশুমারি ২০২৭',
      headlinePart1: 'প্রতিটি পরিবার মূল্যবান।',
      headlinePart2: 'আসুন আপনার গণনা সহজ করি।',
      subtitle: 'ভারতের প্রথম সম্পূর্ণ ডিজিটাল আদমশুমারিতে আপনাকে স্বাগত। দুটি পর্যায় বুঝুন, আপনার রাজ্যের সময়সূচি জানুন এবং বাংলায় সঠিক দিকনির্দেশনা পান।',
      startCta: 'গাইড শুরু করুন',
      askCta: 'গিনতিসাথী AI-কে জিজ্ঞাসা করুন',
      guidedDemoCta: '✨ নির্দেশিত ডেমো শুরু করুন',
      privacyNotice: '🔒 এখানে কোনো OTP, আধার নম্বর, ব্যাংক তথ্য বা ফি প্রয়োজন নেই।',
      stat1Val: '২টি পর্যায়',
      stat1Label: 'গৃহ শুমারি (২০২৬) ও জনসংখ্যা গণনা (২০২৭)',
      stat2Val: '১০০% ডিজিটাল',
      stat2Label: 'অনলাইন স্ব-গণনা ও ডিজিটাল ট্যাবলেট',
      stat3Val: '৩৬ রাজ্য/UTs',
      stat3Label: 'সমগ্র ভারতের প্রতিটি জেলা অন্তর্ভুক্ত',
      stat4Val: '৫টি ভাষা',
      stat4Label: 'English, हिन्दी, मराठी, தமிழ், বাংলা',
    },
    features: {
      askGuideTitle: 'গিনতিসাথী AI নির্দেশিকা',
      askGuideDesc: 'দুটি পর্যায়ের পার্থক্য ও স্ব-গণনার নিয়ম বাংলায় তাৎক্ষণিকভাবে জানুন।',
      askGuideTag: 'ইন্টারেক্টিভ AI গাইড',
      timelineTitle: 'রাজ্য সময়সূচি ও চেকলিস্ট',
      timelineDesc: 'আপনার রাজ্যের স্ব-গণনার সময়কাল ও গণনাকারীর আসার সূচি দেখুন।',
      timelineTag: '৩৬ রাজ্য ও কেন্দ্রশাসিত অঞ্চল',
      mythCheckerTitle: 'গুজব ও বিভ্রান্তি যাচাই',
      mythCheckerDesc: 'হোয়াটসঅ্যাপ ও সোশ্যাল মিডিয়ার ভুয়া দাবি এবং জালিয়াতি থেকে সতর্ক থাকুন।',
      mythCheckerTag: 'গুজব প্রতিরোধ',
      censusLensTitle: 'আদমশুমারি লেন্স',
      censusLensDesc: 'আদমশুমারির তথ্য কীভাবে স্কুল, হাসপাতাল ও সড়ক পরিকাঠামো নির্মাণে সাহায্য করে তা দেখুন।',
      censusLensTag: 'তথ্য বিশ্লেষণ',
      openSection: 'বিভাগ খুলুন',
    },
    timeline: {
      architectureTag: 'কার্যপ্রণালী পরিকাঠামো',
      heading: 'আদমশুমারি ২০২৭ কীভাবে সম্পন্ন হবে?',
      subheading: '১৪০ কোটি নাগরিকের জন্য একটি স্বচ্ছ এবং নিরাপদ দ্বি-পর্যায় ডিজিটাল প্রক্রিয়া।',
      firstStage: 'প্রথম পর্যায়',
      phase1Title: 'পর্যায় ১: ঘর তালিকাভুক্তিকরণ ও গৃহ শুমারি',
      phase1Dates: 'এপ্রিল থেকে সেপ্টেম্বর ২০২৬',
      phase1Desc: 'বাড়ির গঠন, পানীয় জল, শৌচাগার, বিদ্যুৎ, রান্নার জ্বালানি ও গৃহস্থালির সম্পত্তির বিবরণ।',
      phase1Collects: '১ম পর্যায়ে কী তথ্য সংগ্রহ করা হয়:',
      phase1Items: [
        'বাড়ির নির্মাণ সামগ্রী (ছাদ, দেয়াল ও মেঝের ধরন)',
        'পানীয় জলের উৎস এবং পরিসরে প্রাপ্যতা',
        'শৌচাগার সুবিধা এবং নিষ্কাশন ব্যবস্থা',
        'বিদ্যুৎ ও আলোর প্রধান উৎস',
        'রান্নার জ্বালানি (এলপিজি / পিএনজি / বায়োমাস)',
        'গৃহস্থালির সম্পত্তি (রেডিও, টিভি, ইন্টারনেট, গাড়ি)',
      ],
      phase1Footnote: '* গণনাকারীর পরিদর্শনের ১৫ দিন পূর্বে অনলাইন স্ব-গণনা শুরু হয়।',
      secondStage: 'দ্বিতীয় পর্যায়',
      phase2Title: 'পর্যায় ২: জনসংখ্যা গণনা',
      phase2Dates: 'ফেব্রুয়ারি ২০২৭',
      phase2Desc: 'ব্যক্তিগত তথ্য: বয়স, শিক্ষাগত যোগ্যতা, পেশা, ধর্ম, বৈবাহিক অবস্থা ও মাতৃভাষা।',
      phase2Collects: '২য় পর্যায়ে কী তথ্য সংগ্রহ করা হয়:',
      phase2Items: [
        'পরিবারের সকল সদস্যের পূর্ণ তালিকা',
        'বয়স, লিঙ্গ, জন্মতারিখ ও বৈবাহিক অবস্থা',
        'ধর্ম, তপশিলি জাতি / উপজাতি পরিচয়',
        'শিক্ষাগত যোগ্যতা ও সাক্ষরতার হার',
        'অর্থনৈতিক কর্মকাণ্ড ও পেশাগত বিবরণ',
        'মাতৃভাষা ও জানা অন্যান্য ভাষা',
      ],
      phase2Footnote: '* নির্দিষ্ট তারিখে ভারতে বসবাসকারী সকল নাগরিকের অন্তর্ভুক্তি।',
      snowBoundTag: 'তুষারপাত অঞ্চলের বিশেষ সময়সূচি',
      snowBoundTitle: 'তুষারপাত অঞ্চলের বিশেষ সময়সূচি',
      snowBoundDates: 'সেপ্টেম্বর ২০২৬',
      snowBoundDesc: 'লাদাখ এবং জম্মু-কাশ্মীর, হিমাচল প্রদেশ ও উত্তরাখণ্ডের প্রত্যন্ত পাহাড়ি অঞ্চলের জন্য সেপ্টেম্বর ২০২৬ নির্ধারিত।',
      snowBoundWhyTitle: 'পৃথক সময়সূচি কেন?',
      snowBoundWhyDesc: 'নভেম্বর থেকে প্রচণ্ড তুষারপাতে রাস্তা বন্ধ হয়ে যাওয়ায় এই দুর্গম অঞ্চলগুলিতে সেপ্টেম্বরেই গণনা সম্পন্ন হয়।',
      diffTableTitle: 'পর্যায় ১ বনাম পর্যায় ২: প্রধান পার্থক্য',
      diffTableSub: 'কোন পর্যায়ে কী তথ্য নেওয়া হয় তা জেনে নিন',
      viewMyStateBtn: 'আমার রাজ্যের সময়সূচি দেখুন',
      diffFeatureHeader: 'বৈশিষ্ট্য',
      diffFocusRow: ['মূল ক্ষেত্র', 'বাড়ির গঠন, সুবিধা ও পারিবারিক সম্পত্তি', 'ব্যক্তিগত পরিচয়, শিক্ষা ও জীবিকা'],
      diffTimelineRow: ['সময়কাল', 'এপ্রিল - সেপ্টেম্বর ২০২৬ (রাজ্যভিত্তিক)', 'ফেব্রুয়ারি ২০২৭ (সমগ্র দেশে একসাথে)'],
      diffUnitRow: ['গণনার একক', 'গৃহ ও পারিবারিক বাসস্থান', 'প্রত্যেক জীবিত নাগরিক'],
      diffSelfEnumRow: ['অনলাইন স্ব-গণনা', 'উপলব্ধ (পরিদর্শনের ১৫ দিন পূর্বে)', 'ফেব্রুয়ারি ২০২৭ গণনার পূর্বে উপলব্ধ'],
      stateSelectorLabel: 'আপনার রাজ্য বা কেন্দ্রশাসিত অঞ্চল নির্বাচন করুন:',
      stateSelectorPlaceholder: 'রাজ্য খুঁজুন...',
      statusBadge: 'সময়সূচি স্থিতি',
      selfEnumWindow: 'স্ব-গণনা (অনলাইন) সময়সীমা',
      selfEnumSub: 'গণনাকারী আসার আগে censusindia.gov.in-এ পূরণ করতে পারেন।',
      enumeratorVisit: 'গণনাকারীর (Enumerator) সরাসরি পরিদর্শন',
      enumeratorSub: 'সরকারি গণনাকারী বাড়ি এসে ট্যাবলেটে যাচাই করবেন।',
      phase2Ref: 'পর্যায় ২ (জনসংখ্যা গণনা)',
      checkOfficialSchedule: 'সরকারি গেজেট সময়সূচি দেখুন',
      notifiedSeedNote: 'বিজ্ঞাপিত ১৫ দিনের ডিজিটাল স্ব-গণনার পর ১ম পর্যায়ের মাঠপর্যায়ের কাজ শুরু হয়।',
      operationalDatesNote: 'নির্দিষ্ট তারিখ রাজ্য আদমশুমারি অধিদপ্তর দ্বারা ঘোষিত হবে। সরকারি বিজ্ঞপ্তি দ্বারা যাচাই করুন।',
      checklistTitle: 'স্ব-গণনার জন্য আমার কী প্রয়োজন হবে?',
      checklistSub: 'অনলাইন স্ব-গণনা শুরুর আগে নিজের প্রস্তুতি দেখে নিন।',
      checklistReady: 'প্রস্তুত',
      checklistItem1: 'সরকারি পোর্টালে লগইন করার জন্য একটি সক্রিয় মোবাইল নম্বর।',
      checklistItem1Sub: 'কেবল লগইন করার জন্য একবারের OTP পাওয়ার জন্য ব্যবহৃত হয়।',
      checklistItem2: 'বাড়ির মৌলিক তথ্য (ছাদ/দেয়ালের ধরন, পানীয় জলের উৎস, শৌচাগার সুবিধা)।',
      checklistItem2Sub: 'জল, বিদ্যুৎ, জ্বালানি ও ঘরের প্রাথমিক তথ্যাবলী।',
      checklistItem3: 'তথ্য পর্যালোচনার জন্য প্রায় ১৫ মিনিট সময়।',
      checklistItem3Sub: 'শান্তভাবে তথ্য পূরণ করার জন্য ১৫ মিনিট সময়।',
      checklistItem4: 'কোনো নথিপত্র আপলোড করার প্রয়োজন নেই।',
      checklistItem4Sub: 'কোনো আধার কার্ড বা ব্যাংকের কাগজ আপলোড করতে হবে না।',
      seIdGoldenRule: 'SE ID-এর সুবর্ণ নিয়ম',
      seIdCrucialTag: 'জরুরি পদক্ষেপ',
      seIdNote: 'গুরুত্বপূর্ণ: জমা দেওয়ার পর আপনি একটি SE ID পাবেন। গণনাকারী এলে শুধু এই SE ID দেখালেই ১ মিনিটে কাজ শেষ!',
    },
    simulator: {
      tag: 'স্ব-গণনা নির্দেশিকা',
      heading: 'ডিজিটাল স্ব-গণনায় কী ঘটে?',
      subheading: 'স্ব-গণনার মাধ্যমে ঘরে বসে ৪টি সহজ ধাপে নিরাপদভাবে তথ্য জমা দেওয়া যায়।',
      stepOf: 'ধাপ',
      citizenTip: 'নাগরিক টিপস',
      prevStep: '← পূর্ববর্তী ধাপ',
      nextStep: 'পরবর্তী ধাপ',
      readyBadge: 'আদমশুমারি ২০২৭-এর জন্য প্রস্তুত!',
      demoArtifactTag: 'ডেমো রশিদ',
      sampleIdTitle: 'নমুনা Self-Enumeration ID (SE ID)',
      sampleIdSub: 'ফর্ম জমা দেওয়ার পর এই ধরনের সরকারি স্বীকৃতি পাওয়া যায়।',
      officialAckLabel: 'অফিসিয়াল স্ব-গণনা স্বীকৃতি রশিদ',
      readyToShareLabel: 'স্থিতি: গণনাকারীকে দেখানোর জন্য প্রস্তুত',
      copySampleBtn: 'নমুনা SE ID কপি করুন',
      simulateBtn: '✨ নমুনা SE ID তৈরি করে দেখুন',
      disclaimer: '* প্রদর্শনের উদ্দেশ্যে। আসল SE ID কেবল censusindia.gov.in থেকেই প্রদান করা হয়।',
      steps: [
        {
          title: 'সরকারি পোর্টালে লগইন করুন',
          subtitle: 'সক্রিয় মোবাইল নম্বরের মাধ্যমে',
          desc: 'আপনার রাজ্যের স্ব-গণনার সময়ে censusindia.gov.in-এ যান এবং মোবাইল OTP দিয়ে লগইন করুন।',
          tip: 'কোনো পাসওয়ার্ড বা আধার নম্বরের দরকার নেই।',
        },
        {
          title: 'প্রশ্নমালা পূরণ করুন',
          subtitle: 'সুবিধাজনক সময়ে (~১৫ মিনিট)',
          desc: 'ঘরের ধরন, পানীয় জল, শৌচাগার, আলো, রান্নার জ্বালানি ও সম্পত্তির তথ্য দিন।',
          tip: 'ড্রাফট সেভ করে যেকোনো সময় আবার পূরণ করতে পারবেন।',
        },
        {
          title: 'SE ID সংগ্রহ করুন',
          subtitle: 'স্ব-গণনা কোড ও QR',
          desc: 'জমা দেওয়ার সাথে সাথে স্ক্রিনে ও SMS-এ একটি নির্দিষ্ট SE ID পাওয়া যাবে।',
          tip: 'এই SMS বা রশিদ যত্ন করে সংরক্ষণ করুন।',
        },
        {
          title: 'গণনাকারীকে দেখান',
          subtitle: '১ মিনিটে দ্রুত যাচাই',
          desc: 'গণনাকারী বাড়ি আসলে শুধু এই SE ID দেখালে তিনি ট্যাবলেটে স্ক্যান করে যাচাই করবেন।',
          tip: 'আপনাকে আর কোনো প্রশ্নের উত্তর দিতে হবে না!',
        },
      ],
    },
    chat: {
      tag: 'যাচাইকৃত AI নাগরিক সহায়ক',
      heading: 'গিনতিসাথী (GintiSaathi) এআই সহায়ক',
      subheading: 'ডিজিটাল আদমশুমারি ও স্ব-গণনা সংক্রান্ত যেকোনো প্রশ্নের সহজ ও নিরাপদ সমাধান।',
      guideName: 'গিনতিসাথী গাইড',
      guideSub: 'গোপনীয়তা রক্ষক • বহুভাষিক জেমিনি AI',
      onlineBadge: 'অনলাইন',
      inputPlaceholder: 'আদমশুমারি ২০২৭ সম্পর্কে যেকোনো প্রশ্ন করুন...',
      sendBtn: 'জানুন',
      disclaimer: 'AI গাইড — চূড়ান্ত তথ্যের জন্য সর্বদা censusindia.gov.in পোর্টাল দেখুন।',
      suggestedHeading: 'প্রস্তাবিত প্রশ্নাবলী:',
      prompts: [
        'দুটি পর্যায়ের মধ্যে পার্থক্য কী?',
        'আমি কি বাংলায় ফর্ম পূরণ করতে পারি?',
        'স্ব-গণনা করার পর আমার কী করা উচিত?',
        'এই হোয়াটসঅ্যাপ মেসেজটি কি সত্যি?',
      ],
      clearChat: 'চ্যাট মুছুন',
      welcomeMsg: '🇮এন **গিনতিসাথী AI-তে আপনাকে স্বাগত!**\n\nআমি **আদমশুমারি ২০২৭**-এ আপনার ডিজিটাল সহায়ক।\n\nআপনি জানতে পারেন:\n• ১ম পর্যায় ও ২য় পর্যায়ের পার্থক্য\n• অনলাইন স্ব-গণনা ও SE ID পাওয়ার নিয়ম\n• ভাষা ও রাজ্য সময়সূচি\n\n*(দ্রষ্টব্য: আমি কখনোই আধার, ওটিপি বা ব্যাংকের তথ্য চাই না)।*',
      resetMsg: '🇮🇳 **চ্যাট পুনরায় শুরু হয়েছে।** আপনার ভাষায় আদমশুমারির তথ্য দিতে আমি প্রস্তুত!',
      typingMsg: 'গিনতিসাথী উত্তর প্রস্তুত করছে...',
      emptyChatTitle: 'আদমশুমারি ২০২৭ সম্পর্কে জিজ্ঞাসা করুন',
      emptyChatDesc: 'উপরের যেকোনো প্রশ্নে ক্লিক করুন বা নিচে বাংলায় আপনার প্রশ্ন লিখুন।',
      privacyRefusalAlert: '⚠️ নিরাপত্তা সতর্কতা: কখনোই আধার নম্বর, ওটিপি বা পাসওয়ার্ড দেবেন না।',
    },
    myth: {
      tag: 'গুজব যাচাই ও সচেতনতা',
      heading: 'আদমশুমারি ২০২৭ গুজব যাচাইকারী',
      subheading: 'ভুয়া খবর, প্রতারণামূলক মেসেজ এবং বিভ্রান্তি থেকে পরিবারকে সুরক্ষিত রাখুন।',
      inputLabel: 'সন্দেহজনক বার্তা বা দাবি এখানে পেস্ট করুন:',
      inputPlaceholder: 'যেকোনো সন্দেহজনক বার্তা বা দাবি এখানে পেস্ট করুন...',
      checkBtn: 'যাচাই করুন',
      checkingBtn: 'গেজেট বিজ্ঞপ্তির সাথে যাচাই চলছে...',
      disclaimer: 'সরকারি আদমশুমারি নির্দেশিকার ভিত্তিতে তথ্য যাচাই করা হয়।',
      sampleHeading: 'অথবা প্রচলিত দাবিগুলির মধ্যে একটি পরীক্ষা করুন:',
      sampleSub: 'যাচাই করতে ক্লিক করুন',
      examinedClaim: 'পরীক্ষিত দাবি / বার্তা:',
      verdictLabel: 'যাচাইয়ের ফলাফল',
      whyLabel: 'কারণ কী?',
      safeNextStepLabel: 'নাগরিকদের জন্য নিরাপদ পদক্ষেপ',
      safetyWarning: 'অতীব জরুরি: ভারতীয় আদমশুমারি কখনো ব্যাংক তথ্য, পিন, ওটিপি বা ফি চায় না।',
      viewVerification: 'যাচাই দেখুন',
      emptyStateTitle: 'এখনো কোনো বার্তা দেওয়া হয়নি',
      emptyStateDesc: 'উপরে সন্দেহজনক বার্তা পেস্ট করুন বা নিচের একটি প্রচলিত গুজব পরীক্ষা করুন।',
    },
    lens: {
      tag: 'তথ্য অন্বেষণ কেন্দ্র',
      heading: 'আদমশুমারি লেন্স: তথ্য অন্বেষণ',
      subheading: 'জানুন কীভাবে আদমশুমারির পরিসংখ্যান দেশের ভবিষ্যৎ পরিকল্পনায় ভূমিকা রাখে।',
      disclaimer: 'প্রদর্শনমূলক নমুনা তথ্য — অফিশিয়াল Census 2027 ফলাফল নয়।',
      selectState: 'রাজ্য নির্বাচন করুন:',
      selectCategory: 'সূচক নির্বাচন করুন:',
      comparingWith: 'জাতীয় গড় অনুমানের সাথে তুলনা।',
      dynamicInsightTitle: 'স্থানীয় অন্তর্দৃষ্টি',
      civicUseTitle: 'এই তথ্যের ব্যবহার কোথায় হয়:',
      nationalAvg: 'জাতীয় গড়',
      primaryIndicator: 'প্রধান সূচক',
      breakdownTitle: 'বিভাগীয় বিভাজন:',
      footnote: '* প্রদর্শনমূলক নমুনা তথ্য — অফিশিয়াল Census 2027 ফলাফল নয়। জনকল্যাণমূলক পরিকল্পনা বোঝাতে তৈরি করা হয়েছে।',
      superpowersHeading: 'আপনার অংশগ্রহণ কেন জরুরি: ৪টি সামাজিক শক্তি',
      superpowerCards: [
        {
          title: 'স্কুল ও অঙ্গনওয়াড়ি পরিকল্পনা',
          desc: 'শিশুদের সঠিক সংখ্যা অনুযায়ী নতুন প্রাথমিক বিদ্যালয় ও মিড-ডে মিলের বরাদ্দ নির্ধারিত হয়।',
        },
        {
          title: 'হাসপাতাল ও স্বাস্থ্যসেবা পরিকাঠামো',
          desc: 'জনসংখ্যার বয়সের তথ্যের ভিত্তিতে প্রাথমিক স্বাস্থ্যকেন্দ্র (PHC) ও অ্যাম্বুলেন্স পরিষেবা পরিকল্পনা করা হয়।',
        },
        {
          title: 'গণপরিবহন ও সড়ক সংযোগ',
          desc: 'মানুষের যাতায়াত ও কাজের ধরনের ভিত্তিতে মেট্রো, বাস রুট ও গ্রামীণ পাকা রাস্তা তৈরি হয়।',
        },
        {
          title: 'সরকারি কল্যাণমূলক সুবিধা প্রদান',
          desc: 'পানীয় জল, বাসস্থান ও বিদ্যুৎহীন পিছিয়ে পড়া পরিবারগুলির কাছে সরকারি সহায়তা পৌঁছানো হয়।',
        },
      ],
    },
    privacy: {
      heading: 'গোপনীয়তা ও নিরাপত্তা প্রতিশ্রুতি',
      subheading: 'গিনতিসাথী নাগরিকদের তথ্যের গোপনীয়তা রক্ষায় সম্পূর্ণ অঙ্গীকারবদ্ধ।',
      point1Title: 'এই পোর্টাল আপনার আদমশুমারির তথ্য সংগ্রহ করে না',
      point1Desc: 'এটি কেবল সাধারণ নাগরিকদের সচেতনতা ও সহায়তার জন্য তৈরি একটি মাধ্যম।',
      point2Title: 'AI চ্যাটে কখনোই ব্যক্তিগত তথ্য লিখবেন না',
      point2Desc: 'চ্যাটে আধার নম্বর, ব্যাংকের তথ্য বা গোপন পারিবারিক বিবরণ দেবেন না।',
      point3Title: 'OTP, পাসওয়ার্ড বা ব্যাংক বিবরণ কারো সাথে শেয়ার করবেন না',
      point3Desc: 'আদমশুমারি কর্মকর্তারা কখনোই ব্যাংকিং তথ্য বা অর্থ দাবি করেন না।',
      point4Title: 'চূড়ান্ত ফর্ম কেবল সরকারি পোর্টাল থেকেই জমা দিন',
      point4Desc: 'সমস্ত বৈধ স্ব-গণনা শুধুমাত্র censusindia.gov.in পোর্টালেই সম্পন্ন হয়।',
      enumeratorTitle: 'বাড়ি আসা আসল সরকারি গণনাকারীকে কীভাবে চিনবেন:',
      enumeratorPoints: [
        { isGood: true, text: 'তাদের কাছে ছবি ও কোডযুক্ত সরকারি পরিচয়পত্র (ID) থাকবে।' },
        { isGood: true, text: 'তারা সরকারি আদমশুমারি অ্যাপযুক্ত ট্যাবলেটে কাজ করবেন।' },
        { isGood: false, text: 'তারা কখনো ব্যাংক অ্যাকাউন্ট বা টাকা চাইবেন না।' },
        { isGood: false, text: 'তারা কখনো আপনার মোবাইল ব্যাংকিং OTP চাইবেন না।' },
      ],
      closeBtn: 'বন্ধ করুন',
      officialLinkBtn: 'অফিসিয়াল আদমশুমারি পোর্টাল (censusindia.gov.in)',
    },
    footer: {
      desc: 'ভারতের প্রথম সম্পূর্ণ ডিজিটাল আদমশুমারি একটি ঐতিহাসিক নাগরিক পদক্ষেপ। গিনতিসাথী ৫টি ভাষায় সময়সূচি এবং নিরাপদ স্ব-গণনার সঠিক দিকনির্দেশনা প্রদান করে।',
      safetyNoteTitle: 'নাগরিক সুরক্ষা:',
      safetyNoteDesc: 'এই পোর্টাল কোনো আধার, ওটিপি বা অর্থ সংগ্রহ করে না। সরকারি বিজ্ঞপ্তির তথ্যই চূড়ান্ত।',
      quickNav: 'দ্রুত লিংক',
      helplinesTitle: 'সরকারি হেল্পলাইন',
      officialPortalTitle: 'অফিসিয়াল পোর্টাল',
      censusHelpline: 'আদমশুমারি টোল-ফ্রি হেল্পলাইন',
      cybercrimeHelpline: 'জাতীয় সাইবার ক্রাইম হেল্পলাইন',
      cybercrimeDial: 'ডায়াল করুন ১৯৩০ (cybercrime.gov.in)',
      pledgeBtn: 'নাগরিক গোপনীয়তা প্রতিশ্রুতি',
      copyright: '© ২০২৬–২০২৭ গিনতিসাথী (GintiSaathi). ডিজিটাল আদমশুমারি সচেতনতায় নিবেদিত।',
      zeroRetention: '১০০% গোপনীয়তা • কোনো তথ্য জমা রাখা হয় না',
    },
    common: {
      loading: 'প্রক্রিয়াকরণ চলছে...',
      verified: 'অফিশিয়াল ফরম্যাট',
      learnMore: 'আরও জানুন',
      copied: 'কপি করা হয়েছে!',
      copy: 'কপি করুন',
      demoTag: 'ডেমো ডেটা',
      allRegions: 'সকল',
    },
  },
};
