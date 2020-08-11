import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Heading from "../../../../components/Heading";
import Fetch from "../../../../FetchFunction";

const Section = styled.section`
  margin: 100px 0;
`;

const GridSection = styled.section`
  display: grid;
`;

const Index = ({}) => {
  const [galleryPhotos, setGalleryPhotos] = useState(null);

  useEffect(() => {
    (async () => {
      let data = await Fetch("gallery-photos");

      for (const elm of data) {
        //const photoData = await Fetch("assets/" + elm.asset);
        console.log(elm);
        //console.log(photoData);
      }
    })();
  }, []);

  return (
    <Section>
      <Heading>Night club gallery</Heading>
      <GridSection></GridSection>
    </Section>
  );
};

export default Index;
