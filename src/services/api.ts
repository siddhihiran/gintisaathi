import { ChatMessage, MythItem } from '../types/census';
import { SupportedLanguage } from '../types/language';
import { SEEDED_MYTHS } from '../data/mythsData';

export interface ChatApiResponse {
  reply: string;
  language: string;
}

export interface MythApiResponse {
  claim: string;
  verdict: 'Supported' | 'Misleading' | 'Needs official verification';
  verdictBadgeClass: string;
  why: string;
  safeNextStep: string;
  isSensitive: boolean;
  language: string;
}

// Client-side fallback if backend API is not responding or in static preview
function getClientFallbackChatReply(query: string, language: SupportedLanguage): string {
  const q = query.toLowerCase();

  // Safety trigger check
  if (q.includes('aadhaar') || q.includes('otp') || q.includes('bank') || q.includes('pin') || q.includes('password') || q.includes('money') || q.includes('fee') || q.includes('आधार') || q.includes('खाता')) {
    switch (language) {
      case 'hi':
        return `⚠️ **सुरक्षा चेतावनी:** जनगणना 2027 पूरी तरह से नि:शुल्क है। कोई भी जनगणना अधिकारी या यह पोर्टल कभी भी आपका आधार नंबर, बैंक खाता विवरण, यूपीआई पिन या ओटीपी नहीं मांगता है। कृपया ऐसी जानकारी किसी के साथ साझा न करें।\n\n📌 **सुरक्षित कदम:** आधिकारिक पोर्टल पर केवल घोषित आवासीय एवं पारिवारिक जानकारी दर्ज करें और अपना SE ID सुरक्षित रखें।`;
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

  // Phase difference
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
  if (q.includes('hindi') || q.includes('language') || q.includes('भाषा') || q.includes('தாய்மொழி') || q.includes('বাংলা')) {
    switch (language) {
      case 'hi':
        return `🇮🇳 **हाँ, बिल्कुल!** जनगणना 2027 का डिजिटल पोर्टल और मोबाइल ऐप हिंदी, मराठी, तमिल, बांग्ला सहित संविधान की सभी 22 आधिकारिक भारतीय भाषाओं में उपलब्ध है। आप अपनी सुविधानुसार भाषा चुन सकते हैं।`;
      case 'mr':
        return `🇮🇳 **होय, नक्कीच!** जनगणना 2027 चे डिजिटल पोर्टल मराठी, हिंदी, इंग्रजीसह सर्व प्रमुख भारतीय भाषांमध्ये उपलब्ध आहे. आपण आपल्या सोयीच्या भाषेत घरबसल्या नोंदणी करू शकता.`;
      case 'ta':
        return `🇮🇳 **ஆம், நிச்சயமாக!** மக்கள் தொகை கணக்கெடுப்பு 2027 போர்டல் தமிழ், இந்தி, ஆங்கிலம் உட்பட அனைத்து முக்கிய இந்திய மொழிகளிலும் கிடைக்கிறது.`;
      case 'bn':
        return `🇮🇳 **হ্যাঁ, নিশ্চয়ই!** আদমশুমারি ২০২৭ ডিজিটাল পোর্টাল বাংলা, হিন্দি, ইংরেজি সহ সমস্ত প্রধান ভারতীয় ভাষায় উপলব্ধ।`;
      default:
        return `🇮🇳 **Yes, absolutely!** The official Census 2027 digital self-enumeration portal supports all 22 scheduled Indian languages, including Hindi, English, Marathi, Tamil, Bengali, Telugu, and more.`;
    }
  }

  // After Self Enumeration / SE ID
  if (q.includes('after') || q.includes('se id') || q.includes('submit') || q.includes('बाद') || q.includes('नंतर') || q.includes('பிறகு') || q.includes('পরে')) {
    switch (language) {
      case 'hi':
        return `✅ **स्व-गणना पूरी करने के बाद:**\n\n1. फॉर्म सबमिट करने पर आपको एक **Self-Enumeration ID (SE ID)** और QR कोड मिलेगा।\n2. इस SE ID का SMS या स्क्रीनशॉट सुरक्षित रखें।\n3. जब प्रगणक (Enumerator) घर आएँ, तो उन्हें यह **SE ID दिखाएं**।\n4. प्रगणक इसे स्कैन करके तुरंत सत्यापन कर लेंगे।`;
      case 'mr':
        return `✅ **स्वयं-नोंदणी पूर्ण केल्यानंतर:**\n\n1. सबमिट केल्यावर मिळणारा **SE ID** जपून ठेवा.\n2. प्रगणक घरी आल्यावर त्यांना फक्त हा **SE ID दाखवा**.\n3. ते टॅब्लेटवर स्कॅन करून पडताळणी पूर्ण करतील.`;
      case 'ta':
        return `✅ **சுய கணக்கெடுப்பு முடித்த பின்:**\n\n1. சமர்ப்பித்த பிறகு கிடைக்கும் **SE ID** ஐ பாதுகாப்பாக வையுங்கள்.\n2. கணக்கெடுப்பாளர் வரும்போது இந்த **SE ID ஐ காட்டுங்கள்**.\n3. அவர்கள் உடனடியாக சரிபார்த்து முடிப்பார்கள்.`;
      case 'bn':
        return `✅ **স্ব-গণনা জমা দেওয়ার পরে:**\n\n1. ফর্ম জমা দেওয়ার পরে প্রাপ্ত **SE ID** সংরক্ষণ করুন।\n2. গণনাকারী বাড়ি আসলে এই **SE ID দেখান**।\n3. তিনি ট্যাবলেটে স্ক্যান করে যাচাই করবেন।`;
      default:
        return `✅ **What to do after completing Self-Enumeration:**\n\n1. **Save your SE ID:** Upon submitting your online questionnaire, you receive a unique **Self-Enumeration ID (SE ID)** and QR code via SMS.\n2. **Keep it ready:** Save the acknowledgment on your phone.\n3. **Show visiting Enumerator:** When the official Census enumerator visits, simply share your SE ID.\n4. **Instant Verification:** The enumerator will scan your SE ID on their handheld device in seconds without re-asking questions.`;
    }
  }

  // Default response
  switch (language) {
    case 'hi':
      return `नमस्ते! मैं आपका जनगणना 2027 साथी हूँ। आप मुझसे दोनों चरणों, डिजिटल स्व-गणना प्रक्रिया, आवश्यक दस्तावेज़ों या राज्य समय-सारणी के बारे में पूछ सकते हैं।\n\n*(कृपया ध्यान दें: सटीक राज्य तिथियों के लिए आधिकारिक अधिसूचना अवश्य देखें।)*`;
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

export async function sendChatMessage(messages: { role: 'user' | 'assistant' | 'system'; content: string }[], language: SupportedLanguage): Promise<string> {
  const latestMessage = messages[messages.length - 1]?.content || '';

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.map(m => ({ role: m.role, content: m.content })),
        language,
      }),
    });

    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }

    const data = await res.json();
    return data.reply || getClientFallbackChatReply(latestMessage, language);
  } catch (err) {
    console.warn('[GintiSaathi API] Using robust local response handler:', err);
    return getClientFallbackChatReply(latestMessage, language);
  }
}

export async function verifyClaim(claim: string, language: SupportedLanguage): Promise<MythApiResponse> {
  try {
    const res = await fetch('/api/myth-check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ claim, language }),
    });

    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('[GintiSaathi Myth Check] Using local rule engine fallback:', err);
    // Find closest match in seed myths or provide default safe verification
    const matched = SEEDED_MYTHS.find(m => m.claim.toLowerCase().includes(claim.toLowerCase()) || claim.toLowerCase().includes(m.claim.toLowerCase().slice(0, 15)));
    if (matched) {
      return {
        claim: matched.claim,
        verdict: matched.verdict,
        verdictBadgeClass: matched.verdictBadgeClass,
        why: matched.why,
        safeNextStep: matched.safeNextStep,
        isSensitive: matched.isSensitive,
        language,
      };
    }

    const isSensitive = claim.toLowerCase().includes('otp') || claim.toLowerCase().includes('pin') || claim.toLowerCase().includes('bank') || claim.toLowerCase().includes('money');
    return {
      claim,
      verdict: isSensitive ? 'Misleading' : 'Needs official verification',
      verdictBadgeClass: isSensitive ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      why: isSensitive ? 'The Census NEVER collects bank PINs, OTPs, passwords, or payments.' : 'Verify this specific operational item against official Gazette notifications on censusindia.gov.in.',
      safeNextStep: 'Do not share confidential credentials with third parties. Use the official government portal.',
      isSensitive,
      language,
    };
  }
}
