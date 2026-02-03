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
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
               <div className="relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                     <div className="lg:col-span-2 space-y-6">
                        <div className="text-5xl font-bold text-white/5 font-[Space_Grotesk]">0{idx + 1}</div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                           {project.stack.map((tech, i) => (
                              <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                     <div className="lg:col-span-3 space-y-8">
                        <div>
                           <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm uppercase tracking-wider font-semibold">
                              <Activity className="w-4 h-4" /> Problem Statement
                           </div>
                           <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm uppercase tracking-wider font-semibold">
                              <Cpu className="w-4 h-4" /> Solution Architecture
                           </div>
                           <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                        </div>
                        <div className="pt-4 border-t border-white/10">
                           <div className="flex items-center gap-2 mb-2 text-cyan-500 text-sm uppercase tracking-wider font-semibold">
                              <Layers className="w-4 h-4" /> Measured Impact
                           </div>
                           <p className="text-white text-lg font-medium">{project.impact}</p>
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