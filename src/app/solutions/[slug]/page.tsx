import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionPage } from "@/components/solutions/SolutionPage";
import { solutions } from "@/data/solutions";

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
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
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    return {
      title: "Solution Not Found | INNORATECH",
    };
  }

  return {
    title: `${solution.eyebrow} Digital Solutions | INNORATECH`,
    description: solution.shortDescription,
    openGraph: {
      title: `${solution.title} | INNORATECH`,
      description: solution.description,
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return <SolutionPage solution={solution} />;
}
