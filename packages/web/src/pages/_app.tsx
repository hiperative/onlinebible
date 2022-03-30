import type { AppProps } from 'next/app'

import GlobalStyle from '../styles/default'
import Layout from '../components/Layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
