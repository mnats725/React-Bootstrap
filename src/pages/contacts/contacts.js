import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import { EmailForm } from "./email-form";
import { DesctiprtionForm } from "./desctiprtion-form";
import { CheboxForm } from "./checkbox-form";

export const Contacts = () => (
  <div>
    <Container className="mt-3" style={{ width: "600px" }}>
      <h1>Contact us</h1>
      <Form>
        <EmailForm />
        <DesctiprtionForm />
        <CheboxForm />
        <Button variant="primary">Submit</Button>
      </Form>
    </Container>
  </div>
);
