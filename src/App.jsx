import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import MeaningSection from './components/MeaningSection';
import WhyChoose from './components/WhyChoose';
import DifferentSection from './components/DifferentSection';
import HowTalksyWorks from './components/HowTalksyWorks';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [scrollPct, setScrollPct] = useState(0);
  // Default to saved theme or dark-first fallback (do not auto-use system preference)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrolled = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      setScrollPct(Math.min(100, Math.max(0, scrolled)));
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen dark:bg-black bg-[#f8fafc] transition-colors duration-300">
      <div aria-hidden className="fixed top-0 left-0 right-0 h-1 z-[60]">
        <div className="h-1 bg-gradient-to-r from-[#00b4ff] to-[#0066ff] shadow-md" style={{ width: `${scrollPct}%`, height: 4 }} />
      </div>
  <NavBar theme={theme} setTheme={setTheme} />
      <main className="relative">
        <Hero />
        <div className="py-32">
          <MeaningSection />
        </div>

        <div className="py-40">
          <WhyChoose />
        </div>

        {/* How Talksy Works - inserted after WhyChoose */}
        <div className="py-32">
          <HowTalksyWorks />
        </div>

        <div className="py-32">
          <DifferentSection />
        </div>

        <div className="py-32">
          <FeatureGrid />
        </div>

        <div className="py-24">
          <Showcase />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
