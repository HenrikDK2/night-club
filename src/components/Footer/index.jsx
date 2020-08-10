import React from "react";
import styled from "styled-components";
import footerBg from "../../assets/bg/footerbg.jpg";
import Logo from "../Logo";
import InfoSection from "./InfoSection";
import BottomSection from "./BottomSection";
import RecentPostSection from "./RecentPost";

const Footer = styled.footer`
  display: grid;
  min-height: 800px;
  background-image: ${`url(${footerBg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 350px;
  & h3 {
    text-transform: uppercase;
    margin: 0;
    color: var(--red);
    letter-spacing: 0.075em;
  }
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
const LogoSection = styled.section``;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FooterComponent = ({}) => {
  return (
    <Footer>
      <LogoSection>
        <Logo />
      </LogoSection>
      <InfoSection />
      <RecentPostSection />
      <BottomSection />
    </Footer>
  );
};

export default FooterComponent;
