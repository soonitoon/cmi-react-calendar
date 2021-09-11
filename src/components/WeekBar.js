import React from "react";
import styled from "styled-components";

const Week = styled.ul`
  margin-bottom: 30px;
  color: var(--point-skyblue-color);
  display: grid;
  grid-template-columns: repeat(7, minmax(90px, auto));
  text-align: center;
`;

const WeekBar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Week>
      {days.map((day, index) => (
        <li key={index}>{day}</li>
      ))}
    </Week>
  );
};

export default WeekBar;
