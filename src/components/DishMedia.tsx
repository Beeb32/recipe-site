import Image from "next/image";
import { recipeImageSrc, type RecipeImageKind } from "@/lib/recipeImages";

// A stable hue per recipe (same slug -> same colours every time), so a grid of
// emoji-only recipes still looks varied instead of one repeated tile.
function hueFor(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) % 360;
  return h;
}

/**
 * The picture area of a recipe card / recipe page: the dish picture when the recipe has one,
 * otherwise a tinted tile with its emoji. Fills its (relatively positioned) parent.
 */
export function DishMedia({
  slug,
  emoji,
  title,
  kind = "card",
  priority = false,
  sizes = "(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw",
}: {
  slug: string;
  emoji: string;
  title: string;
  kind?: RecipeImageKind;
  priority?: boolean;
  sizes?: string;
}) {
  const src = recipeImageSrc(slug, kind);
  if (src) {
    return (
      <Image
        src={src}
        alt={title}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  const h = hueFor(slug);
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background: `radial-gradient(circle at 30% 25%, hsl(${h} 45% 30%) 0%, hsl(${(h + 40) % 360} 40% 16%) 70%)`,
      }}
    >
      <span className={`drop-shadow-lg ${kind === "hero" ? "text-8xl" : "text-6xl"}`}>{emoji}</span>
    </div>
  );
}
