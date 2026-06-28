import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Spotlight', href: '#spotlight' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center space-x-2 text-slate-100 hover:text-accent-cyan transition-colors"
          aria-label="Naveen D.K. Home"
        >
          <Terminal className="w-5 h-5 text-accent-cyan" />
          <span className="font-mono font-bold tracking-tight text-sm">naveen.cloud()</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs font-mono text-slate-400 hover:text-slate-100 transition-colors uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com/Naveen-dk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/d-k-naveen-btech-it/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="mailto:dknaveen006@gmail.com" 
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-400 hover:text-slate-100 transition-colors p-1"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 border-b border-white/5 backdrop-blur-lg transition-all duration-300">
          <nav className="flex flex-col space-y-4 px-6 py-6" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-slate-300 hover:text-accent-cyan transition-colors uppercase tracking-widest py-2"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
              <a 
                href="https://github.com/Naveen-dk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/d-k-naveen-btech-it/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:dknaveen006@gmail.com" 
                className="text-slate-400 hover:text-slate-100 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
