import type { Metadata } from 'next';
import { sanitizeNextPath } from '@/lib/site-auth';

export const metadata: Metadata = {
  title: 'Site Temporarily Unavailable',
  robots: {
    index: false,
    follow: false,
  },
};

type SiteLoginPageProps = {
  searchParams?: Promise<{
    error?: string;
    next?: string;
  }>;
};

export default async function SiteLoginPage({
  searchParams,
}: SiteLoginPageProps) {
  const params = (await searchParams) || {};
  const nextPath = sanitizeNextPath(params.next || '/');
  const hasError = params.error === '1';

  return (
    <section className="min-h-screen bg-[#f6f3ef] px-4 py-20 text-[#2b2b2b]">
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center">
        <div className="rounded-lg border border-[#e5ded3] bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a14a]">
            Contact admin
          </p>
          <h1 className="mb-3 text-3xl font-bold text-[#0b1f3a]">
            Site temporarily unavailable
          </h1>
          <p className="mb-6 text-sm leading-6 text-gray-600">
            This website is currently private. Please sign in with the approved
            admin credentials to continue.
          </p>

          <form action="/api/site-login" method="post" className="space-y-4">
            <input type="hidden" name="next" value={nextPath} />

            <label className="block text-sm font-semibold text-[#0b1f3a]">
              Email
              <input
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-3 text-base outline-none transition focus:border-[#c9a14a] focus:ring-2 focus:ring-[#c9a14a]/20"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <label className="block text-sm font-semibold text-[#0b1f3a]">
              Password
              <input
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-3 text-base outline-none transition focus:border-[#c9a14a] focus:ring-2 focus:ring-[#c9a14a]/20"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </label>

            {hasError ? (
              <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                The email or password is incorrect.
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-md bg-[#0b1f3a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#08162b]"
            >
              Access website
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
