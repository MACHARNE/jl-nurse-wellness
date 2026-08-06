import type { Metadata } from 'next';
import TravelNurseConsultation from '@/components/travel-nurse/TravelNurseConsultation';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Travel Nurse Consultation | Canada and United States Opportunities',
  description:
    'Explore travel nursing consultation support for RNs, RPNs, LPNs, internationally educated nurses, and nurses pursuing opportunities across Canada and the United States.',
  path: '/travel-nurse-consultation',
  keywords: [
    'travel nurse consultation',
    'travel nursing Canada',
    'travel nursing United States',
    'RPN travel nursing',
    'internationally educated nurses travel nursing',
  ],
});

export default function TravelNurseConsultationPage() {
  return <TravelNurseConsultation />;
}
