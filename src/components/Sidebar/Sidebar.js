import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { getBooksFromQuery } from '../../utils/transformers';
import { filterBook, filterCommonChapters } from '../../utils/filters';



const showAds = process.env.SHOW_ADS;

const Sidebar = (props) => {
  const { data, bookId } = props;
  const book = filterBook(getBooksFromQuery(data), bookId);
  const chapters = filterCommonChapters(book.chapters);

  return (
    <aside className="sidebar">
      {bookId &&
        <Fragment>
          <h2 className="sidebar__title">Capitulos</h2>
          <ul className="sidebar__chapter-list" style={{ padding: 0, margin: 0 }}>
            {chapters.map((item, i) => (
              <li key={i}>
                <a href={item.id}>{item.number}</a>
              </li>
            ))}
          </ul>
        </Fragment>
      }

      {showAds &&
        <Fragment>
          <h4 className="sidebar__title">Adds?</h4>
        </Fragment>
      }
    </aside>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
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
    render={data => <Sidebar data={data} {...props} />}
  />
)
