import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://soramaplabs.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add other routes here later (e.g., /about, /services)
  ];
}
