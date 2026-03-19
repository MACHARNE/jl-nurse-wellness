// src/components/StickyCTA.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky CTA Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-4 sm:right-8 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCalendly(true)}
              className="group relative bg-gold text-primary px-4 sm:px-6 py-3 sm:py-4 rounded-btn font-bold text-sm sm:text-base shadow-2xl flex items-center gap-2 hover:bg-gold-dark transition-all duration-300"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span>👉 Book Strategy Call</span>
              
              {/* Tooltip */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-12 right-0 bg-primary text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap"
              >
                Free 30-min consultation
                <span className="absolute bottom-[-4px] right-4 w-2 h-2 bg-primary transform rotate-45"></span>
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendly Modal */}
      <AnimatePresence>
        {showCalendly && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCalendly(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-4 sm:p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Schedule Your Free Strategy Call</h3>
                  <p className="text-sm text-gray-300 mt-1">30-minute consultation with Jean Lewis, RN</p>
                </div>
                <button
                  onClick={() => setShowCalendly(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Calendly Iframe */}
              <div className="h-[600px] sm:h-[650px]">
                <iframe
                  src="https://calendly.com/yourlink/30min" // Replace with your Calendly link
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  allow="camera; microphone; autoplay; encrypted-media; fullscreen;"
                />
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-4 text-center text-sm text-gray-600 border-t">
                <p>By scheduling, you agree to our{' '}
                  <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}