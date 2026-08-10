// src/app/kokoshea/page.tsx
import { Metadata } from 'next';
import KokosheaHero from '@/components/kokoshea/KokosheaHero';
import KokosheaPhilosophy from '@/components/kokoshea/KokosheaPhilosophy';
import KokosheaBenefits from '@/components/kokoshea/KokosheaBenefits';
import KokosheaProducts from '@/components/kokoshea/KokosheaProducts';
import KokosheaInstagramGallery from '@/components/kokoshea/KokosheaInstagramGallery';
import KokosheaTestimonials from '@/components/kokoshea/KokosheaTestimonials';
import KokosheaShopCta from '@/components/kokoshea/KokosheaShopCta';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kokoshea Skincare',
  description:
    'Explore Kokoshea natural skincare and shea-based wellness products through JLNurse360, with product highlights, benefits, and a polished shopping journey.',
  path: '/kokoshea',
  keywords: [
    'Kokoshea skincare',
    'natural shea skincare',
    'wellness products for nurses',
    'Kokoshea Canada',
  ],
});

export default function KokosheaPage() {
  return (
    <>
      <div id="kokoshea-overview">
        <KokosheaHero />
      </div>
      <div id="kokoshea-philosophy">
        <KokosheaPhilosophy />
      </div>
      <div id="kokoshea-benefits">
        <KokosheaBenefits />
      </div>
      <div id="kokoshea-products">
        <KokosheaProducts />
      </div>
      <div id="kokoshea-instagram">
        <KokosheaInstagramGallery />
      </div>
      <div id="kokoshea-testimonials">
        <KokosheaTestimonials />
      </div>
      <div id="kokoshea-shop">
        <KokosheaShopCta />
      </div>
    </>
  );
}
