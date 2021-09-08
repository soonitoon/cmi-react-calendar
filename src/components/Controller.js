import React from "react";
import "../CSS/Controller.css";

const Controller = () => {
  return (
    <>
      <div className="year-container">
        <button className="left-year-btn">{"<"}</button>
        <h2 className="year">2021</h2>
        <button className="right-year-btn">{">"}</button>
      </div>
      <div className="month-container">
        <button className="left-month-btn">{"<"}</button>
        <h2 className="month">9</h2>
        <button className="right-month-btn">{">"}</button>
      </div>
    </>
  );
};

export default Controller;
