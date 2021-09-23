import React, { ReactElement, useContext } from "react";
import { DateContext, IDateContext } from "../../context/DateContext";
import getDateObj from "../../modules/GetDateObj";
import DateFactory from "../DateFactory/DateFactory";
import DateUl from "./styles";

const DateTemplate: React.FC = (): ReactElement => {
  const context: IDateContext = useContext<IDateContext>(DateContext);

  interface IDateObj {
    today: number;
    dateLists: number[][];
  }

  const { today, dateLists }: IDateObj = getDateObj(context.dateState);

  return (
    <DateUl>
      {dateLists.map(
        (dateList: number[], index: number): React.ReactElement => (
          <DateFactory
            key={index}
            dateList={dateList}
            today={today}
            isGray={index !== 1 ? true : false} // 0, 2 => last, next month. 1 = > current month.
          ></DateFactory>
        )
      )}
    </DateUl>
  );
};

export default DateTemplate;
