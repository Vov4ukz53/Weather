import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background: url(${background}) 0 0 no-repeat ;
    background-size: cover;
    height: 100vh;
  }
`;