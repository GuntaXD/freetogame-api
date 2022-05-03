import React, { useState } from "react";
import styled from "styled-components";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const SwitchButton = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    onClick();
    setIsActive(!isActive);
  };

  return (
    <Button onClick={handleActive}>
      <Circle isActive={isActive}>
        <img src={isActive ? sun : moon} alt="" />
      </Circle>
    </Button>
  );
};

export default SwitchButton;

const Circle = styled.div`
  background-color: ${(p) => p.theme.bgMenu};
  height: 1rem;
  width: 1rem;
  transform: scale(1.6);
  border-radius: 100px;
  transition: all 1s;
  margin-left: ${(p) => (p.isActive ? "70%;" : "0;")};
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
  & img {
    width: 100%;
    height: auto;
  }
`;

const Button = styled.button`
  background-color: ${(p) => p.theme.bg};
  height: 1.2rem;
  width: 3rem;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: inset -2px -2px 2px 2px rgba(0, 0, 0, 0.4);
`;
