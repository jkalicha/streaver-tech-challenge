import type { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
          User {post.userId}
        </span>
        <span className="text-xs text-gray-400">#{post.id}</span>
      </div>

      <h2 className="mb-3 text-lg font-semibold capitalize text-gray-900">
        {post.title}
      </h2>

      <p className="text-sm leading-relaxed text-gray-600">{post.body}</p>
    </article>
  );
}
