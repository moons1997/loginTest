import React from "react";
import { Link } from "react-router-dom";
import RenderInput from "../utils/RenderInput";
import { Form, Button } from "react-bootstrap";

const FormComp = ({
  handleSubmit,
  handleChange,
  login,
  pass,
  textColor,
  inputBg,
  doSubmit,
  errors,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <RenderInput
        label="Name"
        name="name"
        onChange={handleChange}
        valu={login}
        textColor={textColor}
        inputBg={inputBg}
      />
      <RenderInput
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        valu={pass}
        textColor={textColor}
        inputBg={inputBg}
      />
      <Form.Text className="text-muted mb-5">
        <Link to="/">Forgot Password?</Link>
      </Form.Text>
      {errors && <div className="alert alert-danger">{errors}</div>}
      <Button variant="primary" type="submit" onClick={doSubmit}>
        Login
      </Button>
    </Form>
  );
};

export default FormComp;
