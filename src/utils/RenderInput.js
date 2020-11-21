import React from "react";
import { Form } from "react-bootstrap";

const RenderInput = ({ label, type = "text", name, onChange, value }) => {
  return (
    <Form.Group controlId={`formBasic${label}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={`Enter ${label}`}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default RenderInput;
