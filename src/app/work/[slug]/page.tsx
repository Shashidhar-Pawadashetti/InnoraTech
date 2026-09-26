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
      title: "Project Not Found",
    };
  }

  const ogImagesMap: Record<string, string> = {
    "restaurant-digital-ordering": "/og/restaurants.png",
    "hotel-direct-booking": "/og/hotels.png",
    "bakery-order-automation": "/og/work-default.png",
  };

  const ogImage = ogImagesMap[slug] || "/og/work-default.png";

  return {
    title: `${project.title} (${project.label})`,
    description: project.description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} | INNORATECH`,
      description: project.description,
      url: `/work/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} — INNORATECH`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | INNORATECH`,
      description: project.description,
      images: [ogImage],
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
