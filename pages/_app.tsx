import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} session={pageProps.session} />
    </Provider>
  );
}
export default MyApp;
