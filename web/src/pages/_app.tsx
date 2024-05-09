import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { SEO_CONFIG } from '@/constants';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...SEO_CONFIG}></DefaultSeo>
      <Component {...pageProps}></Component>
    </QueryClientProvider>
  );
};

export default App;
