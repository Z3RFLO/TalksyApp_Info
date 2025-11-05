import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/motionVariants';
import { useEffect, useState } from 'react';
import { BsDiscord, BsTwitterX, BsInstagram } from 'react-icons/bs';

function NumberBox({ value, label, delay = 0 }) {
  return (
    <motion.div
      className="number-box text-center px-6 py-4 bg-[#0F1115] rounded-2xl backdrop-blur-sm"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay, duration: 0.45, ease: 'easeOut' }}
    >
      <div className="number-value relative overflow-hidden text-white text-4xl font-bold" style={{ height: 48 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-gradient-to-r from-[#E555FF] to-[#9747FF] bg-clip-text text-transparent"
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="number-label mt-2 uppercase tracking-wider text-[#9EA3AF] text-sm font-medium">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--' });
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Countdown logic to 2026-01-17T00:00:00
  useEffect(() => {
    const target = new Date('2026-01-17T00:00:00').getTime();

    function update() {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }

    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center transition-colors duration-300" style={{ background: 'linear-gradient(180deg, var(--bg-gradient-start), var(--bg-gradient-end))' }}>
      {/* Star particles background */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Subtle background gradients */}
      <motion.div 
        className="absolute -left-32 -top-20 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-20 filter blur-3xl"
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div 
        className="absolute right-[-10%] top-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-15 filter blur-2xl"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div 
          variants={stagger} 
          initial="hidden" 
          animate="visible" 
          className="max-w-4xl w-full"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center px-6 py-2 rounded-full border bg-[rgba(0,0,0,0.35)] dark:bg-[rgba(255,255,255,0.04)] backdrop-blur-sm group" style={{ borderColor: 'var(--border-color)' }}>
              <motion.span className="theme-text-primary text-sm font-medium flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <svg className="w-4 h-4 text-white/70 rotate-star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l2.39 4.85L19 8.24l-3.2 3.12.76 5.01L12 14.77 7.44 16.37l.76-5.01L5 8.24l4.61-1.39L12 2z" stroke="rgba(255,255,255,0.9)" strokeWidth="0.5" fill="rgba(255,255,255,0.02)" />
                </svg>
                Real Vibes, Real Talks
              </motion.span>
            </div>
          </motion.div>

          <motion.h1
            className="text-center mt-12 leading-tight"
            initial={{ opacity: 0, y: 65 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="block">
              <motion.span
                className="hero-title-primary font-bold tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Welcome
              </motion.span>
            </div>

            <div className="block mt-8">
              <motion.span
                className="hero-title-accent inline-block font-extrabold glow-strong"
                animate={
                  isHoveringHero
                    ? { backgroundPosition: '100% 50%', scale: 1.06 }
                    : { backgroundPosition: '0% 50%', scale: 1.2 }
                }
                transition={{ duration: 0.45 }}
                onMouseEnter={() => setIsHoveringHero(true)}
                onMouseLeave={() => setIsHoveringHero(false)}
              >
                <span
                  className="animated-gradient-text inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #ff6ad5, #8b64c1, #5fcbff)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  To Talksy
                </span>
              </motion.span>
            </div>
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            className="mt-8 text-xl theme-text-secondary max-w-3xl mx-auto text-center leading-relaxed"
          >
            where conversations flow naturally, connections feel real, and every chat matters
          </motion.p>
          
          {/* Launch Indicator */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex items-center justify-center gap-2 theme-text-secondary"
          >
            <svg className="w-5 h-5 text-[color:var(--text-secondary)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ opacity: 0.08 }}>
              <path d="M2 21l21-9L2 3v7l14 2-14 2v7z" />
            </svg>
            <span className="text-sm font-medium">Launching Soon</span>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex justify-center gap-6 flex-wrap"
            transition={{ delay: 1.2 }}
          >
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MINUTES' },
              { value: timeLeft.seconds, label: 'SECONDS' }
            ].map((item, index) => (
              <NumberBox key={item.label} value={item.value} label={item.label} delay={1.5 + index * 0.08} />
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            variants={fadeInUp} 
            className="mt-12 flex justify-center"
          >
            <motion.a 
              href="/waitlist.html"
              className="bg-gradient-to-r from-[#E555FF] to-[#9747FF] px-10 py-4 rounded-full text-white font-bold text-lg relative overflow-hidden group flex items-center gap-3 shadow-2xl"
              whileHover={{ scale: 1.04, boxShadow: '0 20px 60px rgba(143,94,207,0.18)' }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Join Waitlist</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Media Icons with premium glow effects */}
          <motion.div 
            variants={fadeInUp} 
            className="mt-8 flex justify-center gap-6"
          >
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/talksy.in?igsh=bmRwMTFnNjZ0em0w"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md border flex items-center justify-center group relative overflow-hidden"
              style={{ borderColor: 'var(--border-color)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'blur(10px)' }}
              />
              <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6ad5" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#5fcbff" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#instagram-gradient)" strokeWidth="1.5" fill="none"/>
                <circle cx="12" cy="12" r="5" stroke="url(#instagram-gradient)" strokeWidth="1.5" fill="none"/>
                <circle cx="18.5" cy="5.5" r="1.5" stroke="url(#instagram-gradient)" strokeWidth="1.5" fill="none"/>
              </svg>
              <motion.div
                className="absolute inset-0 rounded-xl transition-shadow duration-500"
                animate={{
                  boxShadow: 'none'
                }}
                whileHover={{
                  boxShadow: '0 0 25px rgba(255,106,213,0.3), inset 0 0 25px rgba(255,106,213,0.2)'
                }}
              />
            </motion.a>

            {/* X/Twitter */}
            <motion.a
              href="https://x.com/talksyzz7o?t=B7caPzPf4kNC0eIK0tkEag&s=09"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border flex items-center justify-center group relative overflow-hidden"
              style={{ borderColor: 'var(--border-color)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'blur(10px)' }}
              />
              <svg className="w-5 h-5 stroke-cyan-300 relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4l6 6m0 0l10 10M10 10l10-6M10 10l-6 10" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
              <motion.div
                className="absolute inset-0 rounded-xl transition-shadow duration-500"
                animate={{
                  boxShadow: 'none'
                }}
                whileHover={{
                  boxShadow: '0 0 25px rgba(0,240,255,0.3), inset 0 0 25px rgba(0,240,255,0.2)'
                }}
              />
            </motion.a>

            {/* Reddit */}
            <motion.a
              href="https://www.reddit.com/u/Talksyzz7o/s/O4cVHubNwR"
              target="_blank"
              rel="noreferrer"
              aria-label="Reddit"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-md border flex items-center justify-center group relative overflow-hidden"
              style={{ borderColor: 'var(--border-color)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'blur(10px)' }}
              />
              <svg className="w-5 h-5 stroke-orange-300 relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" strokeWidth="1.5" fill="none"/>
                <path d="M8 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M13 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0" strokeWidth="1.5" fill="none"/>
                <path d="M12 14v2M16 17c-2 1.5-6 1.5-8 0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M12 8V6M16.5 7.5L17.5 6.5M7.5 7.5L6.5 6.5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
              <motion.div
                className="absolute inset-0 rounded-xl transition-shadow duration-500"
                animate={{
                  boxShadow: 'none'
                }}
                whileHover={{
                  boxShadow: '0 0 25px rgba(255,155,61,0.3), inset 0 0 25px rgba(255,155,61,0.2)'
                }}
              />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:talksyzz7o@gmail.com"
              aria-label="Email"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border flex items-center justify-center group relative overflow-hidden"
              style={{ borderColor: 'var(--border-color)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'blur(10px)' }}
              />
              <svg className="w-5 h-5 stroke-purple-300 relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" fill="none"/>
                <path d="M3 7l9 6 9-6" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <motion.div
                className="absolute inset-0 rounded-xl transition-shadow duration-500"
                animate={{
                  boxShadow: 'none'
                }}
                whileHover={{
                  boxShadow: '0 0 25px rgba(192,132,252,0.3), inset 0 0 25px rgba(192,132,252,0.2)'
                }}
              />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center relative" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-talksy-purple to-talksy-lilac rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[color:var(--text-secondary)] text-xs"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}