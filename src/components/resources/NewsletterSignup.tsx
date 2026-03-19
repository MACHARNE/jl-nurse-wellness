'use client';

import { motion } from 'framer-motion';

export default function NewsletterSignup() {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-2xl sm:p-10 md:p-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-gold/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
              Stay in the Loop
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Get thoughtful updates, new guides, and practical next steps
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Join the list for polished, useful advice designed for nurses building
              something bigger.
            </p>
          </div>

          <form className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-btn border border-white/10 bg-white px-5 py-4 text-base text-gray-900 outline-none ring-0 transition-all duration-300 placeholder:text-gray-500 focus:border-gold focus:ring-4 focus:ring-gold/20"
            />
            <button
              type="submit"
              className="rounded-btn bg-gold px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-gold-dark"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
