import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Brain, Database, Cloud } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-3xl -z-10 rounded-full" />
            <div className="glass-panel p-8 rounded-[2.5rem] border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1">
                     <Brain className="w-8 h-8 text-cyan-400" />
                     <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">LLM Arch</span>
                  </div>
                  <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-1">
                     <Database className="w-8 h-8 text-violet-400" />
                     <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Vector DBs</span>
                  </div>
                  <div className="col-span-2 bg-slate-900/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1">
                     <Cloud className="w-8 h-8 text-emerald-400" />
                     <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Cloud Systems</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <h2 id="about-heading" className="text-4xl font-bold text-white flex items-center gap-4">
                <span className="w-12 h-[2px] bg-cyan-500 inline-block"></span>
                The Engineer
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                {ABOUT_CONTENT}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-2 rounded-full border border-white/5 bg-slate-900/30 text-slate-400 text-xs font-bold tracking-widest uppercase">
                San Francisco, CA
              </div>
              <div className="px-6 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Available for Partnerships
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;