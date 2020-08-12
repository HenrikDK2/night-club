import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import border from "../../../../components/Border";
import Heading from "../../../../components/Heading";
import Image from "../../../../components/Image";
import Fetch from "../../../../FetchFunction";
import Loader from "../../../../components/Loader";

const Section = styled.section`
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  & figure {
    width: 100%;
    height: 100%;
  }
`;

const TimeContainer = styled.aside`
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  bottom: 0;
  width: 100%;
  left: 0;
  background: var(--red);
  position: absolute;
  z-index: 2;
  & p {
    margin: 0;
  }
`;

const ClubInfo = styled.article`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  animation: InfoOut 0.3s;
  position: absolute;
  bottom: 40px;
  left: 0;
  text-align: left;
  padding: 1rem;
  & h3,
  p {
    font-size: 0.875rem;
    margin: 10px 0 0 0;
  }
`;

const Container = styled.article`
  max-width: 500px;
  position: relative;
`;

const InfoContainer = styled.article`
  ${border}
  transition: 0.3s all;
  top: 0;
  opacity: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  position: absolute;
  &::before {
    animation: InfoOut 0.3s;
    bottom: 39px;
  }

  &::after {
    animation: slideOut 0.3s;
  }

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.4);
    & button {
      animation: slideIn 0.3s;
    }
    & ${ClubInfo} {
      animation: InfoIn 0.3s;
    }
    &::after {
      animation: slideIn 0.3s;
    }

    &::before {
      animation: InfoIn 0.3s;
      z-index: 20;
    }
  }

  & button {
    font-weight: bold;
    color: var(--text);
    background: var(--red);
    border: none;
    animation: slideOut 1s;
    box-sizing: content-box;
    padding: 1rem 1.25rem;
    margin-top: 70px;
    cursor: pointer;
  }
`;

const Index = ({}) => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    (async () => {
      let data = await Fetch("events");
      for (const i in data) {
        const elm = data[i];
        const photoData = await Fetch(`assets/${elm.asset}`);
        data[i] = { ...elm, src: photoData.url };
      }
      setEvents(data);
    })();
  }, []);

  return (
    <Section>
      <Heading>events of the month</Heading>
      {events ? (
        <Carousel showThumbs={false} showArrows={false} showStatus={false}>
          {events.map((e, i) => {
            const date = new Date(e.eventDate);
            const month = date.toLocaleString("default", { month: "short" });
            const day = date.getDay();
            let description = e.eventDescription;
            if (description.length > 150) description = description.substring(0, 150);
            return (
              <Swipe key={i}>
                <Container>
                  <InfoContainer>
                    <button>Book Now</button>
                    <ClubInfo>
                      <h3>Night club</h3>
                      <p>{description}</p>
                    </ClubInfo>
                  </InfoContainer>
                  <Image src={e.src} alt="Event billed" />
                  <TimeContainer>
                    <p>{`${month} ${day}`}</p>
                    <p>22:00 PM</p>
                    <p>{e.location}</p>
                  </TimeContainer>
                </Container>
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

export default Index;
