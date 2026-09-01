import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
let genAI: GoogleGenerativeAI | null = null;

if (apiKey && apiKey !== 'your_gemini_api_key_here' && apiKey.trim().length > 0) {
  genAI = new GoogleGenerativeAI(apiKey);
}

const SYSTEM_INSTRUCTION = `You are "GintiSaathi" (गिनतीसाथी), the dedicated AI Citizen Assistant for Census 2027—India's first fully digital population census.

Your core mission:
1. Provide accurate, clear, and reassuring guidance about Census 2027 to Indian citizens.
2. Explain the 2-Phase structure:
   - Phase 1: Houselisting & Housing Census (April to September 2026) — focuses on housing conditions, amenities, drinking water, lighting, sanitation, cooking fuel, and household assets.
   - Phase 2: Population Enumeration (February 2027) — collects individual demographic, socio-cultural, education, economic, and migration details.
   - Special Schedule Note: Ladakh and notified snow-bound areas of Jammu & Kashmir, Himachal Pradesh, and Uttarakhand are scheduled for September 2026.
3. Guide citizens on Digital Self-Enumeration (SE):
   - Citizens can self-enumerate online via the official Census portal/mobile app before enumerator visits.
   - After submitting self-enumeration, citizens receive a Self-Enumeration ID (SE ID / QR code).
   - Citizens simply share this SE ID with the visiting official enumerator for quick handheld tablet verification.
4. STRICT PRIVACY & CIVIC SAFETY RULES:
   - NEVER ask for, collect, or accept sensitive personal data (Aadhaar number, OTP, bank account details, UPI PIN, passwords, credit card info, or biometric data).
   - If a citizen shares or asks about sharing sensitive financial or Aadhaar details, immediately refuse and warn them that the Census NEVER asks for bank account numbers, PINs, or financial passwords.
   - Explicitly separate confirmed census facts from state-specific dates that may be notified separately by state directorates. Direct citizens to official channels (censusindia.gov.in) for exact notifications.
   - Keep answers short, structured, calm, empathetic, and citizen-friendly.
   - ALWAYS reply in the citizen's requested language.`;

export interface ChatMessage {
  role: 'user' | 'model' | 'assistant';
  content: string;
}

export interface MythCheckResult {
  claim: string;
  verdict: 'Supported' | 'Misleading' | 'Needs official verification';
  verdictBadgeClass: string;
  why: string;
  safeNextStep: string;
  isSensitive: boolean;
  language: string;
}

// Fallback intelligence engine when no GEMINI_API_KEY is configured
export function getMockChatResponse(query: string, language: string = 'en'): string {
  const q = query.toLowerCase();

  // Safety trigger check
  if (q.includes('aadhaar') || q.includes('otp') || q.includes('bank') || q.includes('pin') || q.includes('password') || q.includes('money') || q.includes('fee')) {
    switch (language) {
      case 'hi':
        return `⚠️ **सुरक्षा चेतावनी:** जनगणना 2027 पूरी तरह से नि:शुल्क है। कोई भी जनगणना अधिकारी या यह ऐप कभी भी आपका आधार नंबर, बैंक खाता विवरण, यूपीआई पिन या ओटीपी नहीं मांगता है। कृपया ऐसी जानकारी किसी के साथ साझा न करें।\n\n📌 **सुरक्षित कदम:** आधिकारिक पोर्टल पर केवल घोषित आवासीय एवं पारिवारिक जानकारी दर्ज करें और अपना SE ID सुरक्षित रखें।`;
      case 'mr':
        return `⚠️ **सुरक्षा इशारा:** जनगणना 2027 पूर्णपणे मोफत आहे. कोणताही जनगणना अधिकारी किंवा हे ॲप तुमचा आधार क्रमांक, बँक खाते, ओटीपी किंवा पासवर्ड कधीही मागत नाही. कृपया ही माहिती कोणाशीही शेअर करू नका.\n\n📌 **पुढील सुरक्षित पाऊल:** केवळ अधिकृत पोर्टलवर माहिती नोंदवा व मिळालेला SE ID जपून ठेवा.`;
      case 'ta':
        return `⚠️ **பாதுகாப்பு எச்சரிக்கை:** மக்கள் தொகை கணக்கெடுப்பு 2027 முற்றிலும் இலவசமானது. எந்தவொரு அதிகாரியும் ஆதார் எண், வங்கி கணக்கு, கடவுச்சொல் அல்லது OTP கேட்க மாட்டார்கள். இந்த விவரங்களை ஒருபோதும் பகிர வேண்டாம்.\n\n📌 **பாதுகாப்பான படி:** அதிகாரப்பூர்வ இணையதளத்தில் மட்டும் விவரங்களை பதிவிட்டு உங்கள் SE ID ஐ பாதுகாப்பாக வைத்திருங்கள்.`;
      case 'bn':
        return `⚠️ **নিরাপত্তা সতর্কতা:** আদমশুমারি ২০২৭ সম্পূর্ণ বিনামূল্যে। কোনো আদমশুমারি কর্মকর্তা বা এই অ্যাপ কখনোই আপনার আধার নম্বর, ব্যাংক অ্যাকাউন্ট, পিন বা ওটিপি চাইবে না। দয়া করে এই তথ্য কারো সাথে শেয়ার করবেন না।\n\n📌 **নিরাপদ পদক্ষেপ:** শুধুমাত্র সরকারি পোর্টালে তথ্য দিন এবং আপনার SE ID সুরক্ষিত রাখুন।`;
      default:
        return `⚠️ **Security Alert:** Census 2027 is completely free of charge. No Census official or assistant will EVER ask for your Bank Account details, UPI PIN, passwords, OTPs, or fee payments.\n\n📌 **Safe Next Step:** Never share sensitive financial details or OTPs with anyone claiming to represent the Census. Use only the official portal for self-enumeration.`;
    }
  }

  // Phase difference check
  if (q.includes('phase') || q.includes('difference') || q.includes('चरण') || q.includes('दोन टप्पे') || q.includes('இரண்டு கட்டங்கள்') || q.includes('পর্যায়')) {
    switch (language) {
      case 'hi':
        return `📋 **जनगणना 2027 के 2 चरण:**\n\n1. **चरण 1: मकान सूचीकरण व मकान गणना (अप्रैल - सितम्बर 2026)**\n   • इसमें आपके घर की स्थिति, पीने का पानी, शौचालय, प्रकाश व्यवस्था, रसोई ईंधन और घरेलू सुविधाओं का विवरण दर्ज किया जाता है।\n\n2. **चरण 2: जनसंख्या गणना (फरवरी 2027)**\n   • इसमें परिवार के प्रत्येक सदस्य की जनसांख्यिकी, आयु, धर्म, वैवाहिक स्थिति, शिक्षा, व्यवसाय और मातृभाषा की गणना होती है।\n\n*(नोट: लद्दाख व बर्फबारी वाले क्षेत्रों में विशेष समय-सारणी लागू होगी।)*`;
      case 'mr':
        return `📋 **जनगणना 2027 चे 2 टप्पे:**\n\n1. **टप्पा 1: घरांची यादी व गृहगणना (एप्रिल ते सप्टेंबर 2026)**\n   • घराची स्थिती, पिण्याचे पाणी, स्वच्छतागृह, वीज, स्वयंपाकाचे इंधन व कौटुंबिक सुविधांची नोंद.\n\n2. **टप्पा 2: लोकसंख्या गणना (फेब्रुवारी 2027)**\n   • कुटुंबातील प्रत्येक सदस्याची वैयक्तिक माहिती, वय, शिक्षण, व्यवसाय व मातृभाषा नोंदवली जाईल.`;
      case 'ta':
        return `📋 **மக்கள் தொகை கணக்கெடுப்பு 2027 இன் 2 கட்டங்கள்:**\n\n1. **கட்டம் 1: வீடுகள் பட்டியல் மற்றும் வீட்டு வசதி கணக்கெடுப்பு (ஏப்ரல் - செப்டம்பர் 2026)**\n   • வீட்டின் நிலை, குடிநீர், கழிப்பறை, மின்சாரம், சமையல் எரிவாயு மற்றும் சொத்துக்கள்.\n\n2. **கட்டம் 2: மக்கள் தொகை கணக்கெடுப்பு (பிப்ரவரி 2027)**\n   • குடும்ப உறுப்பினர்களின் வயது, கல்வி, வேலைவாய்ப்பு மற்றும் தாய்மொழி பற்றிய விவரங்கள்.`;
      case 'bn':
        return `📋 **আদমশুমারি ২০২৭-এর দুটি পর্যায়:**\n\n1. **পর্যায় ১: ঘর তালিকাভুক্তিকরণ ও গৃহ শুমারি (এপ্রিল - সেপ্টেম্বর ২০২৬)**\n   • বাড়ির ধরন, পানীয় জল, শৌচাগার, বিদ্যুৎ এবং রান্নার জ্বালানির বিবরণ সংগ্রহ করা হয়।\n\n2. **পর্যায় ২: জনসংখ্যা গণনা (ফেব্রুয়ারি ২০২৭)**\n   • পরিবারের সদস্যদের বয়স, শিক্ষা, জীবিকা ও মাতৃভাষার ব্যক্তিগত বিবরণ নথিভুক্ত হয়।`;
      default:
        return `📋 **The 2 Phases of Census 2027:**\n\n1. **Phase 1: Houselisting & Housing Census (April to September 2026)**\n   • Focuses on dwelling characteristics, living conditions, drinking water sources, sanitation facilities, electricity, cooking fuel, and household assets.\n\n2. **Phase 2: Population Enumeration (February 2027)**\n   • Records individual citizen demographics: age, marital status, religion, educational attainment, economic activity/occupation, and mother tongue.\n\n*(Special Note: Ladakh and notified snow-bound regions are scheduled separately in September 2026).*`;
    }
  }

  // Language / Hindi check
  if (q.includes('hindi') || q.includes('language') || q.includes('भाषा') || q.includes('तमिळ') || q.includes('বাংলা')) {
    switch (language) {
      case 'hi':
        return `🇮🇳 **हाँ, बिल्कुल!** जनगणना 2027 का डिजिटल पोर्टल और मोबाइल ऐप हिंदी, मराठी, तमिल, बांग्ला सहित संविधान की 8वीं अनुसूची की सभी प्रमुख भारतीय भाषाओं में उपलब्ध है। आप अपनी पसंदीदा भाषा में स्व-गणना (Self-Enumeration) पूरा कर सकते हैं।`;
      case 'mr':
        return `🇮🇳 **होय, नक्कीच!** जनगणना 2027 चे डिजिटल पोर्टल मराठी, हिंदी, इंग्रजीसह सर्व प्रमुख भारतीय भाषांमध्ये उपलब्ध आहे. आपण आपल्या सोयीच्या भाषेत घरबसल्या नोंदणी करू शकता.`;
      case 'ta':
        return `🇮🇳 **ஆம், நிச்சயமாக!** மக்கள் தொகை கணக்கெடுப்பு 2027 போர்டல் தமிழ், இந்தி, ஆங்கிலம் உட்பட அனைத்து முக்கிய இந்திய மொழிகளிலும் கிடைக்கிறது. உங்கள் விருப்பமான மொழியில் சுயமாக பூர்த்தி செய்யலாம்.`;
      case 'bn':
        return `🇮🇳 **হ্যাঁ, নিশ্চয়ই!** আদমশুমারি ২০২৭ ডিজিটাল পোর্টাল বাংলা, হিন্দি, ইংরেজি সহ সমস্ত প্রধান ভারতীয় ভাষায় উপলব্ধ। আপনি আপনার পছন্দের ভাষায় স্ব-গণনা করতে পারেন।`;
      default:
        return `🇮🇳 **Yes, absolutely!** The official Census 2027 digital self-enumeration portal and enumerator app support all major 22 scheduled Indian languages, including Hindi, English, Marathi, Tamil, Bengali, Telugu, and more. You can effortlessly select your preferred language when filling out the questionnaire.`;
    }
  }

  // What to do after self-enumeration / SE ID
  if (q.includes('after') || q.includes('se id') || q.includes('submit') || q.includes('बाद') || q.includes('नंतर') || q.includes('பிறகு') || q.includes('পরে')) {
    switch (language) {
      case 'hi':
        return `✅ **स्व-गणना (Self-Enumeration) पूरी करने के बाद क्या करें?**\n\n1. फॉर्म सबमिट करने पर आपको एक **Self-Enumeration ID (SE ID)** और QR कोड मिलेगा।\n2. इस SE ID का स्क्रीनशॉट या SMS सुरक्षित रखें।\n3. जब आधिकारिक जनगणना प्रगणक (Enumerator) आपके घर आएं, तो बस उन्हें यह **SE ID दिखाएं**।\n4. प्रगणक अपने टैबलेट पर इसे स्कैन करके आपकी जानकारी तुरंत सत्यापित कर लेंगे। आपको दोबारा पूरा फॉर्म नहीं भरना पड़ेगा!`;
      case 'mr':
        return `✅ **स्वयं-नोंदणी पूर्ण केल्यानंतर काय करावे?**\n\n1. अर्ज सबमिट केल्यावर तुम्हाला एक **Self-Enumeration ID (SE ID)** आणि QR कोड मिळेल.\n2. हा SE ID किंवा SMS सुरक्षित सेव्ह करा.\n3. जेव्हा प्रगणक (Enumerator) तुमच्या घरी भेट देतील, तेव्हा त्यांना फक्त हा **SE ID दाखवा**.\n4. ते टॅब्लेटवर स्कॅन करून पडताळणी पूर्ण करतील.`;
      case 'ta':
        return `✅ **சுய கணக்கெடுப்பு முடித்த பின் என்ன செய்ய வேண்டும்?**\n\n1. விண்ணப்பத்தை சமர்ப்பித்த பிறகு உங்களுக்கு **SE ID (Self-Enumeration ID)** மற்றும் QR குறியீடு வழங்கப்படும்.\n2. இந்த SE ID ஐ பாதுகாப்பாக சேமிக்கவும்.\n3. கணக்கெடுப்பாளர் (Enumerator) உங்கள் வீட்டிற்கு வரும்போது இந்த **SE ID ஐ காட்டவும்**.\n4. அவர்கள் தங்கள் டேப்லெட்டில் சரிபார்த்து பதிவை முடிப்பார்கள்.`;
      case 'bn':
        return `✅ **স্ব-গণনা জমা দেওয়ার পরে কী করবেন?**\n\n1. ফর্ম জমা দেওয়ার পরে আপনি একটি **SE ID (Self-Enumeration ID)** এবং QR কোড পাবেন।\n2. এই SE ID বা SMS যত্ন করে সংরক্ষণ করুন।\n3. যখন সরকারি গণনাকারী (Enumerator) আপনার বাড়ি আসবেন, তখন তাকে শুধু এই **SE ID দেখান**।\n4. তিনি ট্যাবলেটে স্ক্যান করে যাচাই সম্পূর্ণ করবেন।`;
      default:
        return `✅ **What to do after completing Self-Enumeration:**\n\n1. **Save your SE ID:** Upon submitting your online form, you will receive a unique **Self-Enumeration ID (SE ID)** and a QR code via SMS.\n2. **Keep it handy:** Save the acknowledgment PDF or SMS on your phone.\n3. **Show to Enumerator:** When the official Census enumerator visits your residence, simply show them your SE ID.\n4. **Instant Verification:** The enumerator will scan or enter your SE ID on their official handheld device to verify your submission in seconds. You will not need to answer the questionnaire again!`;
    }
  }

  // Default helpful response
  switch (language) {
    case 'hi':
      return `नमस्ते! मैं आपका जनगणना 2027 साथी हूँ। आप मुझसे चरण 1 और चरण 2 के अंतर, डिजिटल स्व-गणना प्रक्रिया, आवश्यक दस्तावेज़ों या राज्य समय-सारणी के बारे में पूछ सकते हैं।\n\n*(कृपया ध्यान दें: सटीक राज्य तिथियों के लिए आधिकारिक अधिसूचना अवश्य देखें।)*`;
    case 'mr':
      return `नमस्कार! मी तुमचा जनगणना 2027 सहाय्यक आहे. आपण मला टप्पे, डिजिटल स्वयं-नोंदणी, आवश्यक माहिती व वेळापत्रकाबद्दल प्रश्न विचारू शकता.\n\n*(टीप: अधिकृत तारखांसाठी सरकारी परिपत्रक तपासा.)*`;
    case 'ta':
      return `வணக்கம்! நான் உங்கள் மக்கள் தொகை கணக்கெடுப்பு 2027 வழிகாட்டி. கணக்கெடுப்பு கட்டங்கள், சுய-பதிவு முறை மற்றும் அட்டவணை பற்றி என்னிடம் கேட்கலாம்.\n\n*(குறிப்பு: துல்லியமான தேதிகளுக்கு அதிகாரப்பூர்வ அறிவிப்பை பார்க்கவும்.)*`;
    case 'bn':
      return `নমস্কার! আমি আদমশুমারি ২০২৭-এ আপনার সহায়ক। আপনি আদমশুমারির পর্যায়, অনলাইন স্ব-গণনা পদ্ধতি বা সময়সূচী সম্পর্কে প্রশ্ন করতে পারেন।\n\n*(দ্রষ্টব্য: নির্দিষ্ট তারিখের জন্য সরকারি বিজ্ঞপ্তি দেখুন।)*`;
    default:
      return `Hello! I am **GintiSaathi**, your Census 2027 guide. I can help you understand the two census phases, how online self-enumeration works, what details you need ready, and how to verify visiting enumerators.\n\n*(Note: Specific state operational dates are notified by respective state directorates. Always check censusindia.gov.in for official notices.)*`;
  }
}

// Fallback myth check dictionary
export function getMockMythCheck(claim: string, language: string = 'en'): MythCheckResult {
  const c = claim.toLowerCase();

  if (c.includes('bank') || c.includes('pin') || c.includes('account') || c.includes('credit') || c.includes('debit') || c.includes('पैसा') || c.includes('खाता')) {
    return {
      claim,
      verdict: 'Misleading',
      verdictBadgeClass: 'bg-civic-rose-500/20 text-rose-300 border-rose-500/40',
      why: 'The Census of India NEVER asks for bank account numbers, ATM PINs, UPI credentials, credit card details, or fee payments. It only collects socio-demographic and housing data.',
      safeNextStep: 'NEVER enter or share banking passwords or PINs with anyone claiming to be a Census official. Report fraud attempts immediately to national cybercrime authorities (1930).',
      isSensitive: true,
      language
    };
  }

  if (c.includes('whatsapp') || c.includes('otp') || c.includes('link') || c.includes('message')) {
    return {
      claim,
      verdict: 'Misleading',
      verdictBadgeClass: 'bg-civic-rose-500/20 text-rose-300 border-rose-500/40',
      why: 'Census officials will NEVER message you on WhatsApp asking you to forward an OTP or click unverified third-party APK/download links.',
      safeNextStep: 'Do not share OTPs with unverified callers or forward them on WhatsApp. Official Self-Enumeration happens only on the official HTTPS portal (censusindia.gov.in).',
      isSensitive: true,
      language
    };
  }

  if (c.includes('self-enumerate') || c.includes('before') || c.includes('visit') || c.includes('online') || c.includes('स्वयं')) {
    return {
      claim,
      verdict: 'Supported',
      verdictBadgeClass: 'bg-civic-emerald-500/20 text-emerald-300 border-emerald-500/40',
      why: 'Yes! For Census 2027, the government provides an official digital self-enumeration window before field enumerator visits. You can fill in your household details online and generate an SE ID.',
      safeNextStep: 'Log in to the official Census 2027 portal using your mobile number during your state\'s notified self-enumeration window. Save your SE ID for the visiting enumerator.',
      isSensitive: false,
      language
    };
  }

  if (c.includes('biometric') || c.includes('fingerprint') || c.includes('iris') || c.includes('बायोमेट्रिक')) {
    return {
      claim,
      verdict: 'Misleading',
      verdictBadgeClass: 'bg-civic-rose-500/20 text-rose-300 border-rose-500/40',
      why: 'Census 2027 collects socio-economic and demographic questionnaire answers, not biometric fingerprint or iris scans on third-party mobile apps.',
      safeNextStep: 'Do not install unauthorized third-party apps requesting fingerprint or biometric scans under the guise of census collection.',
      isSensitive: true,
      language
    };
  }

  // Default generic rumor evaluation
  return {
    claim,
    verdict: 'Needs official verification',
    verdictBadgeClass: 'bg-civic-amber-500/20 text-amber-300 border-amber-500/40',
    why: 'This specific statement requires cross-checking against the latest Gazette notification from the Office of the Registrar General & Census Commissioner, India.',
    safeNextStep: 'Verify claims directly on the official portal at censusindia.gov.in or contact the official toll-free national Census Helpline. Never share private credentials.',
    isSensitive: false,
    language
  };
}

export async function askGeminiChat(messages: ChatMessage[], language: string = 'en'): Promise<string> {
  const latestMessage = messages[messages.length - 1]?.content || '';

  if (!genAI) {
    return getMockChatResponse(latestMessage, language);
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: `${SYSTEM_INSTRUCTION}\n\nIMPORTANT: The user has selected language code "${language}". Always respond in this language accurately and politely.`,
    });

    const chat = model.startChat({
      history: messages.slice(0, -1).map(m => ({
        role: m.role === 'assistant' ? 'model' : m.role,
        parts: [{ text: m.content }]
      }))
    });

    const result = await chat.sendMessage(latestMessage);
    const responseText = result.response.text();
    return responseText || getMockChatResponse(latestMessage, language);
  } catch (err) {
    console.warn('[Gemini API Warning] Falling back to built-in response engine:', err);
    return getMockChatResponse(latestMessage, language);
  }
}

export async function checkClaimWithGemini(claim: string, language: string = 'en'): Promise<MythCheckResult> {
  if (!genAI) {
    return getMockMythCheck(claim, language);
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: `${SYSTEM_INSTRUCTION}
You are a strict Census 2027 Myth & Rumor Checker. Evaluate the user's claim and respond ONLY in valid JSON format with keys:
- verdict: "Supported" | "Misleading" | "Needs official verification"
- why: clear concise explanation in the requested language (${language})
- safeNextStep: safe citizen action in the requested language (${language})
- isSensitive: boolean (true if the claim touches OTP, Bank, Aadhaar, Money, Passwords)

Rules:
- Never validate requests for money, OTPs, Aadhaar, or Bank details. Mark them Misleading immediately.
- Return pure JSON only, no markdown formatting.`,
    });

    const prompt = `Claim to verify for Census 2027: "${claim}"\nTarget Language: ${language}`;
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    
    // Clean JSON markdown wraps if present
    const cleanedJson = text.replace(/^```json/i, '').replace(/^```/, '').replace(/```$/, '').trim();
    const parsed = JSON.parse(cleanedJson);

    let badgeClass = 'bg-civic-amber-500/20 text-amber-300 border-amber-500/40';
    if (parsed.verdict === 'Supported') {
      badgeClass = 'bg-civic-emerald-500/20 text-emerald-300 border-emerald-500/40';
    } else if (parsed.verdict === 'Misleading') {
      badgeClass = 'bg-civic-rose-500/20 text-rose-300 border-rose-500/40';
    }

    return {
      claim,
      verdict: parsed.verdict || 'Needs official verification',
      verdictBadgeClass: badgeClass,
      why: parsed.why || 'Please verify with official Census 2027 publications.',
      safeNextStep: parsed.safeNextStep || 'Check official census portals and never share OTPs.',
      isSensitive: Boolean(parsed.isSensitive),
      language
    };
  } catch (err) {
    console.warn('[Gemini Myth Check Warning] Using local verification logic:', err);
    return getMockMythCheck(claim, language);
  }
}
