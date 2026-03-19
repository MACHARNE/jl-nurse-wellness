'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    eyebrow: 'Mission',
    title: 'Help nurses build ownership, freedom, and long-term stability.',
    description:
      'Jean equips nurses with the strategy, confidence, and systems needed to move from overworked employee to respected business owner.',
    accent: 'bg-primary',
    glow: 'bg-primary/10',
  },
  {
    eyebrow: 'Vision',
    title: 'Create a future where nurses lead profitable businesses with impact.',
    description:
      'The goal is bigger than income. It is about helping nurses create jobs, shape care delivery, and design a life with more flexibility and purpose.',
    accent: 'bg-gold',
    glow: 'bg-gold/10',
  },
];

const principles = [
  'Professional execution over hustle culture',
  'Business growth aligned with service and care',
  'Clear systems, ethical leadership, and confidence',
];

export default function AboutMissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Mission and Vision
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Built to help nurses move with clarity, confidence, and professional momentum
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Every part of the brand is designed to make the transition from clinical work
            to entrepreneurship feel structured, elevated, and realistic.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.article
              key={card.eyebrow}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: index * 0.14 }}
              className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
            >
              <div className={`absolute right-6 top-6 h-24 w-24 rounded-full ${card.glow} blur-2xl`} />
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary">
                <span className={`h-2.5 w-2.5 rounded-full ${card.accent}`} />
                {card.eyebrow}
              </span>
              <h3 className="mt-5 max-w-xl text-2xl font-bold text-primary sm:text-3xl">
                {card.title}
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 rounded-3xl border border-primary/10 bg-primary p-8 text-white shadow-2xl"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
                What guides the work
              </span>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                A brand language of trust, warmth, ambition, and practical action
              </h3>
            </div>
            <div className="grid gap-4">
              {principles.map((principle, index) => (
                <div key={principle} className="flex items-start gap-4 rounded-2xl bg-white/5 p-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <p className="leading-relaxed text-gray-200">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
