import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import Fetch from "../../../../FetchFunction";
import Loader from "../../../../components/Loader";
import Image from "../../../../components/Image";
import SocialIcon from "../../../../components/SocialIcon";
import { useRecoilState } from "recoil";
import { TestemonialsState } from "../../../../Recoil";

const Section = styled.section`
  margin: 0 auto 100px;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  & .carousel-root {
    max-width: 500px;
  }
  & .control-dots {
    margin: 50px 0 0 0;
    position: static;
    & .selected {
      background: var(--red);
    }
    & .dot {
      border-radius: 0;
      opacity: 1;
      width: 20px;
      height: 20px;
      &:focus {
        outline: none;
      }
    }
  }
`;

const Swipe = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & > figure:first-child {
    width: 50%;
    height: auto;
  }
`;

const LogoContainer = styled.aside`
  & a:last-child svg {
    margin: 0;
  }
`;

const Inded = () => {
  const [testemonials, setTestemonials] = useRecoilState(TestemonialsState);
  useEffect(() => {
    if (testemonials === null) {
      (async () => {
        const data = await Fetch("testemonials");
        const newData = [];
        for (const i in data) {
          const elm = data[i];
          const photoData = await Fetch(`assets/${elm.asset}`);
          data[i] = { ...elm, src: photoData.url };
        }
        setTestemonials(data);
      })();
    }
  }, []);

  return (
    <Section>
      {testemonials ? (
        <Carousel swipeable={false} showStatus={false} showArrows={false}>
          {testemonials.map((e, i) => {
            return (
              <Swipe key={i}>
                <Image src={e.src} alt="Testemonial Image" />
                <h3>{e.name}</h3>
                <p>{e.content}</p>
                <LogoContainer>
                  <SocialIcon icon={["fab", "facebook-square"]} href={e.facebook} />
                  <SocialIcon icon={["fab", "twitter-square"]} href={e.twitter} />
                  <SocialIcon icon={["fab", "google-plus-square"]} href="http://google.com" />
                </LogoContainer>
              </Swipe>
            );
          })}
        </Carousel>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default Inded;
