import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileDown, Trophy, CheckCircle, Cloud, ArrowUpRight, Cpu } from 'lucide-react';

export default function Hero() {
  const [solvedCount, setSolvedCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  // Smooth micro-animations for metrics
  useEffect(() => {
    const solvedTarget = 350;
    const ratingTarget = 1800;
    
    const duration = 1500; // ms
    const stepTime = 30; // ms
    const steps = duration / stepTime;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setSolvedCount(Math.min(Math.floor((solvedTarget / steps) * step), solvedTarget));
      setRatingCount(Math.min(Math.floor((ratingTarget / steps) * step), ratingTarget));
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="spotlight" className="relative pt-32 pb-24 flex items-center justify-center overflow-hidden">
      
      {/* Background Radial Glow highlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full filter blur-[150px] animate-glow-pulse pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Intro */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center space-x-2 border border-accent-cyan/20 px-3 py-1 rounded-full bg-accent-cyan/5 text-accent-cyan mb-6">
            <Cloud className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Google Cloud Certified Architect</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Designing resilient systems. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-teal to-accent-purple text-glow">
              Architecting cloud scale.
            </span>
          </h1>
          
          <p className="max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed">
            I am <strong className="text-slate-200">Naveen D.K.</strong>, a Professional Cloud Architect and Software Engineer. 
            I build high-throughput RESTful backend gateways, construct secure machine learning pipelines, and deploy fault-tolerant microservices.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Main Badge / Certification Bento Card */}
          <div className="md:col-span-2 glow-card-cyan rounded-2xl border border-white/5 bg-[#090d16]/75 p-6 backdrop-blur-sm flex flex-col justify-between group hover:border-accent-cyan/40 transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                  <Cloud className="w-5 h-5 text-accent-cyan" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest border border-white/5 px-2.5 py-1 rounded-md bg-white/[0.01]">
                  Credentials
                </span>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                Professional Cloud Architect Focus
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Specialized in designing Google Cloud Architectures featuring secure multi-region failovers, stateless JWT authentication gateways, containerized microservices deployments with Docker, and structured ETL pipelines.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-accent-teal shrink-0" />
                <span className="text-[11px] text-slate-300 font-mono">IAM & Security Best Practices</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-accent-teal shrink-0" />
                <span className="text-[11px] text-slate-300 font-mono">Infrastructure as Code (IaC)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-accent-teal shrink-0" />
                <span className="text-[11px] text-slate-300 font-mono">Data Pipeline Engineering</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-accent-teal shrink-0" />
                <span className="text-[11px] text-slate-300 font-mono">Kubernetes & GKE Orch.</span>
              </div>
            </div>
          </div>

          {/* Social Profiles & CTA Bento Card */}
          <div className="glow-card-default rounded-2xl border border-white/5 bg-[#090d16]/75 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center border border-white/10">
                  <Cpu className="w-5 h-5 text-slate-300" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest border border-white/5 px-2.5 py-1 rounded-md bg-white/[0.01]">
                  Contact
                </span>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">Connect & Hire</h2>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Find my social links or download my technical resume below to explore collaboration opportunities.
              </p>
            </div>

            <div className="space-y-3">
              {/* High Intent CTA */}
              <a 
                href="/resume.pdf"
                download="Naveen_DK_Resume.pdf"
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-cyan to-accent-teal hover:from-accent-cyan hover:to-accent-cyan text-slate-950 font-bold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase"
                aria-label="Download Resume PDF"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              
              {/* Social Channels */}
              <div className="grid grid-cols-3 gap-2">
                <a 
                  href="https://github.com/Naveen-dk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/5 hover:border-white/20 rounded-xl py-2 bg-white/[0.02] text-slate-300 hover:text-white transition-all text-xs space-x-1"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px]">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/d-k-naveen-btech-it/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/5 hover:border-white/20 rounded-xl py-2 bg-white/[0.02] text-slate-300 hover:text-white transition-all text-xs space-x-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px]">LinkedIn</span>
                </a>
                <a 
                  href="mailto:dknaveen006@gmail.com" 
                  className="inline-flex items-center justify-center border border-white/5 hover:border-white/20 rounded-xl py-2 bg-white/[0.02] text-slate-300 hover:text-white transition-all text-xs space-x-1"
                  aria-label="Send Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px]">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Metric 1: LeetCode Rating */}
          <div className="glow-card-purple rounded-2xl border border-white/5 bg-[#090d16]/75 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-accent-purple/40 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center border border-accent-purple/20">
                <Trophy className="w-5 h-5 text-accent-purple" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest border border-white/5 px-2.5 py-1 rounded-md bg-white/[0.01]">
                LeetCode Peak
              </span>
            </div>
            
            <div className="my-6">
              <div className="text-4xl font-extrabold tracking-tight text-white mb-1 font-mono">
                {ratingCount}+
              </div>
              <p className="text-slate-400 text-xs">Peak Rating (Top 8% globally)</p>
            </div>

            <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Competitions Active</span>
              <span className="text-accent-purple">Rating: 1800+</span>
            </div>
          </div>

          {/* Metric 2: Problems Solved */}
          <div className="glow-card-cyan rounded-2xl border border-white/5 bg-[#090d16]/75 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-accent-cyan/40 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                <CheckCircle className="w-5 h-5 text-accent-cyan" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest border border-white/5 px-2.5 py-1 rounded-md bg-white/[0.01]">
                DSA Mastery
              </span>
            </div>
            
            <div className="my-6">
              <div className="text-4xl font-extrabold tracking-tight text-white mb-1 font-mono">
                {solvedCount}+
              </div>
              <p className="text-slate-400 text-xs">Data Structures & Algorithms solved</p>
            </div>

            <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Platforms: LeetCode & GfG</span>
              <span className="text-accent-cyan">Completed</span>
            </div>
          </div>

          {/* Grid Metric 3: Academic/Badge Highlight Card */}
          <div className="glow-card-default rounded-2xl border border-white/5 bg-[#090d16]/75 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center border border-white/10">
                <CheckCircle className="w-5 h-5 text-slate-400" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest border border-white/5 px-2.5 py-1 rounded-md bg-white/[0.01]">
                Core Philosophy
              </span>
            </div>

            <div className="my-6">
              <div className="text-lg font-semibold text-white mb-1">Low Latency Focus</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Prioritizing sub-100ms response times, secure token payloads, and optimized database structures.
              </p>
            </div>

            <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>System Design Pattern</span>
              <a href="#projects" className="text-accent-cyan inline-flex items-center hover:underline">
                View Systems <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
