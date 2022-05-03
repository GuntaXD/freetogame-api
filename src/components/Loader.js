import React from "react";
import styled from "styled-components";

export const Loader = () => {
  return (
    <Container>
      <Div></Div>
    </Container>
  );
};

const Div = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin-left: -8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: ${(p) => p.theme.text} transparent ${(p) => p.theme.text}
      transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media all and (min-width: 600px) {
    &::after {
      width: 128px;
      height: 128px;
      border: 12px solid #000;
      margin-left: -16px;
      border-color: ${(p) => p.theme.text} transparent ${(p) => p.theme.text}
        transparent;
    }
  }
`;

const Container = styled.div`
  background-color: ${(p) => p.theme.bg};
  height: calc(100vh - 80px - 60px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
