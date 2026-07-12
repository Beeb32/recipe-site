import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-md mx-auto px-6 py-24 text-center">
      <div className="text-5xl mb-4">🍽️</div>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">Recipe not found</h1>
      <p className="opacity-70 mb-6">
        We couldn&apos;t find what you&apos;re looking for. It may have been moved or never existed.
      </p>
      <Link
        href="/"
        className="inline-block rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium"
      >
        Back to recipes
      </Link>
    </main>
  );
}
