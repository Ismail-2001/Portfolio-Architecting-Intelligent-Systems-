import React from 'react';
import { PROJECTS_CONTENT } from '../constants';
import { Layers, Activity, Cpu, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="projects-heading">
      {/* Dynamic Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-cyan-500/5 blur-[120px] -z-10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured Deployments
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            A selection of production-grade AI systems, architected for reliability, low-latency, and measurable business impact.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-16" role="list">
          {PROJECTS_CONTENT.map((project, idx) => (
            <article 
              key={idx} 
              className="group relative"
              role="listitem"
            >
               {/* Background Glow Aura - Only visible on hover */}
               <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" aria-hidden="true" />
               
               {/* Main Card - Lift, Scale, and Border Transition */}
               <div className="relative glass-panel rounded-[2.5rem] p-8 md:p-12 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                               group-hover:-translate-y-4 group-hover:scale-[1.015] 
                               group-hover:border-cyan-400/40 group-hover:shadow-[0_40px_80px_-20px_rgba(34,211,238,0.2)]">
                  
                  {/* Surface Light Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" aria-hidden="true" />

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10">
                     <div className="lg:col-span-2 space-y-6">
                        <div className="text-6xl font-bold text-white/5 font-[Space_Grotesk] group-hover:text-cyan-400/10 transition-colors duration-500 select-none">
                          0{idx + 1}
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500 flex items-center gap-3">
                            {project.title}
                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {project.stack.map((tech, i) => (
                              <span key={i} className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-slate-950/50 text-slate-400 border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all duration-500">
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                     
                     <div className="lg:col-span-3 space-y-8">
                        <div className="space-y-2">
                           <div className="flex items-center gap-2 text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold group-hover:text-slate-400 transition-colors">
                              <Activity className="w-4 h-4 text-cyan-500/60" /> Problem Space
                           </div>
                           <p className="text-slate-300 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                             {project.problem}
                           </p>
                        </div>

                        <div className="space-y-2">
                           <div className="flex items-center gap-2 text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold group-hover:text-slate-400 transition-colors">
                              <Cpu className="w-4 h-4 text-violet-500/60" /> System Architecture
                           </div>
                           <p className="text-slate-300 leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                             {project.solution}
                           </p>
                        </div>

                        <div className="pt-6 border-t border-white/5 group-hover:border-cyan-500/20 transition-colors duration-500">
                           <div className="flex items-center gap-2 mb-2 text-cyan-500/80 text-[11px] uppercase tracking-[0.2em] font-bold">
                              <Layers className="w-4 h-4" /> Measured Impact
                           </div>
                           <p className="text-white text-xl font-medium group-hover:glow-text tracking-tight transition-all duration-500">
                             {project.impact}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Projects;