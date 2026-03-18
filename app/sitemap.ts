import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-seven-phi-95.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
