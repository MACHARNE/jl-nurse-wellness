'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Choose your focus',
    description: 'Start with product categories that feel natural to your audience and your lifestyle.',
  },
  {
    step: '02',
    title: 'Build your routine',
    description: 'Use a simple weekly rhythm for content, follow-up, and customer care without overwhelm.',
  },
  {
    step: '03',
    title: 'Grow with consistency',
    description: 'Turn referrals, repeat buyers, and clear messaging into a sustainable side income.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
            How to get started
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-[1px] shadow-xl"
            >
              <div className="h-full rounded-3xl bg-white p-8">
                <div className="text-sm font-bold tracking-[0.3em] text-gold">{step.step}</div>
                <h3 className="mt-4 text-2xl font-bold text-primary">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
