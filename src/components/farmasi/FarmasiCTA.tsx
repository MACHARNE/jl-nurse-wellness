'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FarmasiCTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white md:py-28">
      <div className="max-w-5xl mx-auto px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full bg-gold/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Ready to Start
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Add a wellness income stream without losing your professional identity
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-300">
            If you want something flexible, product-driven, and easier to start, this is
            a strong next step.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-gold-dark"
            >
              Talk Through the Opportunity
            </Link>
            <Link
              href="/resources"
              className="rounded-btn border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Browse Free Resources
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
