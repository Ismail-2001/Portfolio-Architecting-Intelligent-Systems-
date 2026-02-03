import React from 'react';
import { ChevronDown, CircuitBoard, ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 lg:pt-0">
      {/* Custom Animations Styles */}
      <style>{`
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(-2%, 1%); }
          30% { transform: translate(1%, -2%); }
          40% { transform: translate(-1%, 2%); }
          50% { transform: translate(-2%, 1%); }
          60% { transform: translate(2%, 0); }
          70% { transform: translate(0, 2%); }
          80% { transform: translate(-2%, 0); }
          90% { transform: translate(1%, 1%); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .animate-noise {
          animation: noise 4s steps(8) infinite;
        }
        .animate-blob {
          animation: blob 12s ease-in-out infinite;
        }
        .animate-breathe {
          animation: breathe 15s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Main Radial Background with Breathing Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950 pointer-events-none animate-breathe" />
      
      {/* Animated Noise Overlay - Extremely subtle digital grain */}
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07] pointer-events-none animate-noise mix-blend-overlay"></div>
      
      {/* Organic Floating Glows - Very slow and fluid */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-500/5 rounded-full blur-[150px] animate-blob animation-delay-2000 pointer-events-none" />

      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                <CircuitBoard className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">System Online</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 glow-text">Intelligent Systems</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
              {HERO_CONTENT.subHeadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group relative px-8 py-4 bg-white text-slate-950 font-semibold text-lg rounded-full transition-all hover:bg-cyan-50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2">
                {HERO_CONTENT.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-white/10 bg-white/5 text-white font-semibold text-lg rounded-full transition-all hover:bg-white/10 hover:border-white/20 flex items-center justify-center">
                View Projects
              </button>
            </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-full lg:ml-auto perspective-1000">
            <div className="relative group">
                {/* Back glow - Matched to Blue Sky in Photo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                {/* Main Card */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-sm">
                    {/* User Image - Pointing to local file 'profile.png' */}
                    <img 
                      src="/profile.png" 
                      alt="AI Engineer Profile" 
                      className="w-full aspect-[4/5] object-cover object-center transform transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Overlay Gradient - darker at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-60"></div>

                    {/* Floating Stats */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                        <div className="flex items-center gap-3">
                             <div className="h-2 w-24 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-cyan-400 rounded-full animate-pulse"></div>
                             </div>
                             <span className="text-xs text-cyan-400 font-mono">MODEL_TRAINING_85%</span>
                        </div>
                        <div className="flex items-center justify-between glass-panel p-3 rounded-xl border-white/10 bg-slate-900/60 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <CircuitBoard className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">Current Focus</div>
                                    <div className="text-sm font-bold text-white">Gemini 1.5 Pro Agent</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600 hidden lg:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;