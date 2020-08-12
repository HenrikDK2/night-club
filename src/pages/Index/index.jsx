import React from "react";
import WelcomeSection from "./sections/welcome";
import EventsSection from "./sections/events";
import GallerySection from "./sections/gallery";
import MailSection from "./sections/mail";
import BlogSection from "./sections/blog";
import VideoSection from "./sections/video";
import TestemonialsSection from "./sections/testemonials";

const Index = () => {
  return (
    <main>
      <WelcomeSection />
      <EventsSection />
      <GallerySection />
      <TestemonialsSection />
      <VideoSection />
      <BlogSection />
      <MailSection />
    </main>
  );
};

export default Index;
