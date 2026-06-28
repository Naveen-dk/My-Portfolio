import { Code, Server, Cloud, BookOpen } from 'lucide-react';

export default function TechSkills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-4 h-4 text-accent-cyan" />,
      skills: ['Java', 'C++', 'Python', 'JavaScript (ES6+)', 'Node.js', 'React', 'SQL'],
    },
    {
      title: 'CS Fundamentals',
      icon: <BookOpen className="w-4 h-4 text-accent-teal" />,
      skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'System Design', 'Operating Systems (OS)', 'DBMS', 'Computer Networks'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-4 h-4 text-accent-cyan" />,
      skills: ['Google Cloud Platform (GCP)', 'Firebase', 'Docker Containers', 'CI/CD Pipelines', 'GitHub Actions', 'Linux Shell Scripting'],
    },
    {
      title: 'Backend & Data Engineering',
      icon: <Server className="w-4 h-4 text-accent-purple" />,
      skills: ['RESTful APIs', 'Microservices Architecture', 'MySQL / Relational DBs', 'NoSQL Datastores', 'ETL Pipelines', 'TensorFlow ML Pipeline'],
    },
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-white/5 bg-dark">
      
      {/* Background glow highlights */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-accent-teal/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Technical Capabilities
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl">
            A comprehensive overview of programming tools, computer science foundation pillars, and cloud engineering skills.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="border border-white/5 bg-[#090d16]/40 p-6 rounded-2xl backdrop-blur-sm hover:border-white/10 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-mono font-semibold tracking-wider text-slate-200">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.01] text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-accent-cyan/[0.02] transition-all duration-200 cursor-default"
                    >
                      {skill}
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
