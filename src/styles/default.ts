import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'PT Serif', serif;
    /* background-color: #50e3c2; */
    background: #222222 url("https://www.bibliaonline.me/wp-content/uploads/2017/06/murray-campbell-29990.png") no-repeat center center fixed;
    background-size: cover;
    color: #50e3c2;
    /* color: #5C22FF; */

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  p {
    line-height: 1.8em;
  }
`;

export default GlobalStyle;
