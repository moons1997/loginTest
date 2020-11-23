import React, { useState } from "react";
import styled from "styled-components";
import { login as enter } from "../services/loginServices";
import _ from "lodash";
import FormComp from "./FormComp";
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
      console.log(status);

      window.location = `${status}`;
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
      <FormComp
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        login={login}
        pass={pass}
        textColor={textColor}
        inputBg={inputBg}
        doSubmit={doSubmit}
        errors={errors}
      />
    </LoginWrapper>
  );
};

export default Login;
