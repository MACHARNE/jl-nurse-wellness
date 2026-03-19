// src/app/kokoshea/page.tsx
import { Metadata } from 'next';
import KokosheaHero from '@/components/kokoshea/KokosheaHero';
import KokosheaPhilosophy from '@/components/kokoshea/KokosheaPhilosophy';
import KokosheaBenefits from '@/components/kokoshea/KokosheaBenefits';
import KokosheaProducts from '@/components/kokoshea/KokosheaProducts';
import KokosheaPartner from '@/components/kokoshea/KokosheaPartner';

export const metadata: Metadata = {
  title: 'Kokoshea Skincare - Natural Products for Nurses',
  description: 'Discover natural skincare solutions designed for healthy, radiant skin. Partner with Kokoshea to share wellness.',
};

export default function KokosheaPage() {
  return (
    <>
      <KokosheaHero />
      <KokosheaPhilosophy />
      <KokosheaBenefits />
      <KokosheaProducts />
      <KokosheaPartner />
    </>
  );
}