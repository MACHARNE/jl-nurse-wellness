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
            <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">JLNurse360</h3>
            <p className="text-xs text-gray-300 sm:text-sm">
              Helping Canadian nurses transition from bedside to business ownership.
            </p>
            <div className="mt-4 space-y-2 text-xs text-gray-300 sm:text-sm">
              <p>
                <a href="mailto:info@jlnurse360.com" className="transition hover:text-gold">
                  info@jlnurse360.com
                </a>
              </p>
              <p>
                <a href="tel:+12893017351" className="transition hover:text-gold">
                  Jean Lewis +1 (289) 301-7351
                </a>
              </p>
              <p>
                <a
                  href="https://www.JLNurse360.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-gold"
                >
                  www.JLNurse360.com
                </a>
              </p>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="mb-3 text-sm font-bold sm:mb-4 sm:text-base">Quick Links</h4>
            <ul className="space-y-1 text-xs text-gray-300 sm:space-y-2 sm:text-sm">
              <li><Link href="/" className="transition hover:text-gold">Home</Link></li>
              <li><Link href="/about" className="transition hover:text-gold">About</Link></li>
              <li><Link href="/program" className="transition hover:text-gold">Nurse to Agency</Link></li>
              <li><Link href="/travel-nurse-consultation" className="transition hover:text-gold">Travel Nurse Consultation</Link></li>
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
            <h4 className="mb-3 text-sm font-bold sm:mb-4 sm:text-base">Contact Us</h4>
            <div className="space-y-2 text-xs text-gray-400 sm:text-sm">
              <p>
                <span className="font-semibold">Address:</span>{' '}
                <a href="mailto:info@jlnurse360.com" className="transition hover:text-gold">
                  JLNurse360.
3601 Hwy 7 East, Suite 1005, 
Markham, L3R 0M3. Ontario. Canada
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@jlnurse360.com" className="transition hover:text-gold">
                  info@jlnurse360.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+12893017351" className="transition hover:text-gold">
                  +1 (289) 301-7351
                </a>
              </p>
              <p>
                <span className="font-semibold">Website:</span>{' '}
                <a
                  href="https://www.jlnurse360.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-gold"
                >
                  www.jlnurse360.com
                </a>
              </p>
            </div>
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
              <p>
                <span className="font-semibold text-white">Disclaimer</span>
              </p>
              <p>
                JLNurse360 provides educational and informational content. Users should seek appropriate legal, regulatory, financial, and professional advice where required.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 hidden border-t border-gray-800 pt-4 sm:mt-8 sm:pt-6 md:mt-12 md:block md:pt-8">
          <div className="rounded-lg bg-gray-900/40 p-4 text-xs text-gray-400">
            <p className="font-semibold text-white">Disclaimer</p>
            <p className="mt-2">
              JLNurse360 provides educational and informational content. Users should seek appropriate legal, regulatory, financial, and professional advice where required.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-4 text-center text-xs text-gray-400 sm:mt-8 sm:pt-6 sm:text-sm md:mt-12 md:pt-8">
          <p>Copyright {currentYear} JLNurse360. All rights reserved. Empowering Canadian nurses.</p>
        </div>
      </div>
    </footer>
  );
}
