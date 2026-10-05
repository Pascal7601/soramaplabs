import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soramaplabs.com";

  const lastUpdated = new Date("2026-10-01");

  return [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
