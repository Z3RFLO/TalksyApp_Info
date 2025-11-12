import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/motionVariants';

const cards = [
  {
    title: 'Home Feed',
    bullets: ['Post your thoughts instantly', 'Anyone can like, comment & reply', 'Join open discussions in real time', 'Every message sparks a new talk']
  },
  {
    title: 'The Talksy Vibe',
    bullets: ['Made for genuine people, not influencers', 'Every chat feels personal, not performative', 'Built for chill talks, real stories, and new friends', 'Feels like a late-night convo, but online']
  },
  {
    title: 'Real Connections',
    bullets: ['Friendship focused', 'Deep conversations', 'Shared interests' , 'Meaningful interactions']
  },
 {
    title: 'Quality Community',
    bullets: ['24/7 moderation', 'Report system', 'Community guidelines', 'Verified profiles']
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-300 bg-gradient-to-b from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)]">
      {/* decorative blobs */}
      <div className="absolute -left-32 -top-20 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-20 filter blur-3xl rounded-full" />
      <div className="absolute right-0 top-1/4 w-[420px] h-[420px] bg-blue-500/6 opacity-15 filter blur-2xl rounded-full" />
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <motion.h2 className="section-title leading-tight theme-text-primary">
            <span className="block">Why Choose</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 inline-block whitespace-nowrap">Talksy?</span>
          </motion.h2>
          <p className="theme-text-secondary mt-4">Experience the difference with a platform built for genuine human connections.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((c, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="glass-card p-8 rounded-2xl hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300" whileHover={{ y: -6 }}>
              <h3 className="text-xl font-semibold mb-4 theme-text-primary">{c.title}</h3>
              <p className="theme-text-secondary mb-4">{c.bullets[0] ? '' : ''}</p>
              <ul className="space-y-2 theme-text-secondary">
                {c.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-cyan-300">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
