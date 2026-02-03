import React from 'react';
import { EXPERIENCE_CONTENT } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Engineering Track Record</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {EXPERIENCE_CONTENT.map((job, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon / Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-cyan-500 transition-colors">
                <div className="w-3 h-3 bg-slate-500 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all"></div>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h3 className="font-bold text-white text-lg">{job.company}</h3>
                  <time className="text-xs font-medium text-cyan-500 uppercase tracking-wide">{job.period}</time>
                </div>
                <div className="text-slate-400 text-sm font-semibold mb-4">{job.role}</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;