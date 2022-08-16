import React from "react";
import { Form } from "react-bootstrap";

export const DesctiprtionForm = () => (
  <Form.Group controlId="formBasicDesctiprtion">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
);
