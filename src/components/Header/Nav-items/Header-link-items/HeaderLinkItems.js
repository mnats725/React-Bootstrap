import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const HeaderLinkItems = () => (
  <div>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About us</Nav.Link>
        <Nav.Link href="/contact">Contacts</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </div>
);

export default HeaderLinkItems;
