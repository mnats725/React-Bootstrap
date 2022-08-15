import React from "react";
import RoutesForHeader from "./Routes/Routes";
import NavbarBrand from "./Navbar-brand/NavbarBrand";
import NavbarCollapse from "./Navbar-collapse/NavbarCollapse";
import SearchForm from "./Search-form/SearchForm";

import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <NavbarBrand />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse />
          <SearchForm />
        </Container>
      </Navbar>
      <RoutesForHeader />
    </div>
  );
};

export default Header;
