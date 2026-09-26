import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Featured Work & Demos",
  description:
    "Explore INNORATECH's demonstration platforms and case studies for restaurants, hotels, and custom operations.",
};

export default function WorkPage() {
  return (
    <>
      <Section variant="light" padding="lg">
        <Container>
          <SectionHeader
            eyebrow="Portfolio & Capability"
            title="Demonstration Systems & Case Studies"
            description="We build working concept systems to validate real business workflows before client engagements. Every project below clearly indicates whether it is an INNORATECH Concept Demo or an active Client Project."
          />

          {/* Ethics Notice */}
          <div className="mb-12 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 flex items-start gap-3">
            <span className="font-bold shrink-0">Ethical Transparency:</span>
            <span>
              We believe in honest technology positioning. Our initial portfolio consists of fully operational demonstration systems built to prove our engineering capability. We never misrepresent concept demos as commissioned client projects.
            </span>
          </div>

          {/* Projects Detailed List */}
          <div className="space-y-16 mb-20">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:border-[#0C34C5] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Badge variant={proj.isDemo ? "demo" : "client"}>
                      {proj.isDemo ? "INNORATECH Demo" : "Client Project"}
                    </Badge>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {proj.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {proj.results.map((res, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md"
                      >
                        {res.metric} {res.label}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {proj.title}
                </h3>
                <p className="text-base text-slate-600 mb-8 max-w-3xl">
                  {proj.description}
                </p>

                {/* 3-Column Breakdown: Problem, Existing, Solution */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="font-bold text-slate-900 mb-2">The Problem</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proj.problem}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="font-bold text-slate-900 mb-2">Previous Manual Flow</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-mono">
                      {proj.existingProcess}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200/60">
                    <p className="font-bold text-[#0C34C5] mb-2">INNORATECH Solution</p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {proj.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features & Tech */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button size="sm">
                      Discuss This Architecture <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
