// src/components/farmasi/FarmasiHero.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FarmasiHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/video/FARMASI.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-contain object-center bg-black"
        />
      </div>

      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/20 rounded-full blur-3xl animate-pulseSlow z-0"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulseSlow z-0" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gold/30"
          >
            Farmasi with JL Nurse 360
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
          >
            Beauty, Wellness, and <span className="text-gold">Flexible Income</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Discover Farmasi products and explore a business opportunity designed
            for busy professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/farmasi#join"
              className="bg-gold text-primary px-8 py-4 rounded-btn font-bold text-lg hover:bg-gold-dark transition transform hover:scale-105 shadow-2xl"
            >
              Start Your Journey
            </Link>
            <Link
              href="/farmasi#learn-more"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-btn font-bold text-lg hover:bg-white hover:text-primary-dark transition transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
