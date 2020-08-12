import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Image from "../../../../components/Image";
import Button from "../../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GalleryCarouselState, GalleryPhotosState } from "../../../../Recoil";
import { useRecoilState, useRecoilValue } from "recoil";

const ModalCarousel = styled(Modal)`
  background: rgba(0, 0, 0, 0.4);
`;
const GalleryArticle = styled.article`
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  & > figure:first-child {
    width: auto;
    height: auto;
  }
  & > section {
    padding: 0 1rem;
    box-sizing: border-box;
  }
  & button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 600px) {
    padding: 2rem 5rem 0;
    & button {
      max-width: 100px;
      margin-left: auto;
    }
  }
`;

const Exit = styled(FontAwesomeIcon)`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: var(--red);
`;

const CarouselComponent = () => {
  const galleryPhotos = useRecoilValue(GalleryPhotosState);
  const [carousel, setCarousel] = useRecoilState(GalleryCarouselState);
  const data = galleryPhotos[carousel.index];
  return (
    <>
      {galleryPhotos && (
        <ModalCarousel isOpen={carousel.isOpen}>
          <GalleryArticle>
            <Image src={data.src} alt="Gallery Image" />
            <Exit
              icon={["fa", "times"]}
              onClick={(e) => setCarousel({ ...carousel, isOpen: false })}
            />
            <section>
              <h3>Night club party</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque sequi,
                laboriosam mollitia provident placeat illo, veniam neque ea quia suscipit
                accusantium itaque, magnam quis ratione iure porro fugiat facilis! Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Magnam, ullam aliquid. Distinctio veniam
                unde possimus ea assumenda, sed quibusdam quas impedit vel laboriosam dolor beatae.
                Voluptatem, commodi reiciendis! Fugit, beatae?
              </p>
              <Button>Read More</Button>
            </section>
          </GalleryArticle>
        </ModalCarousel>
      )}
    </>
  );
};

export default CarouselComponent;
