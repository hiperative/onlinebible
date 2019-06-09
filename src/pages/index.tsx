import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import { Container, Logo, Pill, Title, Text } from './index.styled';
import Input, { InputType } from '../components/Elements/Input/Input';
import Form from '../components/Elements/Form/Form';
import Button from '../components/Elements/Button/Button';

import logo from './../assets/svg/novo-logo.svg';

const formUrl = process.env['MAILCHIMP_FORM_URL'];

const IndexPage = () => {
  const [email, updateEmail] = useState();

  const handleOnSubmit = () => {
    // Do something with the event.
  };

  return (
    <Layout>
      <SEO />
      <Container>
        <Logo src={logo} alt="La Biblia Online" />
        <Pill>Disponible en Julio 2019</Pill>

        <Title>Lea la Biblia Sagrada desde su ordenador, movil o tablet.</Title>

        <Text>
          Creemos que la Biblia es una historia unificada que nos lleva a Jesús y nuestra misión es
          hacer que la historia bíblica sea accesible a todo el mundo, en cualquier lugar y de forma
          gratuita.
        </Text>

        {formUrl && (
          <Form
            name="newsletter"
            onSubmit={handleOnSubmit}
            action={formUrl}
            method="POST"
            target="_blank"
          >
            <Input
              name="EMAIL"
              value={email}
              type={InputType.Email}
              placeholder="Tu correo electrónico"
              onChange={updateEmail}
              isRequired
            />
            <Button>Mantenme al tanto</Button>
          </Form>
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
