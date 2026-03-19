"use client";

import { useEffect, useRef } from "react";

export default function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 md:py-16 bg-background border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Built for Canada */}
          <div className="group text-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gold/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <svg className="relative w-full h-full text-gold p-3 sm:p-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a.75.75 0 01.75.75v2.25M12 2.25a.75.75 0 00-.75.75v2.25m-6 3.75h12m-12 0v6m0-6h12v6m-12 0h12" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l1.5 3 3-1.5 1.5 3 3-1.5 1.5 3 3-1.5 1.5 3 1.5-3M3 21h18" />
              </svg>
            </div>
            <h3 className="font-semibold text-primary text-sm sm:text-base">Built for Canada</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Healthcare system expertise</p>
          </div>

          {/* RPN & RN Focused */}
          <div className="group text-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gold/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <svg className="relative w-full h-full text-gold p-3 sm:p-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="font-semibold text-primary text-sm sm:text-base">RPN & RN Focused</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Tailored for nurses</p>
          </div>

          {/* Business Training */}
          <div className="group text-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gold/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <svg className="relative w-full h-full text-gold p-3 sm:p-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 className="font-semibold text-primary text-sm sm:text-base">Business Training</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Step-by-step guidance</p>
          </div>

          {/* Ongoing Support */}
          <div className="group text-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gold/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <svg className="relative w-full h-full text-gold p-3 sm:p-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-primary text-sm sm:text-base">Ongoing Support</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Community & mentorship</p>
          </div>
        </div>
      </div>
    </section>
  );
}