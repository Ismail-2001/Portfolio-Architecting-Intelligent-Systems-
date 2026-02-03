import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Sparkles, Loader2, Cpu } from 'lucide-react';
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
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: GEMINI_INTRO }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Construct system context from constants
  const systemContext = `
    You are a digital portfolio assistant for Alex Mercer, a Senior AI Engineer.
    Here is the data about Alex:
    
    ABOUT: ${ABOUT_CONTENT}
    
    SKILLS: ${SKILLS_CONTENT.map(s => `${s.name}: ${s.description}`).join('; ')}
    
    PROJECTS: ${PROJECTS_CONTENT.map(p => `${p.title}: ${p.problem} -> ${p.solution}. Stack: ${p.stack.join(', ')}`).join(' | ')}
    
    EXPERIENCE: ${EXPERIENCE_CONTENT.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join(' | ')}
    
    INSTRUCTIONS:
    1. Answer strictly based on the provided data.
    2. Keep answers professional, concise, and technical.
    3. Do not invent facts. If the info isn't here, say "I don't have access to that specific detail about Alex's history."
    4. Act as a sophisticated AI agent.
  `;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key not configured");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: systemContext + "\n\nUser Question: " + input }] }
        ],
        config: {
            temperature: 0.7,
        }
      });

      const responseText = response.text || "I apologize, I processed the data but produced no output.";
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "System error: Unable to connect to inference endpoint.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-panel w-[90vw] md:w-[400px] h-[500px] rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-cyan-500/10 mb-4 pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-slate-900/80 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <div>
                <h3 className="text-sm font-semibold text-white">Gemini Portfolio Assistant</h3>
                <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-cyan-600 text-white rounded-br-none' 
                      : msg.isError 
                        ? 'bg-red-500/10 border border-red-500/50 text-red-200 rounded-bl-none'
                        : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl rounded-bl-none p-3 border border-slate-700 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                  <span className="text-xs text-slate-400">Processing tokens...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-900/80 border-t border-white/10 backdrop-blur-xl">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my stack or experience..."
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-cyan-600 rounded-lg text-white hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto group flex items-center gap-3 pr-2"
        >
          <div className="bg-slate-900 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full text-xs font-medium shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
            Ask Gemini AI
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform duration-300">
            <Cpu className="w-7 h-7 text-white" />
          </div>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;