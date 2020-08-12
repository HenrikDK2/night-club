import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0 20px 0 0;
  font-size: 2.5rem;
  text-decoration: none;
  color: var(--text);
`;
const index = ({ href, icon }) => {
  return (
    <Link href={href}>
      <Icon icon={icon} />
    </Link>
  );
};

export default index;
