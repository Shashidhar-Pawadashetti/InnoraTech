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
      title: "Solution Not Found",
    };
  }

  const ogImagesMap: Record<string, string> = {
    restaurants: "/og/restaurants.png",
    hotels: "/og/hotels.png",
    "business-automation": "/og/automation.png",
    bakeries: "/og/innoratech-default.png",
  };

  const ogImage = ogImagesMap[slug] || "/og/innoratech-default.png";

  return {
    title: `${solution.eyebrow} Digital Solutions`,
    description: solution.shortDescription,
    alternates: {
      canonical: `/solutions/${slug}`,
    },
    openGraph: {
      title: `${solution.title} | INNORATECH`,
      description: solution.description,
      url: `/solutions/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${solution.title} — INNORATECH`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} | INNORATECH`,
      description: solution.shortDescription,
      images: [ogImage],
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
