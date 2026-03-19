'use client';

import { motion } from 'framer-motion';

const guides = [
  {
    title: 'Nurse Side Hustles in Canada',
    description: 'Practical ideas for additional income without leaving nursing.',
    icon: '📚',
    bgColor: 'bg-primary/10',
    hoverBg: 'group-hover:bg-primary/20',
    iconColor: 'text-primary',
  },
  {
    title: 'Healthcare Entrepreneurship Guide',
    description: 'Step-by-step business startup for healthcare professionals.',
    icon: '📈',
    bgColor: 'bg-gold/10',
    hoverBg: 'group-hover:bg-gold/20',
    iconColor: 'text-gold',
  },
  {
    title: 'Building Passive Income as a Nurse',
    description: 'Strategies for long-term financial independence.',
    icon: '💰',
    bgColor: 'bg-secondary/10',
    hoverBg: 'group-hover:bg-secondary/20',
    iconColor: 'text-secondary',
  },
];

export default function FreeGuides() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            Free Resources
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Free Guides for Canadian Nurses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download these free resources to start your journey today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-16 h-16 sm:w-20 sm:h-20 ${guide.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 ${guide.hoverBg} transition-all duration-300`}
              >
                <span className="text-3xl sm:text-4xl">{guide.icon}</span>
              </motion.div>

              {/* Title */}
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center ${guide.iconColor}`}>
                {guide.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 text-center mb-6 leading-relaxed">
                {guide.description}
              </p>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-white py-3 sm:py-4 rounded-btn font-semibold text-sm sm:text-base hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Download Free Guide</span>
                <motion.div
                  className="absolute inset-0 bg-gold"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.2 }}
                />
              </motion.button>

              {/* Free Badge */}
              <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold px-2 py-1 rounded-full">
                FREE
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">
            ⭐️⭐️⭐️⭐️⭐️ Trusted by 500+ Canadian nurses • Instant download • No spam
          </p>
        </motion.div>
      </div>
    </section>
  );
}