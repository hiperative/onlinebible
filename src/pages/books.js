import React from 'react'
import Layout from '../components/layout'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import books from '../data/books'

const BooksPage = () => (
  <Layout>
    <Grid container spacing={16}>
      <Hidden smDown>
        <Grid item xs={6}>
          <h1>Velho Testamento</h1>
          <ul>
            {books.filter((i, k) => k <= 38 ).map((book, index) => (
              <li key={index}><a>{book.name}</a></li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={6}>
          <h1>Novo Testamento</h1>
          {books.filter((i, k) => k > 38 ).map((book, index) => (
              <li key={index}><a>{book.name}</a></li>
            ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid item xs={8}>
          <h1>lgUp</h1>
        </Grid>
      </Hidden>
    </Grid>
  </Layout>
)

export default BooksPage
