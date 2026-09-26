import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectPage } from "@/components/work/ProjectPage";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | INNORATECH",
    };
  }

  return {
    title: `${project.title} (${project.label}) | INNORATECH`,
    description: project.description,
    openGraph: {
      title: `${project.title} | INNORATECH`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}
