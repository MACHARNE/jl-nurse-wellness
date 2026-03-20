import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';  // Import the Sticky CTA component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'JL Nurse & Wellness - From Nurse to Agency Owner in Canada',
    template: '%s | JL Nurse & Wellness'
  },
  icons: {
    icon: '/images/fev.png',
    shortcut: '/images/fev.png',
    apple: '/images/fev.png',
  },
  description: 'Helping RPNs & RNs build profitable nursing agencies and create income beyond bedside work. Free strategy calls and starter guides.',
  keywords: 'nurse agency, nursing business, RPN entrepreneur, RN business, Canadian nurses, healthcare entrepreneurship',
  authors: [{ name: 'Jean Lewis RN' }],
  creator: 'Jean Lewis RN',
  publisher: 'JL Nurse & Wellness',
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
    title: 'JL Nurse & Wellness',
    description: 'Helping Canadian nurses build profitable agencies and create income beyond bedside work',
    url: 'https://jlnursewellness.com',
    siteName: 'JL Nurse & Wellness',
    images: [
      {
        url: '/images/JLLOGO.jpg',
        width: 800,
        height: 600,
        alt: 'JL Nurse & Wellness Logo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JL Nurse & Wellness',
    description: 'Helping Canadian nurses build profitable agencies',
    images: ['/images/JLLOGO.jpg'],
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
