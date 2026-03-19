// src/components/nurse-agency/CanadianCompliance.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CanadianCompliance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            🇨🇦 Canadian Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Healthcare Compliance Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Healthcare businesses in Canada must comply with provincial regulations and professional standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-primary mb-6">Regulatory Compliance</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700">Professional licensing considerations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700">Business registration basics</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gold/5 to-gold/10 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-primary mb-6">Professional Standards</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700">Ethical service delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700">Risk management awareness</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            * Provincial requirements may vary. Our program provides general guidance; 
            always consult with legal professionals for your specific situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}