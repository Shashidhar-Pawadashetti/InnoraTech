import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section variant="light" padding="md" id="services">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            eyebrow="Agency Capabilities"
            title="Everything You Need to Build a Connected Digital Business"
            description="Our core engineering disciplines are separated from industry packages, providing modular technology services tailored to your roadmap."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Link href="/services">
              <Button variant="outline">
                All Services <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
