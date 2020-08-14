import React, { useEffect } from "react";
import Index from "./pages/Index";
import Contact from "./pages/contact";
import Book from "./pages/book";
import BlogPost from "./pages/blog-post";
import BlogArchive from "./pages/blog-archive";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fetch from "./FetchFunction";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faFacebookSquare,
  faGooglePlusSquare,
  faSkype,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faBars,
  faTimes,
  faTwitterSquare,
  faFacebookSquare,
  faGooglePlusSquare,
  faArrowRight,
  faArrowLeft,
  faSkype,
  faBlogger
);

function App() {
  //Reset API
  useEffect(() => {
    (async () => {
      const data = await Fetch("assets/1");
      if (!data) {
        await Fetch("reset");
      }
    })();
  }, []);

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
