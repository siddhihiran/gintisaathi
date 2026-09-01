import { Router, Request, Response } from 'express';
import { askGeminiChat, checkClaimWithGemini, ChatMessage } from './gemini';

const router = Router();

// Health Check
router.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    app: 'GintiSaathi Backend API',
    timestamp: new Date().toISOString(),
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here')
  });
});

// Chat with GintiSaathi AI
router.post('/chat', async (req: Request, res: Response): Promise<void> => {
  try {
    const { messages, language = 'en' } = req.body as { messages?: ChatMessage[]; language?: string };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: 'Invalid messages array provided.' });
      return;
    }

    const reply = await askGeminiChat(messages, language);
    res.json({ reply, language });
  } catch (error) {
    console.error('Error in /api/chat route:', error);
    res.status(500).json({
      error: 'Failed to process chat response.',
      fallback: 'Please check official Census 2027 notifications at censusindia.gov.in.'
    });
  }
});

// Myth & Rumor Checker Route
router.post('/myth-check', async (req: Request, res: Response): Promise<void> => {
  try {
    const { claim, language = 'en' } = req.body as { claim?: string; language?: string };

    if (!claim || typeof claim !== 'string' || claim.trim().length === 0) {
      res.status(400).json({ error: 'Claim string is required.' });
      return;
    }

    const result = await checkClaimWithGemini(claim.trim(), language);
    res.json(result);
  } catch (error) {
    console.error('Error in /api/myth-check route:', error);
    res.status(500).json({
      claim: req.body?.claim || '',
      verdict: 'Needs official verification',
      verdictBadgeClass: 'bg-civic-amber-500/20 text-amber-300 border-amber-500/40',
      why: 'Unable to connect to verification service. Always refer to official Census 2027 channels.',
      safeNextStep: 'Do not share personal details or OTPs with unverified sources.',
      isSensitive: false,
      language: req.body?.language || 'en'
    });
  }
});

export default router;
