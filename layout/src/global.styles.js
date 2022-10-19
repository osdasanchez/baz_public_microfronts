import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #app {
    height: 100%
  }

  body, html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;

  }

  ul, li, ol {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none !important;
    color: black;
  }

  :root {
    --swiper-theme-color: #01AD35;
    //overflow: auto;
    --swiper-navigation-color: #01AD35;
  }

`;