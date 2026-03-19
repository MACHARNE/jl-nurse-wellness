// src/components/nurse-agency/PricingTable.tsx
'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '$197',
    description: 'Perfect for nurses just starting their journey',
    features: [
      'Core training modules',
      'Resource library access',
      'Community forum',
      'Monthly Q&A sessions',
    ],
    popular: false,
    icon: '🌱',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Professional',
    price: '$497',
    description: 'Most popular choice for serious entrepreneurs',
    features: [
      'Everything in Starter',
      '1-on-1 mentorship',
      'Business plan review',
      'Weekly coaching calls',
      'Priority support',
    ],
    popular: true,
    icon: '⭐',
    color: 'from-gold to-gold-dark',
  },
  {
    name: 'Premium',
    price: '$997',
    description: 'Full support for maximum growth',
    features: [
      'Everything in Professional',
      'Strategy sessions',
      'Legal document templates',
      'Marketing toolkit',
      'VIP access to events',
    ],
    popular: false,
    icon: '👑',
    color: 'from-purple-400 to-purple-600',
  },
];

export default function PricingTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/20 px-4 py-2 rounded-full mb-4">
            Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select the plan that matches your goals and start your journey today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              style={{ transformStyle: "preserve-3d" }}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-[-1rem]' : ''}`}
            >
              {/* 3D Card */}
              <div className={`relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-gold shadow-2xl scale-105' : ''
              }`}>
                
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Popular badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ y: -50 }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 right-4"
                  >
                    <span className="bg-gold text-primary px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  >
                    {plan.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-300 text-sm ml-2">/one-time</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-gold flex-shrink-0">✓</span>
                        <span className="text-gray-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block w-full bg-white/20 backdrop-blur-sm border border-white/30 text-center px-6 py-4 rounded-btn font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                  >
                    Choose {plan.name}
                  </Link>
                </div>
              </div>

              {/* 3D Shadow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-transparent rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}