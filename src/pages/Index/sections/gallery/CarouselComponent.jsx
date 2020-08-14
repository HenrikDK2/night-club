import React from "react";
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
  & > button:last-child {
    margin-left: auto;
    width: 100px;
  }
  & > figure:first-child {
    width: auto;
    height: auto;
  }
  & > section {
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    & h3 {
      margin-bottom: 0;
    }
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

const ArrowButtonRight = styled(FontAwesomeIcon)`
  border: 2px solid #fff;
  padding: 1rem;
  position: absolute;
  right: 100px;
  top: 95%;
  transform: translateY(-50%);
  cursor: pointer;
  @media (min-width: 1000px) {
    top: 50%;
  }
`;

const ArrowButtonLeft = styled(FontAwesomeIcon)`
  border: 2px solid #fff;
  position: absolute;
  left: 100px;
  top: 95%;
  transform: translateY(-50%);
  padding: 1rem;
  cursor: pointer;
  @media (min-width: 1000px) {
    top: 50%;
  }
`;

const CarouselComponent = () => {
  const galleryPhotos = useRecoilValue(GalleryPhotosState);
  const [carousel, setCarousel] = useRecoilState(GalleryCarouselState);
  const data = galleryPhotos[carousel.index];

  const calculateIndex = (isRightArrow) => {
    let index = carousel.index;
    if (isRightArrow) {
      index++;
      if (index > galleryPhotos.length - 1) index = 0;
    } else {
      index--;
      if (index < 0) index = galleryPhotos.length - 1;
    }
    setCarousel({ ...carousel, index });
  };

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
              <ArrowButtonRight
                onClick={(e) => calculateIndex(true)}
                icon={["fa", "arrow-right"]}
              />
              <ArrowButtonLeft onClick={(e) => calculateIndex(false)} icon={["fa", "arrow-left"]} />
              <Button>Read More</Button>
            </section>
          </GalleryArticle>
        </ModalCarousel>
      )}
    </>
  );
};

export default CarouselComponent;
