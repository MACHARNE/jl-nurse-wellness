'use client';

import { motion } from 'framer-motion';

export default function ResourceHero() {
  return (
    <section className="relative overflow-hidden py-20 text-primary md:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 opacity-0 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold/10 opacity-0 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
            style={{ textShadow: '0 1px 0 rgba(255,255,255,0.92), 0 4px 12px rgba(11,31,58,0.16), 0 12px 28px rgba(11,31,58,0.12)' }}
          >
            Professional guidance for nurses{' '}
            <span className="text-gold">building income beyond the bedside</span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-charcoal/80"
            style={{ textShadow: '0 1px 0 rgba(255,255,255,0.72), 0 8px 18px rgba(11,31,58,0.08)' }}
          >
            Explore guides, insights, and practical tools designed to help Canadian
            nurses move from curiosity to confident action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
