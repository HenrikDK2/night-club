import React from "react";
import WelcomeSection from "./sections/welcome";
import EventsSection from "./sections/events";
import GallerySection from "./sections/gallery";

const Index = ({}) => {
  return (
    <main>
      <WelcomeSection />
      <EventsSection />
      <GallerySection />
    </main>
  );
};

export default Index;
