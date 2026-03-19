'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ResourceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 text-white md:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Resources
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Professional guidance for nurses building income beyond the bedside
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
            Explore guides, insights, and practical tools designed to help Canadian
            nurses move from curiosity to confident action.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-gold-dark"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/program"
              className="rounded-btn border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Explore the Core Program
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
