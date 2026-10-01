import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { WhyInnoraSection } from "@/components/sections/WhyInnoraSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://innoratech.in";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Innora",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo.svg`,
  description:
    "Innora builds direct booking and ordering systems for independent hotels and restaurants, in India and internationally.",
  sameAs: [
    "https://linkedin.com/company/innora-tech",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@innoratech.in",
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
        <Reveal><ProblemSection /></Reveal>
        <Reveal><SolutionsSection /></Reveal>
        <Reveal><ServicesSection /></Reveal>
        <ProcessSection />
        <Reveal><WorkSection /></Reveal>
        <Reveal><WhyInnoraSection /></Reveal>
        <Reveal><CTASection /></Reveal>
      </div>
    </>
  );
}
