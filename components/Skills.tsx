import React from 'react';
import { SKILLS_CONTENT } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
       {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-violet-500 inline-block"></span>
            Technical Capabilities
        </h2>
        
        <div className="grid grid-cols-1 gap-4">
          {SKILLS_CONTENT.map((skill, idx) => (
            <div 
              key={idx} 
              className="group glass-panel glass-panel-hover rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="md:w-1/4">
                <h3 className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
              </div>
              <div className="md:w-3/4 flex justify-between items-center">
                <p className="text-slate-400 group-hover:text-slate-200 transition-colors text-sm md:text-base font-light">
                  {skill.description}
                </p>
                <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;