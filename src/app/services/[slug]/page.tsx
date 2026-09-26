import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePage } from "@/components/services/ServicePage";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
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
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const ogImage =
    slug === "business-automation" || slug === "api-integrations"
      ? "/og/automation.png"
      : "/og/innoratech-default.png";

  return {
    title: `${service.title} | Technical Services`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | INNORATECH`,
      description: service.description,
      url: `/services/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${service.title} — INNORATECH`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | INNORATECH`,
      description: service.shortDescription,
      images: [ogImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
