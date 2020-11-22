import { set } from "lodash";
import React, { createContext, useState } from "react";
import { menu as dataMenu } from "./data";
import { menuChild as dataChild } from "./data";
export const contextApi = createContext();

const Context = ({ children }) => {
  const [status, setStatus] = useState("");
  const [menu] = useState(dataMenu);
  const [menuChild] = useState(dataChild);
  const [light, setLight] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const addStatus = (status) => {
    setStatus(status);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    setStatus("");
  };
  const changeLight = () => {
    setLight(!light);
  };
  const showPassToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPass(!showPass);
  };
  return (
    <contextApi.Provider
      value={{
        addStatus,
        status,
        logOut,
        menu,
        menuChild,
        light,
        changeLight,
        showPassToggle,
        showPass,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};

export default Context;
