import React, { useState, useRef, useEffect, useMemo } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Sparkles, Loader2, Cpu, RotateCcw, Copy, Check, AlertTriangle } from 'lucide-react';
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
    You are a professional digital twin and portfolio assistant for Alex Mercer, a Senior AI Engineer.
    
    GROUNDING DATA:
    - ABOUT: ${ABOUT_CONTENT}
    - CORE SKILLS: ${SKILLS_CONTENT.map(s => s.name).join(', ')}
    - KEY PROJECTS: ${PROJECTS_CONTENT.map(p => p.title).join(', ')}
    - PROFESSIONAL EXPERIENCE: ${EXPERIENCE_CONTENT.map(e => e.role + ' at ' + e.company).join(', ')}
    
    TONE & BEHAVIOR:
    - Maintain a professional, technical, yet helpful tone.
    - Be concise. Use markdown for lists or code snippets.
    - If asked about sensitive personal data (phone, home address), state that you can only facilitate professional contact via LinkedIn or Email.
    - If a query is outside the scope of Alex's professional background, politely steer the conversation back to his technical expertise.
  `, []);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || trimmedInput.length > 500 || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: trimmedInput };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // In a production environment, this key would be handled by a secure edge function
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: systemContext,
          temperature: 0.7,
        },
        // Maintain local history for the model to reference
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const response = await chat.sendMessage({ message: trimmedInput });
      const text = response.text || "Connection was successful, but the response buffer was empty. Please rephrase.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error: any) {
      console.error("AI Assistant Error:", error);
      let errorMsg = "The secure inference gateway is currently unavailable. This typically occurs during rate-limiting or maintenance windows.";
      
      if (error.message?.includes('403') || error.message?.includes('404')) {
        errorMsg = "API configuration error. The secure gateway could not verify the credentials. Please alert the developer.";
      }

      setMessages(prev => [...prev, { 
        role: 'model', 
        text: errorMsg, 
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
          aria-label="Alex Mercer AI Assistant"
          className="glass-panel w-[90vw] md:w-[420px] h-[600px] rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-cyan-500/20 mb-4 pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-bottom-10"
        >
          {/* Header */}
          <div className="bg-slate-900/95 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-none">Portfolio Agent</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Status: Secure</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={resetChat}
                className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                title="Reset session"
                aria-label="Reset chat history"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-950/40" aria-live="polite">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2`}
              >
                <div 
                  className={`relative group max-w-[88%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm transition-all ${
                    msg.role === 'user' 
                      ? 'bg-cyan-600 text-white rounded-tr-none' 
                      : msg.isError 
                        ? 'bg-red-500/10 border border-red-500/30 text-red-200 rounded-tl-none'
                        : 'bg-slate-900/80 text-slate-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  {msg.isError && <AlertTriangle className="w-4 h-4 mb-2 opacity-70" />}
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  
                  {msg.role === 'model' && !msg.isError && (
                    <button 
                      onClick={() => copyToClipboard(msg.text, idx)}
                      className="absolute -right-10 top-0 p-2 text-slate-500 hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all"
                      title="Copy response"
                    >
                      {copiedIndex === idx ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                <span className="text-[10px] mt-1.5 text-slate-600 uppercase font-bold tracking-tighter">
                  {msg.role === 'user' ? 'Local Request' : 'Agent Inference'}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900/50 rounded-2xl rounded-tl-none p-4 border border-white/5 flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-cyan-500 animate-spin" />
                  <span className="text-xs text-slate-500 font-mono tracking-widest">PROCESSING...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900/95 border-t border-white/10 backdrop-blur-xl">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my AI architectures..."
                maxLength={500}
                className="w-full bg-slate-950/80 border border-slate-700/50 rounded-xl pl-4 pr-12 py-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2.5 bg-cyan-600 rounded-lg text-white hover:bg-cyan-500 disabled:opacity-30 disabled:grayscale transition-all shadow-lg shadow-cyan-900/20"
                aria-label="Send query"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <div className="mt-2 flex justify-between items-center px-1">
              <span className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">End-to-end Encrypted</span>
              <span className={`text-[10px] font-mono ${input.length > 450 ? 'text-orange-500' : 'text-slate-600'}`}>
                {input.length}/500
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto group flex items-center gap-4 transition-all duration-500"
          aria-label="Open AI Assistant"
        >
          <div className="bg-slate-900 border border-cyan-500/20 text-cyan-400 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
            Secure Agent
          </div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-400/50 group-hover:-translate-y-1 transition-all duration-300">
            <Cpu className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-950 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;