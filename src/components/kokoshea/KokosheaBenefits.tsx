'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    title: 'Naturally grounded',
    description: 'Ingredients and routines that support a cleaner, more intentional approach to skincare.',
  },
  {
    title: 'Daily-use friendly',
    description: 'Practical products made for real schedules, not complicated routines.',
  },
  {
    title: 'Wellness aligned',
    description: 'A product story that resonates with nurses who care about health, confidence, and consistency.',
  },
  {
    title: 'Giftable and shareable',
    description: 'Elegant products that feel easy to recommend and easy to reorder.',
  },
  {
    title: 'Soft luxury feel',
    description: 'Aesthetic, nourishing, and premium without losing warmth or accessibility.',
  },
  {
    title: 'Community potential',
    description: 'A strong entry point for nurses who want to pair products with wellness conversations.',
  },
];

export default function KokosheaBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Product Benefits
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
            Beautifully positioned for wellness-focused professionals
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl bg-background p-8 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">{benefit.title}</h3>
              <p className="mt-3 text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
