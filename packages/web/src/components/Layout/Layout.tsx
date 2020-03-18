import React from 'react'
import styled from 'styled-components';

import GlobalStyle from '../../styles/default'
import media from '../../styles/functions/media';

export const Wrapper = styled.main`
  display: block;
  margin: auto;
  min-width: 320px;
  max-width: 100%;

  ${media.tablet`
    width: 940px;
  `};
`;


interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
)

export default Layout
