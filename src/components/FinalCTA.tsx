'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="strategy-call"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 text-white sm:py-24 md:py-28"
    >
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Ready to Build Your Next Chapter?
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact#strategy-call"
              className="inline-flex rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-gold-dark"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/resources#free-guides"
              className="inline-flex rounded-btn border-2 border-gold/40 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-gold/10"
            >
              Explore All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
