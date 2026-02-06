import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Brain, Database, Cloud } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-3xl -z-10 rounded-full" />
            
            <div className="relative">
              {/* Main Decorative Image */}
              <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group relative h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Abstract visualization of deep neural networks and data flow"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply transition-opacity group-hover:opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {/* Overlay Cards */}
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1">
                     <Brain className="w-8 h-8 text-cyan-400" />
                     <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">LLM Arch</span>
                  </div>
                  <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-1">
                     <Database className="w-8 h-8 text-violet-400" />
                     <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Vector DBs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-cyan-500">
                <span className="w-12 h-[2px] bg-cyan-500"></span>
                <span className="text-xs font-bold uppercase tracking-widest">Philosophy</span>
              </div>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Bridging Theory & <span className="text-cyan-400">Scale</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                {ABOUT_CONTENT}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 rounded-full border border-white/5 bg-slate-900/30 text-slate-400 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                San Francisco HQ
              </div>
              <div className="px-6 py-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                Open for Keynotes
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;