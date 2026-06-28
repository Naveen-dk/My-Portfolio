import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import TechSkills from './components/TechSkills.tsx';
import Timeline from './components/Timeline.tsx';
import ProjectGrid from './components/ProjectGrid.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased flex flex-col justify-between selection:bg-accent-cyan/30 selection:text-white">
      {/* Decorative Top Glow Bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-cyan via-accent-teal to-accent-purple z-50"></div>

      {/* Persistent global layout grid layout details */}
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <TechSkills />
        <Timeline />
        <ProjectGrid />
      </main>

      <Footer />
    </div>
  );
}
