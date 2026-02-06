import React from 'react';
import { PROJECTS_CONTENT } from '../constants';
import { Layers, Activity, Cpu, ArrowUpRight, CheckCircle } from 'lucide-react';

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

        <div className="grid grid-cols-1 gap-20" role="list">
          {PROJECTS_CONTENT.map((project, idx) => (
            <article 
              key={idx} 
              className="group relative"
              role="listitem"
            >
               {/* Background Glow Aura */}
               <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" aria-hidden="true" />
               
               {/* Main Card */}
               <div className="relative glass-panel rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                               group-hover:-translate-y-4 group-hover:scale-[1.015] 
                               group-hover:border-cyan-400/40 group-hover:shadow-[0_40px_80px_-20px_rgba(34,211,238,0.2)]">
                  
                  {/* Surface Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-20" aria-hidden="true" />

                  <div className="flex flex-col lg:flex-row">
                    {/* Project Image Panel */}
                    <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                       <img 
                          src={project.imageUrl} 
                          alt={`Technical interface for ${project.title}`}
                          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                          loading="lazy"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent z-10" />
                       <div className="absolute bottom-6 left-6 z-20">
                         <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30">
                            <CheckCircle className="w-3 h-3 text-cyan-400" />
                            <span className="text-[10px] font-bold text-cyan-200 uppercase tracking-widest">In Production</span>
                         </div>
                       </div>
                    </div>

                    {/* Content Panel */}
                    <div className="lg:w-3/5 p-8 md:p-12 space-y-8">
                       <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-start">
                             <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500 flex items-center gap-3">
                               {project.title}
                               <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                             </h3>
                             <span className="text-4xl font-black text-white/5 font-[Space_Grotesk] group-hover:text-cyan-400/10 transition-colors duration-500 select-none">
                               0{idx + 1}
                             </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                             {project.stack.map((tech, i) => (
                                <span key={i} className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-slate-950/50 text-slate-400 border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all duration-500">
                                   {tech}
                                </span>
                             ))}
                          </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <div className="flex items-center gap-2 text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold">
                                <Activity className="w-4 h-4 text-cyan-500/60" /> Problem
                             </div>
                             <p className="text-slate-300 text-sm leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                               {project.problem}
                             </p>
                          </div>
                          <div className="space-y-2">
                             <div className="flex items-center gap-2 text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold">
                                <Cpu className="w-4 h-4 text-violet-500/60" /> Architecture
                             </div>
                             <p className="text-slate-300 text-sm leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                               {project.solution}
                             </p>
                          </div>
                       </div>

                       <div className="pt-6 border-t border-white/5 group-hover:border-cyan-500/20 transition-colors duration-500">
                          <div className="flex items-center gap-2 mb-2 text-cyan-500/80 text-[11px] uppercase tracking-[0.2em] font-bold">
                             <Layers className="w-4 h-4" /> System Impact
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