import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  :root {
    --primary-color: #34CB79;
    --title-color: #322153;
    --text-color: #6C6C80;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${ props => props.theme.colors.background };
    -webkit-font-smoothing: antialiased;
    color: ${ props => props.theme.colors.text };
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${ props => props.theme.colors.primary };
    font-family: Ubuntu;
  }
`;
