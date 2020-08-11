import React from "react";
import styled from "styled-components";
import underlineStyle from "../../../../components/altUnderline";
import Image from "../../../../components/Image";
import border from "../../../../components/Border";
import reastaurantSrc from "../../../../assets/content-img/reastaurant_1.jpg";
import favicon from "../../../../assets/icon/favicon.png";

const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin-bottom: 50px;
  & > span {
    color: var(--red);
  }
  ${underlineStyle}
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: Center;
  align-items: center;
  & li {
    transition: 1s all;
    margin: 20px;
    position: relative;
    & > figure {
      width: 100%;
      height: auto;
    }
    &:hover {
      & > aside {
        opacity: 1;
      }
    }
  }
`;

const HoverContent = styled.aside`
  left: 0;
  background: #000;
  opacity: 0;
  transition: 1s all;
  top: 0;
  height: 100%;

  position: absolute;
  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: Center;
    height: 100%;
    padding: 100px 2rem;
    user-select: none;
    box-sizing: border-box;
    ${border}

    & > figure {
      border: 3px solid var(--red);
      padding: 2rem;
      border-radius: 5px;
    }
  }

  & h3 {
    text-align: center;
  }
`;

const Section = styled.section`
  margin: 70px 0;
`;

const WelcomeSection = () => {
  return (
    <Section>
      <Heading>
        Welcome in night<span>club</span>
      </Heading>

      <List>
        {["", "", ""].map((_, i) => {
          return (
            <li key={i}>
              <HoverContent>
                <section>
                  <Image src={favicon} alt="Nightclub favicon" />
                  <h3>Night club</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque
                    sequi, minus, tempore et, commodi quibusdam perspiciatis veniam harum fugit
                    atque ullam cupiditate? Fugiat provident libero, natus placeat laborum possimus!
                  </p>
                </section>
              </HoverContent>
              <Image src={reastaurantSrc} alt="Image" />
            </li>
          );
        })}
      </List>
    </Section>
  );
};

export default WelcomeSection;
