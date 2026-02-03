import React, { useState, useRef, useEffect, useMemo } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Sparkles, Loader2, Cpu, RotateCcw, Copy, Check } from 'lucide-react';
import { ChatMessage } from '../types';
import { 
  ABOUT_CONTENT, 
  SKILLS_CONTENT, 
  PROJECTS_CONTENT, 
  EXPERIENCE_CONTENT,
  GEMINI_INTRO 
} from '../constants';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = sessionStorage.getItem('portfolio_chat_history');
    return saved ? JSON.parse(saved) : [{ role: 'model', text: GEMINI_INTRO }];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
    sessionStorage.setItem('portfolio_chat_history', JSON.stringify(messages));
  }, [messages, isOpen]);

  const systemContext = useMemo(() => `
    You are a digital portfolio assistant for Alex Mercer, a Senior AI Engineer.
    DATA:
    ABOUT: ${ABOUT_CONTENT}
    SKILLS: ${SKILLS_CONTENT.map(s => s.name).join(', ')}
    PROJECTS: ${PROJECTS_CONTENT.map(p => p.title).join(', ')}
    EXPERIENCE: ${EXPERIENCE_CONTENT.map(e => e.role).join(', ')}
    
    INSTRUCTIONS:
    1. Professional, concise, technical tone.
    2. Only use provided facts.
    3. If asked about code, provide high-quality snippets.
  `, []);

  const handleSend = async () => {
    const sanitizedInput = input.trim();
    if (!sanitizedInput || sanitizedInput.length > 500) return;

    const userMsg: ChatMessage = { role: 'user', text: sanitizedInput };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: systemContext,
          temperature: 0.7,
        },
        // We provide the history to the session for continuity
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: sanitizedInput });
      const responseText = result.text || "I processed that request but couldn't generate a specific response.";
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Inference Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "The secure inference gateway encountered an error. Please try again or reset the session.", 
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([{ role: 'model', text: GEMINI_INTRO }]);
    sessionStorage.removeItem('portfolio_chat_history');
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div 
          role="dialog"
          aria-label="AI Portfolio Assistant"
          className="glass-panel w-[90vw] md:w-[420px] h-[600px] rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-cyan-500/10 mb-4 pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-bottom-10"
        >
          <div className="bg-slate-900/90 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-none">Alex Mercer AI</h3>
                <span className="text-[10px] text-cyan-400/70 uppercase tracking-tighter">System: Gemini 3 Flash</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={resetChat}
                title="Reset Conversation"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                aria-label="Reset chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-950/40">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2`}
              >
                <div 
                  className={`relative group max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-cyan-600 text-white rounded-tr-none' 
                      : msg.isError 
                        ? 'bg-red-500/10 border border-red-500/30 text-red-200 rounded-tl-none'
                        : 'bg-slate-900/80 text-slate-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                  {msg.role === 'model' && !msg.isError && (
                    <button 
                      onClick={() => copyToClipboard(msg.text, idx)}
                      className="absolute -right-10 top-0 p-1.5 text-slate-500 hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all"
                      title="Copy response"
                    >
                      {copiedIndex === idx ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                <span className="text-[10px] mt-1 text-slate-500 uppercase font-medium">
                  {msg.role === 'user' ? 'You' : 'Assistant'}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900/50 rounded-2xl rounded-tl-none p-4 border border-white/5 flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">TOKENIZING...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-slate-900/90 border-t border-white/10 backdrop-blur-xl">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask technical details..."
                maxLength={500}
                className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                disabled={isLoading}
                aria-label="Message text"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-[10px] text-slate-600 font-mono hidden group-focus-within:block">
                  {input.length}/500
                </span>
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-cyan-600 rounded-lg text-white hover:bg-cyan-500 disabled:opacity-30 disabled:grayscale transition-all"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto group flex items-center gap-4 transition-transform hover:-translate-y-1"
          aria-label="Open AI Assistant"
        >
          <div className="bg-slate-900 border border-cyan-500/20 text-cyan-400 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
            Secure Agent Online
          </div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30">
            <Cpu className="w-8 h-8 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-950 rounded-full animate-pulse"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;