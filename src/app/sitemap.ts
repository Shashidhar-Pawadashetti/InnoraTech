import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://innoratech.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/solutions",
    "/solutions/restaurants",
    "/solutions/hotels",
    "/solutions/bakeries",
    "/solutions/business-automation",
    "/services",
    "/work",
    "/process",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/solutions") ? 0.8 : 0.6,
  }));
}
