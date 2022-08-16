import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../../../assets/img/logo.png";

const HeaderLogo = () => (
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

export default HeaderLogo;
