import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyCustomFont';
    src: url('/fonts/SUIT.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;