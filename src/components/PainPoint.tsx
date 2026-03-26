'use client';

import { motion } from 'framer-motion';

export default function PainPoint() {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 sm:mt-6 mb-4 sm:mb-8"
        >
          You Were Trained to Care for Others{" "}
          <span className="text-gold">But You Can Also Build for Yourself</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-4"
        >
          Many nurses are overworked, financially stretched, and looking for something
          more. JL Nurse 360 helps nurses explore a better path through
          entrepreneurship, education, and wellness-focused opportunities.
        </motion.p>
      </div>
    </section>
  );
}
