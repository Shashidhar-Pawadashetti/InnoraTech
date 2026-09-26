import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Building2,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

interface ProjectPageProps {
  project: Project;
}

export function ProjectPage({ project }: ProjectPageProps) {
  // Find related solution
  const relatedSolution = solutions.find(
    (s) => s.slug === project.relatedSolutionSlug
  );

  // Match services used
  const matchedServices = services.filter((s) =>
    project.services.some(
      (ps) =>
        ps.toLowerCase() === s.title.toLowerCase() ||
        s.title.toLowerCase().includes(ps.toLowerCase())
    )
  );

  return (
    <>
      {/* Project Hero */}
      <section className="bg-[var(--surface-secondary)] border-b border-[var(--border-default)]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant={project.status === "demo" ? "demo" : "client"}
              >
                {project.label}
              </Badge>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Industry: {project.category}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Discuss Similar System
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {relatedSolution && (
                <Button href={`/solutions/${relatedSolution.slug}`} variant="secondary">
                  Explore {relatedSolution.eyebrow} Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Status Notice (Honest demo badge) */}
      {project.status === "demo" && (
        <div className="border-b border-blue-100 bg-blue-50/70 py-4">
          <Container>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-blue-900">
              <span className="flex h-2 w-2 rounded-full bg-[var(--brand-primary)] shrink-0" />
              <p>
                <strong>INNORATECH Working Concept:</strong> This project is a functional demonstration prototype built to illustrate the real-world operational architecture we implement for clients.
              </p>
            </div>
          </Container>
        </div>
      )}

      {/* Business Problem & The INNORATECH Solution */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="rounded-2xl border border-red-200/80 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span>The Operational Bottleneck</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Where the Manual Process Breaks Down
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {project.problem}
            </p>
            <div className="p-4 rounded-xl bg-red-50/60 border border-red-100 text-xs text-red-900 leading-relaxed">
              Paper tickets, fragmented messaging threads, and manual phone inquiries introduce human error and waste valuable operational hours daily.
            </div>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-[var(--brand-primary)]/30 bg-white p-8 shadow-sm ring-1 ring-[var(--brand-primary)]/10">
            <div className="flex items-center gap-2 text-[var(--brand-primary)] text-xs font-semibold uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>The INNORATECH Solution</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Automated Digital Architecture
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {project.solution}
            </p>
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 leading-relaxed">
              Data is captured once at the source, synchronized across kitchen/staff dashboards, and confirmed instantly with customers.
            </div>
          </div>
        </div>
      </Section>

      {/* System Workflow */}
      <Section className="bg-[var(--surface-secondary)] border-y border-[var(--border-default)]">
        <SectionHeader
          eyebrow="SYSTEM WORKFLOW"
          title="From initial interaction to completion"
          description="How data moves through the application step-by-step without manual re-entry."
        />

        <div className="mt-10 max-w-3xl">
          {project.workflow.map((step, idx) => (
            <div
              key={idx}
              className="relative flex gap-5 border-l-2 border-slate-200 pb-8 pl-8 last:border-l-0 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 flex h-4 w-4 rounded-full bg-[var(--brand-primary)] ring-4 ring-white" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-primary)]">
                  Step 0{idx + 1}
                </span>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Capabilities */}
      {project.keyCapabilities && project.keyCapabilities.length > 0 && (
        <Section>
          <SectionHeader
            eyebrow="CAPABILITIES"
            title="Key system capabilities demonstrated"
            description="Production components engineered into this workflow."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.keyCapabilities.map((cap, i) => (
              <Card key={i} className="bg-white">
                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-lg bg-blue-50 text-[var(--brand-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{cap}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Zero latency, serverless architecture with immediate state synchronization.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* What this demo demonstrates (Honest Demo Section) */}
      <Section className="bg-[var(--surface-secondary)] border-y border-[var(--border-default)]">
        <SectionHeader
          eyebrow="VALIDATION & PROOF"
          title={
            project.status === "demo"
              ? "What this demo demonstrates"
              : "Commercial results & outcomes"
          }
          description={
            project.status === "demo"
              ? "Measurable operational improvements achieved by removing manual bottlenecks in this workflow."
              : "Verified impact delivered in client deployment."
          }
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {(project.demonstrates || [
            "Direct order submission without external commission deductions",
            "Elimination of manual pen-and-paper transcription mistakes",
            "Real-time operational dashboard for staff oversight",
            "Automated payment validation and customer receipts",
          ]).map((item, idx) => (
            <Card key={idx} className="bg-white">
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {item}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Used & Related Solution */}
      <Section>
        <SectionHeader
          eyebrow="TECHNICAL STACK"
          title="Services & industry components applied"
          description="The technical building blocks used to implement this system."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Services Used */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--brand-primary)]" />
              Services Implemented
            </h3>
            <div className="space-y-3">
              {matchedServices.map((svc) => (
                <Card key={svc.slug} className="bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {svc.number}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {svc.shortDescription}
                      </p>
                    </div>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="text-xs font-semibold text-[var(--brand-primary)] hover:underline shrink-0 ml-4"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Solution */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[var(--brand-primary)]" />
              Related Industry Solution
            </h3>
            {relatedSolution ? (
              <Card className="bg-white border-[var(--brand-primary)]/30 ring-1 ring-[var(--brand-primary)]/10">
                <span className="text-xs font-semibold uppercase text-[var(--brand-primary)]">
                  {relatedSolution.eyebrow}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-2">
                  {relatedSolution.title}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {relatedSolution.description}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={`/solutions/${relatedSolution.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-[var(--brand-primary)] hover:underline gap-1"
                  >
                    View packaged industry solution
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ) : (
              <Card className="bg-white">
                <p className="text-xs text-slate-500">
                  Built as a customized business automation workflow.
                </p>
              </Card>
            )}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[var(--surface-dark)] text-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              BUILD FOR YOUR BUSINESS
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Want a similar system tailored to your specific process?
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              We can adapt this workflow to match your exact menu, rooms, ordering rules, payment providers, and internal staff roles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Request a System Proposal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/work" variant="secondary">
                View All Projects & Demos
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
