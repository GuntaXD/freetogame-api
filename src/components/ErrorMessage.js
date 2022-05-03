import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ErrorMessage(props) {
  return (
    <>
      <Error className="error">
        <Message className="errorMessage">
          <span className="error">Error</span> loading data
        </Message>
        <MyLink to={"/"} reloadDocument className="errorButton">
          Try again
        </MyLink>
      </Error>
    </>
  );
}

const Error = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${(p) => p.theme.bg};
  height: calc(100vh - 80px - 60px);
  width: 100%;
`;

const Message = styled.p`
  color: ${(p) => p.theme.text};
  font-weight: bolder;
  & .error {
    background-color: #dc3545;
    padding: 0.5rem;
    border-radius: 6px;
  }
`;

const MyLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  background-color: ${(p) => p.theme.bgCard};
  text-decoration: none;
  color: ${(p) => p.theme.text};
  border-radius: 6px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);
  &:hover {
    filter: brightness(1.2);
  }
`;
