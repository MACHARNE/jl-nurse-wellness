'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const particlePositions = [
    { x: 160, y: 90 },
    { x: 340, y: 180 },
    { x: 520, y: 120 },
    { x: 760, y: 240 },
    { x: 980, y: 140 },
    { x: 1180, y: 260 },
    { x: 1380, y: 110 },
    { x: 1560, y: 220 },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section 
      id="strategy-call"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden"
    >
      {/* Animated background elements - updated to brand colors */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        custom={2}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C9A14A 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating particles - updated to gold */}
      <div className="absolute inset-0 overflow-hidden">
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: particle.x,
              y: particle.y,
            }}
            animate={{ 
              y: [null, -30, 30, -30],
              x: [null, 30, -30, 30],
            }}
            transition={{ 
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 3,
            }}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Pre-headline - updated to gold */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              LIMITED TIME OFFER
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            You've Cared for{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold">
                Others
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-2 left-0 h-3 bg-gold/20 -z-0 rounded-full"
              />
            </span>
            .
          </motion.h2>

          <motion.h3 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gold"
          >
            Now Build Your Own Future.
          </motion.h3>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Book your free strategy call today and discover how you can transition from 
            <span className="text-gold font-semibold"> nurse to agency owner</span> in just months.
          </motion.p>

          {/* Benefits Grid - updated to gold */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10"
          >
            {[
              { icon: '🎯', text: 'Personalized Strategy' },
              { icon: '⚡', text: '30-Minute Call' },
              { icon: '💡', text: 'No Obligation' },
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 border border-white/10">
                <span className="text-2xl">{benefit.icon}</span>
                <span className="text-sm sm:text-base text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Main CTA Button - updated to gold */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-gold text-primary px-10 py-5 rounded-btn font-bold text-xl hover:bg-gold-dark hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background on hover */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Your Free Strategy Call
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link
              href="/resources"
              className="inline-flex items-center gap-2 border-2 border-gold/30 text-white px-8 py-5 rounded-btn font-semibold text-lg hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 group"
            >
              <span>Browse Free Resources</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Trust Indicators - updated to gold */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 pt-6"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">500+ Nurses Helped</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">24h Response Time</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">100% Confidential</span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-gray-500 mb-4">Trusted by nurses from</p>
            <div className="flex flex-wrap justify-center gap-6 items-center opacity-70">
              {['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Nova Scotia'].map((province, index) => (
                <span key={index} className="text-gray-300 text-sm font-medium">
                  {province}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-5">
          <path fill="#C9A14A" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
