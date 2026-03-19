'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  role: string;
  province: string;
}

export default function LeadMagnet() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const particleTracks = [
    { startX: 12, endX: 24 },
    { startX: 28, endX: 16 },
    { startX: 46, endX: 58 },
    { startX: 62, endX: 48 },
    { startX: 78, endX: 84 },
    { startX: 90, endX: 72 },
  ];
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: '',
    province: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Lead captured:', formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', role: '', province: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="lead-magnet" 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gold/80 rounded-full blur-3xl"
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particleTracks.map((track, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: `${track.startX}%` }}
            animate={{ 
              y: ['-100%', '100%'],
              x: [`${track.startX}%`, `${track.endX}%`],
            }}
            transition={{ 
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              FREE RESOURCE
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Free Nurse Agency
            <br />
            <span className="text-gold">
              Starter Guide
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Canada Edition - Step-by-step roadmap for RPNs & RNs
          </motion.p>

          {/* Value Props */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              '✓ 10+ Income Streams',
              '✓ Business Setup Checklist',
              '✓ Compliance Guide',
              '✓ Marketing Templates',
            ].map((prop, index) => (
              <span key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                {prop}
              </span>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div variants={itemVariants} className="max-w-md mx-auto">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold text-primary p-6 rounded-2xl"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Check Your Email!</h3>
                <p className="text-primary/80">Your free guide has been sent. Get ready to build your agency! 📥</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full px-5 py-4 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/50 text-base"
                  />
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    required
                    className="w-full px-5 py-4 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/50 text-base"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/50 text-base appearance-none"
                    >
                      <option value="">I am a...</option>
                      <option value="RN">Registered Nurse (RN)</option>
                      <option value="RPN">Registered Practical Nurse (RPN)</option>
                      <option value="Student">Nursing Student</option>
                      <option value="Other">Other Healthcare</option>
                    </select>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1">
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-4 focus:ring-gold/50 text-base appearance-none"
                    >
                      <option value="">Province</option>
                      <option value="ON">Ontario</option>
                      <option value="BC">British Columbia</option>
                      <option value="AB">Alberta</option>
                      <option value="QC">Quebec</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-500/20 text-red-200 p-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-primary px-6 py-5 rounded-btn font-bold text-lg hover:bg-gold-dark hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    '📥 Download Free Guide Now'
                  )}
                </button>

                <p className="text-sm text-gray-400 mt-4">
                  No spam. Unsubscribe anytime. 5,000+ nurses already subscribed.
                </p>
              </form>
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-300">Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm text-gray-300">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-300">Instant Access</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
