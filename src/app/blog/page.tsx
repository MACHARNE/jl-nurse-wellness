import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read JLNurse360 blog posts on nursing, wellness, entrepreneurship, and building income beyond the bedside.',
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">Blog</h1>
      <p className="mt-4 text-base text-gray-700 sm:text-lg">
        New articles are coming soon. Check back for practical tips on nursing,
        wellness, and entrepreneurship.
      </p>
    </section>
  );
}
