export function LoadingState() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-lg border border-gray-200 bg-white p-6"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="h-6 w-16 rounded-full bg-gray-200" />
            <div className="h-4 w-8 rounded bg-gray-200" />
          </div>
          <div className="mb-3 h-6 w-3/4 rounded bg-gray-200" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
