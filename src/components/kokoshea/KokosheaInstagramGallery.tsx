'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type InstagramPost = {
  permalink: string;
  mediaType: 'video' | 'image';
  label: string;
  image: string;
};

const instagramPosts: InstagramPost[] = [
  {
    permalink: 'https://www.instagram.com/reel/DV8ltyJjWr6/',
    mediaType: 'video',
    label: 'Hydration spotlight',
    image: '/images/EKOKOSHA-ALL-PRODUCT-IN-VIEW.jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/Cvphu4egJK0/',
    mediaType: 'image',
    label: 'Signature product moment',
    image: '/images/EKOKOSHA-ALL-NATURAL-TURMERIC-SHEABUTTER.jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/CrMUR6bJQiQ/',
    mediaType: 'image',
    label: 'Everyday skincare routine',
    image: '/images/EKOKOSHA=GLOSS-STAND.jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/CM6cVaqjBDy/',
    mediaType: 'image',
    label: 'Wellness beauty feature',
    image: '/images/EKOKOSHA_TORONTO_TEA-TREE-OIL.jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/CrMWNEqpvaS/',
    mediaType: 'image',
    label: 'Skincare shelf detail',
    image: '/images/face-cream.jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/CrMUqkhJPuD/',
    mediaType: 'image',
    label: 'Product lineup story',
    image: '/images/Moisturizers (1).jpeg',
  },
  {
    permalink: 'https://www.instagram.com/reel/CrMmwPUu404/',
    mediaType: 'video',
    label: 'Reel feature highlight',
    image: '/images/SERUM (1).jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/C0hbcdmJZzA/',
    mediaType: 'image',
    label: 'Glow-centered skincare',
    image: '/images/lipgloss (1).jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/CwBF_KbJnIe/',
    mediaType: 'image',
    label: 'Brand aesthetic post',
    image: '/images/EKOKOSHA-ALL-NATURAL-TURMERIC-SHEABUTTER-OPEND.jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/CvPrqphM73K/',
    mediaType: 'image',
    label: 'Product storytelling',
    image: '/images/natural_soap (1).jpeg',
  },
  {
    permalink: 'https://www.instagram.com/reel/CiNbHLePHyb/',
    mediaType: 'video',
    label: 'Reel wellness moment',
    image: '/images/EKOKOSHA_ANTI-SGING-SERUM_&ANTI-AGING-NIGHT-SCREM-DIFF-VIEW.jpeg',
  },
  {
    permalink: 'https://www.instagram.com/p/CM3tyjijuG-/',
    mediaType: 'image',
    label: 'Collection showcase',
    image: '/images/Moisturizers (3).jpeg',
  },
];

export default function KokosheaInstagramGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % instagramPosts.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const activePost = instagramPosts[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(201,161,74,0.12),_transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
              Instagram Gallery
            </span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">Follow us on Instagram</h2>
          </div>

          <Link
            href="https://instagram.com/kokoshea/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-btn bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-light"
          >
            Follow on Instagram
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-[2rem] bg-background p-4 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.28)] sm:p-6"
        >
          <Link
            href={activePost.permalink}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-primary sm:aspect-[16/10]">
              <Image
                key={activePost.permalink}
                src={activePost.image}
                alt={activePost.label}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={activeIndex === 0}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {activePost.mediaType === 'video' && (
                <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/18 backdrop-blur-sm">
                  <svg
                    className="ml-1 h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="translate-y-3 rounded-2xl border border-white/12 bg-black/35 p-4 opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                    {activePost.mediaType === 'video' ? 'Instagram Reel' : 'Instagram Post'}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
                    {activePost.label}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <div className="mt-5 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-3">
              {instagramPosts.map((post, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={post.permalink}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border transition sm:h-24 sm:w-24 ${
                      isActive
                        ? 'border-gold shadow-[0_0_0_2px_rgba(201,161,74,0.25)]'
                        : 'border-transparent hover:border-gold/40'
                    }`}
                    aria-label={`Show Instagram slide ${index + 1}`}
                  >
                    <Image
                      src={post.image}
                      alt={post.label}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="96px"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    {post.mediaType === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/85">
                          <svg
                            className="ml-0.5 h-4 w-4 text-primary"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
