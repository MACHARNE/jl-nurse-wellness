// src/components/kokoshea/KokosheaBenefits.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    icon: '🌿',
    title: 'Natural Ingredients',
    description: 'Pure, plant-based components that nourish your skin naturally.',
  },
  {
    icon: '✨',
    title: 'Healthy Glowing Skin',
    description: 'Formulated to enhance your natural radiance and vitality.',
  },
  {
    icon: '♻️',
    title: 'Sustainable Beauty',
    description: 'Eco-friendly practices and packaging for a better planet.',
  },
  {
    icon: '💧',
    title: 'Nourishing Formulas',
    description: 'Deeply moisturizing blends that restore and rejuvenate.',
  },
  {
    icon: '🌱',
    title: 'Cruelty-Free',
    description: 'Never tested on animals. Kind to your skin and the earth.',
  },
  {
    icon: '🌸',
    title: 'Gentle Care',
    description: 'Perfect for sensitive skin and daily wellness routines.',
  },
];

export default function KokosheaBenefits() {
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
            Why Choose Kokoshea
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Products Designed to Support
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 200 
                }}
                className="text-4xl mb-4 transform group-hover:scale-110 transition-transform"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}