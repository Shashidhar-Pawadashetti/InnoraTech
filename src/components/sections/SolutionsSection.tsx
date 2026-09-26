import Link from "next/link";
import {
  ArrowUpRight,
  CakeSlice,
  Hotel,
  Utensils,
  Workflow,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

const solutions = [
  {
    href: "/solutions/restaurants",
    icon: Utensils,
    eyebrow: "RESTAURANTS",
    title: "Digital Ordering & Dine-in",
    description:
      "Websites, online ordering, QR table ordering, payments, and connected order workflows.",
  },
  {
    href: "/solutions/hotels",
    icon: Hotel,
    eyebrow: "HOTELS",
    title: "Direct Booking & Reservations",
    description:
      "Hotel websites, room booking, payments, reservation workflows, and future integrations.",
  },
  {
    href: "/solutions/bakeries",
    icon: CakeSlice,
    eyebrow: "BAKERIES",
    title: "Ordering & Business Automation",
    description:
      "E-commerce, custom cake ordering, payments, order management, and production workflows.",
  },
  {
    href: "/solutions/business-automation",
    icon: Workflow,
    eyebrow: "CUSTOM",
    title: "Business Process Automation",
    description:
      "Dashboards, CRM systems, internal tools, workflow automation, and API integrations.",
  },
];

export function SolutionsSection() {
  return (
    <Section id="solutions" className="bg-[var(--surface-secondary)]">
      <SectionHeader
        eyebrow="SOLUTIONS"
        title="Solutions Built Around the Way Your Business Works."
        description="We design practical digital systems around real operational workflows rather than forcing businesses into generic software."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {solutions.map((solution) => {
          const Icon = solution.icon;

          return (
            <Link
              key={solution.href}
              href={solution.href}
              className="group rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)]">
                  <Icon className="h-5 w-5 text-[var(--brand-primary)]" />
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--brand-primary)]" />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                {solution.eyebrow}
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                {solution.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                {solution.description}
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
