import React from "react";
import Login from "./Login";
import styled from "styled-components";
import Circle from "./Circle";
import Rectangle from "./Rectangle";

const CompWrapper = styled.div`
  background: #ecf0f3;
  position: relative;
  height: 100vh;
  padding: 100px 0;
  z-index: 10;
`;

const Components = () => {
  const whiteShadow =
    "10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px #ffffff;";
  return (
    <CompWrapper>
      <Circle
        size="195"
        bgColor="#F0F0F3"
        shadow={whiteShadow}
        left="10"
        top="10"
      />
      <Circle
        size="195"
        bgColor="#F0F0F3"
        shadow={whiteShadow}
        left="60"
        top="20"
      />
      <Circle
        size="125"
        bgColor="#F0F0F3"
        shadow={whiteShadow}
        left="40"
        top="30"
      />
      <Circle
        size="125"
        bgColor="#F0F0F3"
        shadow={whiteShadow}
        left="50"
        top="60"
      />
      <Rectangle
        x="180"
        y="150"
        bgColor="#F0F0F3"
        shadow={whiteShadow}
        left="20"
        top="75"
      />
      <Rectangle
        x="220"
        y="150"
        bgColor="#F0F0F3"
        shadow={whiteShadow}
        left="70"
        top="65"
      />
      <div className="container">
        <Login />
      </div>
    </CompWrapper>
  );
};

export default Components;
