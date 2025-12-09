import { fetcher } from '@/lib/api-client';
import type { Post } from '@/types/post';

export async function getPosts(): Promise<Post[]> {
  return fetcher<Post[]>('/posts');
}

export async function getPostsByUserId(userId: number): Promise<Post[]> {
  return fetcher<Post[]>(`/posts?userId=${userId}`);
}

export async function getPostById(id: number): Promise<Post> {
  return fetcher<Post>(`/posts/${id}`);
}
