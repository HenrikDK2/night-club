import React from "react";
import styled from "styled-components";
import Index from "./pages";
import Contact from "./pages/contact";
import Book from "./pages/book";
import BlogPost from "./pages/blog-post";
import BlogArchive from "./pages/blog-archive";
import HeaderHero from "./components/HeaderHero";
import { BrowserRouter as Router, Route } from "react-router-dom";

const NavList = styled.ul``;

function App() {
  return (
    <Router>
      <header>
        <Route exact path="/" component={HeaderHero} />
        <NavList></NavList>
      </header>

      {/*All Pages*/}
      <Route exact path="/" component={Index} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Book" component={Book} />
      <Route exact path="/BlogPost" component={BlogPost} />
      <Route exact path="/BlogArchive" component={BlogArchive} />

      <footer></footer>
    </Router>
  );
}

export default App;
