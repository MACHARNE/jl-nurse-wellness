// src/app/program/page.tsx
import { Metadata } from 'next';
import AgencyHero from '@/components/nurse-agency/AgencyHero';
import WhoItsFor from '@/components/nurse-agency/WhoItsFor';
import WhyNursesEntrepreneurs from '@/components/nurse-agency/WhyNursesEntrepreneurs';
import ProgramBenefits from '@/components/nurse-agency/ProgramBenefits';
import ProgramIncludes from '@/components/nurse-agency/ProgramIncludes';
import ProgramFAQ from '@/components/nurse-agency/ProgramFAQ';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Nurse2Agency Program | Build a Nurse-Led Healthcare Business',
  description:
    'Learn how Canadian nurses can move from employee to entrepreneur with the Nurse2Agency program, practical guidance, and agency-building support.',
  path: '/program',
  keywords: [
    'Nurse2Agency',
    'nurse agency startup',
    'healthcare business for nurses',
    'nurse entrepreneur program Canada',
  ],
});

export default function NurseAgencyPage() {
  return (
    <>
      <div id="program-overview">
        <AgencyHero />
      </div>
      <div id="who-its-for">
        <WhoItsFor />
      </div>
      <div id="why-nurses-build-businesses">
        <WhyNursesEntrepreneurs />
      </div>
      <div id="program-includes">
        <ProgramIncludes />
      </div>
      <div id="program-benefits">
        <ProgramBenefits />
      </div>
      <div id="program-faq">
        <ProgramFAQ />
      </div>
    </>
  );
}
