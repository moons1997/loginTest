import React, { useContext } from "react";
import Menu from "./components/Menu";
import Login from "./components/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import Circle from "./components/Circle";
import Rectangle from "./components/Rectangle";
import King from "./components/admin/King";
import Accountant from "./components/admin/Accountant";
import Worker from "./components/admin/Worker";
import { contextApi } from "./services/Context";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

function App() {
  const { status, light } = useContext(contextApi);
  let bgColor;
  let shadowColor;
  let color;
  let inputBg;

  if (!light) {
    bgColor = "#ECF0F3";
    shadowColor =
      "10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px #ffffff;";
    color = "#333";
    inputBg = "#E3E6EC";
  } else {
    bgColor = "#181C27";
    shadowColor =
      "10px 10px 30px rgba(36, 38, 43, 0.4), -10px -10px 30px rgba(48, 52, 58, 0.4);";
    color = "rgba(255, 255, 255, 0.65)";
    inputBg = "#313949";
  }

  const AppWrapper = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Quicksand", sans-serif;
    overflow: hidden;
    .mine_page {
      background: ${bgColor};
      position: relative;
      height: 100vh;
      z-index: 10;
    }
  `;

  return (
    <AppWrapper>
      <div className="mine_page">
        <Menu textColor={color} />
        <Circle
          size="195"
          bgColor={bgColor}
          shadow={shadowColor}
          left="10"
          top="10"
        />
        <Circle
          size="195"
          bgColor={bgColor}
          shadow={shadowColor}
          left="60"
          top="20"
        />
        <Circle
          size="125"
          bgColor={bgColor}
          shadow={shadowColor}
          left="40"
          top="30"
        />
        <Circle
          size="125"
          bgColor={bgColor}
          shadow={shadowColor}
          left="50"
          top="60"
        />
        <Rectangle
          x="180"
          y="150"
          bgColor={bgColor}
          shadow={shadowColor}
          left="20"
          top="75"
        />
        <Rectangle
          x="220"
          y="150"
          bgColor={bgColor}
          shadow={shadowColor}
          left="70"
          top="65"
        />
        <Switch>
          <Route
            path="/login"
            component={() => <Login textColor={color} inputBg={inputBg} />}
          />
          {status === "king" && (
            <Route path="/king" component={() => <King user={status} />} />
          )}
          {status === "worker" && (
            <Route path="/worker" component={() => <Worker user={status} />} />
          )}
          {status === "buxgalter" && (
            <Route
              path="/buxgalter"
              component={() => <Accountant user={status} />}
            />
          )}

          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </AppWrapper>
  );
}

export default App;
