import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { solutions } from "@/data/solutions";

export function SolutionsSection() {
  return (
    <Section variant="slate" padding="md" id="solutions">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            eyebrow="Packaged Solutions"
            title="Solutions Built Around the Way Your Business Works"
            description="We deliver outcome-focused systems designed specifically for your industry's daily operational flow."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Link href="/solutions">
              <Button variant="outline">
                All Solutions <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <SolutionCard key={sol.id} solution={sol} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
