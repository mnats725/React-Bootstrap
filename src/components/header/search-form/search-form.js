import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

import "./search-form.css";

export const SearchForm = () => (
  <div>
    <Form className="d-inline-flex p-2">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="margin-left" variant="outline-info">
        Search
      </Button>
    </Form>
  </div>
);
