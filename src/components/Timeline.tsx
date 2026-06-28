import { useState } from 'react';
import { Calendar, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: 'HackerRank',
      period: 'Dec 2024 - Feb 2025',
      details: [
        'Designed and optimized low-latency RESTful APIs capable of handling 500+ concurrent connections.',
        'Improved runtime execution speeds by utilizing optimized in-memory data structures.',
        'Integrated automated testing pipelines within Agile CI/CD release cycles to boost deployment safety.',
      ],
      tags: ['Node.js', 'Data Structures', 'RESTful APIs', 'CI/CD', 'Jest']
    },
    {
      role: 'Machine Learning Intern',
      company: 'Rinex Technology',
      period: 'Jan 2025 - Mar 2025',
      details: [
        'Engineered high-throughput automated ETL pipelines cleaning and loading 50k+ daily records.',
        'Hyperparameter tuned custom deep convolutional networks using TensorFlow/Keras.',
        'Deployed custom inference models achieving a verified 94% prediction accuracy rate.',
      ],
      tags: ['Python', 'TensorFlow', 'ETL Pipelines', 'CNNs', 'Data Preprocessing']
    },
    {
      role: 'Data Science Intern',
      company: 'US Salem Startup',
      period: 'Jan 2023 - Jun 2023',
      details: [
        'Performed thorough exploratory data analysis (EDA) across datasets exceeding 10k+ entries.',
        'Constructed custom predictive regressions and classifications helping drive business metrics.',
        'Wrote scalable data modeling notebooks utilizing Pandas, NumPy, and Scikit-Learn.',
      ],
      tags: ['Python', 'Scikit-Learn', 'Exploratory Data Analysis', 'Pandas', 'Data Science']
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="relative py-24 border-t border-white/5 bg-dark">
      
      {/* Background glow highlights */}
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-accent-purple/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl">
            A chronological timeline of internships and development contributions in engineering, machine learning, and data analytics.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive List Picker */}
          <div className="lg:col-span-4 space-y-2">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                  activeIndex === idx
                    ? 'border-accent-cyan bg-accent-cyan/[0.03] text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                    : 'border-white/5 bg-[#090d16]/30 text-slate-400 hover:border-white/15 hover:text-slate-200'
                }`}
                aria-selected={activeIndex === idx}
                role="tab"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase mb-1">
                    {exp.company}
                  </span>
                  <span className="text-xs font-semibold">
                    {exp.role}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  activeIndex === idx ? 'transform translate-x-1 text-accent-cyan' : 'text-slate-600'
                }`} />
              </button>
            ))}
          </div>

          {/* Right: Active Detail View */}
          <div className="lg:col-span-8">
            <div className="border border-white/5 bg-[#090d16]/55 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl min-h-[350px] flex flex-col justify-between relative overflow-hidden">
              
              {/* Card Radial Corner Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-cyan/10 rounded-full filter blur-xl"></div>
              
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {experiences[activeIndex].role}
                    </h3>
                    <div className="flex items-center space-x-2 text-accent-cyan text-xs font-mono">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{experiences[activeIndex].company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-slate-500 text-xs font-mono bg-white/[0.01] border border-white/5 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-accent-teal" />
                    <span>{experiences[activeIndex].period}</span>
                  </div>
                </div>

                {/* Contribution list */}
                <ul className="space-y-4 mb-8">
                  {experiences[activeIndex].details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-3 text-xs md:text-sm text-slate-350 leading-relaxed text-slate-350">
                      <CheckCircle2 className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                      <span className="text-slate-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="border-t border-white/5 pt-6">
                <div className="flex flex-wrap gap-2">
                  {experiences[activeIndex].tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
