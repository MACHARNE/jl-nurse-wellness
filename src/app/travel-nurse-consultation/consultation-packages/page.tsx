import type { Metadata } from 'next';
import TravelNurseConsultation from '@/components/travel-nurse/TravelNurseConsultation';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Consultation Packages | Travel Nurse Consultation',
  description:
    'Compare JLNurse360 travel nurse consultation packages, review frequently asked questions, and book a consultation for Canada or United States travel nursing guidance.',
  path: '/travel-nurse-consultation/consultation-packages',
  keywords: [
    'travel nurse consultation packages',
    'book travel nurse consultation',
    'travel nursing FAQ Canada United States',
    'JLNurse360 consultation',
  ],
});

export default function TravelNurseConsultationPackagesPage() {
  return <TravelNurseConsultation view="packages" />;
}
