'use client';

import { motion } from 'framer-motion';

const focusAreas = [
  {
    title: 'For RPNs and RNs in Canada',
    description:
      'Built around the realities of Canadian nurses who want a practical path beyond traditional bedside work.',
  },
  {
    title: 'Nurse entrepreneurship',
    description:
      'Guidance for nurses exploring business ownership, income growth, and a stronger professional identity.',
  },
  {
    title: 'Wellness and business guidance',
    description:
      'A balanced approach that connects career growth with wellness, confidence, and sustainable decision-making.',
  },
];

export default function AgencyIntro() {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Nurse2Agency
          </span>
          <h2 className="mt-5 text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
            From Nurse to Agency Owner
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700 sm:text-xl">
            Nurse2Agency helps RPNs and RNs in Canada grow through nurse
            entrepreneurship, wellness products, and practical business guidance.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                <span aria-hidden="true">{area.title.charAt(0)}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-primary">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
