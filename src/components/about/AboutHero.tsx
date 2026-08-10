// src/components/about/AboutHero.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f3ef_0%,#ffffff_52%,#f6f3ef_100%)] py-16 sm:py-20 md:py-24">
      <div className="absolute left-[-8%] top-10 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-6%] h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-20 mx-auto max-w-3xl text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ textShadow: '0 1px 0 rgba(255,255,255,0.92), 0 4px 12px rgba(11,31,58,0.16), 0 12px 28px rgba(11,31,58,0.12)' }}
            >
              Meet <span className="text-gold">Jean Lewis</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mx-auto mt-6 inline-flex max-w-xl rounded-2xl border border-white/60 bg-white/34 px-5 py-4 text-xl text-charcoal shadow-[0_18px_45px_-24px_rgba(11,31,58,0.2)] backdrop-blur-md sm:text-2xl"
              style={{ textShadow: '0 1px 0 rgba(255,255,255,0.7), 0 8px 18px rgba(11,31,58,0.08)' }}
            >
              Registered Nurse & Founder of Nurse2Agency
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80"
              style={{ textShadow: '0 1px 0 rgba(255,255,255,0.65), 0 8px 18px rgba(11,31,58,0.06)' }}
            >
              A modern nurse entrepreneur helping professionals move from bedside experience
              into purposeful business ownership, wellness, and long-term freedom.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
