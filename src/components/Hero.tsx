"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
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
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          src="/video/FARMASI.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-contain object-center bg-black"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />
      </div>

      <div className="absolute top-0 right-0 z-0 h-48 w-48 rounded-full bg-gold/20 blur-3xl sm:h-64 sm:w-64 md:h-96 md:w-96 animate-pulseSlow" />
      <div
        className="absolute bottom-0 left-0 z-0 h-40 w-40 rounded-full bg-gold/20 blur-3xl sm:h-56 sm:w-56 md:h-80 md:w-80 animate-pulseSlow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="grid w-full items-center gap-8 md:gap-12">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="inline-flex items-center gap-2 sm:gap-3">
                <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gold animate-pulse aspect-square sm:h-2.5 sm:w-2.5" />
                <span>
                  Helping Nurses Build{" "}
                  <span className="text-gold">Income, Wellness, & Freedom</span>{" "}
                  Beyond the Bedside
                </span>
              </span>
            </h1>

            <style jsx>{`
              h1 {
                text-shadow:
                  0 4px 8px rgba(0, 0, 0, 0.5),
                  0 2px 4px rgba(0, 0, 0, 0.5),
                  0 0 20px rgba(0, 0, 0, 0.3);
              }
            `}</style>

            <p
              className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/90 sm:mb-8 sm:text-lg md:text-xl"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              JL Nurse 360 helps RPNs and RNs in Canada grow through nurse
              entrepreneurship, wellness products, and practical business guidance.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact#strategy-call"
                className="rounded-btn border border-gold/30 bg-gold px-6 py-3 text-center text-sm font-bold text-primary-dark shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gold-dark sm:px-8 sm:py-4 sm:text-base"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
              >
                Book a Free Strategy Call
              </Link>
              <Link
                href="/#lead-magnet"
                className="rounded-btn border-2 border-white/80 bg-black/30 px-6 py-3 text-center text-sm font-bold text-white shadow-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-primary-dark sm:px-8 sm:py-4 sm:text-base"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                Download Free Nurse Starter Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
