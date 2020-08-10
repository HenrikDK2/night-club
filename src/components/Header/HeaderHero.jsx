import React, { useState } from "react";
import styled, { css } from "styled-components";
import ImageContainer from "../Image";
import headerImg from "../../assets/bg/header_bg_2.jpg";
import logoUnderline from "../../assets/bottom_line.png";
import Logo from "../Logo";
import headerImg2 from "../../assets/bg/header_bg_1.jpg";

const Article = styled.article`
  height: 630px;
  width: 100vw;
  position: relative;
`;
const ImageCss = css`
  width: 100%;
  height: 100%;
`;

const logoCss = css`
  width: 100%;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
`;

const underlineCss = css`
  width: 100%;
  & img {
    object-fit: contain;
  }
`;

const images = [headerImg, headerImg2];

const HeaderHero = ({}) => {
  const [index, setIndex] = useState(0);
  setTimeout(() => {
    let newIndex = index;
    newIndex++;
    if (index > images.length - 2) newIndex = 0;
    setIndex(newIndex);
  }, 7000);

  return (
    <Article>
      <ImageContainer css={ImageCss} src={images[index]} alt="Billed" />
      <LogoContainer>
        <Logo alt={true} customCss={logoCss} />
        <ImageContainer css={underlineCss} src={logoUnderline} alt="Logo underline" />
      </LogoContainer>
    </Article>
  );
};

export default HeaderHero;
