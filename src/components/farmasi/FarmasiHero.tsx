// src/components/farmasi/FarmasiHero.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FarmasiHero() {
  return (
    <>
      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-black">
        <video
          src="/images/farmasi/farmasi (1).mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full min-h-[72vh] w-full object-cover object-center"
        />
      </section>

      <section className="bg-background py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
              className="mb-6 inline-block rounded-full border border-gold/30 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold backdrop-blur-sm"
            >
              Farmasi with JLNurse360
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
              style={{ textShadow: '0 1px 0 rgba(255,255,255,0.92), 0 4px 12px rgba(11,31,58,0.16), 0 12px 28px rgba(11,31,58,0.12)' }}
            >
              Beauty, Wellness, and <span className="text-gold">Flexible Income</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 mx-auto max-w-2xl rounded-2xl border border-white/70 bg-white/65 px-5 py-4 text-lg text-charcoal shadow-xl backdrop-blur-sm sm:text-xl md:text-2xl"
              style={{ textShadow: '0 1px 0 rgba(255,255,255,0.72), 0 8px 18px rgba(11,31,58,0.08)' }}
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
                href="/farmasi#why-farmasi"
                className="rounded-btn border-2 border-primary/20 bg-white/75 px-8 py-4 text-lg font-bold text-primary backdrop-blur-sm transition transform hover:scale-105 hover:bg-white hover:text-primary-dark"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
