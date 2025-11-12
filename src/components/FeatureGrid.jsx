import { motion } from 'framer-motion';
import { staggerCards } from '../lib/motionVariants';
import FeatureCard from './FeatureCard';

// icons for features
import { BsChatDots } from 'react-icons/bs';
import { FaSmile, FaUsers, FaFire } from 'react-icons/fa';
import { GiSparkles } from 'react-icons/gi';
import { MdOutlineAccessTime } from 'react-icons/md';

const features = [
  { title: 'Real-Time Chat', description: 'Talk, react, and vibe instantly, in a real conversation, not a text thread', Icon: BsChatDots, colors: ['#6EE7B7', '#34D399'] },
  { title: 'Your Vibes', description: 'Express yourself freely with moods, reactions, and real emotion.', Icon: FaSmile, colors: ['#FDE68A', '#FCA5A5'] },
  { title: 'Group Energy', description: 'Vibe with like-minded people', Icon: FaUsers, colors: ['#C7B2FF', '#8B5CF6'] },
  { title: 'Icebreakers', description: 'Never run out of things to say — Talksy helps you spark real conversations effortlessly.', Icon: GiSparkles, colors: ['#FBCFE8', '#F472B6'] },
  { title: 'TalkStreaks', description: 'Build deeper connections through daily talk streaks that keep the energy alive.', Icon: FaFire, colors: ['#FFD580', '#FF7A59'] },
  { title: 'Tempo', description: 'Show how you feel, match with the right vibes, and let conversations flow from emotion.', Icon: MdOutlineAccessTime, colors: ['#93C5FD', '#60A5FA'] }
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
            <FeatureCard key={f.title} title={f.title} description={f.description} delay={i * 0.12} Icon={f.Icon} colors={f.colors} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
