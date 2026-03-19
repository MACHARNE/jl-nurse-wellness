// src/components/kokoshea/KokosheaPartner.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function KokosheaPartner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/20 px-4 py-2 rounded-full mb-6"
            >
              Become a Partner
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Interested in sharing{' '}
              <span className="text-gold">Kokoshea products?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Join our partner program and build a wellness business. 
              Share natural skincare that reflects your values while 
              creating additional income.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/kokoshea/partner"
                className="bg-gold text-primary px-8 py-4 rounded-btn font-bold text-lg hover:bg-gold-dark transition transform hover:scale-105 text-center"
              >
                Join Partner Program
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gold/50 bg-transparent text-white px-8 py-4 rounded-btn font-bold text-lg hover:bg-white/10 transition transform hover:scale-105 text-center"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Partner Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-gold text-xl">✓</span>
                <span className="text-sm">Flexible hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold text-xl">✓</span>
                <span className="text-sm">Quality products</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold text-xl">✓</span>
                <span className="text-sm">Training support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold text-xl">✓</span>
                <span className="text-sm">Community</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/kokoshea/partner.jpg"
                alt="Kokoshea Partner"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-2xl shadow-xl"
            >
              <p className="text-sm font-semibold mb-1">Join 50+</p>
              <p className="text-2xl font-bold text-gold">Nurse Partners</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}