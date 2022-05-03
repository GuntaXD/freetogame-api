import React from "react";
import styled from "styled-components";

const AdditionalInformation = ({
  title,
  developer,
  publisher,
  releaseDate,
  genre,
  platform,
}) => {
  return (
    <>
      <Title>Additional Information</Title>
      <Div>
        <Elem>
          <SubTitle>Title</SubTitle>
          <p>{title}</p>
        </Elem>
        <Elem>
          <SubTitle>Developer</SubTitle>
          <p>{developer}</p>
        </Elem>
        <Elem>
          <SubTitle>Publisher</SubTitle>
          <p>{publisher}</p>
        </Elem>
        <Elem>
          <SubTitle>Release date</SubTitle>
          <p>{releaseDate}</p>
        </Elem>
        <Elem>
          <SubTitle>Genre</SubTitle>
          <p>{genre}</p>
        </Elem>
        <Elem>
          <SubTitle>Platform</SubTitle>
          <p>{platform}</p>
        </Elem>
      </Div>
    </>
  );
};

export default AdditionalInformation;

const Title = styled.h3`
  color: ${(p) => p.theme.subtext};
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  padding: 1rem;
`;

const Elem = styled.div`
  flex: 0 0 48%;
  min-height: 3rem;
  max-width: 50%;
  overflow: hidden;
  padding: 0.4rem;
  color: ${(p) => p.theme.subtext};

  & p {
    margin-bottom: 0.2rem;
  }

  @media all and (min-width: 1024px) {
    flex: 0 0 30%;
  }
`;

const SubTitle = styled.p`
  opacity: 0.8;
`;
