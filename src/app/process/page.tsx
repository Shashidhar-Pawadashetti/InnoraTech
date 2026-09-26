import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { processSteps } from "@/data/process";

export const metadata: Metadata = {
  title: "Delivery Process",
  description:
    "How INNORATECH works: from operational discovery to architecture, design, build, QA, and post-launch support.",
};

export default function ProcessPage() {
  return (
    <>
      <Section variant="light" padding="lg">
        <Container>
          <SectionHeader
            eyebrow="Our Engineering SOP"
            title="From Business Problem to Working Digital System"
            description="We follow a disciplined 7-step engineering methodology to eliminate uncertainty, ensure reliable delivery, and guarantee that the system fits your business workflow."
          />

          <div className="space-y-12 max-w-4xl mx-auto mb-20">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#0C34C5] transition-all shadow-sm"
              >
                <div className="shrink-0 flex items-center md:items-start">
                  <span className="w-14 h-14 rounded-2xl bg-[#0C34C5]/10 text-[#0C34C5] font-black text-2xl flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Phase 0{parseInt(step.number, 10)}
                    </span>
                  </div>
                  <p className="text-base font-medium text-slate-700">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0C34C5]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Tangible Deliverable: {step.output}</span>
                  </div>
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
