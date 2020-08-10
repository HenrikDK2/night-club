import React from "react";
import styled from "styled-components";
import Image from "../Image";

const Link = styled.a`
  text-decoration: none;
`;

const LogoContainer = styled.div`
  display: flex;
  & figure {
    margin: 0 20px 0 0;
  }
`;
const Section = styled.section``;

const BottomSection = () => {
  return (
    <Section>
      <p>Stay Connected With Us Night Club</p>
      <LogoContainer>
        <Link href="facebook.com">
          <Image />
        </Link>{" "}
        <Link href="twitter.com">
          <Image />
        </Link>{" "}
        <Link href="google.com">
          <Image />
        </Link>{" "}
        <Link href="skype.com">
          <Image />
        </Link>{" "}
        <Link href="google.com">
          <Image />
        </Link>
      </LogoContainer>
      <p>CopyRight &copy 2018 NightClub psd template all right</p>
    </Section>
  );
};

export default BottomSection;
