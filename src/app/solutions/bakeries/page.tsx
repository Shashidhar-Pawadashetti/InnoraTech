import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { WorkflowInteractive } from "@/components/workflows/WorkflowInteractive";
import { CTASection } from "@/components/sections/CTASection";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Bakery Custom Cake & Order Automation",
  description:
    "Custom cake specification builders, pickup slot allocation, automatic chef production sheets, and customer status alerts.",
};

export default function BakerySolutionPage() {
  const data = solutions.find((s) => s.id === "bakeries")!;

  return (
    <>
      <Section variant="light" padding="lg" className="border-b border-slate-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge variant="brand">{data.badge}</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              {data.tagline}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Deploy This System <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg">
                  View Bakery Demo
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="slate" padding="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-red-200/80 shadow-sm">
              <div className="flex items-center gap-2 text-red-600 text-sm font-semibold uppercase tracking-wider mb-4">
                <AlertCircle className="w-4 h-4" />
                <span>The Manual Bottleneck</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Chat Clutter & Missed Cake Specs
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {data.problemSummary}
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Crucial dietary/custom notes missed in long chats
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Chef spends 2 hours compiling daily prep lists
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Overbooked delivery windows causing customer friction
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#0C3CD4]/30 shadow-sm ring-1 ring-[#0C3CD4]/20">
              <div className="flex items-center gap-2 text-[#0C3CD4] text-sm font-semibold uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>The INNORATECH Solution</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Visual Customizer & Kitchen Sheets
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {data.solutionSummary}
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Exact design & flavor parameters recorded
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automated daily kitchen production sheet
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Capacity-limited pickup slots to prevent chaos
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="light" padding="md">
        <Container>
          <SectionHeader
            eyebrow="Key Features"
            title="Built for Bakery Operations"
            description="Replace phone calls and messy DM screenshots with a structured, delightful ordering portal."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {data.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#0C3CD4] transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0C3CD4]/10 text-[#0C3CD4] flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{feat}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Automatic price calculation and kitchen scheduling locks.
                </p>
              </div>
            ))}
          </div>

          <WorkflowInteractive
            systemTitle="Bakery Order & Production Journey"
            steps={data.workflowSteps}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
