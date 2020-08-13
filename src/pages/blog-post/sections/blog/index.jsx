import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../../../../components/Heading";
import Loader from "../../../../components/Loader";
import Fetch from "../../../../FetchFunction";
import Image from "../../../../components/Image";

const Section = styled.section`
  & > h2 {
    margin: 100px 0 150px;
  }
  & > figure:nth-of-type(1) {
    width: 100%;
    height: auto;
  }
  & h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text);
    margin: 2rem 0 0.5rem 0;
  }
`;

const BlogInfo = styled.p`
  color: var(--red);
  margin: 0;
  font-weight: 500;
  opacity: 0.7;
`;

const BlogJSX = ({ blog }) => {
  const date = new Date(blog.createdAt);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDay();
  const description = blog.content;
  return (
    <>
      <Image src={blog.src} alt="Blog Image" />
      <h3>{blog.title}</h3>
      <BlogInfo>{`BY: ${blog.author} / 3 Comments / ${day} ${month} ${year}`}</BlogInfo>
      <p>{description}</p>
    </>
  );
};
const Index = ({ id }) => {
  const [blog, setBlog] = useState(null);

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
      {blog ? <BlogJSX blog={blog} /> : <Loader />}
    </Section>
  );
};

export default Index;
