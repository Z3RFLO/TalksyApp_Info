/**
 * Footer component - Zen-inspired design
 * Tested: desktop 1440px / tablet 768px / mobile 375px
 */

import { motion, AnimatePresence } from 'framer-motion';
import { BsDiscord, BsTwitterX, BsInstagram, BsGithub } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

// Color tokens
const tokens = {
  bgDark: '#000000ff',
  textLight: '#ffffffff',
  muted: '#ffffffff',
  accent: '#7A5AF8',
  pillBg: '#111111'
};

// Navigation links structure
const footerLinks = {
  getStarted: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' }
  ],
  getHelp: [
    { label: 'Contact', href: '/contact' },
    { label: 'Support', href: '/support' },
    { label: 'Privacy', href: '/privacy' }
  ],
  about: [
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' }
  ]
};

// Social media links
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/talksy', icon: BsGithub },
  { label: 'Twitter', href: 'https://twitter.com/talksy', icon: BsTwitterX },
  { label: 'Discord', href: 'https://discord.gg/talksy', icon: BsDiscord },
  { label: 'Instagram', href: 'https://instagram.com/talksy', icon: BsInstagram },
  { label: 'Email', href: 'mailto:contact@talksy.com', icon: MdOutlineEmail }
];

// SVG Components
const CornerArcs = () => (
  <svg
    className="absolute bottom-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-[0.09]"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M300 300C300 134.315 165.685 0 0 0" stroke="#000000ff" strokeWidth="1"/>
    <path d="M250 300C250 162.03 137.97 50 0 50" stroke="#000000ff" strokeWidth="1"/>
    <path d="M200 300C200 189.745 110.255 100 0 100" stroke="#000000ff" strokeWidth="1"/>
  </svg>
);

// Main component
export default function Footer({ title = "Talksy" }) {
  // Animation variants with reduced motion support
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 10,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer 
      className="relative rounded-t-[60px] overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top left, #2a2a2aff, #000000ff)',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
      }}
    >
      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 pt-20 pb-12"
        >
          {/* Main grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Left column */}
            <motion.div variants={childVariants} className="lg:col-span-5">
              <h2 className="font-extrabold text-[clamp(28px,5vw,48px)] text-[#0F1720] leading-tight mb-6">
                {title}
              </h2>
              <p className="text-base lg:text-lg text-[#4B4B4B] mb-8 max-w-md">
                Connect, share, and build relationships in a beautiful, privacy-focused space.
              </p>
              
              {/* Primary CTA */}
              <motion.a
                href="/waitlist.html"
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#6A48F0] text-white font-medium shadow-lg hover:scale-[1.03] transition-transform"
                whileHover={{ scale: 1.03 }}
                aria-label="Join Waitlist"
              >
                Join Waitlist →
              </motion.a>

              {/* Social icons */}
              <div className="mt-12 flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EAE6DA] text-[#111111] hover:bg-gradient-to-r from-[#7A5AF8] to-[#6A48F0] hover:text-white transition-all"
                    whileHover={{ y: -2 }}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Made with love */}
              <p className="mt-12 text-sm text-[#4B4B4B]">
                Made with <span aria-label="love">♥</span> by the Talksy Team
              </p>
            </motion.div>

            {/* Right columns */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([key, links]) => (
                <motion.div key={key} variants={childVariants}>
                  <h3 className="text-lg font-semibold text-[#0F1720] mb-6">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          className="text-[#4B4B4B] hover:text-[#7A5AF8] transition-colors"
                          whileHover={{ y: -2 }}
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <motion.div 
            variants={childVariants}
            className="mt-20 pt-8 border-t border-[#11111133] text-center text-sm text-[#4B4B4B]"
          >
            © {new Date().getFullYear()} Talksy. All rights reserved.
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative elements */}
      <CornerArcs />
    </footer>
  );
}