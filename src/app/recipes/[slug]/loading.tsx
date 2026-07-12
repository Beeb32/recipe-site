export default function LoadingRecipe() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-16 w-16 rounded-lg bg-black/10 dark:bg-white/10 mb-4" />
      <div className="h-8 w-2/3 rounded bg-black/10 dark:bg-white/10 mb-3" />
      <div className="h-4 w-full rounded bg-black/10 dark:bg-white/10 mb-2" />
      <div className="h-4 w-1/2 rounded bg-black/10 dark:bg-white/10 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="sm:col-span-1 space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 rounded bg-black/10 dark:bg-white/10" />
          ))}
        </div>
        <div className="sm:col-span-2 space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-4 rounded bg-black/10 dark:bg-white/10" />
          ))}
        </div>
      </div>
    </main>
  );
}
