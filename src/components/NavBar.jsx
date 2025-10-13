import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../lib/motionVariants';
import { useState, useEffect, useRef } from 'react';

export default function NavBar({ theme, setTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCenterLinks, setShowCenterLinks] = useState(true);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;
      const diff = current - lastScrollY.current;
      // scroll down -> hide, scroll up -> show (threshold 8px)
      if (diff > 8) setShowCenterLinks(false);
      else if (diff < -8) setShowCenterLinks(true);
      lastScrollY.current = current;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleTheme() {
    try {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      // document classList and localStorage handled by App
    } catch (e) {}
  }

  return (
  <motion.nav 
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
  className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
  style={{ background: 'linear-gradient(180deg, var(--bg-gradient-start), var(--bg-gradient-end))', borderBottom: 'none' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <motion.span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent animated-gradient-text inline-block whitespace-nowrap" whileHover={{ scale: 1.03 }} transition={{ duration: 0.18 }}>
              <span>Talksy</span>
            </motion.span>
          </motion.div>

          {/* Enhanced Navigation Links */}
          <motion.div 
            initial={false}
            animate={showCenterLinks ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="hidden md:flex items-center space-x-8"
            aria-hidden={!showCenterLinks}
          >
            {[
              { href: '#features', text: 'Features' },
              { href: '#mission', text: 'Mission' },
              { href: '#why-us', text: 'Why Us?' },
              { href: '#how-it-works', text: 'How it Works' }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="theme-text-secondary hover:theme-text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.text}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-talksy-purple to-talksy-lilac"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div variants={fadeIn} className="flex items-center gap-4">
            {/* Enhanced theme toggle */}
            <motion.button 
              onClick={toggleTheme}
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-md border flex items-center justify-center overflow-hidden group"
              style={{ borderColor: 'var(--border-color)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  filter: 'blur(10px)',
                }}
              />
              
              <motion.div
                className="relative z-10 text-2xl"
                initial={false}
                animate={theme === 'light' ? {
                  rotate: 0,
                  scale: 1
                } : {
                  rotate: -180,
                  scale: 0.75
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {theme === 'light' ? (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-yellow-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4" className="fill-yellow-300" />
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m-9-9h1m16 0h1m-1.293-7.293l-.707.707m-12.728 0l-.707-.707m.707 12.728l-.707.707m12.728 0l.707-.707"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </motion.svg>
                )}
              </motion.div>
              
              <motion.div className="absolute inset-0 rounded-xl" style={{ boxShadow: '0 0 20px rgba(147, 51, 234, 0.18)' }} />
            </motion.button>
            
            {/* Join button */}
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold relative overflow-hidden flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="relative z-10">Join</motion.span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            variants={fadeIn}
            className="md:hidden"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 theme-text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
              style={{ borderTop: '1px solid var(--border-color)' }}
            >
              <div className="py-4 space-y-4">
                <a 
                  href="#features" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block theme-text-secondary transition-colors px-4"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e)=> e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e)=> e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Features
                </a>
                <a 
                  href="#mission" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block theme-text-secondary transition-colors px-4"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e)=> e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e)=> e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Mission
                </a>
                <a 
                  href="#why-us" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block theme-text-secondary transition-colors px-4"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e)=> e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e)=> e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Why Us?
                </a>
                <a 
                  href="#how-it-works" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block theme-text-secondary transition-colors px-4"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e)=> e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e)=> e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  How it Works
                </a>
                <div className="px-4 pt-4">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 w-full px-6 py-2 rounded-full text-white font-semibold">
                    Join
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
