import { atom } from "recoil";

export const IsMenuOpenState = atom({
  key: "IsMenuOpenState",
  default: false,
});

export const EventsState = atom({
  key: "EventsState",
  default: null,
});

export const GalleryPhotosState = atom({
  key: "GalleryPhotosState",
  default: null,
});

export const TestemonialsState = atom({
  key: "TestemonialsState",
  default: null,
});

export const BlogsState = atom({
  key: "BlogState",
  default: null,
});

export const GalleryCarouselState = atom({
  key: "GalleryCarouselState",
  default: {
    isOpen: false,
    index: 1,
  },
});
