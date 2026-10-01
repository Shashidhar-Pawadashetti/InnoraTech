import Link from "next/link";
import { ArrowRight, AlertTriangle, Layers, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Solution } from "@/data/solutions";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

interface SolutionPageProps {
  solution: Solution;
}

export function SolutionPage({ solution }: SolutionPageProps) {
  // Find related services and demo project
  const relatedServicesList = services.filter((s) =>
    solution.relatedServices?.includes(s.slug)
  );
  const relatedProject = projects.find(
    (p) => p.slug === solution.relatedProjectSlug
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--surface-secondary)] border-b border-[var(--border-default)]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
              {solution.eyebrow}
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {solution.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              {solution.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                {solution.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {relatedProject && (
                <Button href={`/work/${relatedProject.slug}`} variant="secondary">
                  View Concept Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <Section>
        <SectionHeader
          eyebrow="THE PROBLEM"
          title="Where the current process breaks down"
          description={solution.shortDescription}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {solution.problems.map((problem) => (
            <Card key={problem} className="bg-white border-slate-200">
              <div className="flex gap-3.5 items-start">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-50 text-amber-600">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-6 text-slate-800">
                    {problem}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Causes delays, manual re-entry errors, and customer friction.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="bg-[var(--surface-secondary)] border-y border-[var(--border-default)]">
        <SectionHeader
          eyebrow="WHAT WE BUILD"
          title="A solution built around the workflow"
          description="Modular digital capabilities integrated seamlessly to run your operations without friction."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solution.capabilities.map((capability, idx) => (
            <Card key={capability} className="bg-white hover:border-[var(--brand-primary)]">
              <span className="text-xs font-bold text-[var(--brand-primary)] mb-2 block">
                0{idx + 1}
              </span>
              <p className="font-semibold text-slate-900">{capability}</p>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Engineered for rapid daily operations and zero manual bottlenecks.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Workflow */}
      <Section>
        <SectionHeader
          eyebrow="WORKFLOW"
          title="From process to connected system"
          description="Every step in the customer and team journey is tracked and synchronized."
        />

        <div className="mt-12 max-w-3xl">
          {solution.workflow.map((step, index) => (
            <div
              key={step.title}
              className="relative flex gap-6 border-l-2 border-slate-200 pb-10 pl-8 last:border-l-0 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 flex h-4 w-4 rounded-full bg-[var(--brand-primary)] ring-4 ring-white" />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-primary)]">
                  Step 0{index + 1}
                </p>

                <h3 className="mt-1.5 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Related Services & Work (Internal Linking Strategy) */}
      <Section className="bg-[var(--surface-secondary)] border-t border-[var(--border-default)]">
        <SectionHeader
          eyebrow="RELATED BUILDING BLOCKS"
          title="Services & demos connected to this solution"
          description="How Innora combines individual technical capabilities into this industry system."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Related Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--brand-primary)]" />
              Related Services Used
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedServicesList.map((svc) => (
                <Card key={svc.slug} className="bg-white">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {svc.number}
                  </span>
                  <h4 className="mt-1 text-base font-bold text-slate-900">
                    {svc.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {svc.shortDescription}
                  </p>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="mt-3 inline-flex items-center text-xs font-semibold text-[var(--brand-primary)] hover:underline"
                  >
                    View service details &rarr;
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Demo Work */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-[var(--brand-primary)]" />
              Related Concept Demo
            </h3>
            {relatedProject ? (
              <Card className="bg-white border-[var(--brand-primary)]/30 ring-1 ring-[var(--brand-primary)]/10">
                <span className="inline-block px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-[var(--brand-primary)] rounded">
                  {relatedProject.label}
                </span>
                <h4 className="mt-2 text-base font-bold text-slate-900">
                  {relatedProject.title}
                </h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {relatedProject.description}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={`/work/${relatedProject.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-[var(--brand-primary)] hover:underline gap-1"
                  >
                    Explore demo workflow
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ) : (
              <Card className="bg-white">
                <p className="text-xs text-slate-500">
                  Custom demonstration workflows available upon consultation.
                </p>
              </Card>
            )}
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <Container>
          <div className="rounded-[28px] bg-[var(--surface-dark)] px-7 py-12 sm:px-10 lg:px-14">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              NEXT STEP
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s look at how your business currently works.
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              We can start with the workflow you want to improve and determine
              what should be digitized or automated.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/solutions" variant="secondary">
                All Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
