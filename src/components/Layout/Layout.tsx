import React from 'react'

import GlobalStyle from '../../styles/default'
import * as Styles from './Layout.styled'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <Styles.Wrapper>
    <GlobalStyle />
    {children}
  </Styles.Wrapper>
)

export default Layout
