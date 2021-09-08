import React, { useContext } from "react";
import { DateContext } from "../context/DateContext.js";
import DateChanger from "../modules/DateChanger.js";
import "../CSS/ChangeButton.css";

const ChangeButton = ({ what, where }) => {
  const context = useContext(DateContext);

  return (
    <button
      className={`${where}-${what}-btn`}
      onClick={(event) => {
        DateChanger(event, context);
      }}
    >
      {where === "down" ? "<" : ">"}
    </button>
  );
};

export default ChangeButton;
