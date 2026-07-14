import type { MetadataRoute } from "next";

const SITE = "https://xn--e1aybc.com"; // трудкрут.com

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
