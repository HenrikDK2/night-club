import React from "react";
import Image from "../Image";
import logoSrc from "../../assets/icon/Logo_main.svg";
import logoSrc2 from "../../assets/icon/Logo.svg";
import { css } from "styled-components";

const Logo = ({ alt, customCss }) => {
  const imageCss = css`
    height: auto;
    width: 180px;
    & img {
      object-fit: contain;
    }
    ${customCss}
  `;
  return <Image css={imageCss} src={alt ? logoSrc2 : logoSrc} alt="Logo" />;
};

export default Logo;
