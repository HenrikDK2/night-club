import React from "react";
import styled from "styled-components";
import footerBg from "../../assets/bg/footerbg.jpg";
import Logo from "../Logo";
import InfoSection from "./InfoSection";
import BottomSection from "./BottomSection";
import RecentPostSection from "./RecentPost";

const Footer = styled.footer`
  min-height: 600px;
  background-image: ${`url(${footerBg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & h3 {
    text-transform: uppercase;
    margin: 0;
    color: var(--red);
    letter-spacing: 0.075em;
  }
`;
const LogoSection = styled.section`
  @media (min-width: 750px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const FooterContent = styled.section`
  max-width: 1400px;
  display: grid;
  padding: 2rem 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 350px;

  @media (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 70px 350px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 400px 1fr;
    margin: 0 auto;
    grid-template-rows: 70px 350px 100px;
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      <FooterContent>
        <LogoSection>
          <Logo />
        </LogoSection>
        <InfoSection />
        <RecentPostSection />
        <BottomSection />
      </FooterContent>
    </Footer>
  );
};

export default FooterComponent;
