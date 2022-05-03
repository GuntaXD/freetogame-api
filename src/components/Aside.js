import React from "react";
import styled, { useTheme } from "styled-components";

import playIcon from "../assets/playIcon.svg";
import playIconLight from "../assets/playIconLight.svg";

const Aside = ({ title, thumbnail, gameUrl }) => {
  const theme = useTheme();

  return (
    <Card>
      <Title>{title}</Title>
      <img src={thumbnail} alt="game" />
      <PlayLink to={gameUrl}>
        {" "}
        Play Now{" "}
        <img src={theme.name === "dark" ? playIcon : playIconLight} alt="" />
      </PlayLink>
    </Card>
  );
};

export default Aside;

const Card = styled.div`
  height: 36vh;
  width: max(60%, 280px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  & img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media all and (min-width: 600px) {
    margin-bottom: 2.2rem;
  }
  @media all and (min-width: 768px) {
    position: sticky;
    top: 84px;
    width: max(36%, 280px);
  }
`;

const Title = styled.h1`
  color: ${(p) => p.theme.text};
`;

const PlayLink = styled.a`
  display: block;
  height: 2rem;
  width: 100%;
  background-color: ${(p) => p.theme.bgCard};
  color: ${(p) => p.theme.text};
  text-decoration: none;
  font-weight: bolder;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  & img {
    height: 80%;
    width: auto;
    margin-left: 6px;
  }
`;
