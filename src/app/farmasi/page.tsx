// src/app/farmasi/page.tsx
import { Metadata } from 'next';
import FarmasiHero from '@/components/farmasi/FarmasiHero';
import WhyFarmasi from '@/components/farmasi/WhyFarmasi';
import HowItWorks from '@/components/farmasi/HowItWorks';
import CategoryGallery from '@/components/farmasi/CategoryGallery';
import ProductShowcase from '@/components/farmasi/ProductShowcase';
import FarmasiCTA from '@/components/farmasi/FarmasiCTA';

export const metadata: Metadata = {
  title: 'Farmasi Canada - Wellness Business for Nurses',
  description: 'Premium skincare, flexible income, perfect schedule fit. Join Farmasi and build a wellness business alongside your nursing career.',
};

export default function FarmasiPage() {
  return (
    <>
      <FarmasiHero />
      <WhyFarmasi />
      <HowItWorks />
      <ProductShowcase />
      <CategoryGallery />
      <FarmasiCTA />
    </>
  );
}