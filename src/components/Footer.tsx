'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getCurrentYear } from '@/lib/utils';

export default function Footer() {
  const currentYear = getCurrentYear();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="bg-primary py-8 text-white sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
          <div className="text-center sm:text-left">
            <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">JL Nurse & Wellness</h3>
            <p className="text-xs text-gray-300 sm:text-sm">
              Helping Canadian nurses transition from bedside to business ownership.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="mb-3 text-sm font-bold sm:mb-4 sm:text-base">Quick Links</h4>
            <ul className="space-y-1 text-xs text-gray-300 sm:space-y-2 sm:text-sm">
              <li><Link href="/" className="transition hover:text-gold">Home</Link></li>
              <li><Link href="/about" className="transition hover:text-gold">About</Link></li>
              <li><Link href="/program" className="transition hover:text-gold">Nurse to Agency</Link></li>
              <li><Link href="/farmasi" className="transition hover:text-gold">Farmasi</Link></li>
              <li><Link href="/kokoshea" className="transition hover:text-gold">Kokoshea</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="mb-3 text-sm font-bold sm:mb-4 sm:text-base">Resources</h4>
            <ul className="space-y-1 text-xs text-gray-300 sm:space-y-2 sm:text-sm">
              <li><Link href="/resources" className="transition hover:text-gold">Blog</Link></li>
              <li><Link href="/#lead-magnet" className="transition hover:text-gold">Free Guide</Link></li>
              <li><Link href="/contact" className="transition hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="mb-3 text-sm font-bold sm:mb-4 sm:text-base">Connect</h4>
            <div className="mb-4 flex justify-center space-x-4 sm:justify-start">
              {[
                { href: 'https://facebook.com', label: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { href: 'https://www.instagram.com/kokobeauty12/reels/', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { href: 'https://linkedin.com', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z' },
                { href: 'https://wa.me/234123456789', label: 'WhatsApp', path: 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.01.477 1.184.564.174.087.289.13.332.202.043.072.043.419-.101.824z' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition hover:scale-110 hover:text-gold"
                  aria-label={item.label}
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>

            <p className="mt-2 text-xs text-gray-400">
              <span className="font-semibold">WhatsApp:</span> +234 123 456 789
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-4 md:hidden">
          <button
            onClick={() => setShowDisclaimer(!showDisclaimer)}
            className="flex w-full items-center justify-between text-left text-gray-300 transition hover:text-gold"
          >
            <span className="text-sm font-semibold">Disclaimer and Legal</span>
            <svg
              className={`h-5 w-5 transform transition-transform duration-300 ${showDisclaimer ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${showDisclaimer ? 'mt-4 max-h-96' : 'max-h-0'}`}>
            <div className="space-y-2 rounded-lg bg-gray-900/50 p-4 text-xs text-gray-400">
              <p>This website provides general information and does not constitute legal, financial, or professional advice. Results may vary and individual outcomes depend on various factors.</p>
              <p>JL Nurse & Wellness is not responsible for any actions taken based on the information provided. Always consult with qualified professionals before making business decisions.</p>
              <p>By using this site, you agree to our Terms of Service and Privacy Policy. All testimonials are from real clients but individual results may vary.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 hidden border-t border-gray-800 pt-4 sm:mt-8 sm:pt-6 md:mt-12 md:block md:pt-8">
          <div className="grid grid-cols-1 gap-4 text-xs text-gray-400 md:grid-cols-3">
            <p>This website provides general information and does not constitute legal, financial, or professional advice. Results may vary and individual outcomes depend on various factors.</p>
            <p>JL Nurse & Wellness is not responsible for any actions taken based on the information provided. Always consult with qualified professionals before making business decisions.</p>
            <p>By using this site, you agree to our Terms of Service and Privacy Policy. All testimonials are from real clients but individual results may vary.</p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-4 text-center text-xs text-gray-400 sm:mt-8 sm:pt-6 sm:text-sm md:mt-12 md:pt-8">
          <p>Copyright {currentYear} JL Nurse & Wellness. All rights reserved. Empowering Canadian nurses.</p>
        </div>
      </div>
    </footer>
  );
}
