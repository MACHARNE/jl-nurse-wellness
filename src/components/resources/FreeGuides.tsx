'use client';

import { motion } from 'framer-motion';

type Guide = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconShell: string;
  iconColor: string;
  accent: string;
};

const guides: Guide[] = [
  {
    title: 'Free Nurse Agency Starter Guide',
    description:
      'A practical starting point for nurses ready to explore agency ownership with more clarity.',
    iconShell: 'bg-primary/10',
    iconColor: 'text-primary',
    accent: 'from-primary/12 to-white',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 4.75h9.5A2.75 2.75 0 0118.25 7.5v11.75H8.5A2.5 2.5 0 006 21.75V4.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.25h6M8.5 12h6M8.5 15.75H12" />
      </svg>
    ),
  },
  {
    title: 'Nurse Entrepreneur Checklist',
    description:
      'A focused checklist to help you think through positioning, structure, and early next steps.',
    iconShell: 'bg-gold/12',
    iconColor: 'text-gold-dark',
    accent: 'from-gold/12 to-white',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75h8.25M9 12h8.25M9 17.25h8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 6.75l1.5 1.5 2.5-3M4.75 12l1.5 1.5 2.5-3M4.75 17.25l1.5 1.5 2.5-3" />
      </svg>
    ),
  },
  {
    title: 'Beauty and Wellness Tips',
    description:
      'Simple, useful ideas that support a more intentional wellness and self-care lifestyle.',
    iconShell: 'bg-rose-100',
    iconColor: 'text-rose-500',
    accent: 'from-rose-100 to-white',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.75c1.2 2.22 3.03 4.04 5.25 5.25-2.22 1.21-4.05 3.03-5.25 5.25-1.2-2.22-3.03-4.04-5.25-5.25 2.22-1.21 4.05-3.03 5.25-5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.25 4.75v2.5M19.5 6h-2.5" />
      </svg>
    ),
  },
  {
    title: 'Business Planning Workbook',
    description:
      'A working resource to help shape your offers, direction, and priorities with more structure.',
    iconShell: 'bg-primary/10',
    iconColor: 'text-primary',
    accent: 'from-primary/10 to-white',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.75 5.75h12.5v12.5H5.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.75v12.5M5.75 10h12.5" />
      </svg>
    ),
  },
  {
    title: 'Blog Articles',
    description:
      'Professional reads that turn ideas into action for nurses building income beyond bedside work.',
    iconShell: 'bg-gold/12',
    iconColor: 'text-gold-dark',
    accent: 'from-gold/12 to-white',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.5h12M6 11.25h12M6 16h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 4.75h14.5v14.5H4.75z" />
      </svg>
    ),
  },
];

export default function FreeGuides() {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Free <span className="text-gold">Nuse Agency Starter Guid.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Explore curated content ideas designed to support nurse entrepreneurship,
            business planning, wellness, and practical career growth.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide, index) => (
            <motion.article
              key={guide.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-b ${guide.accent} p-6 shadow-[0_22px_55px_-28px_rgba(11,31,58,0.32)] transition-all duration-300 hover:shadow-[0_28px_70px_-28px_rgba(11,31,58,0.4)] sm:p-8`}
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-[1.35rem] ${guide.iconShell} ${guide.iconColor} shadow-sm ring-1 ring-white/60`}
              >
                {guide.icon}
              </motion.div>

              <h3 className={`mb-3 text-xl font-bold leading-snug ${guide.iconColor}`}>
                {guide.title}
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-gray-600 sm:text-base">
                {guide.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn relative w-full overflow-hidden rounded-btn bg-primary px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
              >
                <span className="relative z-10">Access Free Resources</span>
                <motion.div
                  className="absolute inset-0 bg-gold"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.35 }}
                  style={{ opacity: 0.18 }}
                />
              </motion.button>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Trusted by 500+ Canadian nurses • Practical tools • Professional next steps
          </p>
        </motion.div>
      </div>
    </section>
  );
}
