import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import RenderInput from "../utils/RenderInput";
import { login as enter } from "../services/loginServices";

const LoginWrapper = styled.div`
  width: 415px;
  margin: 0 auto;
  button {
    width: 100%;
  }
`;

const Login = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ currentTarget: input }) => {
    let Name = [...login];
    let Password = [...pass];

    if (input.name === "name") {
      Name = input.value;
      setLogin(Name);
    }
    if (input.name === "password") {
      Password = input.value;
      setPass(Password);
    }
  };

  const doSubmit = async () => {
    const res = await enter(login, pass);
    console.log(login, pass);
    // console.log(res);
  };

  return (
    <LoginWrapper>
      <h1>
        Hello.
        <br /> Welcome Back
      </h1>
      <Form onSubmit={handleSubmit}>
        <RenderInput
          label="Name"
          name="name"
          onChange={handleChange}
          valu={login}
        />
        <RenderInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          valu={pass}
        />
        <Button variant="primary" type="submit" onClick={doSubmit}>
          Login
        </Button>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
