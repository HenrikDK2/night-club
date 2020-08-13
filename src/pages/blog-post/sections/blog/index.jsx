import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../../../../components/Heading";
import Loader from "../../../../components/Loader";
import Fetch from "../../../../FetchFunction";
import queryString from "query-string";
import Image from "../../../../components/Image";

const Section = styled.section`
  padding: 0 1rem;
  box-sizing: border-box;
  & > figure:nth-of-type(1) {
    width: 100%;
    height: auto;
  }
`;

const Index = ({ location }) => {
  const [blog, setBlog] = useState(null);
  const { id } = queryString.parse(location.search);

  useEffect(() => {
    if (blog === null) {
      (async () => {
        const blog = await Fetch("blog-posts/" + id);
        const photoData = await Fetch(`assets/${blog.asset}`);
        setBlog(await { ...blog, src: photoData.url });
      })();
    }
  }, []);

  return (
    <Section>
      {" "}
      <Heading>Blog Post</Heading>
      {blog ? (
        <>
          <Image src={blog.src} alt="Blog Image" />
        </>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default Index;
