import styled from "styled-components";

export const MySearch = styled.input`
  background-color: ${(p) => p.theme.bg};
  height: 25%;
  border: none;
  border-radius: 4px;
  outline: none;
  padding-left: 0.5rem;
  padding-right: 2rem;
  color: ${(p) => p.theme.text};
  @media screen and (min-width: 600px) {
    height: 35%;
  }
`;
