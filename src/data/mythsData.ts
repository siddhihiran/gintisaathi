import { MythItem } from '../types/census';

export const SEEDED_MYTHS: MythItem[] = [
  {
    id: 'myth-bank-pin',
    claim: 'The census asks for my bank account PIN and credit card info.',
    verdict: 'Misleading',
    verdictBadgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    why: 'The Census of India NEVER collects bank account numbers, ATM PINs, UPI details, credit card numbers, or any fee payments. It only collects socio-demographic and housing data.',
    safeNextStep: 'Immediately refuse any request for banking PINs or OTPs. Report suspicious callers or links to the national Cybercrime Helpline at 1930.',
    isSensitive: true,
    category: 'Security'
  },
  {
    id: 'myth-self-enumerate-before',
    claim: 'I can self-enumerate before the enumerator visits.',
    verdict: 'Supported',
    verdictBadgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    why: 'Census 2027 provides an official digital self-enumeration window. Citizens can log in with their mobile number, complete the questionnaire online, and generate an SE ID.',
    safeNextStep: 'Log in only on the official HTTPS portal (censusindia.gov.in) during your state’s self-enumeration window. Save your SE ID for the visiting enumerator.',
    isSensitive: false,
    category: 'Process'
  },
  {
    id: 'myth-whatsapp-otp',
    claim: 'A person on WhatsApp can collect my OTP for Census verification.',
    verdict: 'Misleading',
    verdictBadgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    why: 'Census officials will NEVER send WhatsApp messages demanding you to forward an OTP or click unverified APK links. OTPs are meant only for your direct login on the official portal.',
    safeNextStep: 'Never share SMS OTPs with anyone over WhatsApp or phone calls. Official field verification is done in person using your SE ID on the enumerator\'s authorized government tablet.',
    isSensitive: true,
    category: 'Security'
  },
  {
    id: 'myth-biometrics-app',
    claim: 'Census 2027 will ask for my biometric fingerprint scan on a third-party mobile app.',
    verdict: 'Misleading',
    verdictBadgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    why: 'The Population Census does not collect biometric scans (fingerprints/iris) over personal smartphones or third-party apps. It is a questionnaire-based enumeration.',
    safeNextStep: 'Do not install unverified third-party APKs or applications asking for biometric or device accessibility permissions.',
    isSensitive: true,
    category: 'Security'
  },
  {
    id: 'myth-miss-self-enum',
    claim: 'If I miss the digital self-enumeration window, my household will be excluded from Census 2027.',
    verdict: 'Misleading',
    verdictBadgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    why: 'Self-enumeration is completely optional. If a household does not self-enumerate online, an official enumerator will visit in person to conduct the enumeration with a handheld tablet.',
    safeNextStep: 'No action needed. If you miss the online self-enumeration window, simply welcome the visiting enumerator during their field visit period.',
    isSensitive: false,
    category: 'Process'
  },
  {
    id: 'myth-fee-payment',
    claim: 'Citizens must pay a government processing fee of ₹50 to get a Census SE ID.',
    verdict: 'Misleading',
    verdictBadgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    why: 'Participation in Census 2027 is 100% free of charge. The Government of India never charges any citizen for census enumeration or SE ID generation.',
    safeNextStep: 'Do not pay any money, scan payment QR codes, or transfer UPI funds for Census registration.',
    isSensitive: true,
    category: 'Security'
  }
];
