import React from "react";
import Blog from "./sections/blog";

const BlogPost = ({ location }) => {
  return (
    <main>
      <Blog location={location} />
    </main>
  );
};

export default BlogPost;
