import React from 'react'
import { Link } from 'gatsby'

import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout'
import Passage from '../components/Passage/Passage'

// Verse of the day, old/new testment
const passages = [
  {
    book: {
      number: 15,
      name: "Esdras"
    },
    verse: {
      number: 21,
      chapterNumber: 8,
      text: "Entonces proclamé un ayuno allí junto al río Ahava a fin de humillarnos en la presencia de nuestro Dios y pedirle un buen viaje para nosotros, para nuestros niños y para todas nuestras posesiones."
    }
  },
  {
    book: {
      number: 42,
      name: "Lucas"
    },
    verse: {
      number: 35,
      chapterNumber: 22,
      text: "Y les dijo a ellos: —Cuando os envié sin bolsa, sin alforja y sin calzado, ¿os faltó algo? Ellos dijeron: —Nada."
    }
  }
]

const IndexPage = () => (
  <Layout>
    <Grid container spacing={16}>
      <Grid item xs={8}>
        <h1>Versículos del día</h1>
        {passages.map((passage, index) => (
          <Passage
            key={index}
            passage={passage}
          />
        ))}
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage