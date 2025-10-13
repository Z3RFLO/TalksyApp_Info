import { motion } from 'framer-motion';
import { fadeIn } from '../lib/motionVariants';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#api' },
      { name: 'Integrations', href: '#integrations' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Status', href: '#status' }
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'Compliance', href: '#compliance' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
  <footer className="border-t" style={{ background: 'linear-gradient(180deg, var(--bg-gradient-start), var(--bg-gradient-end))', borderTopColor: 'var(--border-color)' }}>
    <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-talksy-purple to-talksy-lilac rounded-lg flex items-center justify-center">
                <span className="text-talksy-dark font-bold text-sm">T</span>
              </div>
              <span className="theme-text-primary font-semibold text-lg">Talksy</span>
            </motion.div>
            
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="theme-text-secondary mb-6 max-w-md"
            >
              Transform your conversations with AI-powered insights. 
              Unlock the potential of every interaction with intelligent analysis and real-time recommendations.
            </motion.p>

            {/* Social links */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                >
                  <social.icon className="w-5 h-5 text-talksy-lilac/70 transition-colors" style={{ transition: 'color 0.2s' }} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (sectionIndex + 1) }}
            >
              <h3 className="theme-text-primary font-semibold mb-4 capitalize">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-talksy-lilac/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter signup */}
          <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 mb-8"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <div className="max-w-md">
            <h3 className="theme-text-primary font-semibold mb-4">Stay Updated</h3>
            <p className="text-talksy-lilac/70 text-sm mb-4">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg placeholder-talksy-lilac/50 focus:outline-none transition-colors"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
              />
              <button className="gradient-button px-6 py-2 rounded-lg text-talksy-dark font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
          <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p className="text-talksy-lilac/50 text-sm mb-4 md:mb-0">
            © {currentYear} Talksy. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-talksy-lilac/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
            <a href="#privacy" className="text-talksy-lilac/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-talksy-lilac/50 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
