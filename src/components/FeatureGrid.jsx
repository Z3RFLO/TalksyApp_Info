import { motion } from 'framer-motion';
import { staggerCards } from '../lib/motionVariants';
import FeatureCard from './FeatureCard';

const features = [
  { title: 'Real-Time Chat', description: 'Live conversations in topic rooms' },
  { title: 'Anonymous Vibes', description: 'Express yourself freely' },
  { title: 'Group Energy', description: 'Vibe with like-minded people' },
  { title: 'Icebreakers', description: 'Never run out of things to say' },
  { title: 'TalkStreaks', description: 'Build your conversation momentum' },
  { title: 'Mood Tags', description: 'Show your personality' }
];

export default function FeatureGrid() {
  return (
  <section id="features" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--bg-gradient-start), var(--bg-gradient-end))' }}>
      {/* subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-8 w-72 h-72 bg-gradient-to-br from-[#071029] to-[#06203a] rounded-full opacity-30 filter blur-3xl animate-blob-drift" />
        <div className="absolute bottom-8 right-10 w-80 h-80 bg-gradient-to-tr from-[#0b1630] to-[#07203a] rounded-full opacity-25 filter blur-3xl animate-blob-drift-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
            <h2 className="section-title theme-text-primary mb-4 glow-strong">Why Choose <motion.span
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 whitespace-nowrap"
            >Talksy?</motion.span></h2>
          <p className="text-lg theme-text-secondary max-w-2xl mx-auto">A curated set of features focused on making conversations feel real, spontaneous, and safe.</p>
        </motion.div>

        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} delay={i * 0.12} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
