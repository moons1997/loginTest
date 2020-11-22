import React from "react";
import styled from "styled-components";

const Circle = ({ size, bgColor, shadow, left, top }) => {
  const CircleWrapper = styled.div`
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: ${bgColor};
    box-shadow: ${shadow};
    position: absolute;
    left: ${left}%;
    top: ${top}%;
    animation: mymove 5s infinite;
    z-index: -1;

    @keyframes mymove {
      0% {
        transform: translate(-40px, -40px);
        opacity: 0;
      }

      50% {
        transform: translate(0px, 0px);

        opacity: 1;
      }

      100% {
        transform: translate(80px, 100px);
        opacity: 0.25;
      }
    }
  `;
  return <CircleWrapper></CircleWrapper>;
};

export default Circle;
