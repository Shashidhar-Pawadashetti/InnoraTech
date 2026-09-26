import * as React from "react";
import { Target, Wrench, Network, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function WhyINNORATECHSection() {
  const principles = [
    {
      icon: Target,
      title: "Problem First",
      description:
        "We start with your actual operational bottleneck, not an arbitrary tech stack. We analyze how your team handles orders or bookings before proposing software.",
    },
    {
      icon: Wrench,
      title: "Practical Solutions",
      description:
        "We engineer right-sized systems appropriate for your business size and budget. No bloated enterprise layers or unnecessary subscription subscriptions.",
    },
    {
      icon: Network,
      title: "Connected Systems",
      description:
        "Your website, databases, messaging channels, and payment gateways work together in harmony rather than becoming isolated, fragmented tools.",
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Accountability",
      description:
        "We do not vanish after deployment. We continue monitoring, maintaining, and improving your systems as your business volume expands.",
    },
  ];

  return (
    <Section variant="slate" padding="md" id="why-us">
      <Container>
        <SectionHeader
          eyebrow="Our Approach"
          title="Why Work With INNORATECH?"
          description="We avoid generic marketing clichés. Our engineering philosophy is grounded in solving tangible manual problems for real operating businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} hoverable className="h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0C34C5]/10 text-[#0C34C5] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
