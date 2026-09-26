import type { Metadata } from "next";
import { Compass, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "INNORATECH is a four-member technology agency helping businesses replace manual operations with modern websites, applications, and digital automation.",
};

export default function AboutPage() {
  const founders = [
    {
      role: "Engineering & Architecture",
      description:
        "Specializes in full-stack systems, database modeling, and serverless cloud runtimes on Next.js and PostgreSQL.",
    },
    {
      role: "Frontend & User Experience",
      description:
        "Focuses on responsive interfaces, accessibility standards, and converting complex business workflows into simple user journeys.",
    },
    {
      role: "Automation & Integrations",
      description:
        "Dedicated to webhook pipelines, payment gateway connections, messaging APIs, and cross-platform synchronization.",
    },
    {
      role: "Solutions & Operations",
      description:
        "Ensures system architectures align with practical client operational requirements, delivery milestones, and quality assurance.",
    },
  ];

  return (
    <>
      {/* Intro */}
      <Section variant="light" padding="lg">
        <Container>
          <SectionHeader
            eyebrow="Who We Are"
            title="Engineers & Problem Solvers Dedicated to Business Digitization"
            description="INNORATECH is a four-member technology agency based in India and serving clients locally and globally. We build practical digital systems that simplify daily operations and eliminate manual friction."
          />

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="p-8 border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0C34C5]/10 text-[#0C34C5] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To help growing businesses adopt practical, cost-effective digital
                systems that simplify operations, eliminate human data entry
                errors, and elevate customer experiences.
              </p>
            </Card>

            <Card className="p-8 border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0C34C5]/10 text-[#0C34C5] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To build a trusted, enduring technology agency known for engineering
                systems that actually solve operational bottlenecks, delivered with
                transparency and long-term accountability.
              </p>
            </Card>
          </div>

          {/* Four-Member Founding Team */}
          <div className="mb-20">
            <SectionHeader
              eyebrow="The Team"
              title="Four Founders, One Unified Focus"
              description="Our core team combines engineering, user experience, system integrations, and operational delivery."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {founders.map((member, idx) => (
                <Card key={idx} hoverable className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0C34C5] font-bold text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {member.role}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
