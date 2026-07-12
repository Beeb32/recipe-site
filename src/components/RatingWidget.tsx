import Link from "next/link";
import { rateRecipe } from "@/app/actions/reviews";

export function RatingWidget({
  recipeId,
  recipeSlug,
  average,
  count,
  userRating,
  canRate,
}: {
  recipeId: string;
  recipeSlug: string;
  average: number;
  count: number;
  userRating: number | null;
  canRate: boolean;
}) {
  const action = rateRecipe.bind(null, recipeId, recipeSlug);
  const rounded = Math.round(average);

  return (
    <div>
      <div className="flex items-center gap-2 text-sm mb-2">
        <span aria-hidden>
          {"★".repeat(rounded)}
          {"☆".repeat(5 - rounded)}
        </span>
        <span className="opacity-70">
          {count === 0 ? "No ratings yet" : `${average.toFixed(1)} (${count} rating${count === 1 ? "" : "s"})`}
        </span>
      </div>
      {canRate ? (
        <form action={action} className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="submit"
              name="value"
              value={n}
              aria-label={`Rate ${n} star${n === 1 ? "" : "s"}`}
              className={`text-lg leading-none hover:opacity-100 transition-opacity ${
                userRating && n <= userRating ? "opacity-100" : "opacity-30"
              }`}
            >
              ★
            </button>
          ))}
          {userRating && <span className="text-xs opacity-60 ml-2">Your rating: {userRating}</span>}
        </form>
      ) : (
        <Link href="/login" className="text-xs underline underline-offset-2 opacity-70">
          Log in to rate
        </Link>
      )}
    </div>
  );
}
