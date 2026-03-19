'use client';

import { motion } from 'framer-motion';

const offers = [
  'Launch a nurse staffing or care-based business with a step-by-step roadmap.',
  'Build an additional wellness income stream that works around your nursing schedule.',
  'Learn positioning, pricing, operations, and client growth without starting from scratch.',
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
            <span className="inline-block rounded-full bg-gold/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
              Program Offer
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Build a business model that feels{' '}
              <span className="text-gold">credible, modern, and sustainable</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
              This is not generic entrepreneurship advice. It is designed for nurses who
              want practical steps, professional positioning, and real momentum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm"
          >
            <div className="space-y-4">
              {offers.map((offer, index) => (
                <div key={offer} className="flex gap-4 rounded-2xl bg-white/5 p-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary">
                    {index + 1}
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
