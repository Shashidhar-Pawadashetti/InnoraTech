import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

const projects = [
  {
    type: "Innora DEMO",
    title: "Restaurant Digital Ordering",
    description:
      "A demonstration system for direct ordering, QR table ordering, and restaurant-side order management.",
    href: "/solutions/restaurants",
    status: "In development",
  },
  {
    type: "Innora DEMO",
    title: "Hotel Direct Booking",
    description:
      "A demonstration system for room availability, direct booking, payments, and reservation management.",
    href: "/solutions/hotels",
    status: "In development",
  },
  {
    type: "Innora DEMO",
    title: "Bakery Order Automation",
    description:
      "A demonstration workflow for e-commerce, custom cake orders, production tracking, and notifications.",
    href: "/solutions/bakeries",
    status: "Planned",
  },
];

export function WorkSection() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="OUR WORK"
        title="Built Around Real Business Problems."
        description="We are developing focused demonstration systems around the workflows our target businesses commonly handle manually."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={project.href}
            key={project.title}
            className="group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <div className="aspect-[16/10] bg-[linear-gradient(135deg,#eff6ff,#f8fafc)] p-6">
              <div className="flex h-full items-end rounded-2xl border border-blue-100 bg-white/80 p-5 backdrop-blur-xs">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-primary)]">
                    {project.status}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    Workflow Preview
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-primary)]">
                {project.type}
              </p>

              <div className="mt-2 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--brand-primary)]" />
              </div>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
