'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type BlogArticle = {
  title: string;
  category: string;
  slug: string;
  image: string;
  intro: string[];
  sections: BlogSection[];
  ctas: {
    label: string;
    href: string;
  }[];
  note?: string;
};

type ReaderStatus = 'idle' | 'playing' | 'paused';

type ReaderState = {
  articleSlug: string | null;
  blockId: string | null;
  status: ReaderStatus;
};

type ReadBlock = {
  id: string;
  text: string;
};

const categories = [
  'Nurse Entrepreneurship',
  'Agency Startup Tips',
  'Beauty & Wellness',
  'Self-Care for Nurses',
  'Business Growth',
];

const femaleVoicePattern =
  /female|samantha|victoria|zira|aria|jenny|serena|karen|moira|tessa|susan|joanna|salli|amy|emma|olivia|ava/i;

const articles: BlogArticle[] = [
  {
    title: 'From Nurse to Entrepreneur: Turning Your Nursing Experience Into a Business',
    category: 'Nurse Entrepreneurship',
    slug: 'nurse-entrepreneurship-canada',
    image: '/images/nurse-enter.jpg',
    intro: [
      'For many nurses, nursing is more than a profession. It develops leadership, communication, problem-solving, organization, resilience, and the ability to make important decisions under pressure.',
      'These abilities can also provide a strong foundation for entrepreneurship.',
      'At JLNurse360, the Nurse2Agency initiative is designed to help nurses explore how their professional experience can be translated into business opportunities while maintaining appropriate professional, ethical, and regulatory standards.',
    ],
    sections: [
      {
        heading: 'Why Consider Nurse Entrepreneurship?',
        paragraphs: [
          'Traditional nursing offers an important and rewarding career, but some nurses may eventually want greater flexibility, professional independence, or the opportunity to build something of their own.',
          'Entrepreneurship can provide opportunities to explore areas such as:',
        ],
        bullets: [
          'Healthcare staffing and recruitment',
          'Nursing and healthcare education',
          'Consulting',
          'Health and wellness',
          'Professional coaching',
          'Healthcare-related business services',
          'Personal and professional branding',
        ],
      },
      {
        heading: 'Nurses Already Have Valuable Business Skills',
        paragraphs: [
          'The objective does not have to be leaving nursing. Instead, entrepreneurship can allow nurses to expand the ways they use their knowledge and experience.',
          'Think about what nurses routinely do. They assess situations, prioritize competing needs, communicate with different stakeholders, document carefully, manage risk, educate patients and families, collaborate with teams, and adapt quickly.',
          'Those are valuable capabilities in business. The next step is learning the entrepreneurial skills that may not traditionally be taught in nursing education: business planning, marketing, financial management, customer acquisition, branding, operations, and strategic growth.',
        ],
      },
      {
        heading: 'Start With a Business Problem',
        paragraphs: [
          'A successful business begins with a problem worth solving.',
          'Instead of asking: "What business should I start?" consider asking: "What healthcare problem do I understand well enough to help solve?"',
          'Your answer may reveal a potential business niche.',
        ],
      },
      {
        heading: 'Professional Responsibility Still Matters',
        paragraphs: [
          "Nurse entrepreneurship also brings additional responsibilities. The Canadian Nurses Protective Society recommends that nurses considering independent practice understand their regulator's requirements, scope-of-practice considerations, professional limitations, insurance needs, and appropriate business structure.",
        ],
      },
      {
        heading: 'Your Nursing Career Can Become a Foundation',
        paragraphs: [
          'You spent years developing valuable professional knowledge. Nurse2Agency is about helping nurses examine how that experience can become the foundation for their next professional chapter.',
        ],
      },
    ],
    ctas: [
      { label: 'Download the Nurse2Agency Starter Guide', href: '/resources' },
      { label: 'Start Your Nurse2Agency Journey', href: '/program' },
    ],
  },
  {
    title: 'How to Start Building a Nursing Agency in Canada: 8 Essential Steps',
    category: 'Agency Startup Tips',
    slug: 'start-nursing-agency-canada',
    image: '/images/workingsystem.jpg',
    intro: [
      'Starting a nursing agency involves much more than registering a business and finding nurses.',
      'Healthcare is regulated, and requirements can vary depending on the province, services offered, business model, and whether your organization provides staffing, recruitment, clinical services, or another type of healthcare service.',
      'Here are eight areas aspiring agency owners should investigate.',
    ],
    sections: [
      {
        heading: 'Define Your Agency Model',
        paragraphs: [
          'Start by determining exactly what your agency will do. Will you focus on temporary staffing, healthcare recruitment, home care, long-term care staffing, travel nursing, or another niche?',
          'A clearly defined model makes everything else, from compliance to marketing, easier.',
        ],
      },
      {
        heading: 'Research Your Market',
        paragraphs: [
          'Identify potential customers and understand their staffing challenges. Depending on your model, potential clients could include healthcare organizations, long-term-care organizations and other care providers.',
          'Research your competitors, local workforce availability, service gaps and the needs of your chosen geographic market.',
        ],
      },
      {
        heading: 'Develop Your Business Plan',
        paragraphs: ['Your plan should cover:'],
        bullets: [
          'Target market',
          'Services',
          'Competitive positioning',
          'Startup costs',
          'Operating expenses',
          'Pricing',
          'Staffing',
          'Marketing',
          'Sales',
          'Revenue projections',
          'Risk management',
        ],
      },
      {
        heading: 'Select an Appropriate Business Structure',
        paragraphs: [
          "The Government of Canada identifies planning, selecting a business structure, market research, registration, permits, licences and financing among the core considerations when starting a business.",
          "Depending on your circumstances, options may include sole proprietorship, partnership or incorporation. Do not choose a structure simply because another nurse uses it. Legal, tax and liability implications can differ significantly.",
        ],
      },
      {
        heading: 'Investigate Registration, Licensing and Regulatory Requirements',
        paragraphs: [
          'Healthcare businesses can have additional obligations beyond normal business registration.',
          'Requirements can vary by jurisdiction and by the services you provide. Research the applicable provincial nursing regulator, government requirements, employment rules, privacy requirements and any licensing or accreditation requirements associated with your specific business.',
        ],
      },
      {
        heading: 'Build a Strong Recruitment System',
        paragraphs: [
          'If your model involves staffing, your people become central to your reputation. Develop processes for:',
        ],
        bullets: [
          'Credential verification',
          'Interviews',
          'References',
          'Background screening where appropriate',
          'Orientation',
          'Training',
          'Scheduling',
          'Performance management',
          'Documentation',
        ],
      },
      {
        heading: 'Build Your Client Acquisition Strategy',
        paragraphs: [
          'A business without customers is still only an idea. Create a professional website and develop a structured approach to relationship building, outreach, referrals and digital marketing.',
        ],
      },
      {
        heading: 'Build for Quality, Not Just Growth',
        paragraphs: [
          'Your reputation can become one of your most valuable assets. Create systems for quality assurance, incident management, feedback and continuous improvement from the beginning.',
        ],
      },
      {
        heading: 'The Nurse2Agency Approach',
        paragraphs: [
          'Nurse2Agency helps aspiring nurse entrepreneurs organize these different pieces into a practical business-development roadmap.',
        ],
      },
    ],
    ctas: [
      { label: 'Download the Nursing Agency Startup Guide', href: '/resources' },
      { label: 'Book a Nurse2Agency Consultation', href: '/contact#strategy-call' },
    ],
    note: 'Important: This article provides general educational information, not legal, regulatory, accounting or tax advice. Requirements vary by jurisdiction and business model.',
  },
  {
    title: 'Beauty, Wellness and Entrepreneurship: Creating a More Holistic Career as a Nurse',
    category: 'Beauty & Wellness',
    slug: 'nurses-beauty-wellness-entrepreneurship',
    image: '/images/skin.png',
    intro: [
      'Healthcare professionals spend much of their careers caring for other people. But wellness also involves caring for yourself.',
      'At JLNurse360, we view professional development, entrepreneurship and wellness as interconnected parts of a sustainable career.',
    ],
    sections: [
      {
        heading: 'Wellness Is More Than Appearance',
        paragraphs: ['Wellness can include:'],
        bullets: [
          'Rest and recovery',
          'Nutrition',
          'Physical activity',
          'Emotional wellbeing',
          'Healthy routines',
          'Personal care',
          'Confidence',
          'Meaningful relationships',
          'Career satisfaction',
        ],
      },
      {
        heading: 'Why JLNurse360 Includes Beauty & Wellness',
        paragraphs: [
          'Beauty and skincare can form one small part of that broader self-care routine.',
          'JLNurse360 brings together three areas: nursing, wellness and entrepreneurship.',
          "The objective is to help nurses think about their lives and careers more holistically. Through JLNurse360's wellness content and its Farmasi and Kokoshea platforms, visitors can explore beauty and personal-care products while learning about responsible approaches to wellness and entrepreneurship.",
        ],
      },
      {
        heading: 'Nurses and Personal Branding',
        paragraphs: [
          'Professional presentation is also part of building a personal brand. A strong professional brand is not about looking perfect. It is about communicating your values, expertise and purpose consistently.',
          'For a nurse entrepreneur, this can mean having:',
        ],
        bullets: [
          'A professional online presence',
          'Clear positioning',
          'Consistent visual branding',
          'Educational content',
          'Credible communication',
          'Appropriate professional boundaries',
        ],
      },
      {
        heading: 'Wellness Can Support Entrepreneurship',
        paragraphs: [
          'Running a business requires energy and consistency. Creating sustainable routines around sleep, rest, movement, nutrition and personal wellbeing can help entrepreneurs maintain the capacity needed to lead their businesses.',
        ],
      },
      {
        heading: 'Explore the JLNurse360 Wellness Community',
        paragraphs: [
          'Discover educational wellness content, beauty and personal-care products, and opportunities to learn more about entrepreneurship.',
        ],
      },
    ],
    ctas: [
      { label: 'Explore Beauty & Wellness', href: '/kokoshea' },
      { label: 'Discover Farmasi & Kokoshea', href: '/farmasi' },
    ],
  },
  {
    title: 'Caring for the Caregiver: Practical Self-Care for Busy Nurses',
    category: 'Self-Care for Nurses',
    slug: 'self-care-for-nurses',
    image: '/images/practicalnurse.jpg',
    intro: [
      'Nurses dedicate enormous amounts of time and energy to caring for other people.',
      'Between shifts, family responsibilities, professional development and everyday life, personal wellbeing can easily move to the bottom of the priority list.',
      'But sustainable self-care does not need to mean expensive retreats or complicated routines.',
    ],
    sections: [
      {
        heading: 'Protect Your Recovery Time',
        paragraphs: [
          'Rest matters. Consider creating a simple post-shift routine that helps you transition away from work and into recovery.',
        ],
      },
      {
        heading: 'Build Small Routines',
        paragraphs: [
          'Consistency can be more manageable than trying to make dramatic lifestyle changes. A simple routine could include preparing nourishing meals, getting appropriate rest, taking breaks, maintaining social connections, and making time for activities you enjoy.',
        ],
      },
      {
        heading: 'Establish Healthy Professional Boundaries',
        paragraphs: [
          'Being compassionate does not require being available every minute. Appropriate boundaries around work, personal commitments and business responsibilities can help protect your time and energy.',
        ],
      },
      {
        heading: 'Stay Connected',
        paragraphs: [
          'Nursing can be demanding. Maintaining supportive relationships with family, friends, colleagues and professional communities can provide valuable perspective and encouragement.',
        ],
      },
      {
        heading: 'Make Personal Care Personal',
        paragraphs: [
          'Your self-care routine should fit your preferences and circumstances. For some people that might include skincare or beauty routines. For others it might mean reading, exercise, spending time outdoors, prayer or reflection, hobbies, or simply enjoying quiet time.',
        ],
      },
      {
        heading: 'Know When You Need Support',
        paragraphs: [
          "Self-care is not a substitute for professional healthcare. If you are struggling physically or emotionally, consider speaking with a qualified healthcare professional or another trusted source of support.",
        ],
      },
      {
        heading: 'Building a Sustainable Career',
        paragraphs: [
          'JLNurse360 encourages nurses to think beyond short-term productivity. The goal is to create a career, and potentially a business, that supports a sustainable life.',
        ],
      },
    ],
    ctas: [{ label: 'Explore JLNurse360 Wellness Resources', href: '/resources' }],
  },
  {
    title: 'From Nurse Entrepreneur to Business Leader: How to Grow Your Nurse2Agency Business',
    category: 'Business Growth',
    slug: 'grow-nursing-agency-business',
    image: '/images/marketgrowth.jpg',
    intro: [
      'Launching your nursing business is only the beginning.',
      'The next challenge is creating systems that allow the organization to operate consistently, serve customers effectively and grow responsibly.',
    ],
    sections: [
      {
        heading: 'Clarify Your Positioning',
        paragraphs: [
          'Avoid trying to serve everyone. Define who you serve, what problem you solve, and why clients should choose you. Clear positioning makes marketing and sales significantly easier.',
        ],
      },
      {
        heading: 'Build a Repeatable Client Acquisition System',
        paragraphs: [
          'Do not depend entirely on referrals. Develop multiple channels for generating qualified prospects, such as:',
        ],
        bullets: [
          'Search-optimized website content',
          'Professional networking',
          'LinkedIn',
          'Email marketing',
          'Educational webinars',
          'Partnerships',
          'Referral relationships',
          'Targeted outreach',
        ],
      },
      {
        heading: 'Build Your Digital Funnel',
        paragraphs: [
          'Your website should do more than describe your company.',
          'For Nurse2Agency entrepreneurs, a simple funnel might look like: educational content to free resource to email follow-up to consultation to qualified opportunity.',
          'That creates a repeatable customer journey.',
        ],
      },
      {
        heading: 'Build Systems Before Scaling',
        paragraphs: [
          'Document your processes. Create repeatable workflows for inquiries, recruiting, onboarding, scheduling, customer communication, invoicing, quality assurance and follow-up.',
        ],
      },
      {
        heading: 'Know Your Numbers',
        paragraphs: [
          'Track meaningful business indicators such as leads, consultations, clients, revenue, costs and retention.',
          'Instead of focusing only on website traffic or social-media followers, measure the activities connected to business outcomes.',
        ],
      },
      {
        heading: 'Build Your Brand Reputation',
        paragraphs: [
          'Healthcare businesses depend heavily on trust. Professional communication, reliable service, transparent expectations and consistent quality can help establish a stronger reputation over time.',
        ],
      },
      {
        heading: 'Grow Responsibly',
        paragraphs: [
          'Growth should never come at the expense of patient safety, regulatory obligations or service quality.',
          'For nurses moving into independent practice, professional standards and regulatory requirements continue to matter. Nursing regulators can place requirements around scope, professional responsibility, advertising, conflicts of interest and related activities.',
        ],
      },
      {
        heading: 'From Nurse to CEO',
        paragraphs: [
          'The biggest transition in Nurse2Agency may ultimately be a mindset transition: nurse to entrepreneur to business leader.',
          'Clinical expertise gives you an important foundation. Business growth requires adding strategy, financial management, marketing, leadership and systems.',
          'That is the transformation Nurse2Agency is designed to support.',
        ],
      },
    ],
    ctas: [
      { label: 'Download the Nurse2Agency Starter Guide', href: '/resources' },
      { label: 'Book Your Nurse2Agency Business Consultation', href: '/contact#strategy-call' },
    ],
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function titleBlockId(article: BlogArticle) {
  return `${article.slug}-title`;
}

function introBlockId(article: BlogArticle, index: number) {
  return `${article.slug}-intro-${index}`;
}

function sectionHeadingBlockId(article: BlogArticle, sectionIndex: number) {
  return `${article.slug}-section-${sectionIndex}-heading`;
}

function sectionParagraphBlockId(
  article: BlogArticle,
  sectionIndex: number,
  paragraphIndex: number
) {
  return `${article.slug}-section-${sectionIndex}-paragraph-${paragraphIndex}`;
}

function sectionBulletBlockId(article: BlogArticle, sectionIndex: number, bulletIndex: number) {
  return `${article.slug}-section-${sectionIndex}-bullet-${bulletIndex}`;
}

function noteBlockId(article: BlogArticle) {
  return `${article.slug}-note`;
}

function buildArticleReadBlocks(article: BlogArticle): ReadBlock[] {
  const blocks: ReadBlock[] = [{ id: titleBlockId(article), text: article.title }];

  article.intro.forEach((paragraph, index) => {
    blocks.push({ id: introBlockId(article, index), text: paragraph });
  });

  article.sections.forEach((section, sectionIndex) => {
    blocks.push({
      id: sectionHeadingBlockId(article, sectionIndex),
      text: section.heading,
    });

    section.paragraphs?.forEach((paragraph, paragraphIndex) => {
      blocks.push({
        id: sectionParagraphBlockId(article, sectionIndex, paragraphIndex),
        text: paragraph,
      });
    });

    section.bullets?.forEach((bullet, bulletIndex) => {
      blocks.push({
        id: sectionBulletBlockId(article, sectionIndex, bulletIndex),
        text: bullet,
      });
    });
  });

  if (article.note) {
    blocks.push({ id: noteBlockId(article), text: article.note });
  }

  return blocks.filter((block) => block.text.trim().length > 0);
}

function SpeakerIcon({ isPlaying }: { isPlaying: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 9v6h4l5 4V5L9 9H5z"
      />
      {isPlaying ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9.5a4 4 0 010 5M19.5 7a7 7 0 010 10"
        />
      ) : null}
    </svg>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={cx('h-4 w-4 flex-shrink-0 transition-transform', isOpen && 'rotate-180')}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

export default function BlogLanding() {
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);
  const [openCategories, setOpenCategories] = useState<string[]>([articles[0].category]);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [reader, setReader] = useState<ReaderState>({
    articleSlug: null,
    blockId: null,
    status: 'idle',
  });

  const sessionRef = useRef(0);
  const activeArticle = articles[activeArticleIndex];
  const groupedArticles = useMemo(
    () =>
      categories.map((category) => ({
        category,
        articles: articles.filter((article) => article.category === category),
      })),
    []
  );

  const activeArticleIsReading = reader.articleSlug === activeArticle.slug;
  const isPlayingActiveArticle = activeArticleIsReading && reader.status === 'playing';
  const isPausedActiveArticle = activeArticleIsReading && reader.status === 'paused';

  const highlightedClass = useCallback(
    (blockId: string) =>
      reader.articleSlug === activeArticle.slug && reader.blockId === blockId
        ? 'bg-gold/20 text-primary shadow-[inset_0_0_0_1px_rgba(201,161,74,0.35)]'
        : '',
    [activeArticle.slug, reader.articleSlug, reader.blockId]
  );

  const stopReader = useCallback(() => {
    sessionRef.current += 1;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    setReader({ articleSlug: null, blockId: null, status: 'idle' });
  }, []);

  const findPreferredVoice = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return null;
    }

    const availableVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    const englishVoices = availableVoices.filter((voice) =>
      voice.lang.toLowerCase().startsWith('en')
    );

    return (
      englishVoices.find((voice) => femaleVoicePattern.test(voice.name)) ??
      englishVoices[0] ??
      availableVoices[0] ??
      null
    );
  }, [voices]);

  const startReader = useCallback(
    (article: BlogArticle) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        setSpeechSupported(false);
        return;
      }

      const synth = window.speechSynthesis;
      const blocks = buildArticleReadBlocks(article);
      const session = sessionRef.current + 1;
      sessionRef.current = session;
      synth.cancel();

      const speakBlock = (index: number) => {
        if (sessionRef.current !== session) {
          return;
        }

        const block = blocks[index];

        if (!block) {
          setReader({ articleSlug: null, blockId: null, status: 'idle' });
          return;
        }

        const utterance = new SpeechSynthesisUtterance(block.text);
        const preferredVoice = findPreferredVoice();

        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        utterance.rate = 0.92;
        utterance.pitch = 1.05;
        utterance.onstart = () => {
          setReader({ articleSlug: article.slug, blockId: block.id, status: 'playing' });
        };
        utterance.onend = () => {
          if (sessionRef.current === session) {
            speakBlock(index + 1);
          }
        };
        utterance.onerror = () => {
          if (sessionRef.current === session) {
            setReader({ articleSlug: null, blockId: null, status: 'idle' });
          }
        };

        synth.speak(utterance);
      };

      speakBlock(0);
    },
    [findPreferredVoice]
  );

  const toggleReader = useCallback(
    (article: BlogArticle) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        setSpeechSupported(false);
        return;
      }

      if (reader.articleSlug === article.slug && reader.status === 'playing') {
        window.speechSynthesis.pause();
        setReader((current) => ({ ...current, status: 'paused' }));
        return;
      }

      if (reader.articleSlug === article.slug && reader.status === 'paused') {
        window.speechSynthesis.resume();
        setReader((current) => ({ ...current, status: 'playing' }));
        return;
      }

      startReader(article);
    },
    [reader.articleSlug, reader.status, startReader]
  );

  const selectArticle = useCallback(
    (index: number) => {
      const article = articles[index];

      if (!article) {
        return;
      }

      stopReader();
      setActiveArticleIndex(index);
      setOpenCategories((current) =>
        current.includes(article.category) ? current : [...current, article.category]
      );

      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${article.slug}`);
        window.requestAnimationFrame(() => {
          document.getElementById('blog-reader')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
      }
    },
    [stopReader]
  );

  const toggleCategory = useCallback((category: string) => {
    setOpenCategories((current) =>
      current.includes(category)
        ? current.filter((existingCategory) => existingCategory !== category)
        : [...current, category]
    );
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSpeechSupported(false);
      return;
    }

    const synth = window.speechSynthesis;
    const loadVoices = () => {
      setVoices(synth.getVoices());
    };

    setSpeechSupported(true);
    loadVoices();
    synth.addEventListener('voiceschanged', loadVoices);

    return () => {
      synth.removeEventListener('voiceschanged', loadVoices);
      synth.cancel();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const slug = window.location.hash.replace('#', '');
    const articleIndex = articles.findIndex((article) => article.slug === slug);

    if (articleIndex >= 0) {
      setActiveArticleIndex(articleIndex);
      setOpenCategories((current) =>
        current.includes(articles[articleIndex].category)
          ? current
          : [...current, articles[articleIndex].category]
      );
    }
  }, []);

  const previousArticleIndex =
    activeArticleIndex === 0 ? articles.length - 1 : activeArticleIndex - 1;
  const nextArticleIndex =
    activeArticleIndex === articles.length - 1 ? 0 : activeArticleIndex + 1;

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-primary/10 bg-background py-14 text-primary sm:py-16 md:py-20">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-block rounded-full border border-gold/30 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
              JLNurse360 Blog
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Practical articles for nurses building{' '}
              <span className="text-gold">income, wellness, and ownership</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
              Nurse entrepreneurship, agency startup guidance, beauty and wellness,
              self-care, and business growth in one organized reading space.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => {
                const categoryIndex = articles.findIndex((article) => article.category === category);
                const isActive = activeArticle.category === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => selectArticle(categoryIndex)}
                    className={cx(
                      'rounded-full border px-4 py-2 text-sm font-semibold transition',
                      isActive
                        ? 'border-primary bg-primary text-white'
                        : 'border-primary/10 bg-white text-primary hover:border-gold/50 hover:text-gold'
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_32px_80px_-32px_rgba(8,22,43,0.5)]">
              <Image
                src="/images/nurse-enter.jpg"
                alt="Nurse entrepreneur planning a business next step"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Featured Reading
                </p>
                <p className="mt-3 max-w-sm text-xl font-semibold text-white">
                  Content for nurses moving from professional experience into practical
                  business growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="blog-reader" className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-lg border border-primary/10 bg-background p-4 shadow-[0_18px_45px_-35px_rgba(11,31,58,0.4)]">
              <div className="mb-4 border-b border-primary/10 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Browse
                </p>
                <h2 className="mt-2 text-xl font-bold text-primary">Categories</h2>
              </div>

              <div className="space-y-3">
                {groupedArticles.map((group) => {
                  const isOpen = openCategories.includes(group.category);
                  const isActiveCategory = activeArticle.category === group.category;

                  return (
                    <div key={group.category} className="rounded-lg border border-primary/10 bg-white">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleCategory(group.category)}
                        className={cx(
                          'flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-left text-sm font-bold transition',
                          isActiveCategory ? 'text-primary' : 'text-charcoal hover:text-primary'
                        )}
                      >
                        <span>{group.category}</span>
                        <ChevronIcon isOpen={isOpen} />
                      </button>

                      {isOpen ? (
                        <div className="border-t border-primary/10 p-2">
                          {group.articles.map((article) => {
                            const articleIndex = articles.findIndex(
                              (item) => item.slug === article.slug
                            );
                            const isActiveArticle = article.slug === activeArticle.slug;

                            return (
                              <button
                                key={article.slug}
                                type="button"
                                onClick={() => selectArticle(articleIndex)}
                                className={cx(
                                  'block w-full rounded-lg px-3 py-3 text-left text-sm leading-snug transition',
                                  isActiveArticle
                                    ? 'bg-primary text-white'
                                    : 'text-gray-700 hover:bg-background hover:text-primary'
                                )}
                              >
                                {article.title}
                              </button>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          <motion.article
            key={activeArticle.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-[0_24px_60px_-40px_rgba(11,31,58,0.45)]"
          >
            <div className="relative aspect-[16/7] min-h-[260px] overflow-hidden">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 760px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {activeArticle.category}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              <h2
                className={cx(
                  'rounded-md text-3xl font-bold leading-tight text-primary transition sm:text-4xl',
                  highlightedClass(titleBlockId(activeArticle))
                )}
              >
                {activeArticle.title}
              </h2>

              <div className="mt-6 flex flex-col gap-3 border-y border-primary/10 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Article {activeArticleIndex + 1} of {articles.length}
                  </p>
                  <p className="text-sm text-gray-500">Female voice reader when available</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    disabled={!speechSupported}
                    title="Read this article aloud with a female voice when your browser provides one"
                    onClick={() => toggleReader(activeArticle)}
                    className={cx(
                      'inline-flex items-center justify-center gap-2 rounded-btn px-5 py-3 text-sm font-bold transition sm:text-base',
                      speechSupported
                        ? 'bg-gold text-primary hover:bg-gold-dark'
                        : 'cursor-not-allowed bg-gray-200 text-gray-500'
                    )}
                  >
                    <SpeakerIcon isPlaying={isPlayingActiveArticle} />
                    {isPlayingActiveArticle
                      ? 'Pause'
                      : isPausedActiveArticle
                        ? 'Resume'
                        : 'Read aloud'}
                  </button>

                  {activeArticleIsReading ? (
                    <button
                      type="button"
                      onClick={stopReader}
                      className="inline-flex items-center justify-center rounded-btn border border-primary/15 px-5 py-3 text-sm font-bold text-primary transition hover:border-primary hover:bg-primary hover:text-white sm:text-base"
                    >
                      Stop
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                {activeArticle.intro.map((paragraph, index) => {
                  const blockId = introBlockId(activeArticle, index);

                  return (
                    <p
                      key={blockId}
                      className={cx(
                        'rounded-md px-1 py-1 transition-colors',
                        highlightedClass(blockId)
                      )}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-10 space-y-10">
                {activeArticle.sections.map((section, sectionIndex) => {
                  const headingId = sectionHeadingBlockId(activeArticle, sectionIndex);

                  return (
                    <section key={`${activeArticle.slug}-${section.heading}`} className="scroll-mt-28">
                      <h3
                        className={cx(
                          'rounded-md px-1 py-1 text-2xl font-bold text-primary transition-colors',
                          highlightedClass(headingId)
                        )}
                      >
                        {section.heading}
                      </h3>

                      {section.paragraphs ? (
                        <div className="mt-3 space-y-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                          {section.paragraphs.map((paragraph, paragraphIndex) => {
                            const blockId = sectionParagraphBlockId(
                              activeArticle,
                              sectionIndex,
                              paragraphIndex
                            );

                            return (
                              <p
                                key={blockId}
                                className={cx(
                                  'rounded-md px-1 py-1 transition-colors',
                                  highlightedClass(blockId)
                                )}
                              >
                                {paragraph}
                              </p>
                            );
                          })}
                        </div>
                      ) : null}

                      {section.bullets ? (
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                          {section.bullets.map((bullet, bulletIndex) => {
                            const blockId = sectionBulletBlockId(
                              activeArticle,
                              sectionIndex,
                              bulletIndex
                            );

                            return (
                              <li
                                key={blockId}
                                className={cx(
                                  'flex items-start gap-3 rounded-lg border border-primary/10 bg-background p-4 text-sm leading-relaxed text-gray-700 transition-colors sm:text-base',
                                  highlightedClass(blockId)
                                )}
                              >
                                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                                <span>{bullet}</span>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </section>
                  );
                })}
              </div>

              {activeArticle.note ? (
                <p
                  className={cx(
                    'mt-10 rounded-lg border border-gold/25 bg-gold/10 p-5 text-sm leading-relaxed text-primary',
                    highlightedClass(noteBlockId(activeArticle))
                  )}
                >
                  {activeArticle.note}
                </p>
              ) : null}

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {activeArticle.ctas.map((cta) => (
                  <Link
                    key={`${activeArticle.slug}-${cta.label}`}
                    href={cta.href}
                    className="inline-flex items-center justify-center rounded-btn bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark sm:text-base"
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>

              <nav
                aria-label="Article navigation"
                className="mt-10 flex flex-col gap-5 border-t border-primary/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <button
                  type="button"
                  onClick={() => selectArticle(previousArticleIndex)}
                  className="inline-flex items-center justify-center gap-2 rounded-btn border border-primary/15 px-5 py-3 text-sm font-bold text-primary transition hover:border-primary hover:bg-primary hover:text-white sm:text-base"
                >
                  <ArrowIcon direction="left" />
                  Previous
                </button>

                <div className="flex items-center justify-center gap-2" aria-label="Blog pagination">
                  {articles.map((article, index) => (
                    <button
                      key={article.slug}
                      type="button"
                      aria-label={`Open ${article.title}`}
                      onClick={() => selectArticle(index)}
                      className={cx(
                        'h-2.5 rounded-full transition-all',
                        index === activeArticleIndex
                          ? 'w-8 bg-gold'
                          : 'w-2.5 bg-primary/20 hover:bg-primary/40'
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => selectArticle(nextArticleIndex)}
                  className="inline-flex items-center justify-center gap-2 rounded-btn bg-gold px-5 py-3 text-sm font-bold text-primary transition hover:bg-gold-dark sm:text-base"
                >
                  Next
                  <ArrowIcon direction="right" />
                </button>
              </nav>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Keep Reading
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Ready to turn professional experience into a clearer next chapter?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Explore resources, wellness content, and Nurse2Agency guidance built for nurses
            who want to grow with intention.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/resources"
              className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition hover:bg-gold-dark"
            >
              Browse Resources
            </Link>
            <Link
              href="/program"
              className="rounded-btn border border-white/25 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Explore Nurse2Agency
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
