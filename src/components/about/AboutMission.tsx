// src/components/about/AboutMission.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cards = [
    {
      title: 'Mission',
      content: 'To help nurses build freedom, income, and impact through business ownership.',
      icon: '🎯',
      color: 'from-primary to-primary-dark',
    },
    {
      title: 'Vision',
      content: 'A future where more nurses lead businesses, create jobs, and shape healthcare delivery with confidence.',
      icon: '🌟',
      color: 'from-gold to-gold-dark',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 h-full">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-5xl mb-6"
                >
                  {card.icon}
                </motion.div>

                <h3 className={`text-3xl font-bold mb-4 ${
                  index === 0 ? 'text-primary' : 'text-gold'
                }`}>
                  {card.title}
                </h3>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  {card.content}
                </p>

                {/* Decorative elements */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${
                    index === 0 ? 'from-primary/5 to-primary/10' : 'from-gold/5 to-gold/10'
                  } rounded-full blur-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}