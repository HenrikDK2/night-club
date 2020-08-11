import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const List = ({ css }) => {
  const UlList = styled.ul`
    padding: 50px;
    box-sizing: border-box;
    ${css}
  `;
  return (
    <UlList>
      <ListItem siteName="Home" url="/" />
      <ListItem siteName="Book" url="/book" />
      <ListItem siteName="About Us" url="/" />
      <ListItem siteName="Blog" url="/blog" />
      <ListItem siteName="Events" url="/" />
      <ListItem siteName="Gallery" url="/" />
      <ListItem siteName="Book" url="/book" />
      <ListItem siteName="Contact Us" url="/contact" />
    </UlList>
  );
};

export default List;
