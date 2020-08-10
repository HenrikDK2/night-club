import React from "react";
import styled, { css } from "styled-components";
import ImageContainer from "../Image";
import headerImg from "../../assets/bg/header_bg_2.jpg";
import headerImg2 from "../../assets/bg/header_bg_1.jpg";

const Article = styled.article`
  height: 630px;
  width: 100vw;
`;
const ImageCss = css`
  width: 100%;
  height: 100%;
`;

const index = ({}) => {
  return (
    <Article>
      <ImageContainer css={ImageCss} src={headerImg} alt="Billed" />
    </Article>
  );
};

export default index;
