import { motion } from 'framer-motion';
import { slideInUp } from '../lib/motionVariants';
import { useState } from 'react';

export default function FeatureCard({ title, description, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
    variants={slideInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay }}
    className="p-6 rounded-2xl relative overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[var(--border-color)] hover:border-[var(--card-hover)] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* subtle bg */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" />

      <div className="w-14 h-14 bg-gradient-to-r from-[#2f1b55] to-[#3b2b7a] rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-md">
      <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.06)] dark:bg-[rgba(10,10,12,0.6)] flex items-center justify-center theme-text-primary text-sm font-bold"> {title.charAt(0)} </div>
      </div>

  <h3 className={`card-title mb-2 ${isHovered ? 'theme-text-primary' : 'theme-text-primary/90'}`}>{title}</h3>
  <p className="text-sm theme-text-secondary mb-4 leading-relaxed">{description}</p>

      <div className="mt-4 h-1 bg-gradient-to-r from-[#6b4bd8] to-[#8ac8ff] rounded-full origin-left relative z-10" style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }} />

      {/* glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{ boxShadow: isHovered ? '0 0 40px rgba(95,178,255,0.06), 0 12px 40px rgba(139,100,193,0.06)' : '0 0 0px rgba(0,0,0,0)' }}
        transition={{ duration: 0.28 }}
      />
    </motion.div>
  );
}
