"use client";

import Link from "next/link";
import Image from "next/image";
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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-nurse.jpg"
          alt="Nurse entrepreneur background"
          fill
          className="object-cover"
          priority
          quality={100}
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
        <div className="grid w-full items-center gap-8 md:gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white shadow-lg backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2 animate-bounceSlow">
              <span className="h-1.5 w-1.5 rounded-full bg-gold sm:h-2 sm:w-2 animate-pulse" />
              <span
                className="text-xs font-semibold tracking-wide sm:text-sm"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
              >
                FOR CANADIAN RNS AND RPNS
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              From Nurse to{" "}
              <span className="relative inline-block text-gold">
                Agency Owner
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gold/50 shadow-lg" />
              </span>{" "}
              in Canada
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
              className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/90 sm:mb-8 sm:text-lg md:text-xl lg:mx-0"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              Helping RPNs and RNs build profitable nursing agencies and create income
              beyond bedside work.
            </p>

            <div className="mx-auto mb-6 max-w-md space-y-2 sm:mb-8 sm:space-y-3 lg:mx-0">
              {[
                "Designed for Canadian nurses",
                "Step-by-step guidance",
                "No business experience required",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <span
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/20 text-xs font-bold text-gold sm:h-6 sm:w-6 sm:text-sm"
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                  >
                    +
                  </span>
                  <span
                    className="text-sm text-white/90 sm:text-base"
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <Link
                href="/#strategy-call"
                className="rounded-btn border border-gold/30 bg-gold px-6 py-3 text-center text-sm font-bold text-primary-dark shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gold-dark sm:px-8 sm:py-4 sm:text-base"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
              >
                Book Free Strategy Call
              </Link>
              <Link
                href="/#lead-magnet"
                className="rounded-btn border-2 border-white/80 bg-black/30 px-6 py-3 text-center text-sm font-bold text-white shadow-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-primary-dark sm:px-8 sm:py-4 sm:text-base"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                Download Free Starter Guide
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
