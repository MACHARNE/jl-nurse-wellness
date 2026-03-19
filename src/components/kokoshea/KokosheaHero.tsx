// src/components/kokoshea/KokosheaHero.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function KokosheaHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kokoshea/kokoshea-hero.jpg"
          alt="Kokoshea Natural Skincare"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/70"></div>
      </div>

      {/* Animated floating leaves/nature elements */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-20 animate-float">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10C30 10 15 25 15 45C15 65 30 80 50 80C70 80 85 65 85 45C85 25 70 10 50 10Z" fill="#C9A14A" fillOpacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 w-40 h-40 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#C9A14A" fillOpacity="0.3"/>
        </svg>
      </div>

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
            Natural Skincare
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
          >
            Inspired by{' '}
            <span className="text-gold">Wellness</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Kokoshea is built around the philosophy that skincare should be natural, 
            nourishing, and empowering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/kokoshea#products"
              className="bg-gold text-primary px-8 py-4 rounded-btn font-bold text-lg hover:bg-gold-dark transition transform hover:scale-105 shadow-2xl"
            >
              Discover Kokoshea
            </Link>
            <Link
              href="/kokoshea#partner"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-btn font-bold text-lg hover:bg-white hover:text-primary-dark transition transform hover:scale-105"
            >
              Become a Partner
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}