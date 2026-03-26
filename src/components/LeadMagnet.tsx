'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FormData {
  firstName: string;
  email: string;
  province: string;
}

export default function LeadMagnet() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    province: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log('Lead captured:', formData);
      setIsSuccess(true);
      setFormData({ firstName: '', email: '', province: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="lead-magnet"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 text-white sm:py-20 md:py-24"
    >
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
        >
          Free Guide:{" "}
          <span className="text-gold">Start Your Nursing Agency</span> in Canada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl"
        >
          Download a practical starter guide created for Canadian nurses ready to
          explore business ownership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-md"
        >
          {isSuccess ? (
            <div className="rounded-2xl bg-gold p-6 text-primary">
              <h3 className="mb-2 text-xl font-bold">Check Your Email!</h3>
              <p className="text-primary/80">Your free guide has been sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="rounded-2xl bg-white/10 p-1 backdrop-blur-sm">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full rounded-xl bg-white px-5 py-4 text-base text-gray-900 focus:outline-none focus:ring-4 focus:ring-gold/50"
                />
              </div>

              <div className="rounded-2xl bg-white/10 p-1 backdrop-blur-sm">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full rounded-xl bg-white px-5 py-4 text-base text-gray-900 focus:outline-none focus:ring-4 focus:ring-gold/50"
                />
              </div>

              <div className="rounded-2xl bg-white/10 p-1 backdrop-blur-sm">
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-xl bg-white px-4 py-4 text-base text-gray-900 focus:outline-none focus:ring-4 focus:ring-gold/50"
                >
                  <option value="">Province</option>
                  <option value="ON">Ontario</option>
                  <option value="BC">British Columbia</option>
                  <option value="AB">Alberta</option>
                  <option value="QC">Quebec</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {error && <div className="rounded-lg bg-red-500/20 p-3 text-sm text-red-200">{error}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-btn bg-gold px-6 py-4 text-lg font-bold text-primary transition-all duration-300 hover:scale-105 hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Download Free Guide'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
