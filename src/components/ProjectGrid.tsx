import { useState } from 'react';
import { Github, ExternalLink, ShieldCheck, ShoppingBag, Mail, TrendingUp, Heart, Terminal, Sparkles } from 'lucide-react';
import DashboardMock from './DashboardMock.tsx';

export default function ProjectGrid() {
  const [showAIGuardDemo, setShowAIGuardDemo] = useState(false);

  const projects = [
    {
      title: 'Luxe Mart E-Commerce Platform',
      icon: <ShoppingBag className="w-5 h-5 text-accent-cyan" />,
      description: 'A full-stack premium retail application configured with stateless JWT authentication, inventory sync, and optimized relational database schemas.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
      github: 'https://github.com/Naveen-dk',
      demo: '#',
    },
    {
      title: 'Aether Mail Email System',
      icon: <Mail className="w-5 h-5 text-accent-teal" />,
      description: 'High-concurrency mailing engine written in Flask and MySQL, designed with connection pooling and caching to reduce delivery latency by 60%.',
      tech: ['Flask', 'Python', 'MySQL', 'Redis', 'Celery'],
      github: 'https://github.com/Naveen-dk',
      demo: '#',
    },
    {
      title: 'Fractal Mariner Fintech App',
      icon: <TrendingUp className="w-5 h-5 text-accent-purple" />,
      description: 'Cross-platform financial planner built on Flutter and Firebase. Deployed across multi-region Google Cloud load balancers achieving 99.9% availability.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Platform', 'IAM'],
      github: 'https://github.com/Naveen-dk',
      demo: '#',
    },
    {
      title: 'Heart Disease Prediction System',
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      description: 'Deep learning classification pipeline using CNNs and TensorFlow. Processes patient telemetry data to forecast cardiovascular conditions with high precision.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas'],
      github: 'https://github.com/Naveen-dk',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="relative py-24 border-t border-white/5 bg-dark">
      
      {/* Background glow highlights */}
      <div className="absolute left-1/3 bottom-10 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            High-Fidelity Projects
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl">
            A curated list of cloud applications, low-latency backends, and security tooling developed for production environments.
          </p>
        </div>

        {/* Highlighted Project (AIGuard LLM Firewall) */}
        <div className="mb-8 border border-white/5 bg-[#090d16]/40 rounded-3xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden transition-all hover:border-accent-cyan/20">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full filter blur-[80px] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 border border-accent-cyan/30 px-3 py-1 rounded-full bg-accent-cyan/5 text-accent-cyan">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Featured Security App</span>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-accent-cyan" />
                  <span>AIGuard LLM Firewall Application</span>
                </h3>
                <span className="text-xs text-slate-500 font-mono">Released: June 2026</span>
              </div>
              
              <p className="text-slate-350 text-xs md:text-sm leading-relaxed">
                A high-throughput semantic gateway proxy protecting LLMs. It features semantic vector clustering middleware for input sanitize checks, low-latency regex/semantic Prompt Injection defense, and structural Data Loss Prevention (DLP) masks censoring PII data payloads in real-time.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Node.js', 'Vector DB', 'Semantic Gateway', 'Google Cloud Run'].map((t) => (
                  <span 
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 border border-white/5 bg-white/[0.02] text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-2">
                <button
                  onClick={() => setShowAIGuardDemo(!showAIGuardDemo)}
                  className="bg-accent-cyan hover:bg-cyan-500 text-slate-950 px-5 py-2 rounded-xl text-xs font-bold font-mono transition-colors flex items-center space-x-2"
                >
                  <Terminal className="w-4 h-4" />
                  <span>{showAIGuardDemo ? 'Close Gateway Demo' : 'Launch Gateway Demo'}</span>
                </button>
                
                <a
                  href="https://github.com/Naveen-dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-xs font-mono flex items-center space-x-1.5"
                  aria-label="AIGuard GitHub Source"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 border border-white/5 rounded-2xl overflow-hidden bg-dark/50 p-4 font-mono text-[10px] text-slate-400">
              <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[9px] text-slate-500 ml-2">aiguard-firewall-config.yaml</span>
              </div>
              <pre className="overflow-x-auto text-[9px] leading-4">
{`gateway:
  listen_port: 8080
  target_url: "https://api.openai.com/v1"
rules:
  prompt_injection:
    enabled: true
    sensitivity: 0.85
    action: BLOCK
  dlp_masking:
    enabled: true
    mask_types: [EMAIL, SSN, CREDIT_CARD]
    replacement: "[MASKED]"`}
              </pre>
            </div>
          </div>

          {/* Interactive Live Demo Embed */}
          {showAIGuardDemo && (
            <div className="mt-8 pt-8 border-t border-white/5 animate-fade-in">
              <DashboardMock />
            </div>
          )}
        </div>

        {/* Standard Grid of remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="border border-white/5 bg-[#090d16]/30 p-6 rounded-2xl backdrop-blur-sm hover:border-white/10 hover:bg-[#090d16]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center">
                    {proj.icon}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                      aria-label={`${proj.title} GitHub Source`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={proj.demo} 
                      className="text-slate-500 hover:text-white transition-colors"
                      aria-label={`${proj.title} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {proj.title}
                </h3>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {proj.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.01] border border-white/5 text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
