import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { WhyINNORATECHSection } from "@/components/sections/WhyINNORATECHSection";
import { CTASection } from "@/components/sections/CTASection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://innoratech.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INNORATECH",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.svg`,
  description:
    "INNORATECH helps businesses replace manual processes with modern websites, web applications, automation, and integrations.",
  sameAs: [
    "https://linkedin.com/company/innoratech",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@innoratech.com",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function Home() {
  return (
    <>
      {/* Schema.org Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col w-full">
        <HeroSection />
        <CapabilityStrip />
        <ProblemSection />
        <SolutionsSection />
        <ServicesSection />
        <ProcessSection />
        <WorkSection />
        <WhyINNORATECHSection />
        <CTASection />
      </div>
    </>
  );
}
