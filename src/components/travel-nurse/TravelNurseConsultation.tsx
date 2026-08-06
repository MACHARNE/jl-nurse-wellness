'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { motion, type Transition } from 'framer-motion';

type TravelNurseConsultationView = 'overview' | 'receive' | 'packages';

type IconName =
  | 'balance'
  | 'book'
  | 'building'
  | 'calendar'
  | 'check'
  | 'chevron'
  | 'clipboard'
  | 'clock'
  | 'comment'
  | 'file'
  | 'flag'
  | 'globe'
  | 'handshake'
  | 'home'
  | 'laptop'
  | 'money'
  | 'nurse'
  | 'rocket'
  | 'stethoscope'
  | 'users';

const bookHref = '/contact#strategy-call';

const travelPages = [
  {
    href: '/travel-nurse-consultation',
    title: 'Travel Nurse Consultation',
  },
  {
    href: '/travel-nurse-consultation/what-youll-receive',
    title: "What You'll Receive",
  },
  {
    href: '/travel-nurse-consultation/consultation-packages',
    title: 'Packages & FAQs',
  },
];

const benefitCards = [
  { icon: 'money', title: 'Competitive Compensation' },
  { icon: 'handshake', title: 'Flexible Contracts' },
  { icon: 'users', title: 'Opportunities Across Canada & the USA' },
  { icon: 'rocket', title: 'Professional Growth' },
  { icon: 'stethoscope', title: 'Diverse Clinical Experience' },
  { icon: 'balance', title: 'Better Work-Life Balance' },
] satisfies { icon: IconName; title: string }[];

const benefits = [
  'Competitive Compensation',
  'Flexible Contracts',
  'Opportunities Across Canada & the USA',
  'Housing & Travel Assistance (where offered by employers)',
  'Professional Growth',
  'Diverse Clinical Experience',
  'Better Work-Life Balance',
  'Expand Your Professional Network',
  'Explore New Cities While Advancing Your Career',
];

const consultationIdealFor = [
  'Registered Nurses (RN)',
  'Registered Practical Nurses (RPN)',
  'Licensed Practical Nurses (LPN)',
  'Internationally Educated Nurses (IEN)',
  'New Nursing Graduates',
  'Nurses Seeking Travel Assignments',
  'Nurses Transitioning Into Acute Care',
  'Nurses Interested in Canada or U.S. Opportunities',
];

const receiveSections = [
  {
    icon: 'clipboard',
    title: 'Personalized Career Assessment',
    preview:
      'Review your experience, goals, preferred locations, clinical specialties, and travel readiness.',
    intro: "We'll review your:",
    items: [
      'Nursing experience',
      'Career goals',
      'Preferred locations',
      'Clinical specialties',
      'Travel readiness',
    ],
  },
  {
    icon: 'globe',
    title: 'Canada & U.S. Travel Nursing Roadmap',
    preview:
      'Licensing pathways, resume optimization, interview prep, employer expectations, and more.',
    intro: 'Receive a personalized strategy covering:',
    items: [
      'Provincial and State licensing pathways',
      'Resume optimization',
      'Interview preparation',
      'Assignment opportunities',
      'Employer expectations',
      'Travel nurse agencies',
      'Professional profile enhancement',
      'Career growth strategy',
    ],
  },
  {
    icon: 'comment',
    title: 'Career Coaching',
    preview:
      'Get answers to your top questions about travel nursing, contracts, demand, and certifications.',
    intro: "We'll answer questions such as:",
    items: [
      'Is travel nursing right for me?',
      'How do Canadian and U.S. travel contracts differ?',
      'Which provinces and states have the highest demand?',
      'What specialties pay the most?',
      'Which certifications strengthen my application?',
      'How can I transition into travel nursing successfully?',
    ],
  },
  {
    icon: 'file',
    title: 'Professional Resources',
    preview:
      'Checklist, career planning guide, resume review, interview prep, licensing resources, and more.',
    intro: "You'll receive:",
    items: [
      'Travel Nurse Checklist',
      'Canada & U.S. Career Planning Guide',
      'Resume Review',
      'Interview Preparation Guide',
      'Licensing Resources',
      'Professional Development Recommendations',
    ],
  },
] satisfies {
  icon: IconName;
  title: string;
  preview: string;
  intro: string;
  items: string[];
}[];

const whyBook = [
  { icon: 'clipboard', label: 'Personalized Career Coaching' },
  { icon: 'globe', label: 'Canada & U.S. Travel Nursing Guidance' },
  { icon: 'file', label: 'Resume & LinkedIn Optimization' },
  { icon: 'comment', label: 'Interview Preparation' },
  { icon: 'nurse', label: 'Personal Branding' },
  { icon: 'rocket', label: 'Career Planning' },
  { icon: 'users', label: 'Nurse Entrepreneurship' },
  { icon: 'book', label: 'Ongoing Mentorship' },
] satisfies { icon: IconName; label: string }[];

const packages = [
  {
    icon: 'clock',
    name: 'Discovery',
    title: '30-Minute Discovery Consultation',
    badge: '30 min',
    description: 'Perfect for nurses exploring travel nursing.',
    cta: 'Book Now',
  },
  {
    icon: 'calendar',
    name: 'Career Strategy',
    title: '60-Minute Career Strategy Session',
    badge: '60 min',
    description: 'Comprehensive career planning, resume review, and travel nursing roadmap.',
    cta: 'Book Your Session',
    featured: true,
  },
  {
    icon: 'rocket',
    name: 'Premium Success',
    title: 'Premium Career Success Package',
    badge: 'Extended',
    description: 'Includes:',
    items: [
      'Extended consultation',
      'Resume optimization',
      'LinkedIn review',
      'Interview coaching',
      'Professional branding',
      'Canada & U.S. travel nursing strategy',
      'Personalized career roadmap',
    ],
    cta: 'Schedule Your Consultation',
  },
] satisfies {
  icon: IconName;
  name: string;
  title: string;
  badge: string;
  description: string;
  items?: string[];
  cta: string;
  featured?: boolean;
}[];

const faqs = [
  {
    question: 'Do I need travel nursing experience?',
    answer: 'No. We help both first-time and experienced travel nurses.',
  },
  {
    question: 'Can new graduates apply?',
    answer:
      'Career readiness depends on the employer and specialty. We can discuss pathways that may be available based on your experience and goals.',
  },
  {
    question: 'Do you help internationally educated nurses?',
    answer:
      'Yes. We provide guidance on preparing for travel nursing opportunities in Canada and the United States, including licensing considerations and career planning.',
  },
  {
    question: 'Will you help me prepare my resume?',
    answer:
      'Yes. Resume and personal branding guidance are included in applicable consultation packages.',
  },
];

const sectionAnimation = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition: Transition = {
  duration: 0.7,
  ease: 'easeOut',
};

const iconPaths: Record<IconName, ReactNode> = {
  balance: (
    <>
      <path d="M12 4v16M6 8h12M7 8l-3 6h6L7 8zM17 8l-3 6h6l-3-6z" />
      <path d="M8 20h8" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.5A2.5 2.5 0 017.5 3H20v16H7.5A2.5 2.5 0 005 21.5v-16z" />
      <path d="M5 18.5A2.5 2.5 0 017.5 16H20M9 7h7M9 10h6" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5h9v16M14 9h5v12M8 8h3M8 12h3M8 16h3M16 13h1M16 17h1" />
    </>
  ),
  calendar: (
    <>
      <path d="M5 6h14v13H5V6zM8 4v4M16 4v4M5 10h14" />
      <path d="M8.5 13h2M13.5 13h2M8.5 16h2M13.5 16h2" />
    </>
  ),
  check: <path d="M5 12.5l4.2 4.2L19 7" />,
  chevron: <path d="M9 6l6 6-6 6" />,
  clipboard: (
    <>
      <path d="M8 5h8l1 3H7l1-3z" />
      <path d="M7 7H5v14h14V7h-2M8 12h8M8 16h5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  comment: (
    <>
      <path d="M5 6.5h14v9H9l-4 3v-12z" />
      <path d="M8.5 10.5h7M8.5 13h4.5" />
    </>
  ),
  file: (
    <>
      <path d="M7 4h7l3 3v13H7V4z" />
      <path d="M14 4v4h4M9 11h6M9 14h6M9 17h4" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V5M6 5c4-2 7 2 12 0v9c-5 2-8-2-12 0" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.2 2.3 3.3 4.9 3.3 8S14.2 17.7 12 20c-2.2-2.3-3.3-4.9-3.3-8S9.8 6.3 12 4z" />
    </>
  ),
  handshake: (
    <>
      <path d="M7 12l3-3 3 3 2-2 4 4-3 3-3-3-2 2-4-4z" />
      <path d="M4 11l3-3 3 3M20 13l-3 3" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10.5V20h12v-9.5M10 20v-6h4v6" />
    </>
  ),
  laptop: (
    <>
      <path d="M6 6h12v9H6V6z" />
      <path d="M4 18h16" />
    </>
  ),
  money: (
    <>
      <path d="M4 7h16v10H4V7z" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M7 10v4M17 10v4" />
    </>
  ),
  nurse: (
    <>
      <path d="M7 9a5 5 0 0110 0v2H7V9zM8 11v5c0 2 1.8 4 4 4s4-2 4-4v-5" />
      <path d="M12 6v4M10 8h4" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 14l-2 5-2-3-3-2 5-2" />
      <path d="M13 13c3.8-1.2 6.1-4.1 6.5-8.5-4.4.4-7.3 2.7-8.5 6.5L13 13z" />
      <circle cx="15.5" cy="8.5" r="1.2" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M7 5v5a4 4 0 008 0V5" />
      <path d="M5.5 5H8.5M13.5 5h3M15 13v2.5A3.5 3.5 0 0018.5 19 2.5 2.5 0 0021 16.5" />
      <circle cx="21" cy="16.5" r="1.2" />
    </>
  ),
  users: (
    <>
      <circle cx="12" cy="8" r="2.4" />
      <circle cx="6.8" cy="10" r="2" />
      <circle cx="17.2" cy="10" r="2" />
      <path d="M4 18c.6-2.4 2.1-3.6 4.3-3.6M8.5 19c.7-2.8 1.9-4.2 3.5-4.2s2.8 1.4 3.5 4.2M15.7 14.4c2.2 0 3.7 1.2 4.3 3.6" />
    </>
  ),
};

function TravelIcon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[name]}
    </svg>
  );
}

function IconBadge({
  name,
  tone = 'blue',
  size = 'md',
}: {
  name: IconName;
  tone?: 'blue' | 'gold' | 'white';
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClass = size === 'lg' ? 'h-14 w-14' : size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  const iconClass = size === 'lg' ? 'h-7 w-7' : size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  const toneClass =
    tone === 'gold'
      ? 'bg-gold text-white ring-gold-dark/20'
      : tone === 'white'
        ? 'bg-white text-primary ring-white/40'
        : 'bg-primary text-gold ring-gold/35';

  return (
    <span className={`${sizeClass} inline-flex shrink-0 items-center justify-center rounded-full ring-1 ${toneClass}`}>
      <TravelIcon name={name} className={iconClass} />
    </span>
  );
}

function Section({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={sectionAnimation}
      transition={sectionTransition}
      className={`py-14 sm:py-16 lg:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  tone?: 'dark' | 'light';
}) {
  const isLight = tone === 'light';

  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow ? (
        <p
          className={`mb-3 inline-flex items-center gap-2 rounded-btn px-3 py-1.5 text-sm font-bold ${
            isLight
              ? 'bg-white/10 text-white ring-1 ring-white/15'
              : 'bg-[#fff6df] text-[#9a6811]'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-sans text-3xl font-black leading-tight tracking-normal sm:text-4xl ${
          isLight ? 'text-white' : 'text-[#0b1f3a]'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isLight ? 'text-slate-200' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-btn bg-gold px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gold-dark sm:text-base"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-btn border border-gold/45 bg-white px-6 py-3.5 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:border-gold hover:bg-[#fff9ec] sm:text-base"
    >
      {children}
    </Link>
  );
}

function CheckItem({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <li className={`flex items-start gap-3 ${muted ? 'text-slate-600' : 'text-slate-700'}`}>
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-white">
        <TravelIcon name="check" className="h-3.5 w-3.5" />
      </span>
      <span className="text-sm leading-relaxed">{children}</span>
    </li>
  );
}

function PageNav({ activeHref }: { activeHref: string }) {
  return (
    <nav aria-label="Travel nurse consultation pages" className="flex flex-wrap gap-2">
      {travelPages.map((page) => {
        const isActive = page.href === activeHref;

        return (
          <Link
            key={page.href}
            href={page.href}
            aria-current={isActive ? 'page' : undefined}
            className={`rounded-btn border px-4 py-2 text-sm font-bold transition ${
              isActive
                ? 'border-primary bg-primary text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-gold hover:text-primary'
            }`}
          >
            <span>{page.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function PageHero({
  activeHref,
  eyebrow,
  title,
  description,
}: {
  activeHref: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={sectionTransition}
      className="border-b border-[#ead7b0] bg-[#fffaf0] py-12 sm:py-14"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/fev.png"
              alt="JL Nurse 360 logo"
              width={72}
              height={72}
              className="h-16 w-16 rounded-full bg-[#0b1f3a] object-contain p-1 ring-2 ring-[#c9a14a]"
            />
            <div>
              <p className="font-sans text-2xl font-black leading-tight tracking-normal text-[#0b1f3a]">
                JL Nurse 360
              </p>
              <p className="text-xs font-bold uppercase tracking-normal text-[#b57d18]">
                Nursing &bull; Wellness &bull; Entrepreneurship
              </p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-normal text-[#b57d18]">{eyebrow}</p>
            <h1 className="font-sans text-4xl font-black leading-tight tracking-normal text-[#0b1f3a] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{description}</p>
            <div className="mt-6">
              <PageNav activeHref={activeHref} />
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

function OverviewHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#fff8e8] via-white to-[#f6f3ef] py-16 sm:py-20 lg:py-24"
    >
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-btn bg-primary px-4 py-2 text-sm font-bold text-white">
              <TravelIcon name="globe" className="h-4 w-4" />
              Explore Travel Nursing Opportunities Across Canada &amp; the United States
            </div>
            <p className="mb-3 font-sans text-sm font-black uppercase tracking-normal text-[#b57d18]">
              JLNurse360 Travel Nurse Consultation
            </p>
            <h1 className="font-sans text-4xl font-black leading-tight tracking-normal text-[#0b1f3a] sm:text-5xl lg:text-6xl">
              Discover a Career Without Borders
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Helping RNs, RPNs, LPNs and Internationally Educated Nurses discover rewarding travel
              nursing opportunities across Canada and the United States while building a flexible,
              high-impact career.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Whether you&apos;re looking to increase your income, gain experience in diverse healthcare
              settings, or enjoy the flexibility of working across provinces and states, JL Nurse
              360 provides personalized coaching to help you prepare for travel nursing
              opportunities in Canada and the United States.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Our consultation helps you understand travel nursing pathways, licensing
              considerations, resume preparation, interview strategies, and career planning so you
              can confidently pursue assignments that match your goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href={bookHref}>
                <TravelIcon name="calendar" className="h-5 w-5" />
                Book Your Consultation Today
              </PrimaryButton>
              <SecondaryButton href="/travel-nurse-consultation/what-youll-receive">
                Learn More
                <TravelIcon name="chevron" className="h-5 w-5" />
              </SecondaryButton>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {['RN, RPN, LPN, IEN', 'Canada & USA', 'Flexible Contracts'].map((item) => (
                <CheckItem key={item} muted>
                  {item}
                </CheckItem>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-gold/45 bg-primary shadow-2xl shadow-primary/15 sm:min-h-[390px]">
              <Image
                src="/images/travel-nurse/infopgraph.jpeg"
                alt="Travel Nurse Consultation infographic"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefitCards.slice(0, 4).map((item) => (
                <article key={item.title} className="rounded-lg border border-gold/20 bg-white p-4 shadow-sm">
                  <IconBadge name={item.icon} />
                  <p className="mt-3 text-sm font-bold leading-snug text-slate-800">{item.title}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}

function BenefitsAudienceSection() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          title="Why Choose Travel Nursing?"
          description="Travel nursing offers an exciting opportunity to combine your passion for patient care with professional growth, financial rewards, and the flexibility to work in leading healthcare facilities throughout Canada and the United States."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <IconBadge name="flag" />
              <h3 className="font-sans text-xl font-black tracking-normal text-[#0b1f3a]">Benefits</h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-gold/25 bg-[#fffaf0] p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <IconBadge name="nurse" />
              <div>
                <h3 className="font-sans text-xl font-black tracking-normal text-[#0b1f3a]">
                  Is This Consultation Right for You?
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">This consultation is ideal for:</p>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {consultationIdealFor.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}

function MainPagePreviewSections() {
  return (
    <Section className="bg-[#fffaf0]">
      <Container>
        <div className="grid gap-8">
          <article className="rounded-lg border border-gold/25 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <IconBadge name="clipboard" size="lg" />
              <div>
                <h3 className="mt-1 font-sans text-2xl font-black leading-tight tracking-normal text-[#0b1f3a]">
                  What You&apos;ll Receive During Your Consultation
                </h3>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-slate-600">
              Personalized guidance to help you understand travel nursing pathways, prepare your
              application, and confidently take the next step.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {receiveSections.map((section) => (
                <div key={section.title} className="rounded-lg border border-gold/20 bg-[#fffaf0] p-4">
                  <IconBadge name={section.icon} size="sm" />
                  <h4 className="mt-3 text-sm font-black text-[#0b1f3a]">{section.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.preview}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <PrimaryButton href="/travel-nurse-consultation/what-youll-receive">
                Learn More About Consultation
                <TravelIcon name="chevron" className="h-5 w-5" />
              </PrimaryButton>
            </div>
          </article>

          <article className="rounded-lg border border-gold/25 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <IconBadge name="rocket" size="lg" tone="gold" />
              <div>
                <h3 className="mt-1 font-sans text-2xl font-black leading-tight tracking-normal text-[#0b1f3a]">
                  Consultation Packages and Frequently Asked Questions
                </h3>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-slate-600">
              Choose the package that fits your career goals, review quick answers to common
              questions, and schedule your consultation when you are ready.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {packages.map((item) => (
                <div key={item.title} className="rounded-lg border border-gold/20 bg-[#fffaf0] p-4">
                  <div className="flex items-start gap-3">
                    <IconBadge name={item.icon} size="sm" tone="gold" />
                    <div>
                      <p className="font-bold text-[#0b1f3a]">{item.name}</p>
                      <span className="mt-1 inline-flex rounded-btn bg-primary px-3 py-1 text-xs font-bold text-white">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqs.slice(0, 2).map((faq) => (
                <div key={faq.question} className="rounded-lg border border-slate-100 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-sans text-sm font-black text-gold">
                      Q
                    </span>
                    <div>
                      <h4 className="text-sm font-black text-[#0b1f3a]">{faq.question}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <PrimaryButton href="/travel-nurse-consultation/consultation-packages">
                View All Packages
                <TravelIcon name="chevron" className="h-5 w-5" />
              </PrimaryButton>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}

function MeetJeanSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/jlself22.jpeg"
              alt="Jean Lewis"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-normal text-[#b57d18]">Meet Jean Lewis</p>
            <h2 className="font-sans text-3xl font-black leading-tight tracking-normal text-[#0b1f3a] sm:text-4xl">
              Founder of JL Nurse 360
            </h2>
            <p className="mt-4 font-semibold text-primary">
              Registered Nurse, Travel Nurse, Clinical Nursing Instructor, Branding Consultant,
              Health &amp; Wellness Influencer, and Product Consultant.
            </p>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
              <p>
                With more than 20 years of nursing experience across Canada and the United States,
                Jean has worked in acute care, medical-surgical nursing, maternal-child health,
                cardiology, recovery/postpartum care, and travel nursing in hospitals across
                Ontario, Nova Scotia, Florida, Georgia, Connecticut, and North Carolina.
              </p>
              <p>
                Jean is passionate about helping nurses build successful careers through strategic
                planning, professional branding, and entrepreneurial opportunities.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ReceivePage() {
  return (
    <>
      <PageHero
        activeHref="/travel-nurse-consultation/what-youll-receive"
        eyebrow="Consultation Details"
        title="What You'll Receive During Your Consultation"
        description="Personalized guidance to help you understand travel nursing pathways, prepare your application, and confidently take the next step."
      />

      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {receiveSections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <IconBadge name={section.icon} size="lg" />
                <h2 className="mt-5 font-sans text-2xl font-black leading-tight tracking-normal text-[#0b1f3a]">
                  {section.title}
                </h2>
                <p className="mt-2 font-semibold text-slate-700">{section.intro}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <MeetJeanSection />

      <Section className="bg-[#0b1f3a] text-white">
        <Container>
          <SectionHeading
            eyebrow="Why book with JL Nurse 360?"
            title="Professional guidance for nurses planning their next move"
            description="The consultation combines travel nursing guidance, career planning, resume support, interview preparation, personal branding, and mentorship."
            tone="light"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyBook.map((item) => (
              <article key={item.label} className="rounded-lg border border-white/10 bg-white/8 p-5 text-center">
                <IconBadge name={item.icon} tone="white" />
                <p className="mt-3 text-sm font-bold leading-snug text-white">{item.label}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <PrimaryButton href={bookHref}>
              <TravelIcon name="calendar" className="h-5 w-5" />
              Book My Consultation
            </PrimaryButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

function PackagesPage() {
  return (
    <>
      <PageHero
        activeHref="/travel-nurse-consultation/consultation-packages"
        eyebrow="Packages & FAQs"
        title="Consultation Packages"
        description="Choose the package that fits your career goals, review quick answers to common questions, and schedule your consultation when you are ready."
      />

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading title="Consultation Packages" description="Choose the package that fits your career goals." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.45 }}
                className={`relative flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm sm:p-8 ${
                  item.featured ? 'border-gold ring-2 ring-gold/25' : 'border-slate-200'
                }`}
              >
                {item.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-btn bg-gold px-4 py-1 text-xs font-black uppercase tracking-normal text-white">
                    Most Popular
                  </span>
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <IconBadge name={item.icon} size="lg" />
                  <span className="rounded-btn bg-primary px-3 py-1 text-sm font-bold text-white">
                    {item.badge}
                  </span>
                </div>
                <h2 className="mt-5 font-sans text-2xl font-black leading-tight tracking-normal text-[#0b1f3a]">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                {item.items?.length ? (
                  <ul className="mt-6 grid flex-1 gap-3">
                    {item.items.map((detail) => (
                      <CheckItem key={detail}>{detail}</CheckItem>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href={bookHref}
                  className="mt-8 inline-flex items-center justify-center rounded-btn bg-gold px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-gold-dark"
                >
                  {item.cta}
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            description="Quick answers to common questions."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-sans text-lg font-black text-gold">
                    Q
                  </span>
                  <div>
                    <h2 className="font-sans text-lg font-black tracking-normal text-[#0b1f3a]">{faq.question}</h2>
                    <p className="mt-2 leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-primary text-white">
        <Container className="text-center">
          <h2 className="mx-auto max-w-4xl font-sans text-3xl font-black leading-tight tracking-normal sm:text-5xl">
            Ready to Explore Travel Nursing Across Canada &amp; USA?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
            Take the first step toward a flexible, high-impact nursing career.
          </p>
          <div className="mt-8">
            <Link
              href={bookHref}
              className="inline-flex items-center justify-center gap-3 rounded-btn bg-gold px-8 py-4 text-base font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gold-dark"
            >
              <TravelIcon name="calendar" className="h-5 w-5" />
              Schedule My Consultation
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1fr_1.2fr] lg:p-8">
            <div>
              <h2 className="font-sans text-2xl font-black tracking-normal text-[#0b1f3a]">Contact Us.</h2>
              <div className="mt-5 grid gap-3 text-sm text-slate-700">
                <p className="font-bold text-[#0b1f3a]">JL Nurse 360</p>
                <a href="mailto:info@jlnurse360.com" className="inline-flex items-center gap-3 transition hover:text-gold-dark">
                  <IconBadge name="file" size="sm" />
                  info@jlnurse360.com
                </a>
                <a
                  href="https://www.jlnurse360.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition hover:text-gold-dark"
                >
                  <IconBadge name="globe" size="sm" />
                  www.jlnurse360.com
                </a>
                <p className="inline-flex items-center gap-3">
                  <IconBadge name="laptop" size="sm" />
                  Online Consultations Available Across Canada &amp; the United States
                </p>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="font-sans text-base font-black uppercase tracking-normal text-[#0b1f3a]">
                JL Nurse 360: Nursing &bull; Wellness &bull; Entrepreneurship
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Helping nurses grow their careers through education, coaching, wellness, travel
                nursing, and professional development across Canada and the United States.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Disclaimer: JL Nurse 360 provides educational resources, career coaching, and
                professional development services. Employment opportunities, compensation, travel
                benefits, licensing requirements, and assignment availability are determined by
                individual healthcare employers, travel nursing agencies, and provincial,
                territorial, and state regulatory bodies.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function OverviewPage() {
  return (
    <>
      <OverviewHero />
      <BenefitsAudienceSection />
      <MainPagePreviewSections />
      <Section className="bg-[#0b1f3a] text-white">
        <Container className="text-center">
          <h2 className="mx-auto max-w-4xl font-sans text-3xl font-black leading-tight tracking-normal sm:text-5xl">
            Ready to Explore Travel Nursing Across Canada &amp; USA?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">
            Take the first step toward a flexible, high-impact nursing career.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href={bookHref}>
              <TravelIcon name="calendar" className="h-5 w-5" />
              Schedule My Consultation
            </PrimaryButton>
            <SecondaryButton href="/travel-nurse-consultation/consultation-packages">
              View All Packages
              <TravelIcon name="chevron" className="h-5 w-5" />
            </SecondaryButton>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default function TravelNurseConsultation({
  view = 'overview',
}: {
  view?: TravelNurseConsultationView;
}) {
  return (
    <div className="bg-white text-slate-800">
      {view === 'overview' ? <OverviewPage /> : null}
      {view === 'receive' ? <ReceivePage /> : null}
      {view === 'packages' ? <PackagesPage /> : null}
    </div>
  );
}
