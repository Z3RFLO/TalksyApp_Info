import { motion, AnimatePresence } from 'framer-motion';
import { BsDiscord, BsTwitterX, BsInstagram, BsGithub } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { useWaitlistModal } from '../contexts/WaitlistModalContext';

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
  { label: 'Twitter', href: 'https://twitter.com/talksyzz7o', icon: BsTwitterX },
  { label: 'Discord', href: 'https://discord.gg', icon: BsDiscord },
  { label: 'Instagram', href: 'https://www.instagram.com/talksy.in', icon: BsInstagram },
  { label: 'Email', href: 'mailto:talksyzz7o@gmail.com', icon: MdOutlineEmail }
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
          {/* Main grid layout - responsive columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-8">
            {/* Left column - Logo and CTA */}
            <motion.div variants={childVariants} className="lg:col-span-5">
              <h2 className="font-extrabold text-[clamp(28px,5vw,48px)] text-white leading-tight mb-6">
                {title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-8 max-w-md">
                Connect, share, and build relationships in a beautiful, privacy-focused space.
              </p>
              
              {/* Primary CTA */}
              <motion.button
                onClick={() => { if (typeof window !== 'undefined') { const evt = new CustomEvent('open-waitlist'); window.dispatchEvent(evt); } }}
                className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#7A5AF8] to-[#6A48F0] text-white font-medium text-sm sm:text-base shadow-lg hover:scale-[1.03] transition-transform cursor-pointer"
                whileHover={{ scale: 1.03 }}
                aria-label="Join Waitlist"
              >
                Join Waitlist →
              </motion.button>

              {/* Social icons */}
              <div className="mt-8 sm:mt-12 flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-full bg-[#EAE6DA] text-[#111111] hover:bg-gradient-to-r from-[#7A5AF8] to-[#6A48F0] hover:text-white transition-all"
                    whileHover={{ y: -2 }}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Made with love */}
              <p className="mt-8 sm:mt-12 text-xs sm:text-sm text-white/60">
                Made with <span aria-label="love" className="text-pink-500">♥</span> by the Talksy Team
              </p>
            </motion.div>

            {/* Right columns - Navigation Links - Stacked on mobile, 3-column on desktop */}
            <div className="lg:col-span-7 grid grid-cols-3 md:grid-cols-3 gap-6 sm:gap-8">
              {Object.entries(footerLinks).map(([key, links]) => (
                <motion.div key={key} variants={childVariants}>
                  <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-white mb-4 sm:mb-6">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <ul className="space-y-2 sm:space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
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
            className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-white/10 text-center text-xs sm:text-sm text-white/60"
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