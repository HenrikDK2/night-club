// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --bgColor: #030203;
    --red: #ff2a70;
    --grey: #e0e0e0;
    --text: #fff;
  }
  body {
    margin: 0;
    padding: 0;
    color: var(--text);
    font-family: 'Ubuntu', sans-serif;
    background: var(--bgColor);
  }

  ul{
    list-style:none;
    margin:0; padding:0;
  }

  h3, h4, h5, h6{
    line-height: 1.1;font-weight: 500;text-transform: uppercase;
  }

  p{
    color: var(--grey);font-size: 15px; line-height: 25px;
  }
`;

export default GlobalStyle;
