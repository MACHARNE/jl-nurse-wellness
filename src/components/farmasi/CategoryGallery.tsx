// src/components/farmasi/CategoryGallery.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    title: 'Premium Skincare',
    description: 'Nourishing serums, creams for healthy glow.',
    link: '/farmasi/skincare',
    image: '/images/PK92635_400 1.png',
  },
  {
    title: 'Professional Makeup',
    description: 'Long-lasting, skin-friendly cosmetics.',
    link: '/farmasi/makeup',
    image: '/images/professionalmakup1.png',
  },
  {
    title: 'Daily Essentials',
    description: 'Natural soaps, body care for wellness routines.',
    link: '/farmasi/essentials',
    image: '/images/PK92132_400_2.webp',
  },
  {
    title: 'Health Nutrition',
    description: 'Supplements supporting nurse wellness.',
    link: '/farmasi/nutrition',
    image: '/images/dailyessentailss11.png',
  },
];

export default function CategoryGallery() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextCategory = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const goToCategory = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <section
      id="store"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-16 md:py-24"
    >
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Product Categories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our range of premium wellness products
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="flex min-h-[300px] items-center rounded-2xl bg-white p-8 shadow-xl md:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="w-full"
              >
                <div className="text-center">
                  {categories[currentIndex].image && (
                    <div className="mx-auto mb-5 h-56 w-full max-w-md overflow-hidden rounded-xl bg-gray-50 p-2 md:h-64">
                      <Image
                        src={categories[currentIndex].image}
                        alt={categories[currentIndex].title}
                        width={800}
                        height={500}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <h3 className="mb-3 text-2xl font-bold text-primary md:text-3xl">
                    {categories[currentIndex].title}
                  </h3>
                  <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                    {categories[currentIndex].description}
                  </p>
                  <Link
                    href={categories[currentIndex].link}
                    className="group inline-flex items-center rounded-btn bg-gold px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gold-dark"
                  >
                    Shop Now
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevCategory}
            className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-all duration-300 hover:text-gold hover:shadow-xl md:-translate-x-12"
            aria-label="Previous category"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextCategory}
            className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-all duration-300 hover:text-gold hover:shadow-xl md:translate-x-12"
            aria-label="Next category"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToCategory(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-gold' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to category ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
