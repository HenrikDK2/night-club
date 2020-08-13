import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../../../components/Loader";
import Fetch from "../../../../FetchFunction";
import Image from "../../../../components/Image";
import Reply from "../../../../components/Button";

const Section = styled.section`
  padding: 0 1rem;
  margin: 80px 0 0 0;
  & > h3 {
    font-size: 2rem;
  }
`;

const Comment = styled.li`
  margin: 2rem 0;
  & > figure:nth-of-type(1) {
    width: 100px;
    height: 100px;
    padding-right: 20px;
    float: left;
  }
  & > button {
    width: 120px;
    margin: 0 0 0 auto;
    display: block;
  }
`;

const ProfileName = styled.h3`
  text-transform: capitalize;
  & > span {
    color: var(--red);
    font-size: 0.875rem;
  }
`;

const Index = ({ id }) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await Fetch(`blog-posts/${id}/comments`);
      setComments(data);
    })();
  }, []);

  if (!comments) return <Loader />;

  return (
    <Section>
      <h3>{comments.length} comments</h3>
      <ul>
        <Comment>
          <Image src={"https://via.placeholder.com/400x400"} alt="Profile picture" />
          <ProfileName>
            Test Name - <span>Posted 03 Jan 2018</span>
          </ProfileName>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni fuga nobis dolore
            aut exercitationem molestias est voluptatibus consectetur nihil qui repellendus, minima
            quibusdam sunt porro mollitia aspernatur similique quidem.
          </p>
          <Reply>Reply</Reply>
        </Comment>
      </ul>
    </Section>
  );
};

export default Index;
