import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Industry Solutions | INNORATECH",
  description:
    "Digital systems designed specifically for restaurants, hotels, bakeries, and custom business processes. Replace manual bottlenecks with connected digital workflows.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--surface-secondary)] border-b border-[var(--border-default)]">
        <Container>
          <div className="py-20 sm:py-24 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
              SOLUTIONS
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Which solution matches your business?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              We build connected digital systems tailored to the exact operational
              workflows of restaurants, hotels, bakeries, and custom business operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Cards Grid */}
      <Section padding="lg">
        <SectionHeader
          eyebrow="TARGETED INDUSTRY SOLUTIONS"
          title="Designed around your daily workflow"
          description="Select your industry to see how INNORATECH replaces fragmented manual steps with connected digital systems."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {solutions.map((sol) => (
            <Card
              key={sol.slug}
              className="flex flex-col justify-between p-8 bg-white border-slate-200 hover:border-[var(--brand-primary)] hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="brand">{sol.eyebrow}</Badge>
                  <span className="text-xs font-semibold text-slate-500">
                    Industry Solution
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[var(--brand-primary)] transition-colors mb-3">
                  {sol.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {sol.shortDescription}
                </p>

                {/* Capabilities snapshot */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Key Capabilities Included
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sol.capabilities.slice(0, 6).map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <Check className="h-3.5 w-3.5 text-[var(--brand-primary)] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:text-[var(--brand-primary-hover)] gap-1.5"
                >
                  Explore {sol.eyebrow.toLowerCase()} workflow{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* "Not sure what you need?" advisory section */}
      <Section className="bg-[var(--surface-secondary)] border-t border-[var(--border-default)]">
        <div className="max-w-3xl mx-auto text-center py-6">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-blue-50 text-[var(--brand-primary)] mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Tell us about your current process and we&apos;ll help identify the right
            digital solution for your workflow.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact">
              Talk to INNORATECH
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/services" variant="secondary">
              Explore Our Core Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
