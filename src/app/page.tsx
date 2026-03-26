import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainPoint from "@/components/PainPoint";
import AboutJean from "@/components/AboutJean";
import ProgramOffer from "@/components/ProgramOffer";
import DualIncome from "@/components/DualIncome";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import FinalCTA from "@/components/FinalCTA";
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Nurse Entrepreneurship, Wellness, and Income Beyond the Bedside',
  description:
    'Explore nurse entrepreneurship, wellness opportunities, and business guidance for Canadian nurses ready to build income and freedom beyond bedside work.',
  path: '/',
  keywords: [
    'income beyond bedside',
    'Canadian nurse entrepreneur',
    'nurse business opportunities',
    'nurse wellness support',
    'nursing side hustle Canada',
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <div id="trust-signals">
        <TrustBar />
      </div>
      <div id="about-jean">
        <AboutJean />
      </div>
      <div id="nurse-pain-points">
        <PainPoint />
      </div>
      <div id="nurse2agency-program">
        <ProgramOffer />
      </div>
      <div id="wellness-opportunities">
        <DualIncome />
      </div>
      <div id="success-stories">
        <Testimonials />
      </div>
      <LeadMagnet />
      <FinalCTA />
    </>
  );
}
