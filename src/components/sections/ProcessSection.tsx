import {
  Compass,
  FlaskConical,
  Hammer,
  LifeBuoy,
  Rocket,
  Ruler,
  SearchCheck,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "Understand the business, users, existing workflow, and actual problem.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Define",
    description:
      "Turn the business problem into clear requirements and project scope.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Design",
    description:
      "Design the experience, workflows, system structure, and interface.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Build",
    description:
      "Develop the website, application, automation, and required integrations.",
  },
  {
    number: "05",
    icon: FlaskConical,
    title: "Test",
    description:
      "Validate functionality, quality, responsiveness, and business requirements.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch",
    description:
      "Deploy the solution, verify production, and complete the handover.",
  },
  {
    number: "07",
    icon: LifeBuoy,
    title: "Support",
    description:
      "Maintain, improve, and support the digital system after launch.",
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="bg-[var(--surface-dark)] text-white">
      <SectionHeader
        eyebrow="OUR PROCESS"
        title="From Business Problem to Working Digital System."
        description="A structured process keeps scope clear, quality high, and projects predictable."
        tone="dark"
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-300">
                  {step.number}
                </span>

                <Icon className="h-5 w-5 text-blue-300" />
              </div>

              <h3 className="mt-7 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
