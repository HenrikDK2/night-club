import React from "react";
import Blog from "./sections/blog";
import Comments from "./sections/comments";
import Form from "./sections/form";
import styled from "styled-components";
import queryString from "query-string";

const Main = styled.main`
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1400px;
`;

const BlogPost = ({ location }) => {
  const { id } = queryString.parse(location.search);

  window.scrollTo(0, 0);
  return (
    <Main>
      <Blog id={id} />
      <Comments id={id} />
      <Form id={id} />
    </Main>
  );
};

export default BlogPost;
