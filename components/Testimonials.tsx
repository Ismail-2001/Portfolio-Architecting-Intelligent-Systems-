import React from 'react';
import { TESTIMONIALS_CONTENT } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Industry Validation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_CONTENT.map((t, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-cyan-500/50 mb-4" />
                <p className="text-slate-300 italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-cyan-500">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;