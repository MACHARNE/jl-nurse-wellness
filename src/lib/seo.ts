import type { Metadata } from 'next';

export const siteConfig = {
  name: 'JLNurse360',
  url: 'https://jlnursewellness.com',
  description:
    'JLNurse360 helps Canadian nurses build income, wellness, and business ownership through nurse entrepreneurship, wellness products, and practical guidance.',
  defaultImage: '/images/JLLOGO.jpg',
};

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
}: MetadataOptions): Metadata {
  const canonical = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_CA',
      images: [
        {
          url: `${siteConfig.url}${siteConfig.defaultImage}`,
          width: 1200,
          height: 1200,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}${siteConfig.defaultImage}`],
    },
  };
}
