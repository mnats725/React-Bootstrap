import React from "react";
import { Navbar } from "react-bootstrap";

import logo from "./assets/logo.png";

export const Logo = () => (
  <div>
    <Navbar.Brand href="/">
      <img src={logo} height="30" width="30" className="d-inline-block align-top" alt="Logo" />
    </Navbar.Brand>
  </div>
);
