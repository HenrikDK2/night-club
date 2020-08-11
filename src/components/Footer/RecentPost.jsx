import React from "react";
import styled from "styled-components";
import Image from "../Image";
import recentSrc from "../../assets/content-img/recent_post1.jpg";
import recentSrc2 from "../../assets/content-img/recent_post2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Section = styled.section`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  @media (min-width: 750px) {
    grid-column: 2;
    grid-row: 2;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-self: Center;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: start;
  margin-top: 70px;

  &:nth-child(2) {
    margin-top: 30px;
  }

  &:last-child {
    margin-bottom: 30px;
  }
  & p {
    margin: 0;
  }
  & figure {
    width: 100px;
    height: auto;
    padding-right: 30px;
  }
  & p:last-child {
    color: var(--red);
    margin: 1rem 0 0 0;
  }
`;

const TwitterIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  margin: 0 1rem 0 0;
  color: var(--red);
`;

const RecentPost = () => {
  return (
    <Section>
      <ul>
        <li>
          <h3>Recent Posts</h3>
        </li>
        <Item>
          <aside>
            <Image src={recentSrc} alt="Recent Post Image" />
          </aside>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur
            </p>
            <p>April 17, 2018</p>
          </article>
        </Item>
        <Item>
          <aside>
            <Image src={recentSrc2} alt="Recent Post Image" />
          </aside>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur
            </p>
            <p>April 17, 2018</p>
          </article>
        </Item>
      </ul>

      <ul>
        <ul>
          <li>
            <h3>Recent Posts</h3>
          </li>
          <Item>
            <aside>
              <TwitterIcon icon={faTwitter} />
            </aside>
            <article>
              <p>It's a long blah... It's a long blah... It's a long blah... It's a long blah...</p>
              <p>April 17, 2018</p>
            </article>
          </Item>
          <Item>
            <aside>
              <TwitterIcon icon={faTwitter} />
            </aside>
            <article>
              <p>It's a long blah... It's a long blah... It's a long blah...</p>

              <p>April 17, 2018</p>
            </article>
          </Item>
        </ul>
      </ul>
    </Section>
  );
};

export default RecentPost;
