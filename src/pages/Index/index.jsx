import React from "react";
import WelcomeSection from "./sections/welcome";
import EventsSection from "./sections/events";
import GallerySection from "./sections/gallery";
import MailSection from "./sections/mail";
import BlogSection from "./sections/blog";
import VideoSection from "./sections/video";

const Index = ({}) => {
  return (
    <main>
      <WelcomeSection />
      <EventsSection />
      <GallerySection />
      <VideoSection />
      <BlogSection />
      <MailSection />
    </main>
  );
};

export default Index;
