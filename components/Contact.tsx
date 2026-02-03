import React from 'react';
import { FINAL_CTA } from '../constants';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-slate-950 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{FINAL_CTA.headline}</h2>
        <p className="text-xl text-slate-400 mb-10 font-light">{FINAL_CTA.sub}</p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                {FINAL_CTA.button}
            </button>
            <div className="flex gap-4">
                <a href="#" className="p-3 glass-panel rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"><Github className="w-6 h-6"/></a>
                <a href="#" className="p-3 glass-panel rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"><Linkedin className="w-6 h-6"/></a>
                <a href="#" className="p-3 glass-panel rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"><Mail className="w-6 h-6"/></a>
            </div>
        </div>
      </div>

      <footer className="absolute bottom-6 text-slate-600 text-sm">
        © {new Date().getFullYear()} Alex Mercer. Engineered with React & Gemini.
      </footer>
    </section>
  );
};

export default Contact;