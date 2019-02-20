import React from 'react'

import { translate } from '../utils/services/translate';

import { getOldTestament, getNewTestament } from '../utils/transformers';
import { Container, Row, Col } from '../components/Grid';

const TestamentColumn = ({title, books}) => (
  <Col xs={12} md={6} className="hide show-md">
    <h1>{title}</h1>
    <ul>
      {books.map(({id, name}) => (
        <li key={id}><a href={`${id}`}>{name}</a></li>
      ))}
    </ul>
  </Col>
);

const Books = ({books}) => (
  <Container>
    <Row>
      <TestamentColumn
        title={translate('testment.old')}
        books={getOldTestament(books)}
      />
      <TestamentColumn
        title={translate('testment.new')}
        books={getNewTestament(books)}
      />
      <Col xs={12} className="hide-md">
        <h1>Mobile Version</h1>
      </Col>
    </Row>
  </Container>
);

export default Books;
