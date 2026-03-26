// src/app/program/page.tsx
import { Metadata } from 'next';
import AgencyHero from '@/components/nurse-agency/AgencyHero';
import WhoItsFor from '@/components/nurse-agency/WhoItsFor';
import WhyNursesEntrepreneurs from '@/components/nurse-agency/WhyNursesEntrepreneurs';
import ProgramBenefits from '@/components/nurse-agency/ProgramBenefits';
import ProgramIncludes from '@/components/nurse-agency/ProgramIncludes';
import ProgramFAQ from '@/components/nurse-agency/ProgramFAQ';

export const metadata: Metadata = {
  title: 'Nurse to Agency Program - Build Your Healthcare Business',
  description: 'Learn how Canadian nurses can transition from employee to healthcare entrepreneur by building their own agency or service model.',
};

export default function NurseAgencyPage() {
  return (
    <>
      <AgencyHero />
      <WhoItsFor />
      <WhyNursesEntrepreneurs />
      <ProgramIncludes />
      <ProgramBenefits />
      <ProgramFAQ />
    </>
  );
}
