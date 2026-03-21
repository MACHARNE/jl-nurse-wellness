// src/components/nurse-agency/WhoItsFor.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

type AudienceIcon = 'rn' | 'rpn' | 'entrepreneur' | 'career';

const targetAudience = [
  {
    title: 'Registered Nurses (RNs)',
    description: 'RNs looking to leverage their clinical expertise into business ownership and create passive income streams.',
    image: '/images/YU-unsplash.jpg',
    icon: 'rn' as AudienceIcon,
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    title: 'Registered Practical Nurses (RPNs)',
    description: 'RPNs ready to break free from shift work and build a scalable healthcare business.',
    image: '/images/practicalnurse.jpg',
    icon: 'rpn' as AudienceIcon,
    color: 'from-green-500/20 to-green-600/20',
  },
  {
    title: 'Nurse Entrepreneurs',
    description: 'Nurses who already have a business idea but need guidance on structure, compliance, and growth.',
    image: '/images/nurse-enter.jpg',
    icon: 'entrepreneur' as AudienceIcon,
    color: 'from-purple-500/20 to-purple-600/20',
  },
  {
    title: 'Career Changers',
    description: 'Healthcare professionals seeking more autonomy, flexibility, and financial freedom.',
    image: '/images/carr-chang.jpg',
    icon: 'career' as AudienceIcon,
    color: 'from-amber-500/20 to-amber-600/20',
  },
];

function renderAudienceIcon(icon: AudienceIcon) {
  const baseClass = 'h-7 w-7 text-white';

  if (icon === 'rn') {
    return (
      <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a7.5 7.5 0 0115 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v4.5M9.75 12h4.5" />
      </svg>
    );
  }

  if (icon === 'rpn') {
    return (
      <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a7.5 7.5 0 0115 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12h7.5" />
      </svg>
    );
  }

  if (icon === 'entrepreneur') {
    return (
      <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V6a3 3 0 016 0v.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V9.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5h3" />
      </svg>
    );
  }

  return (
    <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h4.5v4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 16.5H3v-4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-6.75 6.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5l6.75-6.75" />
    </svg>
  );
}

export default function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-background py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            Who It's For
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Designed Specifically For
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our program is tailored for healthcare professionals ready to take the next step
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetAudience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative h-48 md:h-full overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    {renderAudienceIcon(item.icon)}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-6"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="h-0.5 bg-gold/30 mt-4"
                  />
                </motion.div>
              </div>

              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-gold/20 to-transparent rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
