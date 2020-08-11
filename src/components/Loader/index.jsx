import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  @keyframes Loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  position: relative;
  width: 80px;
  height: 80px;
  background-color: none;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top: 5px solid var(--red);
  margin: 20px;
  animation: Loading 2s linear infinite;
  & span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border: 5px solid transparent;
    border-top: 5px solid var(--red);
    border-radius: 50%;
    margin: 2px;
    animation: Loading 2s linear infinite;
  }
`;

const index = ({}) => {
  return (
    <LoaderContainer>
      <span>
        <span></span>
      </span>
    </LoaderContainer>
  );
};

export default index;
