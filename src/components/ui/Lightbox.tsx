'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt?: string; // Optional alt text
}

export default function Lightbox({ isOpen, onClose, imageSrc, imageAlt = 'Lightbox image' }: LightboxProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]); // Combined both effects

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
          {/* Close button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition z-10"
            aria-label="Close lightbox"
          >
            ✕
          </motion.button>

          {/* Previous button (optional) */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next button (optional) */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition z-10"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              className="object-contain rounded-lg shadow-2xl"
              priority
              quality={100}
            />
            
            {/* Image counter (optional) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              1 / 5
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}