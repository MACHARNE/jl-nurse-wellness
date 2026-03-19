'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Business Blueprint',
    description: 'Clear steps for launching a nurse-led business with less guesswork and more momentum.',
  },
  {
    title: 'Canadian Context',
    description: 'Guidance shaped for the realities of regulation, staffing, and healthcare demand in Canada.',
  },
  {
    title: 'Mentorship and Support',
    description: 'Practical coaching, accountability, and next-step clarity while you build with confidence.',
  },
];

export default function Solution() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            The Solution
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            A Professional Path from{' '}
            <span className="text-gold">Bedside to Business</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            JL Nurse & Wellness helps nurses turn experience into ownership with a model
            that feels structured, credible, and achievable.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="hover-card rounded-3xl border border-gray-100 bg-background p-8 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-bold text-primary">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/program"
            className="inline-flex items-center gap-3 rounded-btn bg-primary px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-dark"
          >
            Explore the Program
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
