import React, { useContext } from "react";
import { DateContext } from "../context/DateContext.js";
import getDateObj from "../modules/getDateList.js";
import DateFactory from "./DateFactory.js";
import styled from "styled-components";

const DateUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, minmax(90px, auto));
  grid-template-rows: repeat(6, minmax(60px, auto));
  text-align: center;
`;

const DateTemplate = () => {
  const context = useContext(DateContext);
  const { today, dateList } = getDateObj(context.dateState);

  return (
    <DateUl>
      {dateList.map((date, index) => (
        <DateFactory
          key={index}
          date={date}
          today={today}
          isGray={index !== 1 ? true : false} // 0, 2 => last, next month. 1 = > current month.
        ></DateFactory>
      ))}
    </DateUl>
  );
};

export default DateTemplate;
