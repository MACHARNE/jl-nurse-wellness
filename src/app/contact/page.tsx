import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import BookingCalendar from '@/components/contact/BookingCalendar';
import Locations from '@/components/contact/Locations';

export const metadata: Metadata = {
  title: 'Contact Us - JL Nurse & Wellness',
  description: 'Get in touch with JL Nurse & Wellness. Book a consultation, ask questions, explore opportunities for Canadian nurses.',
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