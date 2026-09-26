import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "INNORATECH Privacy Policy and data governance principles.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <Section variant="light" padding="lg">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Legal & Privacy"
          title="Privacy Policy"
          description="Last updated: September 2026"
        />

        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
          <p>
            At INNORATECH, we value your privacy and are committed to safeguarding
            any business or contact information you share with us.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            1. Information We Collect
          </h3>
          <p>
            When you submit a project inquiry through our website, we collect your
            name, business name, email address, phone number, industry, service
            interests, and problem description. We do not collect unnecessary
            personal identifiers or financial account numbers on our public
            website.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            2. How We Use Your Information
          </h3>
          <p>
            We use the information you provide solely to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Analyze your business requirements and provide architectural proposals.</li>
            <li>Contact you via your chosen communication method (WhatsApp, Email, or Phone).</li>
            <li>Maintain project records and communication history.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            3. Data Sharing & Security
          </h3>
          <p>
            We never sell, rent, or trade your contact information to third-party
            marketers. Data is stored on secure, encrypted infrastructure (Neon
            PostgreSQL) and transmitted over encrypted HTTPS connections.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">
            4. Contact
          </h3>
          <p>
            If you have questions regarding this privacy policy or wish to request
            the deletion of your inquiry records, please email us at{" "}
            <strong>contact@innoratech.com</strong>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
