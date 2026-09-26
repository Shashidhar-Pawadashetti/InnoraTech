import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { WorkflowInteractive } from "@/components/workflows/WorkflowInteractive";
import { projects } from "@/data/projects";
import { solutions } from "@/data/solutions";

export function WorkSection() {
  const restaurantWorkflow = solutions[0].workflowSteps;

  return (
    <Section variant="light" padding="md" id="work">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            eyebrow="Proof of Capability"
            title="Featured Work & Demonstrations"
            description="Explore our functional concept platforms. Every demonstration accurately models real-world business constraints before client commissioning."
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Link href="/work">
              <Button variant="outline">
                All Work <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>

        {/* Interactive System Pipeline Preview */}
        <WorkflowInteractive
          systemTitle="Example Architecture: Restaurant Digital Ordering Pipeline"
          steps={restaurantWorkflow}
        />
      </Container>
    </Section>
  );
}
