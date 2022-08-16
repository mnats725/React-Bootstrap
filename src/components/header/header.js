import React from "react";
import { Container, Navbar as BootstrapNavbar } from "react-bootstrap";

import { Logo } from "./logo";
import { Navbar } from "./navbar";
import { SearchForm } from "./search-form";

export const Header = () => (
  <BootstrapNavbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container>
      <Logo />
      <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar />
      <SearchForm />
    </Container>
  </BootstrapNavbar>
);
