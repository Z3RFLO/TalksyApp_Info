import { motion } from 'framer-motion';

const features = [
  {
    title: 'Real talks. Real people.',
    text: 'No chaos, no clout — just chill convos that actually mean something.'
  },
  {
    title: 'Social got loud.',
    text: 'Talksy keeps it quiet — a cleaner space to connect, think, and breathe.'
  },
  {
    title: 'Less scroll. More soul.',
    text: 'Every pixel is built for real connection, not comparison.'
  },
  {
    title: 'Minimal. Gen-Z coded.',
    text: 'Like Discord met Calm — sleek, simple, and peaceful.'
  },
  {
    title: 'Built for good vibes.',
    text: 'No noise, no pressure — just honest energy and real people.'
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function DifferentSection() {
  return (
    <section id="different" className="py-24 relative overflow-hidden transition-colors duration-300 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-[#050509] dark:to-[#0A0A12]">
      {/* Enhanced background particles with motion */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-300/20 to-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
      </div>

      {/* Enhanced section title with neon glow */}
      <motion.div 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.35 }} 
        className="container mx-auto px-6 text-center mb-16"
      >
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent animated-gradient-text theme-text-primary inline-block whitespace-nowrap">
          What makes us different?
        </h3>
        <p className="mt-4 text-base md:text-lg theme-text-secondary font-light">
          Talksy — a calmer, cleaner way to connect.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="h-0.5 w-32 bg-gradient-to-r from-[#00f0ff] via-[#c084fc] to-[#00f0ff] rounded-full shadow-[0_0_20px_rgba(0,240,255,0.5)] animate-pulse" />
        </div>
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {features.map((f, idx) => (
            <motion.article
              key={f.title}
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 25px 50px -12px rgba(0, 240, 255, 0.15)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 200, 
                damping: 20
              }}
              className="relative group"
            >
              {/* Glass card with enhanced hover effects */}
              <div className="h-full p-8 rounded-2xl backdrop-blur-xl transition-colors duration-300 theme-card">
                <motion.div 
                  animate={{ y: [0, -8, 0] }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6 + idx * 0.8, 
                    repeatType: 'mirror', 
                    ease: 'easeInOut' 
                  }} 
                  className="h-full"
                >
                  <h4 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-3 text-black dark:text-white group-hover:text-cyan-300 dark:group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#c084fc] shadow-[0_0_10px_rgba(0,240,255,0.5)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] transition-shadow duration-300" />
                    {f.title}
                  </h4>
                  <p className="text-base text-black/60 dark:text-white/60 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors duration-300">{f.text}</p>
                </motion.div>

                {/* Enhanced neon border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg,rgba(0,240,255,0.1),rgba(192,132,252,0.1))',
                    boxShadow: '0 0 30px rgba(0,240,255,0.2)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
