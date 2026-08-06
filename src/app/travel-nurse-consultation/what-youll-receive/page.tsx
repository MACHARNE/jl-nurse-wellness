import type { Metadata } from 'next';
import TravelNurseConsultation from '@/components/travel-nurse/TravelNurseConsultation';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: "What You'll Receive | Travel Nurse Consultation",
  description:
    'Review what nurses receive during the JL Nurse 360 travel nurse consultation, including career assessment, Canada and U.S. roadmap, coaching, resources, and Jean Lewis guidance.',
  path: '/travel-nurse-consultation/what-youll-receive',
  keywords: [
    'travel nurse consultation resources',
    'travel nurse career assessment',
    'Canada USA travel nursing roadmap',
    'Jean Lewis travel nurse coaching',
  ],
});

export default function TravelNurseConsultationReceivePage() {
  return <TravelNurseConsultation view="receive" />;
}
