import type { MetadataRoute } from "next";

const SITE = "https://xn--e1aybc.com"; // трудкрут.com

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
