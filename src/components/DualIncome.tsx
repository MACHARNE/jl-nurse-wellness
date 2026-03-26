'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DualIncome() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-gold/5 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Wellness Meets <span className="text-gold">Opportunity</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Farmasi</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              Beauty, skincare, personal care, and wellness products with a
              flexible business opportunity.
            </p>
            <Link
              href="/farmasi#farmasi-products"
              className="mt-6 inline-flex rounded-btn bg-gold px-6 py-3 text-sm font-semibold text-primary-dark transition hover:bg-gold-dark sm:text-base"
            >
              Visit Farmasi Store
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Kokoshea</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              Natural skincare powered by shea-based wellness and self-care
              essentials.
            </p>
            <Link
              href="/kokoshea#kokoshea-products"
              className="mt-6 inline-flex rounded-btn bg-gold px-6 py-3 text-sm font-semibold text-primary-dark transition hover:bg-gold-dark sm:text-base"
            >
              Shop Kokoshea
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
