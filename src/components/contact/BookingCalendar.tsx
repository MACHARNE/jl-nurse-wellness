// src/components/contact/BookingCalendar.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BookingCalendar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Mock available slots
  const slots = [
    { day: 'Mon, Mar 25', times: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
    { day: 'Tue, Mar 26', times: ['10:00 AM', '1:00 PM', '3:00 PM'] },
    { day: 'Wed, Mar 27', times: ['9:00 AM', '11:00 AM', '2:00 PM'] },
    { day: 'Thu, Mar 28', times: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'] },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            Book a Call
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Schedule Your Free Strategy Call
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a time that works best for you. All calls are 30 minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {slots.map((slot, index) => (
            <motion.div
              key={slot.day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-bold text-primary text-lg mb-4">{slot.day}</h3>
              <div className="space-y-2">
                {slot.times.map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gold hover:text-white transition-all duration-300 border border-gray-200"
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          All times are in Eastern Time (ET)
        </motion.p>
      </div>
    </section>
  );
}