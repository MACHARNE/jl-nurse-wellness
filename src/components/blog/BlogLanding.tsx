'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  'Nurse Entrepreneurship',
  'Agency Startup Tips',
  'Beauty & Wellness',
  'Self-Care for Nurses',
  'Business Growth',
];

const featuredPost = {
  title: 'How Nurses Can Build Income Beyond the Bedside',
  category: 'Nurse Entrepreneurship',
  readTime: '6 min read',
  href: '/program',
  image:
    'https://images.unsplash.com/photo-1654154094424-43c2abae1478?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600',
  excerpt:
    'For many nurses, the real opportunity is not just picking up extra shifts. It is building a more intentional income path through service offers, agency leadership, product alignment, and long-term business ownership.',
  bullets: [
    'Why relying on overtime alone can limit long-term freedom',
    'How to turn clinical credibility into a business foundation',
    'What income diversification can look like for modern nurses',
  ],
};

const posts = [
  {
    title: 'What It Takes to Start a Nursing Agency in Canada',
    category: 'Agency Startup Tips',
    readTime: '7 min read',
    href: '/program',
    image:
      'https://images.unsplash.com/photo-1770922808906-2a2af9d6cd5a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1400',
    excerpt:
      'Starting a nursing agency requires more than ambition. It calls for structure, positioning, compliance awareness, and a clear understanding of the market you want to serve.',
  },
  {
    title: 'Why Wellness Matters for Nurses',
    category: 'Self-Care for Nurses',
    readTime: '5 min read',
    href: '/kokoshea',
    image:
      'https://images.unsplash.com/photo-1677682692769-e7250eda8a8b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1400',
    excerpt:
      'Wellness is not a luxury for nurses. It affects confidence, consistency, decision-making, and the energy required to lead well in both career and business.',
  },
  {
    title: 'Beauty and Skincare Habits for Busy Professionals',
    category: 'Beauty & Wellness',
    readTime: '4 min read',
    href: '/kokoshea',
    image:
      'https://images.unsplash.com/photo-1741896136071-3f8c1d472aa8?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1400',
    excerpt:
      'A busy schedule does not have to mean neglecting your routine. The best skincare habits are simple, nourishing, repeatable, and designed for real life.',
  },
  {
    title: 'Nurse Entrepreneur Mindset Shifts',
    category: 'Business Growth',
    readTime: '6 min read',
    href: '/about',
    image: '/images/owner1.png',
    excerpt:
      'One of the biggest changes in business is internal. Nurses who grow into founders learn to think differently about value, leadership, visibility, and ownership.',
  },
  {
    title: 'From Clinical Experience to Business Clarity',
    category: 'Nurse Entrepreneurship',
    readTime: '5 min read',
    href: '/resources',
    image: '/images/business-struture.jpg',
    excerpt:
      'The strongest nurse-led businesses are built on the same strengths that already exist in practice: trust, structure, compassion, and sound decision-making.',
  },
];

export default function BlogLanding() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-20 text-primary md:py-28">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-block rounded-full border border-gold/30 bg-white/75 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
              Editorial Insights
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Practical articles for nurses building{' '}
              <span className="text-gold">income, wellness, and ownership</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
              Explore thoughtful reads across entrepreneurship, agency startup, beauty,
              self-care, and business growth, all shaped by the mission of JL Nurse 360.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  className="rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-medium text-primary/90 backdrop-blur-sm"
                >
                  {category}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_32px_80px_-28px_rgba(8,22,43,0.55)]">
              <Image
                src="https://images.unsplash.com/photo-1654154094424-43c2abae1478?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600"
                alt="Business planning desk with planner and keyboard"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  Featured Focus
                </p>
                <p className="mt-3 max-w-sm text-xl font-semibold text-white">
                  Content designed to help nurses move from idea to action.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
                Featured Article
              </span>
              <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
                {featuredPost.title}
              </h2>
            </div>
            <Link
              href={featuredPost.href}
              className="inline-flex items-center gap-2 font-semibold text-gold transition-all duration-300 hover:gap-3"
            >
              Explore the path
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.26)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8"
          >
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/8 px-4 py-2 text-sm font-semibold text-primary">
                  {featuredPost.category}
                </span>
                <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 space-y-3">
                {featuredPost.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" />
                    <p className="text-gray-600">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Latest Ideas
            </span>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
              Thoughtful reads across the core JL Nurse 360 themes
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.8rem] border border-gray-100 bg-background shadow-[0_20px_50px_-26px_rgba(11,31,58,0.26)] transition-all duration-300 hover:shadow-[0_26px_60px_-24px_rgba(11,31,58,0.32)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold shadow-sm">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-snug text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{post.excerpt}</p>

                  <Link
                    href={post.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-gold transition-all duration-300 hover:gap-3"
                  >
                    Read article
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-[0_32px_80px_-30px_rgba(8,22,43,0.55)] sm:p-10 md:p-12"
          >
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-gold/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
                Keep Reading
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Want more content that helps nurses grow with intention?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Explore the program, browse resources, and stay close to practical guidance built
                for nurses ready to expand their next chapter.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/resources"
                  className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition hover:scale-105 hover:bg-gold-dark"
                >
                  Browse Resources
                </Link>
                <Link
                  href="/program"
                  className="rounded-btn border border-white/25 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:text-primary"
                >
                  Explore the Program
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
