'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kokoshea/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/16477748336',
    path: 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.01.477 1.184.564.174.087.289.13.332.202.043.072.043.419-.101.824z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z',
  },
];

export default function ContactLanding() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl"
          >
            Contact <span className="text-gold">JL Nurse 360</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80 sm:text-xl"
          >
            Have questions about Nurse2Agency, Farmasi, Kokoshea, or working with Jean?
            Let&apos;s connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="#strategy-call"
              className="inline-flex items-center justify-center rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition hover:scale-105 hover:bg-gold-dark"
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.2)] sm:p-8"
          >
            <div className="mb-8">
              <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
                Contact Form
              </span>
              <h2 className="mt-4 text-3xl font-bold text-primary">Send a message</h2>
              <p className="mt-3 text-charcoal/75">
                Share your question or interest and the JL Nurse 360 team will follow up.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">Full Name</label>
                <input
                  type="text"
                  placeholder="Jean Lewis"
                  className="w-full rounded-btn border border-primary/10 bg-background px-4 py-3 text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">Email</label>
                <input
                  type="email"
                  placeholder="info@JLNurse360.com"
                  className="w-full rounded-btn border border-primary/10 bg-background px-4 py-3 text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (647) 774-8336"
                  className="w-full rounded-btn border border-primary/10 bg-background px-4 py-3 text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can support you."
                  className="w-full rounded-btn border border-primary/10 bg-background px-4 py-3 text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-btn bg-primary px-6 py-4 text-lg font-semibold text-white transition hover:bg-primary-dark"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.2)] sm:p-8">
              <span className="inline-block rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Email
              </span>
              <h2 className="mt-4 text-3xl font-bold text-primary">Connect by email</h2>
              <p className="mt-3 text-charcoal/75">
                For general questions, collaborations, or next steps, reach out directly.
              </p>
              <a
                href="mailto:info@JLNurse360.com"
                className="mt-6 inline-flex items-center rounded-btn bg-gold px-6 py-3 font-semibold text-primary transition hover:bg-gold-dark"
              >
                info@JLNurse360.com
              </a>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_-24px_rgba(11,31,58,0.2)] sm:p-8">
              <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
                Social Links
              </span>
              <h2 className="mt-4 text-3xl font-bold text-primary">Follow and stay connected</h2>
              <p className="mt-3 text-charcoal/75">
                Keep up with the latest wellness, beauty, and nurse entrepreneurship updates.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-background px-5 py-3 font-semibold text-primary transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={item.path} />
                    </svg>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="strategy-call" className="pb-20 sm:pb-24 md:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-[0_32px_80px_-30px_rgba(8,22,43,0.55)] sm:p-10 md:p-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-gold/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
                Calendly Booking
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Prefer to choose a time directly?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Use the JL Nurse 360 booking link to reserve a conversation with Jean and
                discuss Nurse2Agency, Farmasi, Kokoshea, or collaboration opportunities.
              </p>
              <div className="mt-8">
                <a
                  href="https://calendly.com/yourlink/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition hover:scale-105 hover:bg-gold-dark"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
