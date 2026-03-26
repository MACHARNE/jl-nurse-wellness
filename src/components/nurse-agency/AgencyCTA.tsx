'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AgencyCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 text-white md:py-28">
      <motion.div
        animate={{ y: [0, -16, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-8 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 14, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        className="absolute bottom-10 right-8 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Ready to Build Your Next Chapter?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact#strategy-call"
            className="inline-flex items-center justify-center gap-2 rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition hover:scale-105 hover:bg-gold-dark"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V4m8 3V4m-9 7h10M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Book a Strategy Call
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center gap-2 rounded-btn border-2 border-white/80 px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-primary"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5h16M4 12h16M4 16.5h10" />
            </svg>
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
