import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../../../img/logo.png";

const NavbarBrand = () => (
  <div>
    <Navbar.Brand href="/">
      <img
        src={logo}
        height="30"
        width="30"
        className="d-inline-block align-top"
        alt="Logo"
      ></img>
    </Navbar.Brand>
  </div>
);

export default NavbarBrand;
