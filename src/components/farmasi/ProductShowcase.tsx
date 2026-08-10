// src/components/farmasi/ProductShowcase.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type ProductMedia = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
};

const farmasiMedia = (filename: string) => `/images/farmasi/${filename}`;

const products = [
  {
    id: 1,
    title: 'Premium Skincare',
    description: 'Nourishing serums, creams for healthy glow. Formulated with natural ingredients for visible results.',
    features: [
      'Anti-aging serums with hyaluronic acid',
      'Hydrating creams for all skin types',
      'Natural ingredients, no harsh chemicals',
      'Dermatologically tested formulas'
    ],
    buttonText: 'Shop Skincare',
    buttonLink: '/farmasi/skincare',
    bgColor: 'bg-amber-50',
    image: '/images/prenumskincare1.png',
    gallery: [
      { src: farmasiMedia('farmasi (1).jpeg'), alt: 'Farmasi skincare cream', fit: 'cover' },
      { src: farmasiMedia('farmasi (2).jpeg'), alt: 'Farmasi foaming cleanser', fit: 'contain' },
      { src: farmasiMedia('farmasi (5).jpeg'), alt: 'Farmasi skincare collection', fit: 'contain' },
      { src: farmasiMedia('farmasi (9).jpeg'), alt: 'Farmasi skincare essentials', fit: 'contain' },
    ] satisfies ProductMedia[],
  },
  {
    id: 2,
    title: 'Professional Makeup',
    description: 'Long-lasting, skin-friendly cosmetics that enhance your natural beauty.',
    features: [
      'Vegan and cruelty-free formulas',
      'Long-wear foundations and concealers',
      'Pigmented eyeshadows and lipsticks',
      'Hypoallergenic options for sensitive skin'
    ],
    buttonText: 'Shop Makeup',
    buttonLink: '/farmasi/makeup',
    bgColor: 'bg-rose-50',
    image: '/images/makeup1.png',
    gallery: [
      { src: farmasiMedia('farmasi (10).jpeg'), alt: 'Farmasi lip color display', fit: 'cover' },
      { src: farmasiMedia('farmasi (12).jpeg'), alt: 'Farmasi makeup product table', fit: 'cover' },
      { src: farmasiMedia('farmasi (13).jpeg'), alt: 'Farmasi eye makeup display', fit: 'cover' },
      { src: farmasiMedia('farmasi (14).jpeg'), alt: 'Farmasi brush and color products', fit: 'cover' },
      { src: farmasiMedia('farmasi (15).jpeg'), alt: 'Farmasi beauty products display', fit: 'cover' },
      { src: farmasiMedia('farmasi (17).jpeg'), alt: 'Farmasi event product spread', fit: 'cover' },
      { src: farmasiMedia('farmasi (19).jpeg'), alt: 'Farmasi complexion and color products', fit: 'cover' },
    ] satisfies ProductMedia[],
  },
  {
    id: 3,
    title: 'Daily Essentials',
    description: 'Natural soaps, body care for wellness routines that nourish your skin daily.',
    features: [
      'Handmade natural soaps',
      'Moisturizing body lotions and butters',
      'Essential oil blends for relaxation',
      'Eco-friendly packaging'
    ],
    buttonText: 'Shop Care',
    buttonLink: '/farmasi/essentials',
    bgColor: 'bg-green-50',
    image: '/images/dailyessentials1.png',
    gallery: [
      { src: farmasiMedia('farmasi (3).jpeg'), alt: 'Farmasi daily care display', fit: 'cover' },
      { src: farmasiMedia('farmasi (7).jpeg'), alt: 'Farmasi daily essentials kit', fit: 'cover' },
      { src: farmasiMedia('farmasi (8).jpeg'), alt: 'Farmasi personal care products', fit: 'cover' },
      { src: farmasiMedia('farmasi (18).jpeg'), alt: 'Farmasi everyday beauty products', fit: 'cover' },
    ] satisfies ProductMedia[],
  },
  {
    id: 4,
    title: 'Health Nutrition',
    description: 'Supplements supporting nurse wellness. Boost energy and maintain optimal health.',
    features: [
      'Vitamin D and B-complex for energy',
      'Immune-boosting supplements',
      'Protein powders for busy nurses',
      'Natural stress relief formulas'
    ],
    buttonText: 'Shop Nutrition',
    buttonLink: '/farmasi/nutrition',
    bgColor: 'bg-blue-50',
    image: '/images/HealthNutrition1.webp',
    gallery: [
      { src: farmasiMedia('farmasi (4).jpeg'), alt: 'Farmasi health and beauty boost', fit: 'contain' },
      { src: farmasiMedia('farmasi (6).jpeg'), alt: 'Farmasi nutrition support products', fit: 'contain' },
      { src: farmasiMedia('farmasi (11).jpeg'), alt: 'Farmasi wellness color essentials', fit: 'cover' },
      { src: farmasiMedia('farmasi (16).jpeg'), alt: 'Farmasi wellness product table', fit: 'cover' },
    ] satisfies ProductMedia[],
  },
];

function ProductSection({ product, index }: { product: typeof products[0]; index: number }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      id={index === 0 ? 'store' : undefined}
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : product.bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-stretch ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-full"
            >
              <div className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-xl lg:min-h-[520px]">
                <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-xl bg-gray-50 lg:min-h-[360px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4 transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="mt-3 overflow-hidden rounded-xl border border-primary/10 bg-background p-3">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                    Product gallery
                  </p>
                  <motion.div
                    animate={isInView ? { x: ['0%', '-50%'] } : { x: '0%' }}
                    transition={{
                      duration: product.gallery.length > 4 ? 24 : 18,
                      ease: 'linear',
                      repeat: Infinity,
                    }}
                    className="flex w-max gap-3"
                  >
                    {[...product.gallery, ...product.gallery].map((media, mediaIndex) => (
                      <motion.div
                        key={`${product.id}-${media.src}-${mediaIndex}`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.45 + (mediaIndex % product.gallery.length) * 0.08 }}
                        whileHover={{ y: -4, scale: 1.03 }}
                        className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg border border-white bg-white shadow-sm sm:h-28 sm:w-40"
                      >
                        <Image
                          src={media.src}
                          alt={media.alt}
                          fill
                          sizes="160px"
                          className={
                            media.fit === 'contain'
                              ? 'object-contain p-2'
                              : 'object-cover'
                          }
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4"
            >
              Product Category
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-primary mb-4"
            >
              {product.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-600 mb-6"
            >
              {product.description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-3 mb-8"
            >
              {product.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + (idx * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 bg-gold rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
                    +
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link
                href={product.buttonLink}
                className="inline-flex items-center bg-gold text-white px-6 py-3 rounded-btn font-semibold hover:bg-gold-dark transition transform hover:scale-105 group"
              >
                {product.buttonText}
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ProductShowcase() {
  return (
    <>
      {products.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}
    </>
  );
}
