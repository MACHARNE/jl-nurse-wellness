// src/components/kokoshea/KokosheaProducts.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const bodyButterImages = [
  '/images/EKOKOSHA-ALL-NATURAL-TURMERIC-SHEABUTTER.jpeg',
  '/images/EKOKOSHA-ALL-NATURAL-TURMERIC-SHEABUTTER-OPEND.jpeg',
  '/images/EKOKOSHA-ALL-NATURAL-TURMERIC-SHEABUTTER-WITHOUTLABEL.jpeg',
  '/images/EKOKOSHA_TORONTO-ORGANIC-COCONUT+SHA-BUTTER.jpeg',
];

const naturalSoapImages = [
  '/images/natural_soap (1).jpeg',
  '/images/natural_soap (2).jpeg',
  '/images/natural_soap (3).jpeg',
  '/images/natural_soap (4).jpeg',
];

const moisturizerImages = [
  '/images/Moisturizers (1).jpeg',
  '/images/Moisturizers (2).jpeg',
  '/images/Moisturizers (3).jpeg',
  '/images/Moisturizers (4).jpeg',
];

const lipGlossImages = [
  '/images/lipgloss (1).jpeg',
  '/images/lipgloss (2).jpeg',
  '/images/lipgloss (3).jpeg',
];

const serumImages = [
  '/images/SERUM (1).jpeg',
  '/images/SERUM (2).jpeg',
  '/images/SERUM (3).jpeg',
  '/images/SERUM (4).jpeg',
];

const facialOilImages = [
  '/images/face-cream.jpeg',
  '/images/EKOKOSHA_ANTI-SGING-SERUM_&ANTI-AGING-NIGHT-SCREM-DIFF-VIEW.jpeg',
];

const products = [
  {
    id: 1,
    name: 'Body Butter',
    description: 'Rich, nourishing body butter for deep hydration',
    price: '$32',
    image: bodyButterImages[0],
    category: 'Body Care',
  },
  {
    id: 2,
    name: 'Facial Oils',
    description: 'Lightweight oils that balance and rejuvenate',
    price: '$28',
    image: facialOilImages[0],
    category: 'Face Care',
  },
  {
    id: 3,
    name: 'Moisturizers',
    description: 'Daily hydration for healthy, glowing skin',
    price: '$35',
    image: moisturizerImages[0],
    category: 'Face Care',
  },
  {
    id: 4,
    name: 'Natural Soaps',
    description: 'Gentle, handmade soaps with natural ingredients',
    price: '$12',
    image: naturalSoapImages[0],
    category: 'Body Care',
  },
  {
    id: 5,
    name: 'Lip Balms',
    description: 'Nourishing lip care for soft, smooth lips',
    price: '$8',
    image: lipGlossImages[0],
    category: 'Lip Care',
  },
  {
    id: 6,
    name: 'Face Serums',
    description: 'Targeted treatments for specific skin concerns',
    price: '$42',
    image: serumImages[0],
    category: 'Face Care',
  },
];

export default function KokosheaProducts() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [bodyButterIndex, setBodyButterIndex] = useState(0);
  const [facialOilIndex, setFacialOilIndex] = useState(0);
  const [naturalSoapIndex, setNaturalSoapIndex] = useState(0);
  const [moisturizerIndex, setMoisturizerIndex] = useState(0);
  const [lipGlossIndex, setLipGlossIndex] = useState(0);
  const [serumIndex, setSerumIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const cardsPerView = 3;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setBodyButterIndex((current) => (current + 1) % bodyButterImages.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFacialOilIndex((current) => (current + 1) % facialOilImages.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNaturalSoapIndex((current) => (current + 1) % naturalSoapImages.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMoisturizerIndex((current) => (current + 1) % moisturizerImages.length);
    }, 2300);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLipGlossIndex((current) => (current + 1) % lipGlossImages.length);
    }, 2100);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSerumIndex((current) => (current + 1) % serumImages.length);
    }, 2250);

    return () => window.clearInterval(interval);
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);
  const totalSlides = Math.max(1, filteredProducts.length - cardsPerView + 1);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  useEffect(() => {
    if (totalSlides <= 1 || isCarouselHovered) return;

    const interval = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % totalSlides);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [isCarouselHovered, totalSlides]);

  const goToPreviousSlide = () => {
    setCurrentSlide((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setCurrentSlide((current) => (current + 1) % totalSlides);
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Natural Care for Every Routine
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-btn text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-white'
                  : 'bg-white text-gray-600 hover:bg-gold/10 hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="group relative overflow-hidden"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          <button
            type="button"
            onClick={goToPreviousSlide}
            aria-label="Previous products"
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-white/95 text-primary shadow-lg opacity-0 transition-all duration-300 hover:border-gold hover:bg-gold/10 group-hover:opacity-100"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToNextSlide}
            aria-label="Next products"
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-white/95 text-primary shadow-lg opacity-0 transition-all duration-300 hover:border-gold hover:bg-gold/10 group-hover:opacity-100"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <motion.div
            animate={{ x: `-${currentSlide * (100 / cardsPerView)}%` }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-[300px] overflow-hidden">
                    {product.id === 1 ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={bodyButterImages[bodyButterIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={bodyButterImages[bodyButterIndex]}
                            alt={`${product.name} ${bodyButterIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </motion.div>
                      </AnimatePresence>
                    ) : product.id === 2 ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={facialOilImages[facialOilIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={facialOilImages[facialOilIndex]}
                            alt={`${product.name} ${facialOilIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </motion.div>
                      </AnimatePresence>
                    ) : product.id === 3 ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={moisturizerImages[moisturizerIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={moisturizerImages[moisturizerIndex]}
                            alt={`${product.name} ${moisturizerIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </motion.div>
                      </AnimatePresence>
                    ) : product.id === 4 ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={naturalSoapImages[naturalSoapIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={naturalSoapImages[naturalSoapIndex]}
                            alt={`${product.name} ${naturalSoapIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </motion.div>
                      </AnimatePresence>
                    ) : product.id === 5 ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={lipGlossImages[lipGlossIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={lipGlossImages[lipGlossIndex]}
                            alt={`${product.name} ${lipGlossIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </motion.div>
                      </AnimatePresence>
                    ) : product.id === 6 ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={serumImages[serumIndex]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={serumImages[serumIndex]}
                            alt={`${product.name} ${serumIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {product.category}
                    </span>
                    <h3 className="mb-2 mt-1 text-xl font-bold text-primary">
                      {product.name}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                      {product.description}
                    </p>
                    <Link
                      href={`/kokoshea/products/${product.id}`}
                      className="inline-flex items-center font-semibold text-gold transition-colors hover:text-gold-dark"
                    >
                      Learn More
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Carousel Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex justify-center gap-2"
        >
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentSlide ? 'bg-gold' : 'bg-gray-300'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
