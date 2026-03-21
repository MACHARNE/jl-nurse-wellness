// src/components/nurse-agency/ProgramBenefits.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

type BenefitIcon = 'structure' | 'growth' | 'operations' | 'finance';

const benefits = [
  {
    title: 'Business Structure',
    description: 'Learn how to structure your agency for compliance and tax efficiency in Canada.',
    image: '/images/business-struture.jpg',
    icon: 'structure' as BenefitIcon,
    items: ['Incorporation', 'Tax strategies', 'Legal compliance'],
  },
  {
    title: 'Marketing & Growth',
    description: 'Attract clients and scale your agency with proven marketing strategies.',
    image: '/images/marketgrowth.jpg',
    icon: 'growth' as BenefitIcon,
    items: ['Client acquisition', 'Brand building', 'Referral systems'],
  },
  {
    title: 'Operations & Systems',
    description: 'Build efficient systems that save time and maximize profits.',
    image: '/images/workingsystem.jpg',
    icon: 'operations' as BenefitIcon,
    items: ['Standard procedures', 'Team management', 'Quality control'],
  },
  {
    title: 'Financial Freedom',
    description: 'Create multiple income streams and achieve financial independence.',
    image: '/images/nurse-agency/financial.jpg',
    icon: 'finance' as BenefitIcon,
    items: ['Profit maximization', 'Multiple revenue', 'Passive income'],
  },
];

function renderBenefitIcon(icon: BenefitIcon) {
  const baseClass = 'h-8 w-8 text-white';

  if (icon === 'structure') {
    return (
      <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 21V8.25h13.5V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h1.5v1.5H9zM13.5 12H15v1.5h-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.25V5.25h4.5v3" />
      </svg>
    );
  }

  if (icon === 'growth') {
    return (
      <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20.25h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 16.5l4.5-4.5 3 3L21 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5H21V12" />
      </svg>
    );
  }

  if (icon === 'operations') {
    return (
      <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 3.75h3l.75 2.25 2.25.75 1.5-1.5 2.25 2.25-1.5 1.5.75 2.25L21 12l-1.5.75-.75 2.25 1.5 1.5-2.25 2.25-1.5-1.5-2.25.75-.75 2.25h-3l-.75-2.25-2.25-.75-1.5 1.5-2.25-2.25 1.5-1.5-.75-2.25L3 12l1.5-.75.75-2.25-1.5-1.5 2.25-2.25 1.5 1.5 2.25-.75.75-2.25z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  return (
    <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5a3.75 3.75 0 00-3.75-3.75H9.75A2.25 2.25 0 007.5 6v.75A2.25 2.25 0 009.75 9h4.5A2.25 2.25 0 0116.5 11.25V12A2.25 2.25 0 0114.25 14.25H11.25A3.75 3.75 0 017.5 10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 16.5a3.75 3.75 0 003.75 3.75h3A2.25 2.25 0 0016.5 18v-.75A2.25 2.25 0 0014.25 15h-4.5A2.25 2.25 0 017.5 12.75V12A2.25 2.25 0 019.75 9.75h3A3.75 3.75 0 0116.5 13.5" />
    </svg>
  );
}

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
              <motion.div
                initial={{ opacity: 0, rotateY: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.2 + index * 0.1,
                  type: 'spring',
                  stiffness: 80,
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`relative h-[300px] rounded-2xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image src={benefit.image} alt={benefit.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  {renderBenefitIcon(benefit.icon)}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{benefit.title}</h3>
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
                        type: 'spring',
                        stiffness: 200,
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
