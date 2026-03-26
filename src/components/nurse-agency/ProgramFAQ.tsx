'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    q: 'Do I need business experience to start?',
    a: 'No. The program is designed for nurses who are new to entrepreneurship and want a practical step-by-step path.',
  },
  {
    q: 'Is this program only for nurses in Canada?',
    a: 'The program is designed for Canadian nurses and aligns with the realities of healthcare business pathways in Canada.',
  },
  {
    q: 'How long does it take to start seeing progress?',
    a: 'Progress depends on your pace, but most nurses begin building clarity and direction quickly once they follow the framework.',
  },
  {
    q: 'Will I still be able to work while taking the program?',
    a: 'Yes. The structure is practical for nurses balancing shifts, responsibilities, and career transition goals.',
  },
];

export default function ProgramFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10 flex items-center justify-center gap-3 text-center text-3xl font-bold text-primary sm:text-4xl"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9a2.25 2.25 0 114.5 0c0 1.23-.99 1.81-1.72 2.32-.68.48-1.28.94-1.28 1.68v.75" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25h.008v.008H12z" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </span>
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-gold/20 bg-background shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-primary">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gold"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gold/10 px-5 py-4 text-gray-700">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
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
