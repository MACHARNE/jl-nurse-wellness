// src/components/nurse-agency/AgencyHero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  '/images/nurse-agency/hero-1.jpg',
  '/images/nurse-agency/hero-2.jpg',
  '/images/nurse-agency/hero-3.jpg',
  '/images/nurse-agency/hero-4.jpg',
];

export default function AgencyHero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Ken Burns Effect */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt={`Hero background ${currentImage + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Multiple overlay layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6f3ef]/76 via-[#ffffff]/46 to-[#f6f3ef]/76"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/28 via-transparent to-[#c9a14a]/12"></div>
      </div>

      {/* Floating particles/elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-32 h-32 opacity-20"
      >
        <div className="w-full h-full rounded-full bg-gold/30 blur-3xl"></div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-20 w-40 h-40 opacity-20"
      >
        <div className="w-full h-full rounded-full bg-gold/20 blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main heading with staggered letters */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.03, delayChildren: 0.3 },
              },
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            {'From Nurse to '.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className={char === ' ' ? 'mr-2' : ''}
              >
                {char}
              </motion.span>
            ))}
            <span className="text-gold">Agency Owner</span>
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-1 w-24 bg-gold mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8 mx-auto max-w-2xl rounded-2xl border border-white/70 bg-white/60 px-5 py-4 text-lg text-charcoal shadow-xl backdrop-blur-sm sm:text-xl md:text-2xl"
          >
            A practical path for nurses who want to explore agency ownership and healthcare
            entrepreneurship.
          </motion.p>

          {/* Floating scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary/30">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gold rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
