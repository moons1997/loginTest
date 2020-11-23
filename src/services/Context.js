import React, { createContext, useState } from "react";
import { menu as dataMenu } from "./data";
import { menuChild as dataChild } from "./data";
export const contextApi = createContext();

const Context = ({ children }) => {
  const [menu] = useState(dataMenu);
  const [menuChild] = useState(dataChild);
  const [light, setLight] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  const logOutUser = () => {
    localStorage.removeItem("userToken");
    window.location = "/king";
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
        logOut,
        menu,
        menuChild,
        light,
        changeLight,
        showPassToggle,
        showPass,
        logOutUser,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};

export default Context;
