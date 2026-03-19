// src/app/about/page.tsx
import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutMissionVision from '@/components/about/AboutMissionVision';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Jean Lewis - Nurse to Agency Founder',
  description: 'Meet Jean Lewis, RN, founder of Nurse2Agency. Learn how she helps Canadian nurses transition from bedside to business ownership.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutCTA />
    </>
  );
}
