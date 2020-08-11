import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link = styled.a`
  text-decoration: none;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0 20px 0 0;
  font-size: 2.5rem;
  text-decoration: none;
  color: var(--text);
  @media (min-width: 1000px) {
    margin: 0 20px;
  }
`;
const Section = styled.section`
  @media (min-width: 750px) {
    grid-column: 1;
    grid-row: 3;
  }
  @media (min-width: 1000px) {
    grid-column: 1/-1;
    justify-self: Center;
    margin-top: 150px;
    padding-bottom: 50px;
    grid-row: 3;
    display: flex;
    justify-content: center;
    align-items: Center;
  }
`;

const BottomSection = () => {
  return (
    <Section>
      <p>Stay Connected With Us Night Club</p>
      <LogoContainer>
        <Link href="facebook.com">
          <Icon icon={["fab", "facebook-square"]} />
        </Link>{" "}
        <Link href="twitter.com">
          <Icon icon={["fab", "twitter-square"]} />
        </Link>{" "}
        <Link href="google.com">
          <Icon icon={["fab", "google-plus-square"]} />
        </Link>{" "}
        <Link href="skype.com">
          <Icon icon={["fab", "skype"]} />
        </Link>{" "}
        <Link href="blogger.com">
          <Icon icon={["fab", "blogger"]} />
        </Link>
      </LogoContainer>
      <p>CopyRight © 2018 NightClub psd template all right</p>
    </Section>
  );
};

export default BottomSection;
