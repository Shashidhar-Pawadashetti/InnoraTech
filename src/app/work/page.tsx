import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Concept Demos & Projects",
  description:
    "Explore INNORATECH working concept demonstrations across restaurant ordering, hotel reservations, and bakery workflows.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Concept Demos & Projects | INNORATECH",
    description:
      "Explore INNORATECH working concept demonstrations across hospitality and retail workflows.",
    url: "/work",
    images: ["/og/work-default.png"],
  },
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--surface-secondary)] border-b border-[var(--border-default)]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                WORK & DEMOS
              </span>
              <span className="text-xs text-slate-400 font-mono">•</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Working Systems
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Systems Built to Solve Real Operational Bottlenecks
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              We design and build production-grade demonstration systems to prove how digital workflows eliminate manual phone calls, paper slips, and disorganized chats.
            </p>
          </div>
        </Container>
      </section>

      {/* Transparent Disclaimer Notice */}
      <div className="border-b border-blue-100 bg-blue-50/70 py-4">
        <Container>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-blue-900">
            <span className="flex h-2 w-2 rounded-full bg-[var(--brand-primary)] shrink-0" />
            <p>
              <strong>Transparent Agency Notice:</strong> All projects showcased below are functional INNORATECH demonstration prototypes demonstrating our end-to-end technical capabilities.
            </p>
          </div>
        </Container>
      </div>

      {/* Featured Demos Grid */}
      <Section padding="lg">
        <SectionHeader
          eyebrow="FEATURED DEMONSTRATION PROJECTS"
          title="Interactive Proofs of Architecture"
          description="Click any project to inspect its operational problem, system workflow, and technical architecture."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((proj) => (
            <Card
              key={proj.slug}
              className="flex flex-col justify-between p-8 bg-white border-slate-200 hover:border-[var(--brand-primary)] hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={proj.status === "demo" ? "demo" : "client"}>
                    {proj.label}
                  </Badge>
                  <span className="text-xs font-medium text-slate-500">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--brand-primary)] transition-colors mb-3">
                  {proj.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Workflow Summary */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Workflow Stages
                  </p>
                  {proj.workflow.slice(0, 3).map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/work/${proj.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:text-[var(--brand-primary-hover)] gap-1.5"
                >
                  View Case Details{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* By Industry */}
      <Section className="bg-[var(--surface-secondary)] border-y border-[var(--border-default)]">
        <SectionHeader
          eyebrow="BROWSE BY INDUSTRY"
          title="Industry-focused operational systems"
          description="Explore our dedicated industry solutions that package these capabilities together."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card className="bg-white">
            <Building2 className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
            <h4 className="text-base font-bold text-slate-900">Hospitality & Restaurants</h4>
            <p className="text-xs text-slate-600 mt-1 mb-3">
              QR menus, direct ordering, kitchen displays, and payments.
            </p>
            <Link
              href="/solutions/restaurants"
              className="text-xs font-semibold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
            >
              Explore restaurant systems &rarr;
            </Link>
          </Card>

          <Card className="bg-white">
            <Building2 className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
            <h4 className="text-base font-bold text-slate-900">Hotels & Lodging</h4>
            <p className="text-xs text-slate-600 mt-1 mb-3">
              Direct booking engine, live calendar sync, and automated messaging.
            </p>
            <Link
              href="/solutions/hotels"
              className="text-xs font-semibold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
            >
              Explore hotel systems &rarr;
            </Link>
          </Card>

          <Card className="bg-white">
            <Building2 className="w-5 h-5 text-[var(--brand-primary)] mb-2" />
            <h4 className="text-base font-bold text-slate-900">Retail & Bakeries</h4>
            <p className="text-xs text-slate-600 mt-1 mb-3">
              Custom cake builders, slot locks, and daily kitchen run-sheets.
            </p>
            <Link
              href="/solutions/bakeries"
              className="text-xs font-semibold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
            >
              Explore bakery systems &rarr;
            </Link>
          </Card>
        </div>
      </Section>

      {/* By Service */}
      <Section>
        <SectionHeader
          eyebrow="BROWSE BY SERVICE"
          title="Technical services deployed across projects"
          description="See how our core services are integrated into live functional demos."
        />

        <div className="mt-8 flex flex-wrap gap-2.5">
          <Link
            href="/services/business-websites"
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all"
          >
            Business Websites &rarr;
          </Link>
          <Link
            href="/services/web-applications"
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all"
          >
            Web Applications &rarr;
          </Link>
          <Link
            href="/services/business-automation"
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all"
          >
            Business Automation &rarr;
          </Link>
          <Link
            href="/services/api-integrations"
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all"
          >
            API & Integrations &rarr;
          </Link>
          <Link
            href="/services/deployment-maintenance"
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all"
          >
            Deployment & Maintenance &rarr;
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[var(--surface-dark)] text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              CUSTOM BUILDS
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to turn your manual process into a digital system?
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              We discuss your specific workflow, present an interactive concept, and build your production solution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
