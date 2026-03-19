// src/components/contact/Locations.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const locations = [
  {
    city: 'Toronto',
    province: 'Ontario',
    address: '123 Queen Street West, Suite 400',
    phone: '+1 (416) 555-0123',
    email: 'toronto@jlnursewellness.com',
    icon: '🇨🇦',
  },
  {
    city: 'Vancouver',
    province: 'British Columbia',
    address: '789 Granville Street, Suite 200',
    phone: '+1 (604) 555-0456',
    email: 'vancouver@jlnursewellness.com',
    icon: '🏔️',
  },
  {
    city: 'Calgary',
    province: 'Alberta',
    address: '456 8th Avenue SW, Suite 300',
    phone: '+1 (403) 555-0789',
    email: 'calgary@jlnursewellness.com',
    icon: '🏙️',
  },
  {
    city: 'Montreal',
    province: 'Quebec',
    address: '1010 Rue Sherbrooke Ouest',
    phone: '+1 (514) 555-1011',
    email: 'montreal@jlnursewellness.com',
    icon: '⚜️',
  },
];

export default function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            Our Locations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Serving Nurses Across Canada
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Virtual consultations available nationwide. In-person meetings by appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-4xl mb-4"
              >
                {location.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-primary mb-1">{location.city}</h3>
              <p className="text-sm text-gold font-semibold mb-3">{location.province}</p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-start gap-2">
                  <span className="text-gold flex-shrink-0">📍</span>
                  {location.address}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gold flex-shrink-0">📞</span>
                  {location.phone}
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gold flex-shrink-0">✉️</span>
                  {location.email}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gold/10 text-gold px-4 py-2 rounded-btn font-semibold hover:bg-gold hover:text-white transition-all duration-300"
              >
                Get Directions
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}