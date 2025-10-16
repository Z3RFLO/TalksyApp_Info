import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Create Profile',
    text: 'Share your interests and hobbies to help others discover who you are.',
    colors: ['#ff8fb0', '#a855f7'],
  },
  {
    id: 2,
    title: 'Go to Feed',
    text: 'Explore a calm, scroll-free space where you can see real posts, not clout. Discover chill convos and authentic people.',
    colors: ['#00f0ff', '#7c3aed'],
  },
  {
    id: 3,
    title: 'Start Talking',
    text: 'Begin meaningful conversations through voice chat or text messaging.',
    colors: ['#34d399', '#06b6d4'],
  },
  {
    id: 4,
    title: 'Build Connections',
    text: 'Develop lasting friendships through authentic and regular interactions.',
    colors: ['#f97316', '#f43f5e'],
  },
];

const iconVariants = {
  rest: { scale: 1, boxShadow: '0 6px 20px rgba(0,0,0,0.25)' },
  hover: { scale: 1.05, boxShadow: '0 20px 45px rgba(0,0,0,0.35)' },
};

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function GlowingCircle({ colors, children }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={iconVariants}
      className="relative flex items-center justify-center rounded-full w-16 h-16 md:w-20 md:h-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-full blur-[10px] opacity-60"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${colors[0]}, transparent 25%), linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
        }}
      />
      <div
        className="relative rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white font-semibold"
        style={{
          background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
          boxShadow: `0 8px 30px ${colors[0]}33, inset 0 -6px 16px ${colors[1]}66`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function HowTalksyWorks() {
  return (
    <section id="how-talksy-works" className="relative py-20 overflow-hidden bg-black text-white">
      {/* Soft animated background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/60 via-transparent to-[#03040a]/80" />
        {/* floating particles */}
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full"
            style={{
              width: `${6 + (i % 3) * 4}px`,
              height: `${6 + (i % 3) * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 40%)',
            }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.8, 0.2], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300">
            How Talksy Works
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70">
            Four simple steps to start building meaningful connections and lasting friendships.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-6"
        >
          {/* Horizontal connector line for md+ */}
          <div className="hidden md:block absolute left-0 right-0 top-[58%] -z-10 pointer-events-none">
            <div className="mx-auto w-11/12 h-px bg-gradient-to-r from-transparent via-[#7c3aed33] to-transparent" />
          </div>

          {steps.map((s, idx) => (
            <motion.div
              key={s.id}
              variants={item}
              className="flex-1 relative flex flex-col items-center text-center md:text-left md:items-center"
            >
              <div className="flex items-center gap-4 md:flex-col md:gap-3">
                <GlowingCircle colors={s.colors}>
                  <span className="text-sm md:text-base">{idx + 1}</span>
                </GlowingCircle>

                {/* vertical hide for md */}
                <div className="hidden md:block h-px w-12 bg-gradient-to-r from-transparent via-[#00f0ff33] to-transparent -ml-3" />

                <div className="max-w-xs">
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{s.text}</p>
                </div>
              </div>

              {/* faint connector for mobile (vertical) */}
              {idx < steps.length - 1 && (
                <div className="md:hidden mt-4 w-px h-8 bg-gradient-to-b from-transparent via-[#7c3aed33] to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
