import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavPages = ({ page, maxLimit }) => {
  let forwardLink = parseInt(page) + 1;
  let backwardLink = parseInt(page) - 1;

  return (
    <Container>
      <Div>
        {backwardLink >= 1 && (
          <MyLink to={`/${backwardLink}`} style={{ fontWeight: "bolder" }}>
            {"<"}
          </MyLink>
        )}
        {backwardLink - 1 > 1 && (
          <MyLink to={`/${backwardLink - 1}`}>{backwardLink - 1} </MyLink>
        )}

        {backwardLink >= 1 && (
          <MyLink to={`/${backwardLink}`}>{backwardLink} </MyLink>
        )}
        {<Page>page: {page}</Page>}
        {forwardLink <= maxLimit && (
          <MyLink to={`/${forwardLink}`}>{forwardLink} </MyLink>
        )}

        {1 + forwardLink <= maxLimit && (
          <MyLink to={`/${1 + forwardLink}`}>{1 + forwardLink} </MyLink>
        )}

        {forwardLink <= maxLimit && (
          <MyLink to={`/${forwardLink}`} style={{ fontWeight: "bolder" }}>
            {">"}
          </MyLink>
        )}
      </Div>
    </Container>
  );
};

export default NavPages;

const Container = styled.div`
  background-color: ${(p) => p.theme.bg};
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Div = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  width: 80%;
  @media all and (min-width: 600px) {
    width: 40%;
  }
`;

const MyLink = styled(Link)`
  display: block;
  text-decoration: none;
  height: 1.4rem;
  width: 1.4rem;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.bgCard};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const Page = styled.p`
  height: 1.4rem;
  padding: 0 0.4rem;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.bgCard};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;
