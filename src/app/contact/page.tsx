import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import BookingCalendar from '@/components/contact/BookingCalendar';
import Locations from '@/components/contact/Locations';

export const metadata: Metadata = {
  title: 'Contact Us - JLNurse360',
  description:
    'Get in touch with JLNurse360. Book a consultation, ask questions, and explore nurse income, wellness, and business ownership opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <BookingCalendar />
      <Locations />
    </>
  );
}
