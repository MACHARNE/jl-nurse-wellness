'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Nurse to Agency' },  // Changed from '/nurse-agency' to '/program'
  { href: '/farmasi', label: 'Farmasi' },
  { href: '/kokoshea', label: 'Kokoshea' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/JLLOGO.jpg"
              alt="JL Nurse & Wellness Logo"
              width={40}
              height={40}
              className="h-8 w-auto sm:h-10 md:h-12 rounded-lg"
              priority
            />
            <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl font-bold text-primary hidden xs:inline">
              JL Nurse & Wellness
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm lg:text-base ${
                  pathname === link.href
                    ? 'text-gold font-semibold'  // Changed from 'text-primary' to 'text-gold'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#strategy-call"
              className="bg-gold text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-btn font-semibold hover:bg-gold-dark transition transform hover:scale-105 ml-2 lg:ml-4 text-sm lg:text-base whitespace-nowrap"
            >
              Book Free Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg border border-gray-100 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gold transition rounded-lg text-base ${
                  pathname === link.href ? 'text-gold font-semibold bg-gray-50' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#strategy-call"
              className="block mx-4 my-3 bg-gold text-white px-4 py-3 rounded-btn font-semibold text-center text-base hover:bg-gold-dark transition"
            >
              Book Free Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}