// src/components/farmasi/CategoryGallery.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'Premium Skincare',
    description: 'Nourishing serums, creams for healthy glow.',
    image: '/images/EKOKOSHA_ALLBARIN1VIEW.jpeg',
    link: '/farmasi/skincare',
  },
  {
    title: 'Professional Makeup',
    description: 'Long-lasting, skin-friendly cosmetics.',
    image: '/images/lipgloss (1).jpeg',
    link: '/farmasi/makeup',
  },
  {
    title: 'Daily Essentials',
    description: 'Natural soaps, body care for wellness routines.',
    image: '/images/EKOKOSHA_CREAMSALL-IN1-VIEW.jpeg',
    link: '/farmasi/essentials',
  },
  {
    title: 'Health Nutrition',
    description: 'Supplements supporting nurse wellness.',
    image: '/images/EKOKOSHA_BAR41.jpeg',
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
              <Link href={category.link} className="group block">
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
                <span className="inline-flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                  Shop Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
