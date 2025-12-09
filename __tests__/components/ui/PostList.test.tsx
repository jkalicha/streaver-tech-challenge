import { render, screen } from '@testing-library/react';
import { PostList } from '@/components/ui/PostList';

describe('PostList', () => {
  const mockPosts = [
    { id: 1, userId: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, userId: 2, title: 'Post 2', body: 'Body 2' },
  ];

  it('should render list of posts', () => {
    render(<PostList posts={mockPosts} />);

    expect(screen.getByText(/Post 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Post 2/i)).toBeInTheDocument();
  });

  it('should render empty state when no posts', () => {
    render(<PostList posts={[]} />);

    expect(screen.getByText('No posts found')).toBeInTheDocument();
  });

  it('should handle undefined posts gracefully', () => {
    // @ts-expect-error - testing defensive code
    render(<PostList posts={undefined} />);

    expect(screen.getByText('No posts found')).toBeInTheDocument();
  });

  it('should handle null posts gracefully', () => {
    // @ts-expect-error - testing defensive code
    render(<PostList posts={null} />);

    expect(screen.getByText('No posts found')).toBeInTheDocument();
  });
});
