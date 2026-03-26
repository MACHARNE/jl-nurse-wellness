'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutCTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
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
            className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition hover:scale-105 hover:bg-gold-dark"
          >
            Book a Strategy Call
          </Link>
          <Link
            href="/resources"
            className="rounded-btn border-2 border-white/80 px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-primary"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
