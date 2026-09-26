import {
  Boxes,
  Compass,
  Link2,
  LifeBuoy,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

const principles = [
  {
    icon: Compass,
    title: "Problem First",
    description:
      "We understand the business workflow before deciding which technology should be used.",
  },
  {
    icon: Boxes,
    title: "Practical",
    description:
      "We focus on solutions that fit the business instead of adding unnecessary complexity.",
  },
  {
    icon: Link2,
    title: "Connected",
    description:
      "Websites, applications, automations, and external systems should work together.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term",
    description:
      "Our relationship doesn't have to end when the project goes live.",
  },
];

export function WhyINNORATECHSection() {
  return (
    <Section id="why-us" className="bg-[var(--surface-secondary)]">
      <SectionHeader
        eyebrow="WHY INNORATECH"
        title="Technology Should Fit the Business."
        description="Our approach starts with the problem and works backward toward a practical digital solution."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {principles.map((principle) => {
          const Icon = principle.icon;

          return (
            <div
              key={principle.title}
              className="border-l-2 border-[var(--brand-primary)] pl-5 transition-transform hover:translate-x-0.5"
            >
              <Icon className="h-5 w-5 text-[var(--brand-primary)]" />

              <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">
                {principle.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {principle.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
