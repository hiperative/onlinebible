import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const GA_TRACKING_ID = ''

const DEFAULT_LANG = 'es-ES'

const GA_TRACKING_SCRIPT = (id: string) => `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${id}');
`

// const TwitterMeta = () => (
//   <>
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
//     <meta name="twitter:title" content="TITLE_FOR_YOUR_PAGE" />
//     <meta name="twitter:description" content="DESCRIPTION_FOR_YOUR_PAGE" />
//     <meta name="twitter:image" content="URL_FOR_YOUR_IMAGE" />
//   </>
// )

// const OpenGraphMeta = () => (
//   <>
//     <meta property="og:locale" content="en_US" />
//     <meta property="og:type" content="website" />
//     <meta property="og:title" content="North — Digital product studio" />
//     <meta
//       property="og:description"
//       content="We are a digital product studio based in Barcelona, working globally on building digital products and services for bold companies."
//     />
//     <meta property="og:url" content="https://mucci.co/" />
//     <meta property="og:site_name" content="North" />
//   </>
// )

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const lang = this.props.__NEXT_DATA__.props.pageProps?.post?.lang

    return (
      <Html lang={lang ? lang : DEFAULT_LANG}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="@rafaelllycan" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="theme-color" content="#50e3c2" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />

          <link
            rel="icon"
            href="/svg/novo-logo.svg"
            sizes="any"
            type="image/svg+xml"
          />
          <link
            rel="preload"
            as="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat&family=PT+Serif&display=optional"
          />

          {GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />

              <script
                dangerouslySetInnerHTML={{
                  __html: GA_TRACKING_SCRIPT(GA_TRACKING_ID),
                }}
              />
            </>
          )}
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
