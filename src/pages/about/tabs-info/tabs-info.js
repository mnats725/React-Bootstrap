import React from "react";
import { Tab, Col } from "react-bootstrap";

import ronats from "./assets/ronats.jpg";
import team from "./assets/team.jpg";
import prog from "./assets/program.png";

export const TabsInfo = () => (
  <Col sm={9}>
    <Tab.Content className="mt-3">
      <Tab.Pane eventKey="first">
        <img className="rounded mx-auto d-block" src={ronats} alt="/" height="300" width="300" />
        <p className="mt-3">
          Ronats is a start-up that aims to recruit a team for collaborative web application development
        </p>
      </Tab.Pane>
      <Tab.Pane eventKey="second">
        <img className="rounded mx-auto d-block" src={team} alt="/" height="400" width="700" />
        <p className="mt-3">
          Ronats is a start-up that aims to recruit a team for collaborative web application development
        </p>
      </Tab.Pane>
      <Tab.Pane eventKey="third">
        <img className="rounded mx-auto d-block" src={prog} alt="/" height="320" width="700" />
        <p className="mt-3">
          Ronats is a start-up that aims to recruit a team for collaborative web application development
        </p>
      </Tab.Pane>
    </Tab.Content>
  </Col>
);
