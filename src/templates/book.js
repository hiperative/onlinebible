import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import { filterCommonChapters } from '../utils/filters';

const BookPage = ({ data: { books : book, allChapters: chapters }}) => (
  <Layout>
    <h1>{book.name}</h1>
    {book.chapters &&
      <ul>
        {filterCommonChapters(book.chapters).map((item) => (
          <li key={item.id}>
            <a href={`/${item.id.replace('.','/')}`}>{item.number}</a>
          </li>
        ))}
      </ul>
    }
  </Layout>
)

export const query = graphql`
  query Book($id: String!) {
    books(id: { eq: $id }) {
      name
      chapters {
        id
        number
      }
    }
  }
`;

export default BookPage;
