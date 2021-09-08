import React from "react";
import "../CSS/DateFactory.css";

const DateFactory = ({ date, today, isGrey }) => {
  return date.map((eachDate, index) => (
    <li
      key={index}
      className={eachDate === today ? `today ${eachDate}` : eachDate}
      isgrey={`${isGrey}`}
    >
      {eachDate}
    </li>
  ));
};

export default DateFactory;
