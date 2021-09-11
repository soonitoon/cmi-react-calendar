import React from "react";
import { useContext } from "react/cjs/react.development";
import { DateContext } from "../context/DateContext.js";
import ChangeButton from "./ChangeButton.js";
import styled from "styled-components";

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

const Display = styled.h2`
  font-size: ${(props) => props.fontSize}px;
`;

const Container = ({ what }) => {
  const dateObj = useContext(DateContext).dateState;
  const fontSize = what === "year" ? 50 : 40;
  const text = what === "year" ? dateObj.year : dateObj.month + 1;
  const marginBottom = what === "year" ? 0 : 20;

  return (
    <BtnContainer marginBottom={marginBottom}>
      <ChangeButton what={what} where="down"></ChangeButton>
      <Display fontSize={fontSize}>{text}</Display>
      <ChangeButton what={what} where="up"></ChangeButton>
    </BtnContainer>
  );
};

export default Container;
