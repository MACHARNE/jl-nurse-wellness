'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type BlogArticle = {
  number: string;
  title: string;
  category: string;
  slug: string;
  suggestedUrl: string;
  image: string;
  intro: string[];
  sections: BlogSection[];
  ctas: {
    label: string;
    href: string;
  }[];
  note?: string;
};

const categories = [
  'Nurse Entrepreneurship',
  'Agency Startup Tips',
  'Beauty & Wellness',
  'Self-Care for Nurses',
  'Business Growth',
];

const articles: BlogArticle[] = [
  {
    number: '01',
    title: 'From Nurse to Entrepreneur: Turning Your Nursing Experience Into a Business',
    category: 'Nurse Entrepreneurship',
    slug: 'nurse-entrepreneurship-canada',
    suggestedUrl: '/blog/nurse-entrepreneurship-canada',
    image:
      'https://images.unsplash.com/photo-1654154094424-43c2abae1478?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600',
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
    number: '02',
    title: 'How to Start Building a Nursing Agency in Canada: 8 Essential Steps',
    category: 'Agency Startup Tips',
    slug: 'start-nursing-agency-canada',
    suggestedUrl: '/blog/start-nursing-agency-canada',
    image:
      'https://images.unsplash.com/photo-1770922808906-2a2af9d6cd5a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1400',
    intro: [
      'Starting a nursing agency involves much more than registering a business and finding nurses.',
      'Healthcare is regulated, and requirements can vary depending on the province, services offered, business model, and whether your organization provides staffing, recruitment, clinical services, or another type of healthcare service.',
      'Here are eight areas aspiring agency owners should investigate.',
    ],
    sections: [
      {
        heading: '1. Define Your Agency Model',
        paragraphs: [
          'Start by determining exactly what your agency will do. Will you focus on temporary staffing, healthcare recruitment, home care, long-term care staffing, travel nursing, or another niche?',
          'A clearly defined model makes everything else, from compliance to marketing, easier.',
        ],
      },
      {
        heading: '2. Research Your Market',
        paragraphs: [
          'Identify potential customers and understand their staffing challenges. Depending on your model, potential clients could include healthcare organizations, long-term-care organizations and other care providers.',
          'Research your competitors, local workforce availability, service gaps and the needs of your chosen geographic market.',
        ],
      },
      {
        heading: '3. Develop Your Business Plan',
        paragraphs: [
          'Your plan should cover:',
        ],
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
        heading: '4. Select an Appropriate Business Structure',
        paragraphs: [
          "The Government of Canada identifies planning, selecting a business structure, market research, registration, permits, licences and financing among the core considerations when starting a business.",
          "Depending on your circumstances, options may include sole proprietorship, partnership or incorporation. Do not choose a structure simply because another nurse uses it. Legal, tax and liability implications can differ significantly.",
        ],
      },
      {
        heading: '5. Investigate Registration, Licensing and Regulatory Requirements',
        paragraphs: [
          'Healthcare businesses can have additional obligations beyond normal business registration.',
          'Requirements can vary by jurisdiction and by the services you provide. Research the applicable provincial nursing regulator, government requirements, employment rules, privacy requirements and any licensing or accreditation requirements associated with your specific business.',
        ],
      },
      {
        heading: '6. Build a Strong Recruitment System',
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
        heading: '7. Build Your Client Acquisition Strategy',
        paragraphs: [
          'A business without customers is still only an idea. Create a professional website and develop a structured approach to relationship building, outreach, referrals and digital marketing.',
        ],
      },
      {
        heading: '8. Build for Quality, Not Just Growth',
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
    number: '03',
    title: 'Beauty, Wellness and Entrepreneurship: Creating a More Holistic Career as a Nurse',
    category: 'Beauty & Wellness',
    slug: 'nurses-beauty-wellness-entrepreneurship',
    suggestedUrl: '/blog/nurses-beauty-wellness-entrepreneurship',
    image:
      'https://images.unsplash.com/photo-1741896136071-3f8c1d472aa8?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1400',
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
    number: '04',
    title: 'Caring for the Caregiver: Practical Self-Care for Busy Nurses',
    category: 'Self-Care for Nurses',
    slug: 'self-care-for-nurses',
    suggestedUrl: '/blog/self-care-for-nurses',
    image:
      'https://images.unsplash.com/photo-1677682692769-e7250eda8a8b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1400',
    intro: [
      'Nurses dedicate enormous amounts of time and energy to caring for other people.',
      'Between shifts, family responsibilities, professional development and everyday life, personal wellbeing can easily move to the bottom of the priority list.',
      'But sustainable self-care does not need to mean expensive retreats or complicated routines.',
    ],
    sections: [
      {
        heading: '1. Protect Your Recovery Time',
        paragraphs: [
          'Rest matters. Consider creating a simple post-shift routine that helps you transition away from work and into recovery.',
        ],
      },
      {
        heading: '2. Build Small Routines',
        paragraphs: [
          'Consistency can be more manageable than trying to make dramatic lifestyle changes. A simple routine could include preparing nourishing meals, getting appropriate rest, taking breaks, maintaining social connections, and making time for activities you enjoy.',
        ],
      },
      {
        heading: '3. Establish Healthy Professional Boundaries',
        paragraphs: [
          'Being compassionate does not require being available every minute. Appropriate boundaries around work, personal commitments and business responsibilities can help protect your time and energy.',
        ],
      },
      {
        heading: '4. Stay Connected',
        paragraphs: [
          'Nursing can be demanding. Maintaining supportive relationships with family, friends, colleagues and professional communities can provide valuable perspective and encouragement.',
        ],
      },
      {
        heading: '5. Make Personal Care Personal',
        paragraphs: [
          'Your self-care routine should fit your preferences and circumstances. For some people that might include skincare or beauty routines. For others it might mean reading, exercise, spending time outdoors, prayer or reflection, hobbies, or simply enjoying quiet time.',
        ],
      },
      {
        heading: '6. Know When You Need Support',
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
    ctas: [
      { label: 'Explore JLNurse360 Wellness Resources', href: '/resources' },
    ],
  },
  {
    number: '05',
    title: 'From Nurse Entrepreneur to Business Leader: How to Grow Your Nurse2Agency Business',
    category: 'Business Growth',
    slug: 'grow-nursing-agency-business',
    suggestedUrl: '/blog/grow-nursing-agency-business',
    image: '/images/business-struture.jpg',
    intro: [
      'Launching your nursing business is only the beginning.',
      'The next challenge is creating systems that allow the organization to operate consistently, serve customers effectively and grow responsibly.',
    ],
    sections: [
      {
        heading: 'Stage 1: Clarify Your Positioning',
        paragraphs: [
          'Avoid trying to serve everyone. Define who you serve, what problem you solve, and why clients should choose you. Clear positioning makes marketing and sales significantly easier.',
        ],
      },
      {
        heading: 'Stage 2: Build a Repeatable Client Acquisition System',
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
        heading: 'Stage 3: Build Your Digital Funnel',
        paragraphs: [
          'Your website should do more than describe your company.',
          'For Nurse2Agency entrepreneurs, a simple funnel might look like: educational content to free resource to email follow-up to consultation to qualified opportunity.',
          'That creates a repeatable customer journey.',
        ],
      },
      {
        heading: 'Stage 4: Build Systems Before Scaling',
        paragraphs: [
          'Document your processes. Create repeatable workflows for inquiries, recruiting, onboarding, scheduling, customer communication, invoicing, quality assurance and follow-up.',
        ],
      },
      {
        heading: 'Stage 5: Know Your Numbers',
        paragraphs: [
          'Track meaningful business indicators such as leads, consultations, clients, revenue, costs and retention.',
          'Instead of focusing only on website traffic or social-media followers, measure the activities connected to business outcomes.',
        ],
      },
      {
        heading: 'Stage 6: Build Your Brand Reputation',
        paragraphs: [
          'Healthcare businesses depend heavily on trust. Professional communication, reliable service, transparent expectations and consistent quality can help establish a stronger reputation over time.',
        ],
      },
      {
        heading: 'Stage 7: Grow Responsibly',
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

export default function BlogLanding() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-16 text-primary sm:py-20 md:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-block rounded-full border border-gold/30 bg-white/75 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
              JLNurse360 Blog Architecture
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Practical articles for nurses building{' '}
              <span className="text-gold">income, wellness, and ownership</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
              Nurse Entrepreneurship | Agency Startup Tips | Beauty & Wellness | Self-Care
              for Nurses | Business Growth
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.a
                  key={category}
                  href={`#${articles[index].slug}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  className="rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-sm font-medium text-primary/90 backdrop-blur-sm transition hover:border-gold/40 hover:text-gold"
                >
                  {category}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_32px_80px_-28px_rgba(8,22,43,0.55)]">
              <Image
                src={articles[0].image}
                alt="Business planning desk with planner and keyboard"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  Featured Focus
                </p>
                <p className="mt-3 max-w-sm text-xl font-semibold text-white">
                  Content designed to help nurses move from idea to action.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 text-center"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Article Index
            </span>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
              Thoughtful reads across the core JLNurse360 themes
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.8rem] border border-gray-100 bg-white shadow-[0_20px_50px_-26px_rgba(11,31,58,0.26)] transition-all duration-300 hover:shadow-[0_26px_60px_-24px_rgba(11,31,58,0.32)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {article.category}
                    </span>
                    <span className="text-sm font-semibold text-gold">{article.number}</span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-snug text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    Suggested URL: {article.suggestedUrl}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">{article.intro[0]}</p>

                  <a
                    href={`#${article.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-gold transition-all duration-300 hover:gap-3"
                  >
                    Read article
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="space-y-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                id={article.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.12 }}
                className="scroll-mt-28 border-b border-primary/10 pb-12 last:border-b-0 last:pb-0"
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                  <div className="lg:sticky lg:top-24">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-28px_rgba(11,31,58,0.35)]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 36vw"
                      />
                    </div>
                    <div className="mt-5 rounded-2xl border border-gold/20 bg-background p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Category
                      </p>
                      <p className="mt-2 text-lg font-bold text-primary">{article.category}</p>
                      <p className="mt-4 text-sm text-gray-500">
                        Suggested URL: {article.suggestedUrl}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                      {article.number}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                      {article.title}
                    </h2>

                    <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                      {article.intro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-8 space-y-8">
                      {article.sections.map((section) => (
                        <section key={`${article.slug}-${section.heading}`}>
                          <h3 className="text-2xl font-bold text-primary">{section.heading}</h3>
                          {section.paragraphs ? (
                            <div className="mt-3 space-y-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                              {section.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                          ) : null}

                          {section.bullets ? (
                            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                              {section.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex items-start gap-3 rounded-2xl bg-background p-4 text-sm leading-relaxed text-gray-700 sm:text-base"
                                >
                                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </section>
                      ))}
                    </div>

                    {article.note ? (
                      <p className="mt-8 rounded-2xl border border-gold/25 bg-gold/10 p-5 text-sm leading-relaxed text-primary">
                        {article.note}
                      </p>
                    ) : null}

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {article.ctas.map((cta) => (
                        <Link
                          key={`${article.slug}-${cta.label}`}
                          href={cta.href}
                          className="inline-flex items-center justify-center rounded-btn bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark sm:text-base"
                        >
                          {cta.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark p-8 text-center text-white shadow-[0_32px_80px_-30px_rgba(8,22,43,0.55)] sm:p-10 md:p-12"
          >
            <span className="inline-block rounded-full bg-gold/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gold">
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
                className="rounded-btn bg-gold px-8 py-4 text-lg font-bold text-primary transition hover:scale-105 hover:bg-gold-dark"
              >
                Browse Resources
              </Link>
              <Link
                href="/program"
                className="rounded-btn border border-white/25 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white hover:text-primary"
              >
                Explore Nurse2Agency
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
