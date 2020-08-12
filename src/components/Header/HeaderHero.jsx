import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ImageContainer from "../Image";
import Underline from "../Underline";
import headerImg from "../../assets/bg/header_bg_2.jpg";
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

const SubHeading = styled.h3`
  text-align: center;
  font-size: 12px;
  letter-spacing: 8px;
  white-space: nowrap;
`;

const customUnderline = css`
  margin: -25px 0 0 0;
`;

const AnimationContainer = styled.div``;

const images = [headerImg, headerImg2];

const HeaderHero = () => {
  const [index, setIndex] = useState(Math.round(Math.random()));
  useEffect(() => {
    setInterval(() => {
      let newIndex = index;
      newIndex++;
      if (index > images.length - 2) newIndex = 0;
      setIndex(newIndex);
    }, 7000);
  }, []);

  return (
    <Article>
      <ImageContainer css={ImageCss} src={images[index]} alt="Billed" />
      <LogoContainer>
        <Logo alt={true} customCss={logoCss} />
        <AnimationContainer>
          <SubHeading>have a good time</SubHeading>
          <Underline customCss={customUnderline} />
        </AnimationContainer>
      </LogoContainer>
    </Article>
  );
};

export default HeaderHero;
