import { render, screen } from '@testing-library/react';
import { PostCard } from '@/components/ui/PostCard';

describe('PostCard', () => {
  const mockPost = {
    id: 1,
    userId: 5,
    title: 'test post title',
    body: 'This is the body of the test post.',
  };

  it('should render post title', () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByText(/test post title/i)).toBeInTheDocument();
  });

  it('should render post body', () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByText('This is the body of the test post.')).toBeInTheDocument();
  });

  it('should render user badge', () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByText('User 5')).toBeInTheDocument();
  });

  it('should render post id', () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByText('#1')).toBeInTheDocument();
  });
});
