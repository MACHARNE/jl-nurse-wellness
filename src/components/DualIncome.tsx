'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DualIncome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/5 via-background to-gold/5 relative overflow-hidden"
    >
      {/* Decorative background elements - updated to brand colors */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - updated colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block bg-gold text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            ✨ Dual Income Model
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Build Income in{' '}
            <span className="text-gold">
              Two Ways
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The ultimate financial freedom strategy designed specifically for Canadian nurses
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {/* Healthcare Path Card - using primary navy */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top accent bar - primary to gold */}
            <div className="h-2 bg-gradient-to-r from-primary to-gold"></div>
            
            <div className="p-6 sm:p-8 md:p-10">
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  Path One
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                Healthcare Career Path
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Continue your professional nursing career while building scalable income through:
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {[
                  'Agency development',
                  'Healthcare consulting',
                  'Private care services',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 group/item">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-sm group-hover/item:bg-gold group-hover/item:text-white transition-colors">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">85%</span>
                  <span className="text-sm text-gray-500">of nurses maintain clinical work while building agency</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                  <div className="w-[85%] h-full bg-gradient-to-r from-primary to-gold rounded-full"></div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/program"
                className="inline-flex items-center text-primary font-semibold mt-6 group-hover:gap-2 transition-all"
              >
                Learn more about agency path
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Wellness Path Card - using gold */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top accent bar - gold gradient */}
            <div className="h-2 bg-gradient-to-r from-gold to-gold-dark"></div>
            
            <div className="p-6 sm:p-8 md:p-10">
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/30 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                  Path Two
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 group-hover:text-gold transition-colors">
                Wellness Business Path
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build immediate flexible income through wellness and lifestyle products:
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {[
                  'Farmasi beauty products',
                  'Kokoshea natural skincare',
                  'Wellness supplements',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 group/item">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-sm group-hover/item:bg-gold group-hover/item:text-white transition-colors">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Income Potential */}
              <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Average monthly income</span>
                  <span className="text-2xl font-bold text-gold">$2,500+</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-3/4 h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Based on part-time commitment</p>
              </div>

              {/* Stats */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gold">93%</span>
                  <span className="text-sm text-gray-500">report improved work-life satisfaction</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                  <div className="w-[93%] h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"></div>
                </div>
              </div>

              {/* CTA - Updated link */}
              <Link
                href="/farmasi"
                className="inline-flex items-center text-gold font-semibold mt-6 group-hover:gap-2 transition-all"
              >
                Explore wellness opportunities
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-block max-w-3xl mx-auto bg-gradient-to-r from-primary/5 via-white to-gold/5 rounded-2xl p-6 px-8 shadow-lg border border-gray-100">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="text-2xl mr-2">💡</span>
              This balanced model allows nurses to earn more while maintaining professional flexibility.
              <span className="text-2xl ml-2">✨</span>
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-gold text-white px-8 py-4 rounded-btn font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group"
          >
            <span>Start Your Dual Income Journey</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
