import React from "react";
import { Nav, Col } from "react-bootstrap";

export const Tabs = () => (
  <Col sm={3}>
    <Nav variant="pills" className="flex-column mt-3">
      <Nav.Item>
        <Nav.Link eventKey="first">Ronats</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Team</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">Programming</Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
);
