import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../../types/census';
import { useLanguage } from '../../context/LanguageContext';
import { sendChatMessage } from '../../services/api';
import { PromptPills } from './PromptPills';
import { ChatMessageItem } from './ChatMessageItem';
import { Sparkles, Send, Trash2, AlertCircle, Bot } from 'lucide-react';

export const ChatInterface: React.FC = () => {
  const { language, t } = useLanguage();
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'msg-welcome',
        role: 'assistant',
        content: t.chat.welcomeMsg,
        timestamp: 'Just now',
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Update welcome message if only 1 message exists when language changes
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [
          {
            id: 'msg-welcome',
            role: 'assistant',
            content: t.chat.welcomeMsg,
            timestamp: 'Just now',
          },
        ];
      }
      return prev;
    });
  }, [language, t.chat.welcomeMsg]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: 'usr-' + Date.now(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputQuery('');
    setIsLoading(true);

    try {
      const allMessages = [...messages, userMessage];
      const reply = await sendChatMessage(allMessages, language);

      const aiMessage: ChatMessage = {
        id: 'ai-' + Date.now(),
        role: 'assistant',
        content: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: 'err-' + Date.now(),
        role: 'assistant',
        content: '⚠️ ' + t.chat.disclaimer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'msg-welcome-reset',
        role: 'assistant',
        content: t.chat.resetMsg,
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-civic-blue-500/10 text-civic-blue-300 text-xs font-bold uppercase tracking-wider border border-civic-blue-500/20">
          <Sparkles className="w-3.5 h-3.5 text-civic-teal-400" />
          <span>{t.chat.tag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.chat.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          {t.chat.subheading}
        </p>
      </div>

      {/* Main Chat Container */}
      <div className="rounded-3xl bg-navy-900/90 border border-navy-700 shadow-2xl overflow-hidden flex flex-col h-[650px]">
        {/* Chat Header Toolbar */}
        <div className="px-6 py-4 bg-navy-950/80 border-b border-navy-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-civic-saffron-500 to-civic-teal-500 p-[2px]">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center text-civic-saffron-400 font-bold text-xs">
                  AI
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy-950" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>{t.chat.guideName}</span>
                <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {t.chat.onlineBadge}
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                {t.chat.guideSub}
              </div>
            </div>
          </div>

          <button
            onClick={handleClearChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-400 hover:text-slate-200 text-xs font-semibold border border-navy-800 transition-colors"
            title="Reset conversation"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.chat.clearChat}</span>
          </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="px-6 py-2 bg-navy-950/50 border-b border-navy-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 truncate">
            <AlertCircle className="w-3.5 h-3.5 text-civic-saffron-400 shrink-0" />
            <span className="truncate">{t.chat.disclaimer}</span>
          </div>
          <span className="text-emerald-400 font-semibold shrink-0 ml-2">No OTP / Aadhaar</span>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((m) => (
            <ChatMessageItem key={m.id} message={m} />
          ))}

          {isLoading && (
            <div className="flex items-start gap-3 animate-in fade-in">
              <div className="w-9 h-9 rounded-2xl bg-navy-950 border border-navy-800 flex items-center justify-center text-civic-teal-400">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <div className="p-4 rounded-3xl rounded-tl-none bg-navy-900 border border-navy-800 text-slate-300 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-civic-teal-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-civic-saffron-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-civic-blue-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-slate-400 ml-1">{t.chat.typingMsg}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompt Pills */}
        <div className="px-6 py-3 bg-navy-950/60 border-t border-navy-800/80">
          <PromptPills onSelectPrompt={(p) => handleSendMessage(p)} disabled={isLoading} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-4 sm:p-6 bg-navy-950/90 border-t border-navy-800 flex items-center gap-3"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={t.chat.inputPlaceholder}
            disabled={isLoading}
            className="flex-1 px-4 py-3.5 rounded-2xl bg-navy-900 border border-navy-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-civic-teal-500 focus:ring-1 focus:ring-civic-teal-500 disabled:opacity-50 transition-all"
          />

          <button
            type="submit"
            disabled={isLoading || !inputQuery.trim()}
            className="px-5 sm:px-6 py-3.5 rounded-2xl bg-gradient-to-r from-civic-blue-600 to-civic-teal-600 hover:from-civic-blue-500 hover:to-civic-teal-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-civic-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
          >
            <span>{t.chat.sendBtn}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
