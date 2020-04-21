import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;
 }

  html, body, #root {
    height: 100%;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: "Roboto"!important;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
    color: initial;
  }
`;

export default GlobalStyle;
