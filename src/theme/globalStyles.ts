import { createGlobalStyle } from "styled-components";
import { light } from "./theme";

const GlobalStyle = createGlobalStyle`
   *,*::before,*::after{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'roboto', sans-serif;
    overflow-x: hidden;
    background-color: ${light.body};
    color: #000;
    background-image: url('../assets/bg.avif');
  }
  h1,h2,h3,h4 ,h5 ,h6{
    margin: 0;
    padding: 0;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
