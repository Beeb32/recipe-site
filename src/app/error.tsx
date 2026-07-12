"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="max-w-md mx-auto px-6 py-24 text-center">
      <div className="text-5xl mb-4">🔥</div>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">Something went wrong</h1>
      <p className="opacity-70 mb-6">An unexpected error occurred. You can try again.</p>
      <button
        onClick={() => reset()}
        className="inline-block rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium"
      >
        Try again
      </button>
    </main>
  );
}
