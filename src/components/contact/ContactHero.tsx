// src/components/contact/ContactHero.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 text-primary md:py-28">
      {/* Animated background elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-64 h-64 bg-gold/10 opacity-0 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gold/10 opacity-0 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold"
        >
          Get in Touch
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          Let&apos;s{' '}
          <span className="text-gold relative inline-block">
            Connect
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-gold/50 rounded-full"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg text-charcoal/80 sm:text-xl"
        >
          Have questions about our programs? Ready to start your journey? 
          We&apos;re here to help you every step of the way.
        </motion.p>
      </div>
    </section>
  );
}
