// import Link from 'next/link'
import styled from 'styled-components';
import { Container } from '@material-ui/core';
// import { Menu as MenuIcon } from '@material-ui/icons';

const Wrapper = styled.footer`
  margin-top: 60px;
  padding: 10px 0 50px;
  /* background: #fafafb; */
  box-shadow: 0 -1px 0 rgb(12 13 14 / 10%);
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
      Built by me!
      </Container>
    </Wrapper>
  );
}
