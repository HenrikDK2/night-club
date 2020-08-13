import React from "react";
import styled from "styled-components";
import Form from "./sections/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../../components/Heading";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Info = styled.article`
  margin: 50px auto;
  background: var(--red);
  position: relative;
  max-width: 700px;
  box-sizing: border-box;
  max-height: 350px;
  padding: 2rem;
  &::after {
    content: "";
    border-top: 20px solid var(--red);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 900px) {
    margin: 1rem auto;
  }
`;

const Main = styled.main`
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1400px;

  @media (min-width: 900px) {
    & > section > section {
      justify-content: center;
      display: flex;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  & li {
    display: flex;
    align-items: flex-start;
    border-bottom: 2px solid #ff6195;
    padding: 1rem 0;
  }
  & p {
    padding-left: 2rem;
    margin: 0;
    font-weight: bold;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    & li {
      border: none;
      padding: 1rem;
    }
  }
`;

const contact = () => {
  return (
    <Main>
      <section>
        <Heading>Contact Us</Heading>
        <section>
          <Form />
          <Info>
            <Grid>
              <li>
                <Icon icon={faMapMarkerAlt} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tenetur,</p>
              </li>
              <li>
                <Icon icon={faMapMarkerAlt} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tenetur,</p>
              </li>
              <li>
                <Icon icon={faMapMarkerAlt} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tenetur,</p>
              </li>
              <li>
                <Icon icon={faMapMarkerAlt} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tenetur,</p>
              </li>
            </Grid>
          </Info>
        </section>
      </section>
    </Main>
  );
};

export default contact;
