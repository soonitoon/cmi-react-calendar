import React from "react";
import styled from "styled-components";

const DateLi = styled.li`
  color: ${(props) => props.today} !important;
  color: ${(props) => props.isgray} !important;
`;

const DateFactory = ({ date, today, isGray }) => {
  return date.map((eachDate, index) => (
    <DateLi
      key={index}
      today={eachDate === today ? "var(--point-skyblue-color)" : ""}
      isgray={isGray && "gray"}
    >
      {eachDate}
    </DateLi>
  ));
};

export default DateFactory;
