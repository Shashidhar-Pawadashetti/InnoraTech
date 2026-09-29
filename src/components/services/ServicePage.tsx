import Link from "next/link";
import { ArrowRight, Check, Layers, ArrowUpRight, Blocks } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/data/services";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";

interface ServicePageProps {
  service: Service;
}

export function ServicePage({ service }: ServicePageProps) {
  // Find related solutions that utilize this service
  const relatedSolutions = solutions.filter((sol) =>
    sol.relatedServices?.includes(service.slug)
  );

  // Find related demo projects that mention this service
  const relatedProjects = projects.filter((proj) =>
    proj.services.some(
      (s) =>
        s.toLowerCase().includes(service.title.toLowerCase()) ||
        service.title.toLowerCase().includes(s.toLowerCase())
    )
  );

  return (
    <>
      {/* Service Hero */}
      <section className="bg-[var(--surface-secondary)] border-b border-[var(--border-default)]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--brand-primary)] bg-blue-50 px-2.5 py-1 rounded">
                SERVICE {service.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Technical Capability
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-4 max-w-2xl text-xl font-medium text-slate-700">
              {service.shortDescription}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Build - Capabilities */}
      <Section>
        <SectionHeader
          eyebrow="CAPABILITIES"
          title={`What we deliver with ${service.title}`}
          description="Engineered for reliability, speed, and real operational outcomes."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.capabilities.map((capability, idx) => (
            <Card
              key={capability}
              className="bg-white border-slate-200 hover:border-[var(--brand-primary)]"
            >
              <span className="text-xs font-bold text-[var(--brand-primary)] mb-2 block">
                0{idx + 1}
              </span>
              <p className="font-semibold text-slate-900">{capability}</p>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Implemented according to modern standards with zero unnecessary fluff.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Typical Use Cases / Suitable For */}
      <Section className="bg-[var(--surface-secondary)] border-y border-[var(--border-default)]">
        <SectionHeader
          eyebrow="SUITABLE FOR"
          title="Businesses and workflows that benefit most"
          description="This capability is specifically tailored for the following operational environments."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.suitableFor.map((audience) => (
            <Card key={audience} className="bg-white">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-50 text-[var(--brand-primary)] flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{audience}</p>
                  <p className="text-xs text-slate-500">
                    Proven operational workflows and integration templates
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* How Services Combine - The Building Block Concept */}
      <Section>
        <SectionHeader
          eyebrow="MODULAR ARCHITECTURE"
          title="Services are building blocks"
          description="A single client engagement usually combines multiple technical services into one coherent system."
        />

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-wider mb-3">
            <Blocks className="w-4 h-4" />
            <span>Example System Composition</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Complete Digital System (e.g. Hotel Direct Booking)
          </h3>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-8">
            Rather than buying isolated templates or disjointed SaaS apps, our clients receive an integrated stack where the website, web application, payment gateway, and background automations work together seamlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 block mb-1">01</span>
              <p className="text-xs font-bold text-slate-800">Business Website</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 block mb-1">02</span>
              <p className="text-xs font-bold text-slate-800">Web Application</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 block mb-1">03</span>
              <p className="text-xs font-bold text-slate-800">API Integration</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 block mb-1">04</span>
              <p className="text-xs font-bold text-slate-800">Automation</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-400 block mb-1">05</span>
              <p className="text-xs font-bold text-slate-800">Maintenance</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Cross-Link Related Solutions & Work */}
      <Section className="bg-[var(--surface-secondary)] border-t border-[var(--border-default)]">
        <SectionHeader
          eyebrow="CONNECTED WORK & SOLUTIONS"
          title="See this service in action"
          description="Explore packaged solutions and concept demos that leverage this capability."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Related Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--brand-primary)]" />
              Industry Solutions Using This Service
            </h3>
            <div className="space-y-4">
              {relatedSolutions.length > 0 ? (
                relatedSolutions.map((sol) => (
                  <Card key={sol.slug} className="bg-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-semibold text-[var(--brand-primary)] uppercase tracking-wide">
                          {sol.eyebrow}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 mt-1">
                          {sol.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1">
                          {sol.shortDescription}
                        </p>
                      </div>
                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="text-[var(--brand-primary)] hover:underline text-xs font-semibold shrink-0 ml-4 flex items-center gap-1"
                      >
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="bg-white">
                  <p className="text-xs text-slate-500">
                    Applicable across all custom business automation and hospitality projects.
                  </p>
                </Card>
              )}
            </div>
          </div>

          {/* Related Demo Projects */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-[var(--brand-primary)]" />
              Concept Demos Featuring This Service
            </h3>
            <div className="space-y-4">
              {relatedProjects.length > 0 ? (
                relatedProjects.map((proj) => (
                  <Card key={proj.slug} className="bg-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">
                          {proj.label}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 mt-1.5">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1">
                          {proj.description}
                        </p>
                      </div>
                      <Link
                        href={`/work/${proj.slug}`}
                        className="text-[var(--brand-primary)] hover:underline text-xs font-semibold shrink-0 ml-4 flex items-center gap-1"
                      >
                        View Demo <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="bg-white">
                  <p className="text-xs text-slate-500">
                    Custom prototypes available for specific business scopes.
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <Container>
          <div className="rounded-[28px] bg-[var(--surface-dark)] px-7 py-12 sm:px-10 lg:px-14">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              GET STARTED
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to implement {service.title.toLowerCase()} for your business?
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              We begin with a technical discussion of your business requirements, map the architecture, and deliver high-performance digital systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/services" variant="secondary">
                Explore Other Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
