// src/components/nurse-agency/ProgramModules.tsx
'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const modules = [
  {
    id: 1,
    title: 'Module 1: Foundation',
    description: 'Understanding the healthcare agency landscape in Canada',
    topics: ['Market research', 'Business models', 'Legal requirements'],
    icon: '🏗️',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: 'Module 2: Setup',
    description: 'Register your agency and establish proper systems',
    topics: ['Registration process', 'Banking & accounting', 'Insurance needs'],
    icon: '⚡',
    color: 'from-green-400 to-green-600',
  },
  {
    id: 3,
    title: 'Module 3: Operations',
    description: 'Day-to-day management and client acquisition',
    topics: ['Client onboarding', 'Staff hiring', 'Quality assurance'],
    icon: '🔄',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 4,
    title: 'Module 4: Growth',
    description: 'Scale your agency and maximize profitability',
    topics: ['Marketing strategies', 'Expansion plans', 'Team leadership'],
    icon: '📈',
    color: 'from-amber-400 to-amber-600',
  },
];

export default function ProgramModules() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeModule, setActiveModule] = useState(1);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider bg-gold/10 px-4 py-2 rounded-full mb-4">
            Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Program Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A step-by-step journey from nurse to agency owner
          </p>
        </motion.div>

        {/* Module tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {modules.map((module, index) => (
            <motion.button
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onClick={() => setActiveModule(module.id)}
              className={`relative px-6 py-3 rounded-btn font-medium transition-all duration-300 overflow-hidden ${
                activeModule === module.id
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gold'
              }`}
            >
              {activeModule === module.id && (
                <motion.div
                  layoutId="activeModule"
                  className={`absolute inset-0 bg-gradient-to-r ${module.color}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{module.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active module content */}
        <AnimatePresence mode="wait">
          {modules.map((module) => (
            module.id === activeModule && (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                  
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          delay: 0.2 
                        }}
                        className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/30 rounded-2xl flex items-center justify-center text-4xl"
                      >
                        {module.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                          {module.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {module.topics.map((topic, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="bg-gray-50 p-4 rounded-xl"
                            >
                              <span className="block w-6 h-6 bg-gold rounded-full text-white text-xs flex items-center justify-center mb-2">
                                {i + 1}
                              </span>
                              <span className="text-sm font-medium text-gray-700">
                                {topic}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}