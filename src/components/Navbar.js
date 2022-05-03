import React, { useState } from "react";
import styled from "styled-components";
import { MyNavLink } from "./MyNavLink";
import { Link, useNavigate } from "react-router-dom";
import { MySearch } from "./MySearch";
import SwitchButton from "./SwitchButton";

//https://www.freetogame.com/assets/images/freetogame-logo.png

const Navbar = ({ toggleTheme, handleSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleKey = (e) => {
    handleSearch(e);
    if (e.target.value.length === 1) {
      navigate("/");
    }
  };
  return (
    <Nav>
      <Logo href="https://www.freetogame.com/assets/images/freetogame-logo.png">
        FreeToGame
      </Logo>
      <Collapse isOpen={isOpen}>
        <MyNavLink to="/">HOME</MyNavLink>
        <MySearch placeholder="Search..." onChange={handleKey} />
        <SwitchButton onClick={toggleTheme}>toggle</SwitchButton>
      </Collapse>
      <BtnMenu onClick={() => setIsOpen(!isOpen)}>
        <BtmSpan className="span1" isOpen={isOpen} />
        <BtmSpan className="span2" isOpen={isOpen} />
        <BtmSpan className="span3" isOpen={isOpen} />
      </BtnMenu>
    </Nav>
  );
};

export default Navbar;

const Logo = styled.a`
  color: ${(p) => p.theme.text};
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bolder;
`;

const Nav = styled.nav`
  z-index: 10;
  width: 100%;
  height: 80px;
  padding: 0 2%;
  background-color: ${(p) => p.theme.bgMenu};
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  position: relative;
  @media screen and (min-width: 600px) {
    & {
      justify-content: start;
    }
  }
`;

const Collapse = styled.div`
  background-color: ${(props) => props.theme.bgMenu};
  height: 18vh;
  max-height: ${({ isOpen }) => (isOpen ? "20vh" : "0px")};
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: max-height 1s ease-in;
  overflow: hidden;
  @media screen and (min-width: 600px) {
    max-height: 100%;
    flex-direction: row;
    position: static;
    transition: none;
  }
`;

const BtnMenu = styled.button`
  background-color: transparent;
  display: block;
  height: 1.6rem;
  width: 2rem;
  border: none;
  cursor: pointer;
  position: relative;
  @media screen and (min-width: 600px) {
    & {
      display: none;
    }
  }
`;

const BtmSpan = styled.span`
  position: absolute;
  content: "";
  background-color: ${(p) => p.theme.text};
  height: 4px;
  width: 34px;
  border-radius: 5px;
  transition: all 400ms ease;
  z-index: 101;
  left: 0;
  &.span1 {
    top: 0px;
    & {
      ${(p) => {
        return (
          p.isOpen && {
            transform: "rotate(140deg)",
            top: "10px",
          }
        );
      }}
    }
  }
  &.span2 {
    top: 10px;
    & {
      opacity: ${(p) => (p.isOpen ? "0" : "1")};
    }
  }
  &.span3 {
    top: 20px;
    & {
      ${(p) => {
        return (
          p.isOpen && {
            transform: "rotate(-140deg)",
            top: "10px",
          }
        );
      }}
    }
  }
`;
