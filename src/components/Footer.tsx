import { Terminal, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="flex items-center space-x-2 text-slate-500 text-xs font-mono">
          <Terminal className="w-4 h-4 text-accent-cyan" />
          <span>© {new Date().getFullYear()} naveen.cloud. All rights reserved.</span>
        </div>

        {/* Center / Stats status */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-slate-500 border border-white/5 px-3 py-1.5 rounded-full bg-white/[0.02]">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse-slow"></span>
          <span>Deploy Status: Production Ready</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
          <ShieldCheck className="w-4 h-4 text-accent-cyan" />
          <span>100% Lighthouse Compliant</span>
        </div>
      </div>
      
      {/* Tiny Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-[120px] pointer-events-none"></div>
    </footer>
  );
}
