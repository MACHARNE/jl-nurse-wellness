'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function KokosheaShopCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,161,74,0.2),_transparent_42%)]" />
      <div className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full border border-gold/20 bg-gold/10 blur-2xl" />
      <div className="pointer-events-none absolute -left-8 bottom-8 h-32 w-32 rounded-full border border-white/10 bg-white/5 blur-2xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
        >
          Bring Kokoshea into your{' '}
          <span className="text-gold">daily skincare ritual</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
        >
          Explore nourishing collections designed for hydration, softness, and a polished
          everyday routine you will actually enjoy using.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/kokoshea#kokoshea-products"
            className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary shadow-2xl transition hover:scale-105 hover:bg-gold-dark"
          >
            Shop Kokoshea Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
