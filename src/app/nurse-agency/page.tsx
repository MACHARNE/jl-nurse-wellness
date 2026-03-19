// src/app/program/page.tsx
import { Metadata } from 'next';
import AgencyHero from '@/components/nurse-agency/AgencyHero';
import WhoItsFor from '@/components/nurse-agency/WhoItsFor';
import ProgramBenefits from '@/components/nurse-agency/ProgramBenefits';
import ProgramModules from '@/components/nurse-agency/ProgramModules';
import PricingTable from '@/components/nurse-agency/PricingTable';
import AgencyCTA from '@/components/nurse-agency/AgencyCTA';

export const metadata: Metadata = {
  title: 'Nurse to Agency Program - Build Your Healthcare Business',
  description: 'Learn how Canadian nurses can transition from employee to healthcare entrepreneur by building their own agency or service model.',
};

export default function NurseAgencyPage() {
  return (
    <>
      <AgencyHero />
      <WhoItsFor />
      <ProgramBenefits />
      <ProgramModules />
      <PricingTable />
      <AgencyCTA />
    </>
  );
}