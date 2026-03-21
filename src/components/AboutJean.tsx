'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutJean() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary text-white"> {/* Changed gradient to solid primary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="rounded-xl sm:rounded-2xl w-full max-w-sm mx-auto relative overflow-hidden shadow-2xl border-4 border-gold/20 bg-black">
              <video
                src="/video/meetonwer.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-[420px] sm:h-[520px] object-contain"
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
            <span className="text-gold font-semibold text-xs sm:text-sm uppercase tracking-wider bg-gold/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block mb-4 sm:mb-6"> {/* Changed primary to gold */}
              Meet Your Mentor
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Meet <span className="text-gold">Jean Lewis, RN</span> {/* Changed primary to gold */}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl lg:mx-0 mx-auto">
              Jean Lewis helps nurses transition from bedside to business ownership through
              agency development and entrepreneurship.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-white bg-gold px-5 sm:px-6 py-2.5 sm:py-3 rounded-btn font-semibold hover:bg-gold-dark transition-all duration-300 group text-sm sm:text-base" // Changed to gold button
            >
              Learn More About Jean
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
