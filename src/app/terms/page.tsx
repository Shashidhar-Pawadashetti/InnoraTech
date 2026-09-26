import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "INNORATECH Terms of Service and agency engagement terms.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <Section variant="light" padding="lg">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Legal"
          title="Terms of Service"
          description="Last updated: September 2026"
        />

        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
          <p>
            Welcome to INNORATECH. By browsing our website or submitting project
            inquiries, you agree to comply with and be bound by the following terms.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            1. Nature of Services
          </h3>
          <p>
            INNORATECH is a technology solutions agency providing custom website
            engineering, web application development, workflow automation, and
            system integration services. Detailed deliverables, scopes of work,
            and service warranties are defined in mutually signed client
            agreements.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            2. Intellectual Property
          </h3>
          <p>
            All content, graphics, architectural diagrams, branding, and code
            showcased on this website are the intellectual property of INNORATECH.
            Demonstration projects are developed for capability validation and
            are owned by INNORATECH unless explicitly licensed.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            3. Disclaimer of Warranties
          </h3>
          <p>
            Information provided on this marketing website is for informational
            purposes. While we endeavor to keep all information current and
            accurate, we make no representations or warranties of any kind regarding
            completeness or availability.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            4. Inquiries & Contact
          </h3>
          <p>
            For legal inquiries or terms clarification, contact our management team
            at <strong>contact@innoratech.com</strong>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
