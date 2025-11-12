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
import WaitlistModal from './components/WaitlistModal';
import { WaitlistModalProvider } from './contexts/WaitlistModalContext';

function App() {
  const [scrollPct, setScrollPct] = useState(0);

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

  // Force dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <WaitlistModalProvider>
      <div className="min-h-screen overflow-x-hidden bg-black">
      <div aria-hidden className="fixed top-0 left-0 right-0 h-1 z-[60]">
        <div className="h-1 bg-gradient-to-r from-[#00b4ff] to-[#0066ff] shadow-md" style={{ width: `${scrollPct}%`, height: 4 }} />
      </div>
      <NavBar />
      <WaitlistModal />
      <main className="relative w-full">
        <Hero />
        <div className="py-24">
          <MeaningSection />
        </div>

        <div className="py-28">
          <WhyChoose />
        </div>

        {/* How Talksy Works - inserted after WhyChoose */}
        <div className="py-24">
          <HowTalksyWorks />
        </div>

        <div className="py-24">
          <DifferentSection />
        </div>

        <div className="py-24">
          <FeatureGrid />
        </div>

        <div className="py-20">
          <Showcase />
        </div>
      </main>
      <Footer />
      </div>
    </WaitlistModalProvider>
  );
}

export default App;
