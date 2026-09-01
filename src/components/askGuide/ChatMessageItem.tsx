import React, { useState } from 'react';
import { ChatMessage } from '../../types/census';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, User, Copy, CheckCheck, Volume2, VolumeX, ShieldAlert } from 'lucide-react';

interface ChatMessageItemProps {
  message: ChatMessage;
}

export const ChatMessageItem: React.FC<ChatMessageItemProps> = ({ message }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = message.content.replace(/[*_#`~]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Simple Markdown Line Parser for bullet points, bold text
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Bold replacer: **text** -> <strong>text</strong>
      const parsedLine = line.split(/(\*\*.*?\*\*)/g).map((chunk, cIdx) => {
        if (chunk.startsWith('**') && chunk.endsWith('**')) {
          return <strong key={cIdx} className="text-white font-bold">{chunk.slice(2, -2)}</strong>;
        }
        return chunk;
      });

      if (line.trim().startsWith('•') || line.trim().startsWith('*')) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-2">
            <span className="text-civic-saffron-400 font-bold">•</span>
            <span>{parsedLine}</span>
          </div>
        );
      }

      if (line.trim().length === 0) {
        return <div key={idx} className="h-2" />;
      }

      return <p key={idx} className="leading-relaxed mb-1">{parsedLine}</p>;
    });
  };

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} animate-in fade-in slide-in-from-bottom-1 duration-200`}>
      {/* Avatar */}
      <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
        isUser
          ? 'bg-gradient-to-br from-civic-blue-600 to-civic-teal-600 text-white'
          : 'bg-gradient-to-br from-civic-saffron-500 to-amber-500 text-navy-950 p-[2px]'
      }`}>
        {isUser ? (
          <User className="w-5 h-5" />
        ) : (
          <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center text-civic-saffron-400">
            <Sparkles className="w-5 h-5" />
          </div>
        )}
      </div>

      {/* Message Bubble */}
      <div className={`max-w-[85%] sm:max-w-[78%] rounded-3xl p-4 sm:p-5 text-xs sm:text-sm shadow-lg ${
        isUser
          ? 'bg-gradient-to-r from-civic-blue-600 to-civic-blue-700 text-white rounded-tr-none'
          : 'bg-navy-900 border border-navy-700/80 text-slate-200 rounded-tl-none'
      }`}>
        <div className="flex items-center justify-between gap-4 mb-2 pb-1 border-b border-white/10 text-[10px] opacity-75">
          <span className="font-bold uppercase tracking-wider">
            {isUser ? 'You' : 'GintiSaathi AI'}
          </span>
          <span>{message.timestamp}</span>
        </div>

        <div className="space-y-1">
          {renderFormattedContent(message.content)}
        </div>

        {/* Action Toolbar for Assistant Response */}
        {!isUser && (
          <div className="flex items-center justify-end gap-2 mt-3 pt-2 border-t border-navy-800/80 text-[11px] text-slate-400">
            {'speechSynthesis' in window && (
              <button
                onClick={handleSpeak}
                className="p-1.5 rounded-lg bg-navy-950 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
                title={isSpeaking ? 'Stop reading' : 'Read aloud'}
              >
                {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-civic-saffron-400" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            )}

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-navy-950 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors"
              title="Copy message"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t.common.copied : t.common.copy}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
