import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ data }) => {
  const { id, title, thumbnail, short_description, genre, platform } = data;
  return (
    <MyLink to={`/game/${id}`}>
      <Img src={thumbnail} alt="" />
      <Div>
        <Title>{title}</Title>
        <ShortDescription>{short_description}</ShortDescription>
        <div>
          <Tag>{genre}</Tag>
          <Tag>{platform.toLowerCase() === "pc (windows)" ? "pc" : "web"}</Tag>
        </div>
      </Div>
    </MyLink>
  );
};

export default Card;

const MyLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  max-width: 300px;
  min-height: 280px;
  max-height: 280px;
  overflow: hidden;
  background-color: ${(p) => p.theme.bgCard};
  color: ${(p) => p.theme.text};
  text-decoration: none;
  box-shadow: 0px 0px 2px 2px #00000044;
  transition: 0.2s;
  border-radius: 6px;
  &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 0px 3px 3px #00000044;
    transform: scale(1.1);
  }
`;

const Div = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem 0;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ShortDescription = styled.p`
  color: ${(p) => p.theme.subtext};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Tag = styled.p`
  display: inline;
  font-size: 0.8rem;
  padding: 0.1rem;
  background-color: ${(p) => p.theme.subtext};
  color: ${(p) => p.theme.bgCard};
  font-weight: bolder;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
