// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @keyframes slideIn{
    0%{transform:translateY(-300px)}
    100%{transform:translateY(0)}
  }

  @keyframes slideOut{
    0%{transform:translateY(0)}
    100%{transform:translateY(-300px)}
  }

  @keyframes InfoIn{
    0%{transform:translateY(300px)}
    100%{transform:translateY(0)}
  }
  @keyframes InfoOut{
    0%{transform:translateY(0)}
    100%{transform:translateY(300px)}
  }
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

   .ReactModal__Overlay {
    z-index: 122 !important;
  }
`;

export default GlobalStyle;
