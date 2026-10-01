import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Blocks, Plus } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Core Services",
  description:
    "Explore Innora's five technical service pillars: Business Websites, Web Applications, Business Automation, API & Integrations, and Deployment & Maintenance.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Core Services | Innora",
    description:
      "Explore Innora's five technical service pillars for modern businesses.",
    url: "/services",
    images: ["/og/automation.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--surface-secondary)] border-b border-[var(--border-default)]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
              OUR CAPABILITIES
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Technical Services Built Around Business Goals
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              From modern conversion-driven websites and custom operations portals to
              multi-system automations and cloud deployment.
            </p>
          </div>
        </Container>
      </section>

      {/* Five Services Grid */}
      <Section padding="lg">
        <SectionHeader
          eyebrow="CORE OFFERINGS"
          title="Five technical pillars for modern businesses"
          description="Each service is engineered with production-grade reliability, secure architectures, and long-term scalability."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <Card
              key={svc.slug}
              className="flex flex-col justify-between p-8 bg-white border-slate-200 hover:border-[var(--brand-primary)] hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <span className="text-3xl font-black text-slate-200 group-hover:text-[var(--brand-primary)]/40 transition-colors block mb-4 font-mono">
                  {svc.number}
                </span>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--brand-primary)] transition-colors mb-2">
                  {svc.title}
                </h3>

                <p className="text-sm font-medium text-slate-700 mb-3">
                  {svc.shortDescription}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Capabilities
                  </p>
                  {svc.capabilities.slice(0, 4).map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 text-xs text-slate-700"
                    >
                      <Check className="h-3.5 w-3.5 text-[var(--brand-primary)] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:text-[var(--brand-primary-hover)] gap-1.5"
                >
                  View Details{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] font-medium text-slate-400">
                  {svc.suitableFor[0]}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* How Services Can Combine (The Agency Building Blocks Concept) */}
      <Section className="bg-[var(--surface-secondary)] border-y border-[var(--border-default)]">
        <SectionHeader
          eyebrow="SYSTEM COMPOSITION"
          title="These services are building blocks"
          description="A single client project rarely requires just one service. We connect these capabilities into a unified operational system."
        />

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--brand-primary)] uppercase tracking-wider mb-2">
            <Blocks className="w-4 h-4" />
            <span>Real-World Example</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Hotel Direct Booking System
          </h3>

          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed mb-8">
            When a boutique hotel partners with Innora, they don&apos;t just receive a standard landing page. We assemble the complete digital machine:
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-xs font-semibold text-[var(--brand-primary)]">
                Business Website
              </p>
              <p className="text-[11px] text-slate-500">Showcase & SEO</p>
            </div>
            <Plus className="w-4 h-4 text-slate-400" />
            <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-xs font-semibold text-[var(--brand-primary)]">
                Web Application
              </p>
              <p className="text-[11px] text-slate-500">Live booking engine</p>
            </div>
            <Plus className="w-4 h-4 text-slate-400" />
            <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-xs font-semibold text-[var(--brand-primary)]">
                API Integration
              </p>
              <p className="text-[11px] text-slate-500">Card & UPI payments</p>
            </div>
            <Plus className="w-4 h-4 text-slate-400" />
            <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-xs font-semibold text-[var(--brand-primary)]">
                Automation
              </p>
              <p className="text-[11px] text-slate-500">WhatsApp receipts</p>
            </div>
            <Plus className="w-4 h-4 text-slate-400" />
            <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-xs font-semibold text-[var(--brand-primary)]">
                Maintenance
              </p>
              <p className="text-[11px] text-slate-500">Uptime & backups</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Custom Projects Section */}
      <Section>
        <SectionHeader
          eyebrow="CUSTOM ARCHITECTURE"
          title="Have a custom process that doesn't fit standard packages?"
          description="We analyze bespoke operational workflows, design relational schemas, build internal tools, and integrate existing third-party APIs."
        />

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact">
            Discuss a Custom Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button href="/solutions/business-automation" variant="secondary">
            View Custom Automation Solution
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[var(--surface-dark)] text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              START A PROJECT
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build the right digital foundation for your company.
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Contact us with details of what you need built, automated, or deployed. We respond with a clear technical roadmap within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Contact Innora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
