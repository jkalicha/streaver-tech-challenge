'use client';

import { useState, useEffect } from 'react';

interface SearchInputProps {
  onSearch: (userId: number | undefined) => void;
  debounceMs?: number;
}

export function SearchInput({ onSearch, debounceMs = 300 }: SearchInputProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const parsed = parseInt(value, 10);
      onSearch(value && !isNaN(parsed) ? parsed : undefined);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [value, debounceMs, onSearch]);

  return (
    <div className="mb-6">
      <label
        htmlFor="user-search"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Filter by User ID
      </label>
      <input
        id="user-search"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter user ID (1-10)..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />
      {value && (
        <button
          onClick={() => setValue('')}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Clear filter
        </button>
      )}
    </div>
  );
}
