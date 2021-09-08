import React, { useContext } from "react";
import { DateContext } from "../context/DateContext.js";
import getDateObj from "../modules/getDateList.js";
import DateFactory from "./DateFactory.js";
import "../CSS/DateTemplate.css";

const DateTemplate = () => {
  const context = useContext(DateContext);
  const { today, dateList } = getDateObj(context.dateState);

  return (
    <ul className="date">
      {dateList.map((date, index) => (
        <DateFactory
          key={index}
          date={date}
          today={today}
          isGrey={index !== 1 ? true : false} // 0, 2 => last, next month. 1 = > current month.
        ></DateFactory>
      ))}
    </ul>
  );
};

export default DateTemplate;
