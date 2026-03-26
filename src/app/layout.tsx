import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';  // Import the Sticky CTA component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'JLNurse360 | Nursing. Wellness. Entrepreneurship.',
    template: '%s | JLNurse360'
  },
  icons: {
    icon: '/images/fev.png',
    shortcut: '/images/fev.png',
    apple: '/images/fev.png',
  },
  description:
    'Empowering nurses to build income, wellness, and business ownership. Helping nurses build income beyond the bedside.',
  keywords:
    'nurse entrepreneurship, nursing wellness, nurse business ownership, income beyond bedside, nurse entrepreneur Canada, nurse business platform, caregiver to business builder',
  authors: [{ name: 'Jean Lewis RN' }],
  creator: 'Jean Lewis RN',
  publisher: 'JLNurse360',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jlnursewellness.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JLNurse360 | The Complete Nurse Lifestyle & Business Platform',
    description:
      'Empowering nurses to build income, wellness, and business ownership. From caregiver to business builder.',
    url: 'https://jlnursewellness.com',
    siteName: 'JLNurse360',
    images: [
      {
        url: 'https://jlnursewellness.com/images/JLLOGO.jpg',
        width: 1200,
        height: 1200,
        alt: 'JLNurse360 Logo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JLNurse360 | Nursing. Wellness. Entrepreneurship.',
    description:
      'Empowering nurses to build income, wellness, and business ownership.',
    images: ['https://jlnursewellness.com/images/JLLOGO.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyCTA /> {/* Sticky CTA will appear on all pages */}
      </body>
    </html>
  );
}
