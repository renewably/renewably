import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavBar } from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  // const queryClient = new QueryClient();
  return (
    // <QueryClientProvider client={queryClient}>
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
    // </QueryClientProvider>
  );
}

export default MyApp;
