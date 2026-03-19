import { Metadata } from 'next';
import ResourceHero from '@/components/resources/ResourceHero';
import FreeGuides from '@/components/resources/FreeGuides';
import BlogPreview from '@/components/resources/BlogPreview';
import NewsletterSignup from '@/components/resources/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Resources - Free Guides for Nurses',
  description: 'Free learning resources for Canadian nurses: side hustles, entrepreneurship guides, passive income strategies.',
};

export default function ResourcesPage() {
  return (
    <>
      <ResourceHero />
      <FreeGuides />
      <BlogPreview />
      <NewsletterSignup />
    </>
  );
}