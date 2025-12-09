'use client';

import { useState, useCallback } from 'react';
import { usePosts } from '@/hooks/usePosts';
import { SearchInput } from '@/components/ui/SearchInput';
import { PostList } from '@/components/ui/PostList';
import { LoadingState } from '@/components/common/LoadingState';
import { ErrorState } from '@/components/common/ErrorState';
import { SlowConnectionBanner } from '@/components/common/SlowConnectionBanner';

export default function Home() {
  const [userId, setUserId] = useState<number | undefined>();
  const { posts, isLoading, error, isSlowConnection, mutate } = usePosts({ userId });

  const handleSearch = useCallback((newUserId: number | undefined) => {
    setUserId(newUserId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
          <p className="mt-2 text-gray-600">
            Browse posts from JSONPlaceholder API
          </p>
        </header>

        {isSlowConnection && <SlowConnectionBanner />}

        <SearchInput onSearch={handleSearch} />

        {isLoading && <LoadingState />}
        
        {!isLoading && error && (
          <ErrorState 
            message={error.message} 
            onRetry={mutate} 
          />
        )}
        
        {!isLoading && !error && posts && <PostList posts={posts} />}
      </main>
    </div>
  );
}