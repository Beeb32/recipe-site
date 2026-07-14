import "server-only";
import { cookies } from "next/headers";

export type Locale = "en" | "bg";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return store.get("locale")?.value === "bg" ? "bg" : "en";
}
