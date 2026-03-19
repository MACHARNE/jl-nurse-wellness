'use client';

import { motion } from 'framer-motion';

export default function PainPoint() {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block rounded-full bg-gold/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold sm:px-4 sm:py-2 sm:text-sm"
        >
          The Reality
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 sm:mt-6 mb-4 sm:mb-8"
        >
          Tired of Burnout, Long Shifts,{' '}
          <span className="gradient-text">and Income Limits?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-4"
        >
          You did not become a nurse to feel stuck. Long hours, limited income, and lack
          of control can make it difficult to grow with confidence.
        </motion.p>
      </div>
    </section>
  );
}
