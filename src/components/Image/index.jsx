import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const index = ({ src, alt, css, onClick }) => {
  const Container = styled.figure`
    flex-shrink: 0;
    width: 50px;
    margin: 0;
    height: 50px;
    ${css}
  `;
  return (
    <Container>
      <Img onClick={onClick} onDragStart={(e) => e.preventDefault()} alt={alt} src={src} />
    </Container>
  );
};

export default index;
