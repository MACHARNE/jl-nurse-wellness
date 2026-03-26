import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';  // Import the Sticky CTA component
import { buildMetadata, siteConfig } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: 'en-CA',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JLNurse360',
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.defaultImage}`,
  founder: 'Jean Lewis RN',
};

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'JLNurse360 | Nurse Entrepreneurship, Wellness, and Income in Canada',
    description:
      'JLNurse360 helps Canadian nurses grow income beyond the bedside through nurse entrepreneurship, wellness products, and practical business guidance.',
    path: '/',
    keywords: [
      'nurse entrepreneurship Canada',
      'nursing agency startup Canada',
      'nurse side income',
      'nurse wellness business',
      'Farmasi for nurses',
      'Kokoshea skincare',
      'Jean Lewis RN',
    ],
  }),
  title: {
    default: 'JLNurse360 | Nurse Entrepreneurship, Wellness, and Income in Canada',
    template: '%s | JLNurse360',
  },
  icons: {
    icon: '/images/fev.png',
    shortcut: '/images/fev.png',
    apple: '/images/fev.png',
  },
  authors: [{ name: 'Jean Lewis RN' }],
  creator: 'Jean Lewis RN',
  publisher: 'JLNurse360',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyCTA /> {/* Sticky CTA will appear on all pages */}
      </body>
    </html>
  );
}
