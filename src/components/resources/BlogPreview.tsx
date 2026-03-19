'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'How nurses can position themselves as founders, not just side hustlers',
    excerpt: 'A more professional way to think about your transition into business ownership.',
    href: '/contact',
  },
  {
    title: 'What to validate before launching a nurse-led service business',
    excerpt: 'A practical look at demand, trust, pricing, and operational readiness.',
    href: '/program',
  },
  {
    title: 'The difference between extra income and a true business asset',
    excerpt: 'How to build something that has structure, repeatability, and long-term value.',
    href: '/resources',
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Insights
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
            Practical reads for the next stage of your career
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 bg-background p-8 shadow-lg"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Article {index + 1}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-primary">{post.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{post.excerpt}</p>
              <Link
                href={post.href}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-gold transition-all duration-300 hover:gap-3"
              >
                Read more
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
