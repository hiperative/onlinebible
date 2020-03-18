import React, { useState } from 'react';

import { Container, Logo, Pill, Title, Text } from './index.styled';
import Form from '../Elements/Form/Form';
import Input from '../Elements/Input/Input';
import Button from '../Elements/Button/Button';

import logo from '../../assets/svg/novo-logo.svg';

const IndexContainer = () => {
  const [email, updateEmail] = useState("");

  const handleOnSubmit = (ev) => {
    // Do something with the event.
    ev.preventDefault();
    console.log('handleOnSubmit', ev);
  };

  return (
    <Container>
      <Logo src={logo} alt="La Biblia Online" />
      <Pill>Disponible en Mayo 2020</Pill>
      <Title>Lea la Biblia Sagrada desde su ordenador, movil o tablet.</Title>
      <Text>
        Creemos que la Biblia es una historia unificada que nos lleva a Jesús y nuestra misión es
        hacer que la historia bíblica sea accesible a todo el mundo, en cualquier lugar y de forma
        gratuita.
      </Text>
      <Form
        name="newsletter"
        onSubmit={handleOnSubmit}
        action="https://bibliaonline.us6.list-manage.com/subscribe/post?u=b7957a6d11d56654e3ff3a0a8&amp;id=e8b52f5a93"
        method="POST"
        target="_blank"
      >
        <Input
          name="EMAIL"
          value={email}
          type="email"
          placeholder="Tu correo electrónico"
          onChange={updateEmail}
          isRequired
        />
        <Button>Mantenme al tanto</Button>
      </Form>
    </Container>
  );
};

export default IndexContainer;
