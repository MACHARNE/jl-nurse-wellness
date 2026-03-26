'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote:
      'Kokoshea made my routine feel simple again. My skin feels softer, more balanced, and genuinely cared for every day.',
    name: 'Grace N.',
    role: 'Kokoshea Customer',
    location: 'Winnipeg, MB',
  },
  {
    quote:
      'What stood out to me was how nourishing everything felt. The products look beautiful, but they also feel consistent and effective.',
    name: 'Amanda P.',
    role: 'Wellness Shopper',
    location: 'Mississauga, ON',
  },
  {
    quote:
      'I love that the brand feels rooted in self-care, not hype. It fits into my lifestyle and makes skincare feel calming instead of complicated.',
    name: 'Patricia W.',
    role: 'Registered Nurse',
    location: 'Halifax, NS',
  },
];

export default function KokosheaTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Loved for its feel, finish, and everyday ease
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.18)]"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="h-4 w-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="flex-1 text-lg leading-relaxed text-gray-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 border-t border-gray-100 pt-5">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role} | {testimonial.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
