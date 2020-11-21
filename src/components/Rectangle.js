import React from "react";
import styled from "styled-components";
const Rectangle = ({ x, y, bgColor, shadow, left, top }) => {
  const RectangleWrapper = styled.div`
    width: ${x}px;
    height: ${y}px;
    border-radius: 12px;
    background: ${bgColor};
    box-shadow: ${shadow};
    position: absolute;
    left: ${left}%;
    top: ${top}%;
    animation: mymove 5s infinite;
    z-index: -1;
  `;
  return <RectangleWrapper></RectangleWrapper>;
};

export default Rectangle;
