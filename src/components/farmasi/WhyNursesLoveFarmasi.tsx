'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const reasons = [
  'Flexible around shift schedules',
  'Easy to recommend products people already use',
  'Build confidence through simple daily consistency',
];

export default function WhyNursesLoveFarmasi() {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-80 overflow-hidden rounded-3xl shadow-xl sm:h-96"
        >
          <Image
            src="/images/practicalnurse.jpg"
            alt="Nurse lifestyle"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Why nurses love it
          </h2>
          <div className="mt-6 space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-2xl border border-gold/20 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                  {index + 1}
                </span>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
