import { motion } from 'framer-motion';
import { slideInUp } from '../lib/motionVariants';
import { useState } from 'react';

export default function FeatureCard({ title, description, delay = 0, Icon = null, colors = ['#8B5CF6', '#FF6AD5'] }) {
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

      {/* Feature badge: render provided Icon with color pair */}
      <div className="mb-6 relative z-10">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`} style={{ background: `linear-gradient(135deg, ${colors[0]}33, ${colors[1]}22)` }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}>
            {Icon ? <Icon className="w-6 h-6" /> : title.split(' ').slice(0,2).map(w => w.charAt(0)).join('').toUpperCase()}
          </div>
        </div>
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
