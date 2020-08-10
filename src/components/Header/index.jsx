import React from "react";
import HeaderHero from "./HeaderHero";
import Nav from "./Nav";
import { Route } from "react-router-dom";

const Header = ({}) => {
  return (
    <header>
      <Route exact path="/" component={HeaderHero} />
      <Nav />
    </header>
  );
};

export default Header;
