'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Jean' },
  { href: '/program', label: 'Nurse2Agency' },
  { href: '/farmasi', label: 'Farmasi' },
  { href: '/kokoshea', label: 'Kokoshea' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const searchableRoutes = ['/', '/about', '/program', '/farmasi', '/kokoshea', '/resources', '/blog', '/contact', '/nurse-agency'];

type SearchIndexEntry = {
  route: string;
  fragment: string;
  text: string;
  textLower: string;
};

type SearchResult = {
  route: string;
  fragment: string;
  text: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchIndex, setSearchIndex] = useState<SearchIndexEntry[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSearchIndexReady = searchIndex.length > 0;
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;
    const frameId = window.requestAnimationFrame(() => {
      setIsOpen(false);
      setShowSearchResults(false);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  useEffect(() => {
    let isMounted = true;

    const buildSearchIndex = async () => {
      const entries: SearchIndexEntry[] = [];
      const seen = new Set<string>();

      await Promise.all(
        searchableRoutes.map(async (route) => {
          try {
            const response = await fetch(route, { cache: 'force-cache' });
            if (!response.ok) return;
            const html = await response.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const root = doc.querySelector('main') || doc.body;
            if (!root) return;

            const elements = root.querySelectorAll('h1, h2, h3, p, li');
            elements.forEach((element) => {
              const text = element.textContent?.replace(/\s+/g, ' ').trim() ?? '';
              if (text.length < 20) return;

              const anchorElement =
                element.closest('[id]') ||
                element.querySelector('[id]') ||
                element.parentElement?.closest('[id]');
              const fragment = anchorElement?.id ?? '';

              const key = `${route}::${fragment}::${text.slice(0, 100)}`;
              if (seen.has(key)) return;
              seen.add(key);

              entries.push({
                route,
                fragment,
                text,
                textLower: text.toLowerCase(),
              });
            });
          } catch {
            // Ignore route indexing failures and continue.
          }
        })
      );

      if (isMounted) {
        setSearchIndex(entries);
      }
    };

    void buildSearchIndex();

    return () => {
      isMounted = false;
    };
  }, []);

  const runSearch = useCallback((query: string) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const lowerQuery = trimmedQuery.toLowerCase();
    const ranked = searchIndex
      .filter((entry) => entry.textLower.includes(lowerQuery))
      .map((entry) => {
        const index = entry.textLower.indexOf(lowerQuery);
        const start = Math.max(0, index - 40);
        const end = Math.min(entry.text.length, index + trimmedQuery.length + 70);
        const snippet = entry.text.slice(start, end).trim();
        const score = index + (entry.route === pathname ? -10 : 0);
        return { route: entry.route, fragment: entry.fragment, text: snippet, score };
      })
      .sort((a, b) => a.score - b.score)
      .slice(0, 12)
      .map(({ route, fragment, text }) => ({ route, fragment, text }));

    setSearchResults(ranked);
    setShowSearchResults(true);
  }, [searchIndex, pathname]);

  useEffect(() => {
    const trimmed = searchQuery.trim();
    const timeoutId = window.setTimeout(() => {
      runSearch(trimmed ? searchQuery : '');
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [searchQuery, runSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#navbar-search-wrap')) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const locate = searchParams.get('locate');
    if (!locate) return;

    const main = document.querySelector('main');
    if (!main) return;

    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    const lowerLocate = locate.toLowerCase();
    let node = walker.nextNode();
    let targetElement: HTMLElement | null = null;

    while (node) {
      const textNode = node as Text;
      const rawText = textNode.textContent?.replace(/\s+/g, ' ').trim() ?? '';
      const parent = textNode.parentElement;
      if (parent && rawText && rawText.toLowerCase().includes(lowerLocate)) {
        targetElement =
          parent.closest('section, article, div, li, p, h1, h2, h3, h4, h5, h6') || parent;
        break;
      }
      node = walker.nextNode();
    }

    if (!targetElement) return;

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    targetElement.classList.add('ring-2', 'ring-gold', 'ring-offset-2');
    window.setTimeout(() => {
      targetElement?.classList.remove('ring-2', 'ring-gold', 'ring-offset-2');
    }, 1600);

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete('locate');
    const query = nextParams.toString();
    const hash = window.location.hash;
    router.replace(`${pathname}${query ? `?${query}` : ''}${hash}`, { scroll: false });
  }, [searchParams, pathname, router]);

  const navigateToSearchResult = (result: SearchResult) => {
    setShowSearchResults(false);
    setSearchQuery('');
    setSearchResults([]);

    if (result.route === pathname && result.fragment) {
      const samePageTarget = document.getElementById(result.fragment);
      if (samePageTarget) {
        samePageTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
        samePageTarget.classList.add('ring-2', 'ring-gold', 'ring-offset-2');
        window.setTimeout(() => {
          samePageTarget.classList.remove('ring-2', 'ring-gold', 'ring-offset-2');
        }, 1600);
        return;
      }
    }

    const locateParam = encodeURIComponent(result.text.slice(0, 80));
    const hash = result.fragment ? `#${result.fragment}` : '';
    router.push(`${result.route}?locate=${locateParam}${hash}`);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center md:hidden">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/JLLOGO.jpg"
              alt="JL Nurse & Wellness Logo"
              width={40}
              height={40}
              className="h-8 w-auto sm:h-10 rounded-lg"
              priority
            />
            <span className="ml-2 sm:ml-3 text-base sm:text-lg font-bold text-primary hidden xs:inline">
              JLNurse<span className="text-gold">360</span>
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Row 1: Logo, Search, CTA */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/JLLOGO.jpg"
              alt="JL Nurse & Wellness Logo"
              width={40}
              height={40}
              className="h-10 w-auto rounded-lg"
              priority
            />
            <span className="ml-3 text-lg lg:text-xl font-bold text-primary">
              JLNurse<span className="text-gold">360</span>
            </span>
          </Link>

          <form
            className="w-full max-w-xl mx-auto"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              runSearch(searchQuery);
            }}
          >
            <label htmlFor="navbar-search" className="sr-only">
              Search
            </label>
            <div id="navbar-search-wrap" className="relative">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.6-5.15a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
                />
              </svg>
              <input
                id="navbar-search"
                name="search"
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    runSearch(searchQuery);
                  }
                }}
                onFocus={() => {
                  if (searchResults.length > 0 || searchQuery.trim()) {
                    setShowSearchResults(true);
                  }
                }}
                className="w-full rounded-btn border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-gold focus:bg-white"
              />

              {showSearchResults && (
                <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
                  {searchResults.length > 0 ? (
                    <>
                      <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {searchResults.length} result{searchResults.length > 1 ? 's' : ''}
                      </p>
                      {searchResults.map((result) => (
                        <button
                          key={`${result.route}-${result.fragment}-${result.text.slice(0, 24)}`}
                          type="button"
                          onClick={() => {
                            navigateToSearchResult(result);
                          }}
                          className="w-full rounded-lg px-2 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50"
                        >
                          <span className="block text-xs font-semibold uppercase tracking-wide text-gold">
                            {result.route === '/'
                              ? 'Home'
                              : result.route.replace('/', '').replace('-', ' ')}
                          </span>
                          <span className="block">{result.text}</span>
                        </button>
                      ))}
                    </>
                  ) : (
                    <p className="px-2 py-2 text-sm text-gray-500">
                      {isSearchIndexReady
                        ? 'No results found across the site.'
                        : 'Building site search index...'}
                    </p>
                  )}
                </div>
              )}
            </div>
          </form>

          <Link
            href="/contact#strategy-call"
            className="bg-gold text-white px-4 lg:px-5 py-2.5 rounded-btn font-semibold hover:bg-gold-dark transition transform hover:scale-105 text-sm lg:text-base whitespace-nowrap"
          >
            Book a Call
          </Link>
        </div>

        {/* Desktop Row 2: Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 border-t border-gray-100 mt-3 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm lg:text-base ${
                pathname === link.href
                  ? 'text-gold font-semibold'
                  : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[1200px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg border border-gray-100 py-2">
            <Link
              href="/contact#strategy-call"
              className="block mx-4 my-3 bg-gold text-white px-4 py-3 rounded-btn font-semibold text-center text-base hover:bg-gold-dark transition"
            >
              Book a Call
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gold transition rounded-lg text-base ${
                  pathname === link.href ? 'text-gold font-semibold bg-gray-50' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
