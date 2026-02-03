import React from 'react';
import { PROJECTS_CONTENT } from '../constants';
import { Layers, Activity, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Featured Deployments</h2>

        <div className="grid grid-cols-1 gap-16">
          {PROJECTS_CONTENT.map((project, idx) => (
            <div key={idx} className="group relative">
               {/* Background Glow Effect */}
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 to-violet-500/40 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 ease-out"></div>
               
               {/* Main Card Container */}
               <div className="relative glass-panel rounded-[2rem] p-8 md:p-12 overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:border-cyan-500/30 group-hover:shadow-[0_20px_50px_-15px_rgba(34,211,238,0.2)]">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                     <div className="lg:col-span-2 space-y-6">
                        <div className="text-5xl font-bold text-white/5 font-[Space_Grotesk] group-hover:text-cyan-400/10 transition-colors duration-500">0{idx + 1}</div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                           {project.stack.map((tech, i) => (
                              <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-500/20 transition-colors duration-500">
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                     <div className="lg:col-span-3 space-y-8">
                        <div>
                           <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm uppercase tracking-wider font-semibold group-hover:text-slate-400 transition-colors duration-500">
                              <Activity className="w-4 h-4" /> Problem Statement
                           </div>
                           <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">{project.problem}</p>
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm uppercase tracking-wider font-semibold group-hover:text-slate-400 transition-colors duration-500">
                              <Cpu className="w-4 h-4" /> Solution Architecture
                           </div>
                           <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">{project.solution}</p>
                        </div>
                        <div className="pt-4 border-t border-white/10 group-hover:border-cyan-500/20 transition-colors duration-500">
                           <div className="flex items-center gap-2 mb-2 text-cyan-500 text-sm uppercase tracking-wider font-semibold group-hover:text-cyan-400 transition-colors duration-500">
                              <Layers className="w-4 h-4" /> Measured Impact
                           </div>
                           <p className="text-white text-lg font-medium group-hover:glow-text transition-all duration-500">{project.impact}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;