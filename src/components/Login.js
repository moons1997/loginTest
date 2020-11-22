import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import RenderInput from "../utils/RenderInput";
import { login as enter } from "../services/loginServices";
import _ from "lodash";
import { contextApi } from "../services/Context";
const LoginWrapper = styled.div`
  width: 415px;
  margin: 0 auto;
  button {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
  }
`;
const Login = ({ textColor, inputBg }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState("");
  const { addStatus } = useContext(contextApi);

  let history = useHistory();
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
    try {
      const { data: jwt } = await enter(login, pass);

      localStorage.setItem("token", JSON.stringify(jwt));
      const status = _.get(
        JSON.parse(localStorage.getItem("token")),
        "user.status"
      );
      addStatus(status);
      history.replace(`${status}`);
    } catch (error) {
      setErrors(error.response.data.msg);
    }
  };

  return (
    <LoginWrapper>
      <h1 style={{ color: textColor }}>
        Hello.
        <br /> Welcome Back
      </h1>
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
    </LoginWrapper>
  );
};

export default Login;
