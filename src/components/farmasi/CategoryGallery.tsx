// src/components/farmasi/CategoryGallery.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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
  const [visibleCards, setVisibleCards] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
        return;
      }
      if (window.innerWidth >= 640) {
        setVisibleCards(2);
        return;
      }
      setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxSlide = Math.max(0, categories.length - visibleCards);
  const goNext = () => setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  const goPrev = () => setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [currentSlide, maxSlide]);

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

        <div className="relative">
          <div className="mb-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm transition hover:bg-primary hover:text-white"
              aria-label="Previous category"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm transition hover:bg-primary hover:text-white"
              aria-label="Next category"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${(currentSlide * 100) / visibleCards}%` }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ flex: `0 0 ${100 / visibleCards}%` }}
                  className="px-3"
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
            </motion.div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index ? 'w-6 bg-primary' : 'w-2.5 bg-primary/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
