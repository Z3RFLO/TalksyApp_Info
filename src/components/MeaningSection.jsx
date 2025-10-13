import { motion } from 'framer-motion';

export default function MeaningSection() {
  return (
    <section id="meaning" className="py-32 flex items-center justify-center transition-colors duration-300 bg-gradient-to-b from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[clamp(36px,6vw,88px)] font-extrabold leading-tight theme-text-primary"
        >
          <span className="block theme-text-primary">it’s not just</span>
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="block gradient-meaning text-transparent bg-clip-text mt-2 theme-text-primary"
            transition={{ duration: 0.25 }}
          >
            about chatting
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 text-xl theme-text-secondary max-w-3xl mx-auto"
        >
          Talksy is a safe, chill space where people can just vibe, vent, and connect without filters or pressure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-sm theme-text-secondary"
        >
          we blend tech and simplicity to help people talk about what really matters.
        </motion.div>
      </div>
    </section>
  );
}
