'use client';

import { SWRConfig } from 'swr';
import { ReactNode } from 'react';
import { fetcher } from '@/lib/api-client';

interface SWRProviderProps {
  children: ReactNode;
}

export function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        errorRetryCount: 3,
        errorRetryInterval: 1000,
        loadingTimeout: 3000,
      }}
    >
      {children}
    </SWRConfig>
  );
}
