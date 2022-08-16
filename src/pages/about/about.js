import React from "react";
import { Container, Tab, Row } from "react-bootstrap";

import { Tabs } from "./tabs";
import { TabsInfo } from "./tabs-info";

export const About = () => (
  <div>
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Tabs />
          <TabsInfo />
        </Row>
      </Tab.Container>
    </Container>
  </div>
);
