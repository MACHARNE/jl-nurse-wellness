import { Metadata } from 'next';
import ContactLanding from '@/components/contact/ContactLanding';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact JL Nurse 360',
  description:
    'Have questions about Nurse2Agency, Farmasi, Kokoshea, or working with Jean? Contact JL Nurse 360 and book a call.',
  path: '/contact',
  keywords: [
    'contact JL Nurse 360',
    'book a call with Jean Lewis',
    'nurse2agency contact',
    'Farmasi and Kokoshea contact',
  ],
});

export default function ContactPage() {
  return <ContactLanding />;
}
