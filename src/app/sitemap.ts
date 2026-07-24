import type { MetadataRoute } from "next";
import { getAllRecipeSlugs } from "@/lib/recipes";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const recipes = await getAllRecipeSlugs();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...recipes.map((recipe) => ({
      url: `${SITE_URL}/recipes/${recipe.slug}`,
      lastModified: recipe.createdAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
