import { css } from "styled-components";
const underline = css`
  &::after {
    content: "";
    transition: all 0.3s;
    width: 150px;
    background: var(--red);
    height: 2px;
    border-radius: 50%;
    box-shadow: inset 0 0 3px 0 #000;
    position: absolute;
    bottom: -10px;
    transform: translateX(-50%);
    left: 50%;
  }
`;

export default underline;
