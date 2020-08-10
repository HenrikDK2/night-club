import React from "react";
import styled from "styled-components";

const InfoSection = styled.section``;

const InfoItem = styled.li`
  margin: 2rem 0;
  &:last-child {
    margin-bottom: 0;
  }
  & > p {
    text-transform: uppercase;
    font-weight: 500;
    margin: 0.875rem 0;
  }
`;
const InfoSectionFooter = () => {
  return (
    <InfoSection>
      <ul>
        <InfoItem>
          <h3>Location</h3>
          <p>PO Box 16122 Collins Street West Victoria 8007 Australia</p>
        </InfoItem>
        <InfoItem>
          <h3>Opening Hours</h3>
          <p>MON - FRI 9 AM TO 10 PM</p>
        </InfoItem>
        <InfoItem>
          <h3>Location</h3>
          <p>MON - FRI 2 PM TO 06 PM</p>
        </InfoItem>
      </ul>
    </InfoSection>
  );
};

export default InfoSectionFooter;
