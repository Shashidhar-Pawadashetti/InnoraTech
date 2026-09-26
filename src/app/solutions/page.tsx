import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { CTASection } from "@/components/sections/CTASection";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "Tailored digital solutions built around the way your business operates. Solutions for restaurants, hotels, bakeries, and custom business operations.",
};

export default function SolutionsPage() {
  return (
    <>
      <Section variant="light" padding="lg">
        <Container>
          <SectionHeader
            eyebrow="Packaged Industry Solutions"
            title="Digital Systems Built Around Your Real Workflow"
            description="We build digital solutions around actual operational bottlenecks. Explore our industry-specific systems below to see how INNORATECH eliminates manual work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutions.map((sol) => (
              <SolutionCard key={sol.id} solution={sol} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
