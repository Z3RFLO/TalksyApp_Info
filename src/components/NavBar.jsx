import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../lib/motionVariants';
import { useState, useEffect, useRef } from 'react';

import { useWaitlistModal } from '../contexts/WaitlistModalContext';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCenterLinks, setShowCenterLinks] = useState(true);
  const [showMobileButton, setShowMobileButton] = useState(true);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const { openModal } = useWaitlistModal();

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;
      const diff = current - lastScrollY.current;
      // scroll down -> hide, scroll up -> show (threshold 8px)
      if (diff > 8) {
        setShowCenterLinks(false);
        setShowMobileButton(false);
      }
      else if (diff < -8) {
        setShowCenterLinks(true);
        setShowMobileButton(true);
      }
      lastScrollY.current = current;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          <motion.div 
            variants={fadeIn} 
            className="flex items-center gap-4"
            initial={false}
            animate={showMobileButton ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            
            {/* Join button - always visible on desktop, hidden on mobile when scrolling down */}
              <motion.button 
                onClick={openModal}
                className="hidden md:inline-flex bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold relative overflow-hidden flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="relative z-10">Join Waitlist</motion.span>
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

              {/* Mobile Join button - hides on scroll down */}
              <motion.button 
                onClick={openModal}
                className="md:hidden bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold relative overflow-hidden flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="relative z-10">Join Waitlist</motion.span>
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

          {/* Mobile Menu - Hidden, not showing hamburger */}
        </div>

        {/* Mobile Menu - Hidden, not showing hamburger */}
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
                    <button 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        openModal();
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 w-full px-6 py-2 rounded-full text-white font-semibold cursor-pointer"
                    >
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
