// src/app/farmasi/page.tsx
import { Metadata } from 'next';
import FarmasiHero from '@/components/farmasi/FarmasiHero';
import WhyFarmasi from '@/components/farmasi/WhyFarmasi';
import ProductShowcase from '@/components/farmasi/ProductShowcase';
import WhyNursesLoveFarmasi from '@/components/farmasi/WhyNursesLoveFarmasi';
import IncomeOpportunity from '@/components/farmasi/IncomeOpportunity';
import HowItWorks from '@/components/farmasi/HowItWorks';
import FarmasiCTA from '@/components/farmasi/FarmasiCTA';

export const metadata: Metadata = {
  title: 'Farmasi with JL Nurse 360',
  description: 'Premium skincare, flexible income, perfect schedule fit. Join Farmasi and build a wellness business alongside your nursing career.',
};

export default function FarmasiPage() {
  return (
    <>
      <FarmasiHero />
      <WhyFarmasi />
      <ProductShowcase />
      <WhyNursesLoveFarmasi />
      <IncomeOpportunity />
      <HowItWorks />
      <FarmasiCTA />
    </>
  );
}
