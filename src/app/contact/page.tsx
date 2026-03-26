import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import BookingCalendar from '@/components/contact/BookingCalendar';
import Locations from '@/components/contact/Locations';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact JLNurse360 | Book a Strategy Call for Nurse Business Guidance',
  description:
    'Contact JLNurse360 to book a strategy call, ask questions, and explore nurse entrepreneurship, wellness products, and business support in Canada.',
  path: '/contact',
  keywords: [
    'book nurse strategy call',
    'contact JLNurse360',
    'nurse business consultation',
    'nurse entrepreneurship support Canada',
  ],
});

export default function ContactPage() {
  return (
    <>
      <div id="contact-overview">
        <ContactHero />
      </div>
      <div id="contact-form">
        <ContactForm />
      </div>
      <div id="strategy-call">
        <BookingCalendar />
      </div>
      <div id="service-locations">
        <Locations />
      </div>
    </>
  );
}
