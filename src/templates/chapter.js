import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
// import { parseVerses } from '../utils/parsers';
// import { getNodesFromEdges } from '../utils/transformers';
// import { Container, Col, Row } from '../components/Grid';
// import Sidebar from '../components/Sidebar/Sidebar';

const ChapterPage = ({ data }) => (
  <Layout>
    {console.log(data)}
    {/*<Container style={{ background: '#ccc' }}>
      <Row>
        <Col sm={12} md={8} style={{ background: '#cbb' }}>
          <h1 style={{ textAlign: 'center' }}>{content.reference}</h1>
          {content.verses &&
            parseVerses(content.verses).map((v, i) => (
              <p key={i} style={{margin: '1rem 0 0', fontSize: '22px'}}>
                <sup className="v" style={{fontFamily: 'sans-serif', fontSize: '12px', marginRight: '5px'}}>{`${i + 1}`}</sup>{v}
              </p>
            ))
          }
          <div>
            {console.log(content)}
            {content.next && <a href={`#${content.previous.id}`}>&lt; Salmos 22</a>}
            <br />
            <a href={`#${content.bookId}`}>Capítulos</a>
            <br />
            {content.next && <a href={`#${content.next.id}`}>Salmos 24 &gt;</a>}
          </div>
        </Col>
        <Col sm={12} md={4} style={{ background: '#abc' }}>
          <Sidebar bookId={content.bookId} showChapters showAds />
        </Col>
      </Row>
    </Container>*/}
  </Layout>
)

export const query = graphql`
  query Chapter($id: String!) {
    chapters(id: { eq: $id }) {
      id
      number
      bookId
    }
  }
`;

export default ChapterPage;
