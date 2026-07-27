import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://developer-portfolio-taupe-two.vercel.app",
      lastModified: new Date(),
    },
  ];
}