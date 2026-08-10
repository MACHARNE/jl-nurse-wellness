import type { Metadata } from 'next';
import BlogLanding from '@/components/blog/BlogLanding';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'JLNurse360 Blog Architecture | Nurse Entrepreneurship and Business Growth',
  description:
    'Read JLNurse360 blog articles on nurse entrepreneurship, agency startup tips, beauty and wellness, self-care for nurses, and business growth in Canada.',
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
