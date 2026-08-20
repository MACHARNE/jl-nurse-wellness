'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const heroImages = [
  {
    src: '/images/kokoshea/kokoshea1.png',
    alt: 'Kokoshea natural skincare display',
    position: 'object-center',
  },
  {
    src: '/images/kokoshea/jlself2.png',
    alt: 'Jean Lewis at Kokoshea brand event',
    position: 'object-[58%_45%]',
  },
];

export default function KokosheaHero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = heroImages[activeImageIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gold/10" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-background" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl leading-none text-[#d81b72] sm:text-6xl md:text-7xl"
            style={{
              fontFamily: '"Blackadder ITC", "Segoe Script", "Brush Script MT", cursive',
              textShadow: '0 8px 24px rgba(216,27,114,0.18)',
            }}
          >
            Welcome to the Alliance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="max-w-2xl text-lg font-semibold leading-relaxed text-primary sm:text-xl md:text-2xl"
          >
            A refined beauty and wellness collection rooted in natural ingredients,
            created for skin that feels nourished, luminous, and confidently cared
            for from daily body rituals to polished beauty moments.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[620px] lg:mx-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] border border-gold/20 bg-gold/10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-primary shadow-[0_32px_80px_-32px_rgba(11,31,58,0.55)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage.src}
                initial={{ opacity: 0, scale: 1.06, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0% 0 0)' }}
                exit={{ opacity: 0, scale: 1.02, clipPath: 'inset(0 0 0 100%)' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority={activeImageIndex === 0}
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className={`object-cover ${activeImage.position}`}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
            <div className="absolute bottom-5 left-5 flex gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show Kokoshea hero image ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === activeImageIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/55'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
