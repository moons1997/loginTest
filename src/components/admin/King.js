import React, { useState } from "react";
import _ from "lodash";
import { checkLogin } from "../../services/loginServices";
import FormComp from "../FormComp";
import MenuUser from "./MenuUser";
import styled from "styled-components";

const CheckUserWrapper = styled.div`
  .checkUser {
    background-color: rgba(62, 62, 62, 0.5);
    padding: 10px;
    border-radius: 5px;
  }
`;
const King = ({ user, textColor, inputBg }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState("");
  const [hide, setHide] = useState(true);

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
      const { data: jwt } = await checkLogin(login, pass);

      localStorage.setItem("userToken", JSON.stringify(jwt));

      // secondUser = _.get(
      //   JSON.parse(localStorage.getItem("userToken")),
      //   "user.status"
      // );
      // console.log(secondUser);

      setHide(false);

      // window.location = `${secondUser}`;
    } catch (error) {
      setErrors(error.response.data.msg);
    }
  };

  return (
    <CheckUserWrapper>
      <div className="container">
        <h1 className="pt-5" style={{ color: textColor }}>
          Welcom {user}
        </h1>
        
        {hide ? (
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
        ) : (
          <div className="checkUser">
            <MenuUser
              textColor={textColor}
              status={_.get(
                JSON.parse(localStorage.getItem("userToken")),
                "user.status"
              )}
            />

            <h1 className="mt-5">
              Welcom to{" "}
              {_.get(
                JSON.parse(localStorage.getItem("userToken")),
                "user.status"
              )}
            </h1>
          </div>
        )}
      </div>
    </CheckUserWrapper>
  );
};

export default King;
