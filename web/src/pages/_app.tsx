import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';

import { SEO_CONFIG } from '@/constants';
import { initializeGA, trackPageView } from '@/utils';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();

  useEffect(() => {
    initializeGA();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...SEO_CONFIG}></DefaultSeo>
      <Component {...pageProps}></Component>
    </QueryClientProvider>
  );
};

export default App;
