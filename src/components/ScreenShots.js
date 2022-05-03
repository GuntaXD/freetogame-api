import React from "react";
import styled from "styled-components";

const ScreenShots = ({ screenshots }) => {
  if (screenshots !== undefined)
    return (
      <>
        <Title>Screenshots</Title>
        <Div>
          {screenshots.map((el) => (
            <Elem href={el.image} target="_blank" key={el.id}>
              <img src={el.image} alt="gameplay" />
            </Elem>
          ))}
        </Div>
      </>
    );
  return <div>no image</div>;
};

export default ScreenShots;

const Title = styled.h3`
  color: ${(p) => p.theme.subtext};
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  padding: 1rem;
`;

const Elem = styled.a`
  flex: 0 0 48%;
  min-height: 3rem;
  max-width: 50%;
  cursor: pointer;
  & img {
    width: 100%;
    height: auto;
  }

  @media all and (min-width: 1024px) {
    flex: 0 0 30%;
  }
`;
