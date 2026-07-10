import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sanji-portfolio.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://sanji-portfolio.vercel.app/#about",
      lastModified: new Date(),
    },
    {
      url: "https://sanji-portfolio.vercel.app/#skills",
      lastModified: new Date(),
    },
    {
      url: "https://sanji-portfolio.vercel.app/#projects",
      lastModified: new Date(),
    },
    {
      url: "https://sanji-portfolio.vercel.app/#contact",
      lastModified: new Date(),
    },
  ];
}