import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/products", "/how-we-build", "/studio", "/contact"].map((p) => ({
    url: SITE_URL + p,
    lastModified: new Date("2026-11-05"),
  }));
}
