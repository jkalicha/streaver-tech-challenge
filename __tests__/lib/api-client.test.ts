import { ApiError, fetcher } from '@/lib/api-client';

// Mock global fetch
global.fetch = jest.fn();

describe('api-client', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('fetcher', () => {
    it('should fetch data successfully', async () => {
      const mockData = [{ id: 1, title: 'Test Post' }];
      
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await fetcher('/posts');

      expect(result).toEqual(mockData);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts'
      );
    });

    it('should throw ApiError on non-ok response', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      await expect(fetcher('/posts')).rejects.toThrow(ApiError);
      await expect(fetcher('/posts')).rejects.toThrow('API Error: Not Found');
    });

    it('should include correct status in ApiError', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      });

      try {
        await fetcher('/posts');
      } catch (error) {
        expect(error).toBeInstanceOf(ApiError);
        expect((error as ApiError).status).toBe(500);
      }
    });
  });

  describe('ApiError', () => {
    it('should create error with status and message', () => {
      const error = new ApiError(404, 'Not Found');

      expect(error.status).toBe(404);
      expect(error.message).toBe('Not Found');
      expect(error.name).toBe('ApiError');
    });
  });
});
