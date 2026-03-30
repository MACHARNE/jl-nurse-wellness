// src/components/about/AboutHero.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const heroImages = [
  {
    src: '/images/jlself2.png',
    bgPosition: 'center 18%',
    fgPosition: 'center top',
  },
  {
    src: '/images/jlself22.jpeg',
    bgPosition: 'center 16%',
    fgPosition: 'center top',
  },
  {
    src: '/images/jlself23.jpg',
    bgPosition: 'center 20%',
    fgPosition: 'center top',
  },
];

export default function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f3ef_0%,#ffffff_52%,#f6f3ef_100%)] py-16 sm:py-20 md:py-24">
      <div className="absolute left-[-8%] top-10 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-6%] h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ textShadow: '0 1px 0 rgba(255,255,255,0.92), 0 4px 12px rgba(11,31,58,0.16), 0 12px 28px rgba(11,31,58,0.12)' }}
            >
              Meet <span className="text-gold">Jean Lewis</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 inline-flex max-w-xl rounded-2xl border border-white/60 bg-white/34 px-5 py-4 text-xl text-charcoal shadow-[0_18px_45px_-24px_rgba(11,31,58,0.2)] backdrop-blur-md sm:text-2xl"
              style={{ textShadow: '0 1px 0 rgba(255,255,255,0.7), 0 8px 18px rgba(11,31,58,0.08)' }}
            >
              Registered Nurse & Founder of Nurse2Agency
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80"
              style={{ textShadow: '0 1px 0 rgba(255,255,255,0.65), 0 8px 18px rgba(11,31,58,0.06)' }}
            >
              A modern nurse entrepreneur helping professionals move from bedside experience
              into purposeful business ownership, wellness, and long-term freedom.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="mt-8 flex items-center gap-3"
            >
              {heroImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentImage === index ? 'w-12 bg-gold shadow-[0_0_18px_rgba(201,161,74,0.45)]' : 'w-2.5 bg-primary/20'
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative mx-auto flex min-h-[24rem] w-full max-w-[42rem] items-end justify-center lg:min-h-[40rem]"
          >
            <div className="absolute bottom-6 h-20 w-[82%] rounded-[100%] bg-primary/10 blur-2xl" />
            <div className="absolute left-8 top-10 h-24 w-24 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute right-6 top-24 h-28 w-28 rounded-full bg-white/70 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={heroImages[currentImage].src}
                initial={{ opacity: 0, x: 36, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -36, scale: 1.02 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="relative h-[24rem] w-full lg:h-[42rem]"
              >
                <Image
                  src={heroImages[currentImage].src}
                  alt="Jean Lewis portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-contain drop-shadow-[0_28px_45px_rgba(11,31,58,0.18)]"
                  style={{ objectPosition: heroImages[currentImage].fgPosition }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
