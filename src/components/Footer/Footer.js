import React from 'react'
// import { Link } from 'gatsby'

import { getOldTestament, getNewTestament } from '../../utils/transformers';
import './footer.css'
import { translate } from '../../utils/services/translate';

const Footer = ({books}) => (
  <footer className="footer">
    <div className="container">
      <section className="sitemap-links">
        <h2>{translate('site.name')}</h2>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/libros">Libros</a></li>
          <li><a href="/buscar">Buscar</a></li>
        </ul>
      </section>
      <section className="books-links">
        <div className="book-column">
          <h2>{translate('testment.old')}</h2>
          <ul>
            {getOldTestament(books).map(({id, name}) => {
              return (
                <li key={id}><a href={`${id}`}>{name}</a></li>
              )
            })}
          </ul>
        </div>
        <div className="book-column">
          <h2>{translate('testment.new')}</h2>
          <ul>
            {getNewTestament(books).map(({id, name}) => {
              return (
                <li key={id}><a href={`${id}`}>{name}</a></li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  </footer>
)

export default Footer
