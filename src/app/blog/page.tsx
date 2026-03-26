import type { Metadata } from 'next';
import BlogLanding from '@/components/blog/BlogLanding';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Blog | Nurse Entrepreneurship, Wellness, and Business Growth',
  description:
    'Read practical JL Nurse 360 blog content on nurse entrepreneurship, agency startup, self-care, wellness, and business growth in Canada.',
  path: '/blog',
  keywords: [
    'nurse entrepreneurship blog',
    'nurse business articles',
    'nursing wellness blog',
    'income beyond bedside blog',
  ],
});

export default function BlogPage() {
  return <BlogLanding />;
}
