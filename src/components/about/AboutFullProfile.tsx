'use client';

import { motion } from 'framer-motion';

const pathwayItems = [
  'Transition into entrepreneurship',
  'Build strong personal and business brands',
  'Understand business opportunities within healthcare and wellness',
  'Explore product consulting and influencer-based income streams',
  'Create multiple sources of income',
  'Embrace wellness and self-care as part of a balanced lifestyle',
];

const personalSteps = [
  'You are not limited to one path.',
  'You can grow.',
  'You can earn more.',
  'You can build a brand.',
  'You can create freedom.',
];

export default function AboutFullProfile() {
  return (
    <section className="bg-gradient-to-b from-background to-primary/5 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8"
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">About Jean Lewis</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          className="mt-8 rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0112 20.055a12.083 12.083 0 01-6.16-9.477L12 14z" />
              </svg>
            </span>
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Jean&apos;s Background</h3>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>
              <strong>Jean Lewis</strong> is a dedicated nurse, entrepreneur, and founder
              of <strong>JL Nurse 360</strong>, a platform created to empower nurses to
              expand beyond traditional roles and build meaningful, sustainable futures.
            </p>
            <p>
              With years of hands-on experience in healthcare, Jean understands the realities
              nurses face every day-long hours, emotional demands, and limited control over
              income and time. Throughout her journey, she developed a deep appreciation
              for the <strong>strength, resilience, and leadership</strong> that nurses
              naturally possess.
            </p>
            <p>
              Beyond her clinical background, Jean is a{' '}
              <strong>Product Consultant in health and wellness</strong>, with specialized
              expertise in medical diagnostic kits, particularly pregnancy and ovulation
              test kits. She has developed extensive knowledge in{' '}
              <strong>product selection, application, and market positioning</strong>,
              enabling her to guide both individuals and businesses in making informed
              health and wellness decisions.
            </p>
            <p>
              Jean is also a <strong>Branding Consultant</strong>, helping professionals
              especially nurses build strong, credible personal and business brands. She
              supports clients in positioning themselves effectively, communicating their
              value, and creating visibility in competitive markets.
            </p>
            <p>
              In addition, Jean is a growing{' '}
              <strong>Health and Wellness Influencer</strong>, using her platform to
              educate, inspire, and empower individuals to prioritize self-care,
              confidence, and informed health choices.
            </p>
            <p>
              Recognizing that nurses possess highly transferable skills beyond bedside care,
              Jean began exploring how healthcare professionals could leverage their
              expertise in business, branding, and product-based opportunities. This vision
              led to the creation of <strong>JL Nurse 360</strong>, a platform that bridges
              <strong> nursing, wellness, and entrepreneurship</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          className="mt-8 rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">
              Why <strong>JL Nurse 360</strong> Was Created
            </h3>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>
              <strong>JL Nurse 360</strong> was created to solve a real and growing challenge:
            </p>
            <p>Many nurses want more flexibility, more income, and more control but don&apos;t know where to start.</p>
            <p>Jean saw an opportunity to provide a structured, supportive pathway that helps nurses:</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pathwayItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="rounded-2xl border border-gray-100 bg-primary/5 p-4 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                    +
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            <strong>
              JL Nurse 360 brings together three powerful areas-nursing, wellness, and
              entrepreneurship into one unified platform designed specifically for nurses.
            </strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <motion.article whileHover={{ y: -3 }} className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8">
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              To empower nurses to build income, independence, and confidence through
              entrepreneurship, branding, wellness, and practical business education.
            </p>
          </motion.article>

          <motion.article whileHover={{ y: -3 }} className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8">
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              To create a future where nurses are not limited to traditional roles, but are
              recognized as leaders, business owners, consultants, influencers, and
              innovators shaping the healthcare and wellness industries.
            </p>
          </motion.article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          className="mt-8 rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8"
        >
          <h3 className="text-2xl font-bold text-primary sm:text-3xl">Personal Message to Nurses</h3>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>To every nurse reading this:</p>
            <p>
              You have already proven your strength, discipline, and ability to handle
              responsibility under pressure. Those same qualities can help you build
              something of your own.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {personalSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.01 }}
                className="rounded-2xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm font-semibold text-primary transition-shadow duration-300 hover:shadow-sm sm:text-base"
              >
                {step}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>
              Whether through entrepreneurship, wellness, product consulting, or personal
              branding, there are opportunities available to you.
            </p>
            <p>
              <strong>JL Nurse 360</strong> is here to guide you as you explore what&apos;s
              possible beyond the bedside-and to support you in building a future that
              reflects your full potential.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <motion.article whileHover={{ y: -3 }} className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8">
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Mission statement</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              To help nurses grow in business, wellness, and personal freedom.
            </p>
          </motion.article>

          <motion.article whileHover={{ y: -3 }} className="rounded-3xl border border-gold/20 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8">
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Vision statement</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              To build a trusted platform where nurses can access entrepreneurship,
              self-care, and sustainable income opportunities.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
