import React from "react";
import RoutesForHeader from "./Nav-items/Routes/Routes";
import HeaderLogo from "./Nav-items/Header-logo/HeaderLogo";
import HeaderLinkItems from "./Nav-items/Header-link-items/HeaderLinkItems";
import SearchForm from "./Nav-items/Search-form/SearchForm";

import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <HeaderLogo />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <HeaderLinkItems />
          <SearchForm />
        </Container>
      </Navbar>
      <RoutesForHeader /> 
    </div>
  );
};

export default Header;
