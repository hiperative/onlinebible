import React from 'react'
// import { Link } from 'gatsby'

import { Container, Row, Col } from '../components/Grid';

import Layout from '../components/Layout/Layout'
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
  <Layout includeFooter>
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h1>Versículos del día</h1>
          {passages.map((passage, index) => (
            <Passage
              key={index}
              passage={passage}
            />
          ))}
          {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Col>
        <Col md={4} className="hide show-md" style={{ background: '#abc' }}>
          <h4>Adds?</h4>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
