import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100%;
  margin-top: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 1rem 0;
  cursor: pointer;
  box-sizing: border-box;
  color: var(--text);
  border: none;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  background: transparent;
  &:focus,
  &:active {
    outline: none;
  }
`;

const index = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default index;
