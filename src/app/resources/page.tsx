import { Metadata } from 'next';
import ResourceHero from '@/components/resources/ResourceHero';
import FreeGuides from '@/components/resources/FreeGuides';
import BlogPreview from '@/components/resources/BlogPreview';
import NewsletterSignup from '@/components/resources/NewsletterSignup';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Resources for Nurses | Free Guides, Business Insights, and Next Steps',
  description:
    'Browse free resources for Canadian nurses, including entrepreneurship guides, side-income ideas, practical insights, and next steps for business growth.',
  path: '/resources',
  keywords: [
    'free guides for nurses',
    'nurse entrepreneurship resources',
    'nurse side hustle guide Canada',
    'nurse business articles',
  ],
});

export default function ResourcesPage() {
  return (
    <>
      <div id="resources-overview">
        <ResourceHero />
      </div>
      <div id="free-guides">
        <FreeGuides />
      </div>
      <div id="blog-insights">
        <BlogPreview />
      </div>
      <div id="newsletter-signup">
        <NewsletterSignup />
      </div>
    </>
  );
}
