import React from 'react'
// import { Link } from 'gatsby'

import './footer.css'

const books = {
  old: [
    "Gênesis",
    "Êxodo",
    "Levítico",
    "Números",
    "Deuteronômio",
    "Josué",
    "Juízes",
    "Rute",
    "1 Samuel",
    "2 Samuel",
    "1 Reis",
    "2 Reis",
    "1 Crônicas",
    "2 Crônicas",
    "Esdras",
    "Neemias",
    "Ester",
    "Jó",
    "Salmos",
    "Provérbios",
    "Eclesiastes",
    "Cânticos",
    "Isaías",
    "Jeremias",
    "Lamentações",
    "Ezequiel",
    "Daniel",
    "Oséias",
    "Joel",
    "Amós",
    "Obadias",
    "Jonas",
    "Miquéias",
    "Naum",
    "Habacuque",
    "Sofonias",
    "Ageu",
    "Zacarias",
    "Malaquias",
  ],
  new: [
    "Mateus",
    "Marcos",
    "Lucas",
    "João",
    "Atos",
    "Romanos",
    "1 Coríntios",
    "2 Coríntios",
    "Gálatas",
    "Efésios",
    "Filipenses",
    "Colossenses",
    "1 Tessalonicenses",
    "2 Tessalonicenses",
    "1 Timóteo",
    "2 Timóteo",
    "Tito",
    "Filemom",
    "Hebreus",
    "Tiago",
    "1 Pedro",
    "2 Pedro",
    "1 João",
    "2 João",
    "3 João",
    "Judas",
    "Apocalipse",
  ],
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <section class="sitemap-links">
        <h2>Bíblia Online</h2>
        <ul>
          <li><a href="/">Homepage</a></li>
          <li><a href="/index">Livros</a></li>
          <li><a href="/busca">Busca</a></li>
          {/*<li><a>Bíblias</a></li>*/}
        </ul>
      </section>
      <section className="books-links">
        <div className="book-column">
          <h2>Velho Testamento</h2>
          <ul>
            {books.old.map((book) => {
              return (
                <li><a>{book}</a></li>
              )
            })}
          </ul>
        </div>
        <div className="book-column">
          <h2>Novo Testamento</h2>
          <ul>
            {books.new.map((book) => {
              return (
                <li><a>{book}</a></li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  </footer>
)

export default Footer
