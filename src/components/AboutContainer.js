import React, { useState } from "react";
import styled from "styled-components";

export const AboutContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <P isOpen={isOpen}>{props.children}</P>
      <Button onClick={handleClick}>
        {!isOpen ? "+ Read more" : "- Read less"}
      </Button>
    </>
  );
};

export default AboutContainer;

const P = styled.p`
  max-height: ${(p) => (p.isOpen ? "3000px" : "200px")};
  white-space: pre-line;
  color: ${(p) => p.theme.subtext};
  text-overflow: ellipsis;
  transition: all 0.5s;
  overflow: hidden;
  padding: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  color: ${(p) => p.theme.text};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.4rem 0 0 1rem;
`;
