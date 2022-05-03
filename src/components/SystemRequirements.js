import React from "react";
import styled from "styled-components";

const SystemRequirements = ({ data }) => {
  if (data) {
    const { os, processor, memory, graphics, storage, additional_notes } = data;
    return (
      <>
        <Title>System System Requirements (windows)</Title>
        <Div>
          <Elem>
            <SubTitle>Os</SubTitle>
            <p>{os}</p>
          </Elem>
          <Elem>
            <SubTitle>Processor</SubTitle>
            <p>{processor}</p>
          </Elem>
          <Elem>
            <SubTitle>Memory</SubTitle>
            <p>{memory}</p>
          </Elem>
          <Elem>
            <SubTitle>Graphics</SubTitle>
            <p>{graphics}</p>
          </Elem>
          <Elem>
            <SubTitle>Storage</SubTitle>
            <p>{storage}</p>
          </Elem>
          {additional_notes && (
            <Elem>
              <SubTitle>Additional Notes</SubTitle>
              <p>{additional_notes}</p>
            </Elem>
          )}
        </Div>
      </>
    );
  }

  return <div>no data</div>;
};

export default SystemRequirements;

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
