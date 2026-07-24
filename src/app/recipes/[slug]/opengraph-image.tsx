import { ImageResponse } from "next/og";
import { getRecipeBySlug } from "@/lib/recipes";
import { getLocale } from "@/lib/locale";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const recipe = await getRecipeBySlug(slug, locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf7f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 220, lineHeight: 1, display: "flex" }}>
          {recipe?.imageEmoji ?? "🍽️"}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#1a1a1a",
            marginTop: 24,
            padding: "0 80px",
            textAlign: "center",
            display: "flex",
          }}
        >
          {recipe?.title ?? "What to cook"}
        </div>
      </div>
    ),
    size
  );
}
