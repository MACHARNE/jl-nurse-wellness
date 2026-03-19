// src/components/about/AboutCTA.tsx
'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/20 px-4 py-2 rounded-full mb-6"
          >
            Work With Jean
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Your{' '}
            <span className="text-gold">Journey?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join hundreds of Canadian nurses who have transformed their careers through 
            business ownership. Let Jean guide you every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-gold text-primary px-8 py-4 rounded-btn font-bold text-lg hover:bg-gold-dark transition transform hover:scale-105 shadow-2xl"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/program"
              className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-btn font-bold text-lg hover:bg-white hover:text-primary transition transform hover:scale-105"
            >
              Explore Programs
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 pt-12 border-t border-white/20"
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '100+', label: 'Nurses Helped' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}