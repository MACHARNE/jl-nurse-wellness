'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Leadership Under Pressure',
    description:
      'Nurses make high-stakes decisions daily, which builds strong leadership and business judgment.',
    titleColor: 'text-amber-700',
    icon: 'leadership',
  },
  {
    title: 'Communication and Trust',
    description:
      'Nurses communicate clearly with patients, families, and teams, a core strength for client relationships.',
    titleColor: 'text-amber-700',
    icon: 'communication',
  },
  {
    title: 'Systems and Organization',
    description:
      'Nursing requires structure, documentation, and coordination, the same foundation needed to run an agency.',
    titleColor: 'text-amber-700',
    icon: 'systems',
  },
  {
    title: 'Service-Driven Growth',
    description:
      'Nurses understand care outcomes, which helps build ethical, people-centered businesses with impact.',
    titleColor: 'text-amber-700',
    icon: 'growth',
  },
];

function renderIcon(icon: string) {
  const common = 'h-6 w-6 text-white';

  if (icon === 'leadership') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.7 5.47 6.03.88-4.36 4.25 1.03 6.02L12 16.8l-5.4 2.85 1.03-6.02L3.27 9.35l6.03-.88L12 3z" />
      </svg>
    );
  }

  if (icon === 'communication') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 01-8 8H5l-2 2V12a8 8 0 018-8h2a8 8 0 018 8z" />
      </svg>
    );
  }

  if (icon === 'systems') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="7" height="7" rx="1.2" />
        <rect x="14" y="4" width="7" height="7" rx="1.2" />
        <rect x="3" y="13" width="7" height="7" rx="1.2" />
        <rect x="14" y="13" width="7" height="7" rx="1.2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7h5v5" />
    </svg>
  );
}

export default function WhyNursesEntrepreneurs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Why Nurses Make Strong Entrepreneurs
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gold/20 bg-primary/5 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-gold shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
                  <span className="absolute inset-0 rounded-xl bg-white/20" />
                  <span className="relative">{renderIcon(item.icon)}</span>
                </span>
                <h3 className={`text-xl font-bold ${item.titleColor}`}>{item.title}</h3>
              </div>
              <p className="mt-3 text-gray-700">{item.description}</p>
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
