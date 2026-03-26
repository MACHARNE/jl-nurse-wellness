'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Fits a nurse schedule',
    description: 'Flexible selling and sharing that can work around shifts, family life, and recovery time.',
  },
  {
    title: 'Products people reorder',
    description: 'Skincare, beauty, and wellness categories that encourage repeat interest and relationship-driven sales.',
  },
  {
    title: 'Low-friction entry point',
    description: 'A strong option for nurses who want an additional income stream before scaling something larger.',
  },
];

export default function WhyFarmasi() {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
            Why Farmasi
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-bold text-primary">{reason.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
