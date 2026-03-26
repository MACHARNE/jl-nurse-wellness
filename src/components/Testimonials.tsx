'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  achievement?: string;
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah K.',
      role: 'Registered Practical Nurse (RPN)',
      location: 'Toronto, ON',
      quote:
        "Nurse2Agency gave me a clear roadmap from bedside to business ownership. In four months, I launched my agency and now lead my schedule with more confidence and income.",
      rating: 5,
      achievement: 'Nurse Entrepreneurship Success',
    },
    {
      id: 2,
      name: 'Amanda P.',
      role: 'Farmasi Customer',
      location: 'Mississauga, ON',
      quote:
        'Farmasi products have become part of my daily routine. The quality is excellent, and I love that I can also share products with friends and earn flexible extra income.',
      rating: 5,
      achievement: 'Farmasi Customer Favorite',
    },
    {
      id: 3,
      name: 'Grace N.',
      role: 'Kokoshea Customer',
      location: 'Winnipeg, MB',
      quote:
        'Kokoshea transformed my skincare routine. My skin feels healthier, softer, and more radiant, and I appreciate using natural shea-based products I can trust.',
      rating: 5,
      achievement: 'Kokoshea Skincare Testimonial',
    },
    {
      id: 4,
      name: 'David M.',
      role: 'Registered Practical Nurse (RPN)',
      location: 'Ottawa, ON',
      quote:
        "Jean's mentorship gave me the confidence to start my own agency. The support from the community is incredible. Best decision of my career.",
      rating: 5,
      achievement: 'Agency Owner',
    },
    {
      id: 5,
      name: 'Patricia W.',
      role: 'Registered Nurse (RN)',
      location: 'Halifax, NS',
      quote:
        "I was burned out after 15 years of nursing. This program showed me a new path. Now I help other nurses while building wealth. It's a dream come true.",
      rating: 5,
      achievement: 'Mentor and Agency Owner',
    },
    {
      id: 6,
      name: 'Robert C.',
      role: 'Registered Practical Nurse (RPN)',
      location: 'Edmonton, AB',
      quote:
        "The Farmasi opportunity alone was worth it. Combined with the agency training, I've created multiple income streams. My only regret is not starting sooner.",
      rating: 5,
      achievement: 'Top Farmasi Distributor',
    },
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-gold' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24"
    >
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Testimonials
          </h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="flex min-h-[300px] items-center rounded-2xl bg-white p-8 shadow-xl md:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="w-full"
              >
                <div className="mb-4 flex justify-center gap-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <div className="mb-6 text-center">
                  <p className="text-lg italic leading-relaxed text-gray-700 md:text-xl">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>

                {testimonials[currentIndex].achievement && (
                  <div className="mb-4 text-center">
                    <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
                      {testimonials[currentIndex].achievement}
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h4 className="text-xl font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role} | {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-all duration-300 hover:text-gold hover:shadow-xl md:-translate-x-12"
            aria-label="Previous testimonial"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-all duration-300 hover:text-gold hover:shadow-xl md:translate-x-12"
            aria-label="Next testimonial"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToTestimonial(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-gold' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-primary">4.9/5</span>
          </div>
          <span className="text-gray-300">|</span>
          <span>200+ verified reviews</span>
        </motion.div>
      </div>
    </section>
  );
}
