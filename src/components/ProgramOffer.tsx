'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const offers = [
  'Step-by-step startup guidance',
  'Nurse entrepreneur roadmap',
  'Business clarity and support',
  'Designed for Canada',
];

export default function ProgramOffer() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Start with <span className="text-gold">Nurse2Agency</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
              If you are ready to move beyond bedside-only income, Nurse2Agency gives
              you a practical path toward business ownership and agency development.
            </p>
            <Link
              href="/program"
              className="mt-6 inline-flex rounded-btn bg-gold px-6 py-3 text-sm font-semibold text-primary transition hover:bg-gold-dark sm:text-base"
            >
              Start Your Nurse2Agency Journey
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm"
          >
            <div className="space-y-4">
              {offers.map((offer) => (
                <div key={offer} className="flex gap-4 rounded-2xl bg-white/5 p-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary">
                    •
                  </div>
                  <p className="leading-relaxed text-gray-200">{offer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
