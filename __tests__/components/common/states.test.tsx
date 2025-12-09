import { render, screen } from '@testing-library/react';
import { LoadingState } from '@/components/common/LoadingState';
import { ErrorState } from '@/components/common/ErrorState';
import { SlowConnectionBanner } from '@/components/common/SlowConnectionBanner';

describe('LoadingState', () => {
  it('should render skeleton loaders', () => {
    render(<LoadingState />);

    // Check for animated elements (skeletons have animate-pulse class)
    const skeletons = document.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBeGreaterThan(0);
  });
});

describe('ErrorState', () => {
  it('should render error message', () => {
    render(<ErrorState message="Test error message" />);

    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('should render default message when not provided', () => {
    render(<ErrorState />);

    expect(screen.getByText('Something went wrong while loading posts.')).toBeInTheDocument();
  });

  it('should render retry button when onRetry provided', () => {
    const onRetry = jest.fn();
    render(<ErrorState onRetry={onRetry} />);

    expect(screen.getByText('Try Again')).toBeInTheDocument();
  });

  it('should not render retry button when onRetry not provided', () => {
    render(<ErrorState />);

    expect(screen.queryByText('Try Again')).not.toBeInTheDocument();
  });
});

describe('SlowConnectionBanner', () => {
  it('should render slow connection warning', () => {
    render(<SlowConnectionBanner />);

    expect(screen.getByText(/Slow connection detected/i)).toBeInTheDocument();
  });
});
