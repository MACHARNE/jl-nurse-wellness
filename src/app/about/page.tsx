// src/app/about/page.tsx
import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutFullProfile from '@/components/about/AboutFullProfile';
import AboutCTA from '@/components/about/AboutCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Jean Lewis RN | Nurse Entrepreneur and Founder of JLNurse360',
  description:
    'Meet Jean Lewis RN and learn how JLNurse360 helps Canadian nurses move from bedside work into entrepreneurship, wellness, and business ownership.',
  path: '/about',
  keywords: [
    'Jean Lewis RN',
    'about JLNurse360',
    'nurse entrepreneur mentor',
    'Canadian nurse founder',
  ],
});

export default function AboutPage() {
  return (
    <>
      <div id="about-overview">
        <AboutHero />
      </div>
      <div id="jean-lewis-story">
        <AboutFullProfile />
      </div>
      <div id="about-next-steps">
        <AboutCTA />
      </div>
    </>
  );
}
