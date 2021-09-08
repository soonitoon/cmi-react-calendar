import React from "react";
import "../CSS/WeekBar.css";

const WeekBar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <ul className="week">
      {days.map((day) => (
        <li key={day}>{day}</li>
      ))}
    </ul>
  );
};

export default WeekBar;
