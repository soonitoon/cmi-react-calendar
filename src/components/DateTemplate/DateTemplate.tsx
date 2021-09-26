import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import getDateObj from '../../modules/GetDateObj';
import { IDefaultDate } from '../../reducer/dateReducer';
import DateFactory from '../DateFactory/DateFactory';
import DateUl from './styles';

const DateTemplate: React.FC = (): ReactElement => {
  const date = useSelector((store: { date: IDefaultDate }) => store.date);

  interface IDateObj {
    today: number;
    dateLists: number[][];
  }

  const { today, dateLists }: IDateObj = getDateObj(date);

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
        ),
      )}
    </DateUl>
  );
};

export default DateTemplate;
