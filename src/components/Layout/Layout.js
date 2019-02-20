import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { getBooksFromQuery } from '../../utils/transformers';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import './layout.css'

import '../../sass/style.scss'

const Layout = ({ children, includeFooter = false }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allBooks {
          edges {
            node {
              id
              name
              chapters {
                id
                number
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="es" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          style={{
            margin: '48px auto 10px',
            maxWidth: 1200,
            minWidth: 300,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </main>
        {includeFooter && <Footer books={getBooksFromQuery(data)} />}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
