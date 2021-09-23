import React, { ReactElement } from "react";
import { CSSVariables } from "../../global-styles";
import DateLi from "./styles";

interface IDateFactory {
  dateList: number[];
  today: number;
  isGray: boolean;
}

const DateFactory: React.FC<IDateFactory> = ({
  dateList,
  today,
  isGray,
}): ReactElement => {
  return (
    <>
      {dateList.map(
        (eachDate: number, index: number): React.ReactElement => (
          <DateLi
            key={index}
            today={eachDate === today ? CSSVariables.pointSkyblueColor : ""}
            isgray={isGray ? "gray" : ""}
          >
            {eachDate}
          </DateLi>
        )
      )}
    </>
  );
};

export default DateFactory;
