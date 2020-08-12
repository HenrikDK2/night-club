import React from "react";
import styled from "styled-components";
import Icon from "../SocialIcon";

const LogoContainer = styled.div`
  display: flex;
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
        <Icon icon={["fab", "facebook-square"]} href="http://facebook.com" />
        <Icon icon={["fab", "twitter-square"]} href="http://twitter.com" />
        <Icon icon={["fab", "google-plus-square"]} href="http://google.com" />
        <Icon icon={["fab", "skype"]} href="http://skype.com" />
        <Icon icon={["fab", "blogger"]} href="http://blogger.com" />
      </LogoContainer>
      <p>CopyRight © 2018 NightClub psd template all right</p>
    </Section>
  );
};

export default BottomSection;
