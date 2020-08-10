import React from "react";
import Image from "../Image";
import logoSrc from "../../assets/Logo.png";
import styled, { css } from "styled-components";

const imageCss = css`
  height: auto;
  width: 180px;
  & img {
    object-fit: contain;
  }
`;

const Logo = ({}) => {
  return <Image css={imageCss} src={logoSrc} alt="Logo" />;
};

export default Logo;
