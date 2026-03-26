"use client";

import Link from "next/link";
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
    <section ref={sectionRef} className="bg-background py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="section-intro mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold sm:text-base">
            3 Pillars of JL Nurse 360
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            One Platform. Three Growth Paths.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3 md:gap-6">
          <article className="pillar-card pillar-card-1 rounded-2xl border border-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-primary">Nurse2Agency</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              Learn how to transition from nursing into agency ownership and
              healthcare entrepreneurship.
            </p>
            <Link
              href="/program"
              className="mt-5 inline-flex rounded-btn bg-gold px-5 py-2.5 text-sm font-semibold text-primary-dark transition hover:bg-gold-dark"
            >
              Explore Nurse2Agency
            </Link>
          </article>

          <article className="pillar-card pillar-card-2 rounded-2xl border border-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-primary">
              Farmasi Beauty & Wellness
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              Shop trusted beauty and wellness products and discover flexible
              income opportunities.
            </p>
            <Link
              href="/farmasi"
              className="mt-5 inline-flex rounded-btn bg-gold px-5 py-2.5 text-sm font-semibold text-primary-dark transition hover:bg-gold-dark"
            >
              Shop Farmasi
            </Link>
          </article>

          <article className="pillar-card pillar-card-3 rounded-2xl border border-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-primary">
              Kokoshea Natural Skincare
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              Experience natural, nourishing skincare designed for self-care and
              confidence.
            </p>
            <Link
              href="/kokoshea"
              className="mt-5 inline-flex rounded-btn bg-gold px-5 py-2.5 text-sm font-semibold text-primary-dark transition hover:bg-gold-dark"
            >
              Shop Kokoshea
            </Link>
          </article>
        </div>
      </div>
      <style jsx>{`
        .section-intro {
          opacity: 0;
          transform: translateY(12px);
        }

        .pillar-card {
          opacity: 0;
          will-change: transform, opacity;
        }

        .animate-fadeIn .section-intro {
          animation: introReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fadeIn .pillar-card-1 {
          animation: cardLift 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        .animate-fadeIn .pillar-card-2 {
          animation: cardZoom 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.38s forwards;
        }

        .animate-fadeIn .pillar-card-3 {
          animation: cardSlide 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.56s forwards;
        }

        @keyframes introReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardLift {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardZoom {
          from {
            opacity: 0;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes cardSlide {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
