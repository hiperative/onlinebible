import { AppProps } from 'next/app';
import Head from 'next/head';
// import { IdProvider } from '@radix-ui/react-id';
// import { useAnalytics } from '@lib/analytics';
// import { Footer } from '@components/Footer';
// import { globalStyles } from '@styles/global';
// import { box } from '@styles/box';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Online Bible App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
