import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Books from '../composites/books';
import { getBooksFromQuery } from '../utils/transformers';

const BooksPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query Books {
          allBooks {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `}
      render={data => (<Books books={getBooksFromQuery(data)} />)}
    />
  </Layout>
)

export default BooksPage
