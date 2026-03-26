// src/app/farmasi/page.tsx
import { Metadata } from 'next';
import FarmasiHero from '@/components/farmasi/FarmasiHero';
import WhyFarmasi from '@/components/farmasi/WhyFarmasi';
import ProductShowcase from '@/components/farmasi/ProductShowcase';
import WhyNursesLoveFarmasi from '@/components/farmasi/WhyNursesLoveFarmasi';
import IncomeOpportunity from '@/components/farmasi/IncomeOpportunity';
import HowItWorks from '@/components/farmasi/HowItWorks';
import FarmasiCTA from '@/components/farmasi/FarmasiCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Farmasi for Nurses | Skincare, Wellness Products, and Flexible Income',
  description:
    'Discover Farmasi with JLNurse360 for skincare, beauty, wellness products, and a flexible income opportunity that fits around nursing.',
  path: '/farmasi',
  keywords: [
    'Farmasi Canada nurse',
    'Farmasi business opportunity',
    'nurse wellness products',
    'Farmasi skincare',
  ],
});

export default function FarmasiPage() {
  return (
    <>
      <div id="farmasi-overview">
        <FarmasiHero />
      </div>
      <div id="why-farmasi">
        <WhyFarmasi />
      </div>
      <div id="farmasi-products">
        <ProductShowcase />
      </div>
      <div id="farmasi-for-nurses">
        <WhyNursesLoveFarmasi />
      </div>
      <div id="farmasi-income-opportunity">
        <IncomeOpportunity />
      </div>
      <div id="farmasi-how-it-works">
        <HowItWorks />
      </div>
      <div id="farmasi-next-step">
        <FarmasiCTA />
      </div>
    </>
  );
}
