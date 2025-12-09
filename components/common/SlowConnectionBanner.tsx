export function SlowConnectionBanner() {
  return (
    <div className="mb-4 flex items-center gap-2 rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3">
      <svg
        className="h-5 w-5 flex-shrink-0 text-yellow-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-sm text-yellow-800">
        <span className="font-medium">Slow connection detected.</span>{' '}
        Loading may take longer than usual...
      </p>
    </div>
  );
}
