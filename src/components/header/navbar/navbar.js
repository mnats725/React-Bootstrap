import React from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <div>
    <BootstrapNavbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About us
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contacts
        </Nav.Link>
        <Nav.Link as={Link} to="/blog">
          Blog
        </Nav.Link>
      </Nav>
    </BootstrapNavbar.Collapse>
  </div>
);
