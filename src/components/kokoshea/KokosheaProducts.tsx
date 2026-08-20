// src/components/kokoshea/KokosheaProducts.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { getKokosheaShopUrl } from '@/lib/kokosheaShop';

type ProductImage = {
  src: string;
  alt: string;
  fit?: 'contain' | 'cover';
  position?: string;
};

type Product = {
  id: string;
  name: string;
  category: string;
  tag: string;
  description: string;
  images: ProductImage[];
};

const productImagePath = '/images/kokoshea/doc-products';

const products: Product[] = [
  {
    id: 'face-scrub',
    name: 'Face Scrub',
    category: 'Face Care',
    tag: 'Exfoliating polish',
    description:
      'A gentle scrub designed to polish dull skin and support a softer, smoother-looking glow.',
    images: [
      {
        src: `${productImagePath}/face-scrub.jpeg`,
        alt: 'Kokoshea face scrub jar',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'turmeric-shea-butter',
    name: 'Turmeric Shea Butter',
    category: 'Body Care',
    tag: 'Whipped shea moisture',
    description:
      'Rich whipped shea butter with turmeric, created for deep nourishment and a radiant finish.',
    images: [
      {
        src: `${productImagePath}/turmeric-shea-butter.jpeg`,
        alt: 'Kokoshea turmeric shea butter jar',
        fit: 'contain',
      },
      {
        src: `${productImagePath}/turmeric-shea-butter-lifestyle.jpeg`,
        alt: 'Kokoshea turmeric shea butter lifestyle view',
        fit: 'cover',
        position: 'object-center',
      },
    ],
  },
  {
    id: 'hand-body-butter',
    name: 'Hand & Body Butter',
    category: 'Body Care',
    tag: 'Daily body hydration',
    description:
      'A hand and body butter for dry areas, everyday softness, and lasting comfort.',
    images: [
      {
        src: `${productImagePath}/hand-body-butter.png`,
        alt: 'Kokoshea hand and body butter',
        fit: 'cover',
        position: 'object-center',
      },
    ],
  },
  {
    id: 'organic-coconut-shea-butter-soap',
    name: 'Organic Coconut + Shea Butter Soap',
    category: 'Bath & Body',
    tag: 'Natural soap bar',
    description:
      'A creamy natural soap bar blending organic coconut and shea butter for a nourishing cleanse.',
    images: [
      {
        src: `${productImagePath}/organic-coconut-shea-butter-soap.jpeg`,
        alt: 'Kokoshea organic coconut and shea butter soap',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'equa-derm-clay-mask',
    name: 'EQUA-DERM Clay Mask',
    category: 'Face Care',
    tag: 'Clarifying mask',
    description:
      'A clay mask made for oily skin, helping refresh the complexion and support a balanced routine.',
    images: [
      {
        src: `${productImagePath}/equa-derm-clay-mask.jpeg`,
        alt: 'Kokoshea EQUA-DERM clay mask jar',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'anti-aging-serum',
    name: 'Anti-Aging Serum',
    category: 'Face Care',
    tag: 'Serum and night care',
    description:
      'A lightweight serum created to support a smoother, rejuvenated-looking skincare ritual.',
    images: [
      {
        src: `${productImagePath}/anti-aging-serum.jpeg`,
        alt: 'Kokoshea anti-aging serum bottle',
        fit: 'contain',
      },
      {
        src: `${productImagePath}/anti-aging-serum-set.png`,
        alt: 'Kokoshea anti-aging serum and night cream set',
        fit: 'cover',
        position: 'object-center',
      },
    ],
  },
  {
    id: 'natural-lux-soaps',
    name: 'Natural Lux Soaps',
    category: 'Bath & Body',
    tag: 'Luxury soap collection',
    description:
      'Elegant natural soap bars with a soft luxury feel for a refined everyday bathing experience.',
    images: [
      {
        src: `${productImagePath}/natural-lux-soaps.png`,
        alt: 'Kokoshea natural lux soap bars',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'luxury-lipsticks',
    name: 'Luxury Lipsticks',
    category: 'Lip Care',
    tag: 'Bold opaque color',
    description:
      'Rich lip color with a bold opaque finish for polished, confident beauty moments.',
    images: [
      {
        src: `${productImagePath}/luxury-lipsticks.png`,
        alt: 'Kokoshea luxury lipsticks',
        fit: 'cover',
        position: 'object-center',
      },
    ],
  },
];

export default function KokosheaProducts() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [imageTick, setImageTick] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.18 });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setImageTick((current) => current + 1);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section ref={ref} className="overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Kokoshea Product Collection
          </span>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Nourishing skincare and beauty essentials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Explore the Kokoshea range, from shea-rich body care to face masks,
            serums, natural soaps, and bold beauty finishes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-btn px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-white shadow-lg shadow-gold/20'
                  : 'bg-white text-gray-600 hover:bg-gold/10 hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const image = product.images[imageTick % product.images.length];
              const productShopUrl = getKokosheaShopUrl(product.id);

              return (
                <motion.article
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 34, scale: 0.97 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_22px_55px_-34px_rgba(11,31,58,0.45)] ring-1 ring-primary/5 transition-shadow hover:shadow-[0_28px_70px_-32px_rgba(11,31,58,0.5)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={image.src}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.65, ease: 'easeInOut' }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className={`${image.fit === 'cover' ? 'object-cover' : 'object-contain p-5'} ${
                            image.position ?? 'object-center'
                          } transition-transform duration-700 group-hover:scale-105`}
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold shadow-sm">
                      {product.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {product.tag}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-primary">
                      {product.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                      {product.description}
                    </p>
                    <Link
                      href={productShopUrl}
                      className="mt-5 inline-flex items-center text-sm font-bold text-gold transition-colors hover:text-gold-dark"
                    >
                      Shop Now
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
