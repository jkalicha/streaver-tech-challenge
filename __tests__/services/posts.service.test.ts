import { getPosts, getPostsByUserId, getPostById } from '@/services/posts.service';
import { fetcher } from '@/lib/api-client';

// Mock the api-client
jest.mock('@/lib/api-client', () => ({
  fetcher: jest.fn(),
}));

const mockFetcher = fetcher as jest.MockedFunction<typeof fetcher>;

describe('posts.service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getPosts', () => {
    it('should fetch all posts', async () => {
      const mockPosts = [
        { id: 1, userId: 1, title: 'Post 1', body: 'Body 1' },
        { id: 2, userId: 1, title: 'Post 2', body: 'Body 2' },
      ];

      mockFetcher.mockResolvedValueOnce(mockPosts);

      const result = await getPosts();

      expect(result).toEqual(mockPosts);
      expect(mockFetcher).toHaveBeenCalledWith('/posts');
    });
  });

  describe('getPostsByUserId', () => {
    it('should fetch posts filtered by userId', async () => {
      const mockPosts = [
        { id: 1, userId: 5, title: 'Post 1', body: 'Body 1' },
      ];

      mockFetcher.mockResolvedValueOnce(mockPosts);

      const result = await getPostsByUserId(5);

      expect(result).toEqual(mockPosts);
      expect(mockFetcher).toHaveBeenCalledWith('/posts?userId=5');
    });
  });

  describe('getPostById', () => {
    it('should fetch a single post by id', async () => {
      const mockPost = { id: 1, userId: 1, title: 'Post 1', body: 'Body 1' };

      mockFetcher.mockResolvedValueOnce(mockPost);

      const result = await getPostById(1);

      expect(result).toEqual(mockPost);
      expect(mockFetcher).toHaveBeenCalledWith('/posts/1');
    });
  });
});
