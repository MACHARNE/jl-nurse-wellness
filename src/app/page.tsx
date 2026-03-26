import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainPoint from "@/components/PainPoint";
import AboutJean from "@/components/AboutJean";
import ProgramOffer from "@/components/ProgramOffer";
import DualIncome from "@/components/DualIncome";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutJean />
      <PainPoint />
      <ProgramOffer />
      <DualIncome />
      <Testimonials />
      <LeadMagnet />
      <FinalCTA />
    </>
  );
}
