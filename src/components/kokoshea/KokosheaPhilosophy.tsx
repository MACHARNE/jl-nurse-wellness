// src/components/kokoshea/KokosheaPhilosophy.tsx
'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const philosophyPoints = [
  'Natural ingredients',
  'Nourishing formulas',
  'Healthy skin routines',
  'Sustainable beauty',
];

const galleryImages = [
  {
    src: '/images/EKOKOSHA-ALL-PRODUCT-IN-VIEW.jpeg',
    alt: 'Ekokosha skincare collection displayed together',
  },
  {
    src: '/images/EKOKOSHA=GLOSS-STAND.jpeg',
    alt: 'Ekokosha gloss product display',
  },
  {
    src: '/images/EKOKOSHA_TORONTO_TEA-TREE-OIL.jpeg',
    alt: 'Ekokosha tea tree oil skincare product',
  },
];

export default function KokosheaPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold"
            >
              Brand Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
            >
              Nature-Powered Skincare for{' '}
              <span className="text-gold">Healthy Living</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 text-lg leading-relaxed text-gray-600"
            >
              Kokoshea combines natural ingredients with modern skincare innovation.
              Our products are designed for nurses who value wellness and want to
              share products that reflect their lifestyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {philosophyPoints.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs text-white">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-[320px] overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src="/images/EKOKOSHA-ALL-NATURAL-TURMERIC-SHEABUTTER.jpeg"
                alt="Ekokosha all natural turmeric sheabutter"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`relative h-44 overflow-hidden rounded-xl shadow-lg ${
                    index === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
