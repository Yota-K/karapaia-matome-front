import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteConfig } from '../../config/config';
import createStore from '../../posts/store';

function MyApp({ Component, pageProps }: AppProps) {
  const { siteName } = siteConfig;

  return (
    <Provider store={createStore()}>
      <div className="w-10/12 mx-auto lg:w-7/12">
        <Header siteName={siteName} />
        <Component {...pageProps} />
        <Footer siteName={siteName} />
      </div>
    </Provider>
  );
}
export default MyApp;
