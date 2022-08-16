import React from "react";
import { Form } from "react-bootstrap";

export const EmailForm = () => (
  <Form>
    <Form.Group controllId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text>We'll never share your Email with anyone else</Form.Text>
    </Form.Group>
  </Form>
);
