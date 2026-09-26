import {
  Cloud,
  Globe,
  Layers3,
  Plug,
  Workflow,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Business Websites",
    description:
      "Modern websites designed around business goals, customer journeys, and conversion.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Web Applications",
    description:
      "Booking systems, ordering platforms, dashboards, portals, CRM tools, and internal applications.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Business Automation",
    description:
      "Digital workflows that reduce repetitive work, manual data entry, and disconnected processes.",
  },
  {
    number: "04",
    icon: Plug,
    title: "API & Integrations",
    description:
      "Connect payments, communication tools, business software, and third-party APIs.",
  },
  {
    number: "05",
    icon: Cloud,
    title: "Deployment & Maintenance",
    description:
      "Cloud deployment, domains, monitoring, updates, security, and ongoing technical support.",
  },
];

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="WHAT WE BUILD"
        title="Everything You Need to Build a Connected Digital Business."
        description="From the first website to the internal systems behind it, we can design, build, integrate, deploy, and maintain the technology."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.number} className="relative overflow-hidden">
              <div className="text-sm font-semibold text-[var(--brand-primary)]">
                {service.number}
              </div>

              <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-secondary)] text-[var(--text-primary)]">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {service.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
