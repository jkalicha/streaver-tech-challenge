'use client';

import useSWR from 'swr';
import { useState } from 'react';
import { fetcher } from '@/lib/api-client';
import type { Post } from '@/types/post';

const POSTS_ENDPOINT = '/posts';

interface UsePostsOptions {
  userId?: number;
}

interface UsePostsReturn {
  posts: Post[] | undefined;
  isLoading: boolean;
  isSlowConnection: boolean;
  error: Error | undefined;
  mutate: () => void;
}

export function usePosts(options: UsePostsOptions = {}): UsePostsReturn {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  const endpoint = options.userId
    ? `${POSTS_ENDPOINT}?userId=${options.userId}`
    : POSTS_ENDPOINT;

  const { data, error, isLoading, mutate } = useSWR<Post[]>(
    endpoint,
    fetcher,
    {
      onLoadingSlow: () => setIsSlowConnection(true),
      onSuccess: () => setIsSlowConnection(false),
      onError: () => setIsSlowConnection(false),
    }
  );

  return {
    posts: data,
    isLoading,
    isSlowConnection,
    error,
    mutate,
  };
}
