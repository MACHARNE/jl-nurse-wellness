'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FarmasiCTA() {
  return (
    <section id="join" className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white md:py-28">
      <div className="max-w-5xl mx-auto px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Choose your next step with Farmasi
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/farmasi#store"
              className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-gold-dark"
            >
              Shop Farmasi
            </Link>
            <Link
              href="/farmasi#join"
              className="rounded-btn border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Join the Farmasi Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
