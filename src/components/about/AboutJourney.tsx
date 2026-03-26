// src/components/about/AboutJourney.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const milestones = [
  {
    year: '2015',
    title: 'Started Nursing',
    description: 'Began career as a registered nurse in Toronto.',
    icon: '👩‍⚕️',
  },
  {
    year: '2018',
    title: 'First Business',
    description: 'Launched first healthcare consulting service.',
    icon: '💼',
  },
  {
    year: '2020',
    title: 'Nurse2Agency Born',
    description: 'Founded platform to help nurses become entrepreneurs.',
    icon: '🚀',
  },
  {
    year: '2024',
    title: '100+ Nurses Helped',
    description: 'Successfully guided over 100 nurses to business ownership.',
    icon: '🌟',
  },
];

export default function AboutJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            The Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Jean&apos;s Path to{' '}
            <span className="text-gold">Empowerment</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 origin-top"
          />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.15 }}
                className={`absolute left-8 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold z-10`}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gold/30 rounded-full"
                />
              </motion.div>

              {/* Content */}
              <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{milestone.icon}</span>
                    <span className="text-2xl font-bold text-gold">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
