import { Box, Button, Container } from '@material-ui/core'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const DEFAULT_PAGE_TITLE = 'Online Bible App'

export default function Layout({ children, pageTitle = DEFAULT_PAGE_TITLE, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <Header />

      <Container component="section">

        <Box m="12">
          <Button>Click!</Button>
        </Box>

        <div className="content">{children}</div>

      </Container>

      <Footer />
    </>
  )
}
