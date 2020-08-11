import React from "react";
import styled from "styled-components";
import underlineStyle from "../altUnderline";

const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin-bottom: 50px;
  ${underlineStyle}
`;
const index = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export default index;
