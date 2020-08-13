import React from "react";
import Blog from "./sections/blog";
import Comments from "./sections/comments";

const BlogPost = ({ location }) => {
  return (
    <main>
      <Blog location={location} />
      <Comments />
    </main>
  );
};

export default BlogPost;
