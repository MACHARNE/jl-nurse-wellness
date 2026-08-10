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
      </div>

      <div className="absolute top-0 right-0 z-0 h-48 w-48 rounded-full bg-gold/20 blur-3xl sm:h-64 sm:w-64 md:h-96 md:w-96 animate-pulseSlow" />
      <div
        className="absolute bottom-0 left-0 z-0 h-40 w-40 rounded-full bg-gold/20 blur-3xl sm:h-56 sm:w-56 md:h-80 md:w-80 animate-pulseSlow"
        style={{ animationDelay: "2s" }}
      />

      <h1 className="sr-only">JLNurse360</h1>

      <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-col gap-2 rounded-xl bg-black/90 p-2 shadow-2xl sm:bottom-6 sm:left-auto sm:right-6 sm:flex-row sm:gap-3 sm:p-3">
        <Link
          href="/contact#strategy-call"
          className="rounded-btn border border-gold/30 bg-gold px-5 py-3 text-center text-sm font-bold text-primary-dark transition-all duration-300 hover:scale-105 hover:bg-gold-dark sm:px-6 sm:text-base"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
        >
          Book a Free Strategy Call
        </Link>
        <Link
          href="/#lead-magnet"
          className="rounded-btn border border-primary/15 bg-white px-5 py-3 text-center text-sm font-bold text-primary transition-all duration-300 hover:scale-105 hover:text-primary-dark sm:px-6 sm:text-base"
        >
          Download Free Nurse Starter Guide
        </Link>
      </div>
    </section>
  );
}
