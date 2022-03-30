import styled from 'styled-components'

import media from '../../styles/functions/media'

export const Wrapper = styled.main`
  display: block;
  margin: 0 auto;
  min-width: 320px;
  box-sizing: border-box;
  padding: 20px;

  ${media.tablet`
    width: 100%;
    max-width: 600px;
  `};
`

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Wrapper>{children}</Wrapper>
)

export default Layout
