'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const heroImage = '/images/EKOKOSHA-ALL-PRODUCT-IN-VIEW.jpeg';

export default function KokosheaHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Kokoshea product hero background"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-center"
        />

        <div className="absolute inset-0 opacity-0 bg-[linear-gradient(180deg,rgba(246,243,239,0.22),rgba(246,243,239,0.18))]" />
        <div className="absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_top,_rgba(201,161,74,0.18),_transparent_45%)]" />
      </div>

      <div className="pointer-events-none absolute left-8 top-20 z-10 hidden h-28 w-28 rounded-full border border-gold/30 bg-white/10 opacity-0 blur-sm lg:block" />
      <div className="pointer-events-none absolute bottom-16 right-10 z-10 hidden h-36 w-36 rounded-full border border-gold/20 bg-gold/10 opacity-0 blur-sm lg:block" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ textShadow: '0 1px 0 rgba(255,255,255,0.92), 0 4px 12px rgba(11,31,58,0.16), 0 12px 28px rgba(11,31,58,0.12)' }}
          >
            Natural Skincare for{' '}
            <span className="text-gold">Nourished, Radiant Living</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-8 max-w-2xl rounded-2xl border border-white/70 bg-white/72 px-5 py-4 text-lg text-charcoal shadow-xl sm:text-xl md:text-2xl backdrop-blur-sm"
            style={{ textShadow: '0 1px 0 rgba(255,255,255,0.72), 0 8px 18px rgba(11,31,58,0.08)' }}
          >
            Shop skincare rooted in hydration, self-care, and confidence.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}
