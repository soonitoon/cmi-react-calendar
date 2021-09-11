import React, { useContext } from "react";
import { DateContext } from "../context/DateContext.js";
import DateChanger from "../modules/DateChanger.js";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: transparent;
  font-size: 30px;
  color: var(--point-skyblue-color);
`;

const ChangeButton = ({ what, where }) => {
  const context = useContext(DateContext);

  return (
    <Button
      className={`${where}-${what}-btn`}
      onClick={(event) => {
        DateChanger(event, context);
      }}
    >
      {where === "down" ? "<" : ">"}
    </Button>
  );
};

export default ChangeButton;
