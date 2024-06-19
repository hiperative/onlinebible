import Head from 'next/head'
import styled from 'styled-components'

import media from '../styles/functions/media'
import Button from '../components/Elements/Button/Button'
import Form from '../components/Elements/Form/Form'
import Input from '../components/Elements/Input/Input'

export async function getStaticProps() {
  return {
    props: {
      title: 'Leer la Biblia Online',
      description:
        'Lea y busque la Biblia Sagrada de estudio con audio en diversas traducciones y lenguas. Versículos y mensajes bíblicos de la palabra de Dios para cada ocasión. Aplicación completa de estudio de las escrituras sagradas en español.',
      keywords:
        'La Biblia Sagrada, Biblia Online, Biblia cristiana, clc biblias, biblias de estudio, lea la biblia',
    },
  }
}

export default function IndexPage(props) {
  const { title, description, keywords } = props

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <meta content="index,follow" name="robots" />

        <meta content={description} property="og:description" />
        <meta content="https://bibliaonline.es" property="og:url" />
      </Head>

      <Logo src="/svg/novo-logo.svg" alt="La Biblia Online" />
      <Pill>Disponible en Septiembre 2024</Pill>
      <Title>Lea la Biblia Sagrada desde su ordenador, movil o tablet.</Title>
      <Text>
        Creemos que la Biblia es una historia unificada que nos lleva a Jesús y
        nuestra misión es hacer que la historia bíblica sea accesible a todo el
        mundo, en cualquier lugar y de forma gratuita.
      </Text>
      <Form
        name="newsletter"
        // onSubmit={handleOnSubmit}
        action="https://bibliaonline.us6.list-manage.com/subscribe/post?u=b7957a6d11d56654e3ff3a0a8&amp;id=e8b52f5a93"
        method="POST"
        target="_blank"
      >
        <Input
          name="EMAIL"
          // value={email}
          type="email"
          placeholder="Tu correo electrónico"
          // onChange={updateEmail}
          isRequired
        />
        <Button>Mantenme al tanto</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Logo = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  /* padding: 5px; */
  /* border: 3px solid #50e3c2; */
  /* border-radius: 50%; */

  ${media.tablet`;
    /* margin-top: 30px; */
  `};
`

const Pill = styled.p`
  display: inline-block;
  background: #fff;
  border-radius: 3px;
  min-width: 135px;
  margin-top: 30px;
  padding: 2px 10px;
  line-height: 22px;
  height: 25px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #000;
`

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 3.25rem;
  letter-spacing: -1px;

  width: 80%;
`

const Text = styled.p`
  font-weight: 400;

  width: 100%;

  ${media.tablet`
    width: 80%;
  `};
`
