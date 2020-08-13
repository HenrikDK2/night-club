import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "../../../../components/Image";
import Fetch from "../../../../FetchFunction";
import Loader from "../../../../components/Loader";
import Heading from "../../../../components/Heading";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { BlogsState } from "../../../../Recoil";

const Section = styled.section`
  box-sizing: Border-box;
  margin: 0 0 100px 0;
  padding: 0 1rem;
  & ul {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  & li {
    margin-bottom: 100px;
    max-width: 350px;
    & h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--text);
      margin: 2rem 0 0.5rem 0;
    }
    & figure {
      width: 100%;
      height: auto;
    }
    @media (min-width: 400px) {
      padding: 1rem;
    }
  }
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
`;

const BlogInfo = styled.p`
  color: var(--red);
  margin: 0;

  font-weight: 500;
  opacity: 0.7;
`;

const Index = () => {
  const [blogs, setBlogs] = useRecoilState(BlogsState);
  useEffect(() => {
    if (blogs === null) {
      (async () => {
        let dataArr = [];
        for (let i = 1; i < 4; i++) {
          const blog = await Fetch("blog-posts/" + i);
          const photoData = await Fetch(`assets/${blog.asset}`);
          dataArr = [{ ...blog, src: photoData.url }, ...dataArr];
        }
        setBlogs(await dataArr);
      })();
    }
  }, []);

  return (
    <Section>
      <Heading>Recent Blog</Heading>
      {blogs ? (
        <ul>
          {blogs.map((blog, i) => {
            const date = new Date(blog.createdAt);
            const year = date.getFullYear();
            const month = date.toLocaleString("default", { month: "short" });
            const day = date.getDay();
            let description = blog.content;
            if (description.length > 150) description = description.substring(0, 150) + "...";
            return (
              <li key={i}>
                <LinkContainer to={`/blogPost?id=${blog.id}`}>
                  <Image src={blog.src} alt="night club" />
                  <h3>{blog.title}</h3>
                  <BlogInfo>{`BY: ${blog.author} / 3 Comments / ${day} ${month} ${year}`}</BlogInfo>
                  <p>{description}</p>
                </LinkContainer>
              </li>
            );
          })}
        </ul>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default Index;
