// src/components/nurse-agency/AgencyCTA.tsx
'use client';

import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function AgencyCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gold overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Start Your{' '}
              <span className="text-white">Journey?</span>
            </h2>
            
            <p className="text-lg text-primary/80 mb-8 leading-relaxed">
              Join hundreds of Canadian nurses who have successfully transitioned 
              from bedside to business ownership. Your future as a healthcare 
              entrepreneur starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="bg-primary text-white px-8 py-4 rounded-btn font-bold text-lg hover:bg-primary-dark transition transform hover:scale-105 text-center"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary text-primary px-8 py-4 rounded-btn font-bold text-lg hover:bg-primary hover:text-white transition transform hover:scale-105 text-center"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6 mt-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white" />
                ))}
              </div>
              <p className="text-sm text-primary">
                <span className="font-bold">50+</span> nurses have already joined
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/nurse-agency/cta-image.jpg"
              alt="Nurse entrepreneur"
              fill
              className="object-cover"
            />
            
            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary p-4 rounded-xl shadow-xl"
            >
              <p className="text-2xl font-bold">97%</p>
              <p className="text-xs">Success Rate</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-primary p-4 rounded-xl shadow-xl"
            >
              <p className="text-2xl font-bold">6mo</p>
              <p className="text-xs">Avg. Launch Time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}