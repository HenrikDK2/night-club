import React from "react";
import { css } from "styled-components";
import Image from "../Image";
import underlineSrc from "../../assets/bottom_line.png";

const index = ({ customCss }) => {
  const underlineCss = css`
    width: 100%;
    & img {
      object-fit: contain;
    }
    ${customCss}
  `;
  return <Image css={underlineCss} src={underlineSrc} alt="Underline" />;
};

export default index;
