# 🇮🇳 GintiSaathi (गिनतीसाथी) — Census 2027 Digital Citizen Guide

> **"Every household counts. Let’s make yours easier."**  
> A civic-tech web application designed to guide Indian citizens through **Census 2027**—India's first fully digital, paperless census.

---

## 🌟 Key Features

1. **How Census 2027 Works (Interactive Visual Timeline)**
   - **Phase 1: Houselisting & Housing Census** (April to September 2026) — Dwelling structures, amenities, drinking water, lighting, sanitation, cooking fuel, and assets.
   - **Phase 2: Population Enumeration** (February 2027) — Individual demographic, educational, economic, and socio-cultural details.
   - **Special Terrain Schedule** — Ladakh and notified snow-bound areas of Jammu & Kashmir, Himachal Pradesh, and Uttarakhand (September 2026).
   - Digital Self-Enumeration 4-step simulator & sample SE ID acknowledgment generator.

2. **My State Timeline & Readiness Checklist**
   - Searchable directory of all **28 States and 8 Union Territories**.
   - Model schedules with seeded early rollout patterns (Andhra Pradesh, Arunachal Pradesh, Haryana, Chandigarh, Madhya Pradesh, Chhattisgarh).
   - "What will I need?" readiness checklist (mobile number, household knowledge, 15 minutes, zero uploads).
   - Direct link to official Gazette notifications at `censusindia.gov.in`.

3. **Ask GintiSaathi (Multilingual AI Assistant)**
   - Powered by the **Gemini API** via secure server-side API route (`POST /api/chat`).
   - Strict civic safety prompt: refuses to collect OTPs, Aadhaar numbers, bank accounts, or passwords.
   - 4 quick-prompt pills:
     - *"What is the difference between the two phases?"*
     - *"Can I fill it in Hindi?"*
     - *"What should I do after self-enumeration?"*
     - *"Is this WhatsApp message true?"*
   - Text-to-speech audio readout, message copying, and instant offline mock fallback.

4. **Census 2027 Myth & Rumor Checker**
   - Fact-checks viral social media rumors and scams in real-time (`POST /api/myth-check`).
   - Distinct verdict badges: **Supported** (Emerald), **Misleading** (Rose), **Needs official verification** (Amber).
   - Actionable citizen guidance (*"Why?"* and *"Safe next step"*).
   - Anti-scam advisories on cybercrime reporting (Helpline `1930`).

5. **Census Lens (Interactive Civic Data Explorer)**
   - Interactive SVG Donut & Bar comparison charts.
   - Filter by State/Region and Demographic Metric (Clean Cooking Fuel, Piped Drinking Water, Digital Access, Pucca Housing, Grid Electricity).
   - Dynamic local insight calculations showing how census data shapes schools, healthcare, and transport.
   - Clearly labeled: *"Illustrative demo data — not official 2027 results."*

6. **5 Indian Languages Supported**
   - English, हिन्दी (Hindi), मराठी (Marathi), தமிழ் (Tamil), বাংলা (Bengali).
   - Dynamic language switcher in the header.

7. **Safety & Privacy Drawer**
   - 4 core civic pledges (No census responses collected, never enter private details into AI, never share OTPs/passwords/Aadhaar, use official portals).
   - Anti-fraud guide to verify genuine Census Enumerators (Government badge, official handheld tablet, no financial questions).

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, Lucide React, Google Fonts (`Plus Jakarta Sans`, `Noto Sans Devanagari`, `Noto Sans Tamil`, `Noto Sans Bengali`).
- **Backend:** Node.js, Express, `@google/generative-ai` (Gemini API server-side route).
- **Authentication & Database (Optional):** Firebase Web SDK with automatic local storage / guest mock fallback (works 100% without any credentials).
- **Hosting Target:** Ready for **Firebase Hosting** (`firebase.json` configured).

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js `v18+` or `v20+` (tested on Node `v26.7.0`)
- npm `v9+` or `v11+`

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd promptwars
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit `.env` to add your Gemini API Key (optional — the app includes comprehensive built-in localized fallback intelligence):
```env
# Gemini API Key from https://aistudio.google.com/
GEMINI_API_KEY=your_gemini_api_key_here

# Backend port
PORT=3001

# Optional Firebase credentials (leave blank for local mock mode)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

### 3. Run Development Server
To launch both the Vite frontend (`http://localhost:5173`) and Express backend (`http://localhost:3001`) concurrently:
```bash
npm run dev
```

You can also run them individually:
- **Frontend only:** `npm run dev:frontend`
- **Backend API only:** `npm run dev:backend`

---

## 📦 Building for Production & Firebase Hosting

### Build the Static Frontend Bundle
```bash
npm run build
```
This produces optimized production assets in the `dist/` directory.

### Test Production Server Locally
```bash
npm start
```
Starts Express on port `3001` serving both the `/api` routes and the static `dist/` bundle.

### Deploy to Firebase Hosting
1. Install the Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in to Firebase:
   ```bash
   firebase login
   ```
3. Initialize or link your Firebase project:
   ```bash
   firebase use --add
   ```
4. Deploy the frontend:
   ```bash
   firebase deploy --only hosting
   ```

The included `firebase.json` is pre-configured with single-page app rewrites and modern security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).

---

## 🛡️ Zero-Data-Leak Privacy Guard

GintiSaathi adheres strictly to national citizen security standards:
- **No Aadhaar Collection:** The portal never requests, processes, or stores 12-digit Aadhaar numbers.
- **No OTP Access:** One-time passwords are strictly between the citizen and the official government portal (`censusindia.gov.in`).
- **No Financial Data:** The Census of India never requires bank accounts, UPI PINs, credit cards, or fee payments.

---

## 📞 Official Contacts & Helplines

- **Official Census Portal:** [https://censusindia.gov.in](https://censusindia.gov.in)
- **Census Toll-Free National Helpline:** `1800-11-2027`
- **National Cybercrime Reporting Portal:** [https://cybercrime.gov.in](https://cybercrime.gov.in) (Dial `1930`)
