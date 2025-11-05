import { motion } from 'framer-motion';
import { fadeIn, float, parallax } from '../lib/motionVariants';
import { useInView } from 'react-intersection-observer';

export default function Showcase() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
  <section id="showcase" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--bg-gradient-start), var(--bg-gradient-end))' }}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-talksy-purple/20 to-talksy-blue/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-talksy-lilac/10 rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Simplified showcase: CTA + decorative blobs (dashboard removed) */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title font-bold theme-text-primary mb-4">    Talksy<span className="bg-clip-text text-transparent bg-gradient-to-r from-talksy-purple to-talksy-lilac inline-block whitespace-nowrap">Action</span></h2>
          <p className="text-lg theme-text-secondary max-w-2xl mx-auto mb-8">We are still working on the app.</p>
            <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">Available Soon</button>
            <a href="#" className="px-6 py-3 rounded-full border" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}>Contact Sales</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
