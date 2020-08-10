import React from "react";
import styled from "styled-components";
import footerBg from "../../assets/bg/footerbg.jpg";

const Footer = styled.footer`
  display: grid;
  min-height: 800px;
  background-image: ${`url(${footerBg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  grid-template-columns: 1fr;
  filter: brightness(10%);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const index = ({}) => {
  return (
    <Footer>
      <List></List>
    </Footer>
  );
};

export default index;
