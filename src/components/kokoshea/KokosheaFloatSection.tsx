'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type KokosheaFloatSectionProps = {
  children: ReactNode;
  id: string;
};

export default function KokosheaFloatSection({
  children,
  id,
}: KokosheaFloatSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 48, scale: 0.985, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18, margin: '-8% 0px -8% 0px' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.div>
  );
}
