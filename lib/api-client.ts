import { env } from '@/config/env';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function fetcher<T>(endpoint: string): Promise<T> {
  const url = `${env.API_BASE_URL}${endpoint}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new ApiError(response.status, `API Error: ${response.statusText}`);
  }

  return response.json();
}
