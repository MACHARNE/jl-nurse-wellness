'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutJean() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="rounded-xl sm:rounded-2xl w-full max-w-sm mx-auto relative overflow-hidden shadow-2xl border-4 border-gold/20">
              <Image
                src="/images/owner1.png"
                alt="Jean Lewis"
                width={700}
                height={900}
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Meet <span className="text-gold">Jean Lewis</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl lg:mx-0 mx-auto">
              Jean Lewis is a nurse entrepreneur passionate about helping nurses create
              more freedom, confidence, and financial growth. Through JL Nurse 360, she
              provides guidance for nurses who want to build businesses, develop new
              income streams, and embrace wellness as part of a more balanced lifestyle.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-white bg-gold px-5 sm:px-6 py-2.5 sm:py-3 rounded-btn font-semibold hover:bg-gold-dark transition-all duration-300 group text-sm sm:text-base"
            >
              Read Jean&rsquo;s Story
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
