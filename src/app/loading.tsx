export default function LoadingHome() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-8 w-40 rounded bg-black/10 dark:bg-white/10 mb-2" />
      <div className="h-4 w-72 rounded bg-black/10 dark:bg-white/10 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-black/10 dark:border-white/15 p-5">
            <div className="h-10 w-10 rounded bg-black/10 dark:bg-white/10 mb-3" />
            <div className="h-5 w-3/4 rounded bg-black/10 dark:bg-white/10 mb-2" />
            <div className="h-4 w-full rounded bg-black/10 dark:bg-white/10 mb-1" />
            <div className="h-4 w-2/3 rounded bg-black/10 dark:bg-white/10" />
          </div>
        ))}
      </div>
    </main>
  );
}
