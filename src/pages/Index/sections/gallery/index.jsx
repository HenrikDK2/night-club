import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../../../../components/Heading";
import Fetch from "../../../../FetchFunction";
import border from "../../../../components/Border";
import Image from "../../../../components/Image";
import Loader from "../../../../components/Loader";
import CarouselComponent from "./CarouselComponent";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { GalleryPhotosState, GalleryCarouselState } from "../../../../Recoil";

const Section = styled.section`
  margin: 100px 0;
`;

const GridSection = styled.section`
  display: grid;
  max-width: 1400px;
  margin: 50px auto 0;
  grid-auto-flow: dense;
  & figure {
    width: 100%;
    height: 100%;
    overflow: hidden;
    grid-column: span 2;
  }

  & img {
    transition: all 0.7s;
  }

  & figure:hover {
    cursor: pointer;
    filter: brightness(40%);
    ${border};
    & img {
      transform: scale(1.5);
    }
  }

  & figure:nth-of-type(1) {
    animation: SlideInX 0.5s;
  }

  & figure:nth-of-type(2) {
    animation: SlideInX 0.6s;
  }
  & figure:nth-of-type(3) {
    animation: SlideInX 0.7s;
  }
  & figure:nth-of-type(4) {
    animation: SlideInX 0.8s;
  }
  & figure:nth-of-type(5) {
    animation: SlideInX 0.9s;
  }
  & figure:nth-of-type(6) {
    animation: SlideInX 1s;
  }
  & figure:nth-of-type(7) {
    animation: SlideInX 1.1s;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;

    & figure {
      grid-column: span 2;
    }

    & figure:nth-of-type(2),
    figure:nth-of-type(4) {
      grid-column: span 1;
    }
  }
`;

const Index = () => {
  const [galleryPhotos, setGalleryPhotos] = useRecoilState(GalleryPhotosState);
  const [carousel, setCarousel] = useRecoilState(GalleryCarouselState);
  const [ref, inView, entry] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  useEffect(() => {
    if (galleryPhotos === null) {
      (async () => {
        let data = await Fetch("gallery-photos").then((data) => data.slice(0, 7));
        for (const i in data) {
          const elm = data[i];
          const photoData = await Fetch(`assets/${elm.asset}`);
          data[i] = { ...elm, src: photoData.url };
        }
        setGalleryPhotos(data);
      })();
    }
  }, []);

  return (
    <Section>
      <Heading>Night club gallery</Heading>
      {galleryPhotos ? (
        <GridSection ref={ref}>
          {inView &&
            galleryPhotos.map((data, i) => {
              return (
                <Image
                  onClick={(e) => setCarousel({ ...carousel, index: i, isOpen: true })}
                  key={i}
                  src={data.src}
                  alt="Gallery Image"
                />
              );
            })}
          <CarouselComponent />
        </GridSection>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default Index;
