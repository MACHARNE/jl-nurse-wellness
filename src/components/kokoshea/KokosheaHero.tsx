'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const heroImage = '/images/2b37b2b-2f1a-48e0-87a4-611b1923dba3.webp';

export default function KokosheaHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-primary">
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,161,74,0.14),_transparent_45%)]" />
      </div>

      <div className="pointer-events-none absolute left-8 top-20 z-10 hidden h-28 w-28 rounded-full border border-gold/30 bg-white/10 blur-sm lg:block" />
      <div className="pointer-events-none absolute bottom-16 right-10 z-10 hidden h-36 w-36 rounded-full border border-gold/20 bg-gold/10 blur-sm lg:block" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold backdrop-blur-sm"
          >
            Natural Skincare
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.35)' }}
          >
            Pure Care, Beautiful Glow,{' '}
            <span className="text-gold">Naturally Kokoshea</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.35)' }}
          >
            Kokoshea brings together nature-inspired beauty and nourishing care,
            with the hero message sitting above a rich product-led background.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/kokoshea#products"
              className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary shadow-2xl transition hover:scale-105 hover:bg-gold-dark"
            >
              Discover Kokoshea
            </Link>
            <Link
              href="/kokoshea#partner"
              className="rounded-btn border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:text-primary-dark"
            >
              Become a Partner
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
