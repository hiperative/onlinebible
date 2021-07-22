import { createGlobalStyle } from 'styled-components'
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: ${theme.colors.turquoise};
    color: ${theme.colors.black};
  }

  body {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.sans};
    margin: 0px;
  }
`;
