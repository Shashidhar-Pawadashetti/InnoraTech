import { MetadataRoute } from "next";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://innoratech.in";
  const lastModified = new Date();

  const coreRoutes = [
    "",
    "/solutions",
    "/services",
    "/work",
    "/process",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const projectRoutes = projects.map((p) => `/work/${p.slug}`);

  const allRoutes = [
    ...coreRoutes,
    ...solutionRoutes,
    ...serviceRoutes,
    ...projectRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/solutions")
        ? 0.85
        : route.startsWith("/services")
        ? 0.8
        : route.startsWith("/work")
        ? 0.75
        : 0.6,
  }));
}
