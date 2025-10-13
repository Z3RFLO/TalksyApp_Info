import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeInUp, stagger } from '../lib/motionVariants';

function NumberBox({ value, label, delay = 0 }) {
  return (
    <motion.div
      className="number-box text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ delay, duration: 0.45, ease: 'easeOut' }}
    >
      <div className="number-value relative overflow-hidden theme-text-primary" style={{ height: 38 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="number-label mt-1 uppercase tracking-wide">{label}</div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--' });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const target = new Date('2026-01-17T00:00:00').getTime();
    function update() {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days: String(days).padStart(2, '0'), hours: String(hours).padStart(2, '0'), minutes: String(minutes).padStart(2, '0'), seconds: String(seconds).padStart(2, '0') });
    }
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center" aria-label="Hero">
      {/* Particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 w-[680px] h-[680px] rounded-full bg-blob opacity-10 animate-blob-drift" />
        <div className="absolute right-[-8%] bottom-0 w-[520px] h-[520px] rounded-full bg-blob-blue opacity-8 animate-blob-drift-delayed" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl w-full">
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center px-5 py-2 rounded-full glass-card" style={{ borderColor: 'var(--border-color)' }}>
              <span className="theme-text-primary text-sm font-medium flex items-center gap-2">⭐ Real Vibes, Real Talks</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-extrabold leading-tight">
            <motion.div className="text-[clamp(56px,9vw,110px)] theme-text-primary" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              Welcome
            </motion.div>
            <motion.div className="mt-3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}>
              <motion.span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="inline-block">
                <span className={`animated-gradient-text hero-title ${hover ? 'shimmer' : ''}`}>
                  to Talksy
                </span>
              </motion.span>
            </motion.div>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto theme-text-secondary">
            where conversations flow naturally, connections feel real, and every chat matters
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex justify-center" transition={{ delay: 0.6 }}>
            <div className="gradient-bar w-[480px] h-16 rounded-md shadow-xl" />
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-6 flex-wrap" transition={{ delay: 0.9 }}>
            {[{ value: timeLeft.days, label: 'DAYS' }, { value: timeLeft.hours, label: 'HOURS' }, { value: timeLeft.minutes, label: 'MINUTES' }, { value: timeLeft.seconds, label: 'SECONDS' }].map((i, idx) => (
              <NumberBox key={i.label} value={i.value} label={i.label} delay={1 + idx * 0.12} />
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex justify-center" transition={{ delay: 1.4 }}>
            <motion.button whileHover={{ scale: 1.03 }} className="cta-button px-10 py-3 rounded-full font-semibold">
              Join Community →
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="mt-6 flex justify-center gap-4">
            {/* Social icons kept simple - gradients handled by CSS */}
            <a className="social-outline-btn" href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#g)" strokeWidth="1.6" fill="none"/></svg></a>
            <a className="social-outline-btn" href="#" aria-label="X"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a className="social-outline-btn" href="#" aria-label="Reddit"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg></a>
          </motion.div>

          <div className="mt-6">
            <div className="scroll-indicator mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
