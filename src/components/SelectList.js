import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectList = ({ title, defaultOp, options, handleChange }) => {
  const navigate = useNavigate();
  const handleSelect = (e) => {
    handleChange(e);

    navigate("/");
  };
  return (
    <Div>
      <Label htmlFor={title}> {title}: </Label>
      <ContentSelect>
        <Select name={title} onChange={handleSelect}>
          <option value={defaultOp}> {defaultOp}</option>
          {options.map(
            (op, index) =>
              defaultOp !== op && (
                <option value={op} key={index}>
                  {" "}
                  {op}{" "}
                </option>
              )
          )}
        </Select>
        <I></I>
      </ContentSelect>
    </Div>
  );
};

export default SelectList;

const Div = styled.div`
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  color: ${(p) => p.theme.subtext};
`;

const Select = styled.select`
  appearance: none;
  width: 7rem;
  display: inline-block;
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.text};
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 16px;
  &::-ms-expand {
    display: none;
  }
  &:hover {
    filter: opacity(0.8);
  }
`;

const ContentSelect = styled.div`
  margin-left: 0.5rem;
  width: 120px;
  position: relative;
`;

const I = styled.i`
  position: absolute;
  right: 0px;
  top: calc(50% - 10px);
  width: 12px;
  height: 12px;
  display: block;
  border-left: 2px solid ${(p) => p.theme.subtext};
  border-bottom: 2px solid ${(p) => p.theme.subtext};
  transform: rotate(-45deg); /* Giramos el cuadrado */
  transition: all 0.25s ease;
`;
