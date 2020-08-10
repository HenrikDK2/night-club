import React from "react";
import Index from "./pages";
import Contact from "./pages/contact";
import Book from "./pages/book";
import BlogPost from "./pages/blog-post";
import BlogArchive from "./pages/blog-archive";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faTimes);

function App() {
  return (
    <Router>
      <Header />

      {/*All Pages*/}
      <Route exact path="/" component={Index} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Book" component={Book} />
      <Route exact path="/BlogPost" component={BlogPost} />
      <Route exact path="/BlogArchive" component={BlogArchive} />

      <Footer />
    </Router>
  );
}

export default App;
