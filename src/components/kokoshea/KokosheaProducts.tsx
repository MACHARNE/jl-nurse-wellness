// src/components/kokoshea/KokosheaProducts.tsx
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Body Butter',
    description: 'Rich, nourishing body butter for deep hydration',
    price: '$32',
    image: '/images/kokoshea/body-butter.jpg',
    category: 'Body Care',
  },
  {
    id: 2,
    name: 'Facial Oils',
    description: 'Lightweight oils that balance and rejuvenate',
    price: '$28',
    image: '/images/kokoshea/facial-oil.jpg',
    category: 'Face Care',
  },
  {
    id: 3,
    name: 'Moisturizers',
    description: 'Daily hydration for healthy, glowing skin',
    price: '$35',
    image: '/images/kokoshea/moisturizer.jpg',
    category: 'Face Care',
  },
  {
    id: 4,
    name: 'Natural Soaps',
    description: 'Gentle, handmade soaps with natural ingredients',
    price: '$12',
    image: '/images/kokoshea/soap.jpg',
    category: 'Body Care',
  },
  {
    id: 5,
    name: 'Lip Balms',
    description: 'Nourishing lip care for soft, smooth lips',
    price: '$8',
    image: '/images/kokoshea/lip-balm.jpg',
    category: 'Lip Care',
  },
  {
    id: 6,
    name: 'Face Serums',
    description: 'Targeted treatments for specific skin concerns',
    price: '$42',
    image: '/images/kokoshea/serum.jpg',
    category: 'Face Care',
  },
];

export default function KokosheaProducts() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Natural Care for Every Routine
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-btn text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-white'
                  : 'bg-white text-gray-600 hover:bg-gold/10 hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <Link
                    href={`/kokoshea/products/${product.id}`}
                    className="inline-flex items-center text-gold font-semibold hover:text-gold-dark transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel/Dots for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-2 mt-8 md:hidden"
        >
          {[...Array(Math.ceil(filteredProducts.length / 2))].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === 0 ? 'bg-gold' : 'bg-gray-300'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}