'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const jeanImages = [
  { src: '/images/jeabkewis.jpeg', alt: 'Jean Lewis portrait' },
  { src: '/images/jeabkewis2.jpeg', alt: 'Jean Lewis smiling portrait' },
  { src: '/images/jeabkewis3.png', alt: 'Jean Lewis professional portrait' },
  { src: '/images/jeabkewis4.png', alt: 'Jean Lewis wellness portrait' },
];

export default function AboutJean() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImageIndex((current) => (current + 1) % jeanImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const currentImage = jeanImages[currentImageIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="rounded-xl sm:rounded-2xl w-full max-w-[340px] mx-auto relative overflow-hidden shadow-2xl border-4 border-gold/20 aspect-[9/16] bg-primary-dark">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImage.src}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    priority={currentImageIndex === 0}
                    sizes="(max-width: 640px) 340px, 340px"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {jeanImages.map((image, index) => (
                  <span
                    key={image.src}
                    aria-hidden="true"
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentImageIndex ? 'w-7 bg-gold' : 'w-2 bg-white/55'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Meet <span className="text-gold">Jean Lewis</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl lg:mx-0 mx-auto">
              Jean Lewis is a nurse entrepreneur passionate about helping nurses create
              more freedom, confidence, and financial growth. Through JLNurse360, she
              provides guidance for nurses who want to build businesses, develop new
              income streams, and embrace wellness as part of a more balanced lifestyle.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-white bg-gold px-5 sm:px-6 py-2.5 sm:py-3 rounded-btn font-semibold hover:bg-gold-dark transition-all duration-300 group text-sm sm:text-base"
            >
              Read Jean&rsquo;s Story
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
