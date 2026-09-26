import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Agency Services",
  description:
    "Business websites, custom web applications, business automation, API integrations, and cloud maintenance by INNORATECH.",
};

export default function ServicesPage() {
  return (
    <>
      <Section variant="light" padding="lg">
        <Container>
          <SectionHeader
            eyebrow="Core Services"
            title="Everything You Need to Build a Connected Digital Business"
            description="We separate our agency-level engineering services from industry packages. Whatever stage your business is at, we build scalable software around your commercial objectives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>

          {/* Technical Standards Section */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Our Engineering Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-600">
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">Modern Architecture</p>
                <p className="text-xs text-slate-500">
                  Next.js App Router, React Server Components, and zero-bloat Tailwind CSS.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">Serverless Scaling</p>
                <p className="text-xs text-slate-500">
                  High-speed global edge deployment on Vercel with zero idle server overhead.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">Type Safety</p>
                <p className="text-xs text-slate-500">
                  Strict TypeScript and Zod schemas guaranteeing reliable data integrity.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-900">API Connectivity</p>
                <p className="text-xs text-slate-500">
                  Secure webhook listeners and direct third-party REST integrations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
