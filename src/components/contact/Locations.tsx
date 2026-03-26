'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const contactPoints = [
  {
    label: 'Direct Support',
    subtitle: 'Connect with Jean Lewis',
    detail: '+1 (647) 774-8336',
    meta: 'Phone support and scheduled conversations',
    icon: 'PH',
  },
  {
    label: 'Email Access',
    subtitle: 'General inquiries',
    detail: 'info@JLNurse360.com',
    meta: 'Best for questions, collaborations, and follow-up',
    icon: 'EM',
  },
  {
    label: 'Nationwide Reach',
    subtitle: 'Serving nurses across Canada',
    detail: 'Virtual consultations available',
    meta: 'Guidance, resources, and support from anywhere',
    icon: 'CA',
  },
  {
    label: 'Website',
    subtitle: 'Explore more online',
    detail: 'www.JLNurse360.com',
    meta: 'Programs, wellness, blog articles, and free resources',
    icon: 'WEB',
  },
];

export default function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Contact Details
          </span>
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
            Reach JL Nurse 360 with confidence
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Whether you are exploring nurse entrepreneurship, wellness support, or
            business guidance, the right contact path is here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactPoints.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <motion.div
                animate={{ rotate: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-sm font-bold tracking-[0.18em] text-gold"
              >
                {item.icon}
              </motion.div>

              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                {item.label}
              </p>
              <h3 className="mt-2 text-xl font-bold text-primary">{item.subtitle}</h3>
              <p className="mt-3 font-semibold text-charcoal">{item.detail}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
