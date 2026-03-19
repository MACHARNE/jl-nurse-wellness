// src/components/about/AboutStory.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    })
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/jean-lewis.jpg"
                alt="Jean Lewis, RN"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
            />

            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              className="absolute bottom-4 right-4 bg-gold text-primary px-4 py-2 rounded-full font-bold shadow-xl"
            >
              RN • Founder
            </motion.div>
          </motion.div>

          {/* Right Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.span
              custom={0.2}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full"
            >
              The Story
            </motion.span>

            <motion.h2
              custom={0.3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl sm:text-4xl font-bold text-primary"
            >
              From{' '}
              <span className="text-gold relative inline-block">
                Bedside
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/30"
                />
              </span>{' '}
              to Business
            </motion.h2>

            <motion.p
              custom={0.4}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-lg text-gray-700 leading-relaxed"
            >
              After years in nursing, Jean saw firsthand how many talented professionals 
              were working hard without the flexibility, financial growth, or personal 
              freedom they deserved.
            </motion.p>

            <motion.p
              custom={0.5}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-lg text-gray-700 leading-relaxed"
            >
              She also recognized that nurses possess many of the exact skills required 
              to build successful businesses: <span className="font-semibold text-primary">leadership, resilience, communication, 
              organization, and the ability to perform under pressure.</span>
            </motion.p>

            <motion.p
              custom={0.6}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-lg text-gray-700 leading-relaxed bg-gold/5 p-6 rounded-2xl border-l-4 border-gold"
            >
              <span className="font-semibold text-primary">Nurse2Agency</span> was created to help 
              nurses channel those strengths into something sustainable and transformative.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}