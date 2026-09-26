import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { WhyINNORATECHSection } from "@/components/sections/WhyINNORATECHSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <CapabilityStrip />
      <ProblemSection />
      <SolutionsSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <WhyINNORATECHSection />
      <CTASection />
    </div>
  );
}
