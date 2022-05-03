import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MyNavLink = styled(NavLink)`
  color: ${(p) => p.theme.text};
  text-decoration: none;
  font-weight: bold;
  filter: opacity(0.7);
  &:hover {
    filter: opacity(1);
  }
  &.active {
    filter: opacity(1);
  }
`;
