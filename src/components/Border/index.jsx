import { css } from "styled-components";

const border = css`
  border: 1px solid var(--red);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-right: 50px solid transparent;
    border-left: 50px solid var(--red);
    border-bottom: 50px solid transparent;
    z-index: 5;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid var(--red);
    border-top: 50px solid transparent;
    z-index: 5;
  }
`;

export default border;
