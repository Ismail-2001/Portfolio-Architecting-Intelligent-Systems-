import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Brain, Database, Cloud } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-3xl -z-10 rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border-t border-l border-white/10">
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 transition-colors">
                     <Brain className="w-8 h-8 text-cyan-400" />
                     <span className="text-sm font-medium text-slate-300">LLM Arch</span>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-violet-500/30 transition-colors">
                     <Database className="w-8 h-8 text-violet-400" />
                     <span className="text-sm font-medium text-slate-300">Vector DBs</span>
                  </div>
                  <div className="col-span-2 bg-slate-900/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-3 hover:border-emerald-500/30 transition-colors">
                     <Cloud className="w-8 h-8 text-emerald-400" />
                     <span className="text-sm font-medium text-slate-300">Cloud Infrastructure</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-cyan-500 inline-block"></span>
              About The Engineer
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              {ABOUT_CONTENT}
            </p>
            <div className="flex gap-4 pt-4">
              <div className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 text-sm">San Francisco</div>
              <div className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 text-sm">Remote OK</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;