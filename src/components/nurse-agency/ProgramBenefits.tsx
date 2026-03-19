// src/components/nurse-agency/ProgramBenefits.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const benefits = [
  {
    title: 'Business Structure',
    description: 'Learn how to structure your agency for compliance and tax efficiency in Canada.',
    image: '/images/nurse-agency/business-structure.jpg',
    icon: '🏢',
    items: ['Incorporation', 'Tax strategies', 'Legal compliance'],
  },
  {
    title: 'Marketing & Growth',
    description: 'Attract clients and scale your agency with proven marketing strategies.',
    image: '/images/nurse-agency/marketing.jpg',
    icon: '📈',
    items: ['Client acquisition', 'Brand building', 'Referral systems'],
  },
  {
    title: 'Operations & Systems',
    description: 'Build efficient systems that save time and maximize profits.',
    image: '/images/nurse-agency/operations.jpg',
    icon: '⚙️',
    items: ['Standard procedures', 'Team management', 'Quality control'],
  },
  {
    title: 'Financial Freedom',
    description: 'Create multiple income streams and achieve financial independence.',
    image: '/images/nurse-agency/financial.jpg',
    icon: '💰',
    items: ['Profit maximization', 'Multiple revenue', 'Passive income'],
  },
];

export default function ProgramBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            Program Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What You'll Gain
          </h2>
        </motion.div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image side with 3D flip */}
              <motion.div
                initial={{ opacity: 0, rotateY: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 1, 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                style={{ transformStyle: "preserve-3d" }}
                className={`relative h-[300px] rounded-2xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                
                {/* Floating icon */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl"
                >
                  {benefit.icon}
                </motion.div>
              </motion.div>

              {/* Content side with staggered list */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">{benefit.description}</p>

                <ul className="space-y-4">
                  {benefit.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + index * 0.1 + i * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}