import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <Section variant="slate" padding="md" id="process">
      <Container>
        <SectionHeader
          eyebrow="Delivery Methodology"
          title="From Business Problem to Working Digital System"
          description="A structured, predictable 7-step engineering process that ensures high software quality, verified requirements, and transparent milestone handovers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#0C34C5] hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-[#0C34C5]">
                  {step.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Phase
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs font-medium text-slate-700 mb-3">
                {step.tagline}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-medium text-[#0C34C5]">
                Deliverable: {step.output}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
