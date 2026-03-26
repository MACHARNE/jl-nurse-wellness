'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IncomeOpportunity() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Income opportunity
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Build a flexible income stream through products you can share confidently,
            with a structure that supports part-time or growth-focused goals.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gold/20 bg-background p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                Flexible Model
              </p>
              <p className="mt-2 text-gray-700">Works around shifts and personal commitments.</p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-background p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                Repeat Sales
              </p>
              <p className="mt-2 text-gray-700">Product categories people reorder consistently.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
          className="relative h-80 overflow-hidden rounded-3xl shadow-xl sm:h-96"
        >
          <Image
            src="/images/marketgrowth.jpg"
            alt="Income growth visualization"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
