import React, { useRef } from "react";
import styled from "styled-components";
import Heading from "../../../../components/Heading";
import { Carousel } from "react-responsive-carousel";
import video from "../../../../assets/media/space.mp4";
import border from "../../../../components/Border";
import Image from "../../../../components/Image";
import buttonSrc from "../../../../assets/icon/Play_btn.svg";

const Section = styled.section`
  margin: 0 auto 100px;
  max-width: 950px;
  padding: 0 1rem;
  box-sizing: border-box;
  & > article {
    position: relative;

    ${border}
  }

  & li {
    cursor: pointer;

    & figure {
      z-index: 10;
      transition: 1s all;
      position: absolute;
      left: 50%;
      width: 100px;
      height: auto;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    &:hover {
      & figure {
        opacity: 1;
      }
    }
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
      <article>
        <Carousel showIndicators={false} showStatus={false}>
          {["", ""].map((_, i) => {
            return (
              <div
                key={i}
                onClick={(e) => {
                  const video = e.currentTarget.lastChild;
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }}
              >
                <Image src={buttonSrc} />
                <Swipe>
                  <source src={video} type="video/mp4" />
                </Swipe>
              </div>
            );
          })}
        </Carousel>
      </article>
    </Section>
  );
};

export default index;
