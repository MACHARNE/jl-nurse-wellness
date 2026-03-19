// src/components/farmasi/ProductShowcase.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
    images: [
      '/images/farmasi/skincare-1.jpg',
      '/images/farmasi/skincare-2.jpg',
      '/images/farmasi/skincare-3.jpg',
      '/images/farmasi/skincare-4.jpg',
      '/images/farmasi/skincare-5.jpg',
    ],
    buttonText: 'Shop Skincare',
    buttonLink: '/farmasi/skincare',
    bgColor: 'bg-amber-50',
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
    images: [
      '/images/farmasi/makeup-1.jpg',
      '/images/farmasi/makeup-2.jpg',
      '/images/farmasi/makeup-3.jpg',
      '/images/farmasi/makeup-4.jpg',
      '/images/farmasi/makeup-5.jpg',
    ],
    buttonText: 'Shop Makeup',
    buttonLink: '/farmasi/makeup',
    bgColor: 'bg-rose-50',
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
    images: [
      '/images/farmasi/essentials-1.jpg',
      '/images/farmasi/essentials-2.jpg',
      '/images/farmasi/essentials-3.jpg',
      '/images/farmasi/essentials-4.jpg',
      '/images/farmasi/essentials-5.jpg',
    ],
    buttonText: 'Shop Care',
    buttonLink: '/farmasi/essentials',
    bgColor: 'bg-green-50',
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
    images: [
      '/images/farmasi/nutrition-1.jpg',
      '/images/farmasi/nutrition-2.jpg',
      '/images/farmasi/nutrition-3.jpg',
      '/images/farmasi/nutrition-4.jpg',
      '/images/farmasi/nutrition-5.jpg',
    ],
    buttonText: 'Shop Nutrition',
    buttonLink: '/farmasi/nutrition',
    bgColor: 'bg-blue-50',
  },
];

function ProductSection({ product, index }: { product: typeof products[0]; index: number }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : product.bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Image Gallery - Left or Right based on index */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
          >
            <div className="grid grid-cols-3 gap-3">
              {/* Large main image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-3 mb-3"
              >
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              
              {/* 4 smaller images */}
              {product.images.slice(1, 5).map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="relative h-[120px] rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={img}
                    alt={`${product.title} ${idx + 2}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
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
                    ✓
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