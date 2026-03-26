'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const modules = [
  'Business mindset for nurses',
  'Agency model overview',
  'Branding and positioning',
  'Client acquisition basics',
  'Operations and staffing',
  'Growth planning',
];

export default function ProgramIncludes() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">What the program includes</h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <motion.article
              key={module}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                  +
                </span>
                <h3 className="text-lg font-semibold text-primary">{module}</h3>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/contact#strategy-call"
            className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition hover:scale-105 hover:bg-gold-dark"
          >
            Apply for Nurse2Agency
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
