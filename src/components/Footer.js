import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(p) => p.theme.bgMenu};
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.text};
`;
