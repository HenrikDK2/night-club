import React from "react";
import styled from "styled-components";
import Heading from "../../../../components/Heading";
import { Carousel } from "react-responsive-carousel";
import video from "../../../../assets/media/space.mp4";
import border from "../../../../components/Border";

const Section = styled.section`
  margin: 0 auto 100px;
  max-width: 700px;
  padding: 0 1rem;
  box-sizing: border-box;

  & li {
    ${border}
    position: relative;
    padding-bottom: 56.25%;
  }
`;

const Swipe = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const index = () => {
  return (
    <Section>
      <Heading>Latest Video</Heading>
      <Carousel showIndicators={false} showStatus={false}>
        {["", ""].map((_, i) => {
          return (
            <Swipe controls key={i}>
              <source src={video} type="video/mp4" />
            </Swipe>
          );
        })}
      </Carousel>
    </Section>
  );
};

export default index;
