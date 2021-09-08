import React from "react";
import "../CSS/DateTemplate.css";

const DateTemplate = () => {
  let date = [];
  for (let i = 1; i < 32; i++) {
    date.push(i);
  }

  return (
    <ul className="date">
      {date.map((eachDate) => (
        <li key={eachDate}>{eachDate}</li>
      ))}
    </ul>
  );
};

export default DateTemplate;
