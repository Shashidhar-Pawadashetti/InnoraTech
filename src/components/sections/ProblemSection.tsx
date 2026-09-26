import * as React from "react";
import { UtensilsCrossed, Building2, Cake, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProblemCard } from "@/components/cards/ProblemCard";

export function ProblemSection() {
  const problems = [
    {
      icon: UtensilsCrossed,
      industry: "Restaurants",
      headline: "Paper-based dine-in & phone orders",
      description:
        "Orders handled through phone calls, paper slips, and disconnected 3rd-party aggregators create kitchen errors and eat away at your margins.",
      solutionLink: "/solutions/restaurants",
    },
    {
      icon: Building2,
      industry: "Hotels",
      headline: "Scattered room reservations",
      description:
        "Bookings tracked through phone calls, WhatsApp messages, and external OTAs lead to double-bookings, delayed check-ins, and high commission leaks.",
      solutionLink: "/solutions/hotels",
    },
    {
      icon: Cake,
      industry: "Bakeries",
      headline: "Custom orders lost across messages",
      description:
        "Cake specifications, flavor notes, delivery slots, and advance payments get buried in chat threads, resulting in stressed bakers and missed deadlines.",
      solutionLink: "/solutions/bakeries",
    },
    {
      icon: Layers,
      industry: "Business Operations",
      headline: "Disconnected tools & spreadsheets",
      description:
        "Important customer and billing details are scattered across isolated tools, forcing your staff to waste 2–3 hours every day re-entering information.",
      solutionLink: "/solutions/business-automation",
    },
  ];

  return (
    <Section variant="light" padding="md" id="problems">
      <Container>
        <SectionHeader
          eyebrow="The Bottleneck"
          title="Still Running Important Processes Manually?"
          description="Where business processes become manual, we build the digital workflow. Eliminate friction, reduce errors, and stop paying avoidable commissions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <ProblemCard key={idx} {...prob} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
