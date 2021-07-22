import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core';
import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/theme';
import Layout from '@components/Layout';
// import { IdProvider } from '@radix-ui/react-id';
// import { useAnalytics } from '@lib/analytics';
// import { Footer } from '@components/Footer';
// import { globalStyles } from '@styles/global';
// import { box } from '@styles/box';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* <MuiThemeProvider theme={theme}> */}
        <GlobalStyle />
        <Head>
          <title>Online Bible App</title>
        </Head>
        {/* <Layout {...pageProps} /> */}
        <Component {...pageProps} />
      {/* </MuiThemeProvider> */}
    </ThemeProvider>
  )
}
