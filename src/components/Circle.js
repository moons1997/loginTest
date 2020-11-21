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
        transform: rotate(0deg);
        transform: scale(1);
        opacity: 1;
      }

      50% {
        transform: scale(2);
        transform: rotate(5deg);
        opacity: 0.75;
      }

      100% {
        transform: rotate(0deg);
        transform: scale(1);
        opacity: 1;
      }
    }
  `;
  return <CircleWrapper></CircleWrapper>;
};

export default Circle;
