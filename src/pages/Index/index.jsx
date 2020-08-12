import React from "react";
import WelcomeSection from "./sections/welcome";
import EventsSection from "./sections/events";
import GallerySection from "./sections/gallery";
import MailSection from "./sections/mail";

const Index = ({}) => {
  return (
    <main>
      <WelcomeSection />
      <EventsSection />
      <GallerySection />
      <MailSection />
    </main>
  );
};

export default Index;
