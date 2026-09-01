import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// API Routes
app.use('/api', routes);

// Serve static frontend build if running in single-server production mode
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      // In dev mode before build
      res.status(404).send('GintiSaathi API Server is running. For UI, open Vite dev server.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`\n=================================================`);
  console.log(`🇮🇳 GintiSaathi Census 2027 Backend Server Running`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🛡️  Gemini Mode: ${process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here' ? 'Live Gemini AI' : 'Deterministic Civic Engine (Mock fallback)'}`);
  console.log(`=================================================\n`);
});
