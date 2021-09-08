import React from "react";
import { useContext } from "react/cjs/react.development";
import { DateContext } from "../context/DateContext.js";
import ChangeButton from "./ChangeButton.js";
import "../CSS/Container.css";

const Container = ({ what }) => {
  const dateObj = useContext(DateContext).dateState;
  const text = what === "year" ? dateObj.year : dateObj.month + 1;

  return (
    <div className={`${what}-container`}>
      <ChangeButton what={what} where="down"></ChangeButton>
      <h2 className={what}>{text}</h2>
      <ChangeButton what={what} where="up"></ChangeButton>
    </div>
  );
};

export default Container;
