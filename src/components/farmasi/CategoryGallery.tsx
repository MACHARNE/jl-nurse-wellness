// src/components/farmasi/CategoryGallery.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'Premium Skincare',
    description: 'Nourishing serums, creams for healthy glow.',
    link: '/farmasi/skincare',
  },
  {
    title: 'Professional Makeup',
    description: 'Long-lasting, skin-friendly cosmetics.',
    link: '/farmasi/makeup',
  },
  {
    title: 'Daily Essentials',
    description: 'Natural soaps, body care for wellness routines.',
    link: '/farmasi/essentials',
  },
  {
    title: 'Health Nutrition',
    description: 'Supplements supporting nurse wellness.',
    link: '/farmasi/nutrition',
  },
];

export default function CategoryGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of premium wellness products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.link} className="group block h-full">
                <div className="h-full rounded-xl border border-primary/10 bg-white p-6 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold font-bold">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600 mb-6">{category.description}</p>
                  <span className="inline-flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                    Shop Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
