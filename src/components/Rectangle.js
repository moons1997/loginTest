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
    animation: rec 5s infinite;
    z-index: -1;

    @keyframes rec {
      0% {
        transform: translate(80px, 100px);

        opacity: 0;
      }

      20% {
        transform: translate(60px, 50px);
        opacity: 0.8;
      }

      50% {
        transform: translate(40px, 30px);

        opacity: 1;
      }

      75% {
        transform: translate(0px, 0px);
        opacity: 0.8;
      }

      100% {
        transform: translate(-40px, -40px);
        opacity: 0.25;
      }
    }
  `;
  return <RectangleWrapper></RectangleWrapper>;
};

export default Rectangle;
