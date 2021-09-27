import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import getDateObj from '../../modules/getDateObj';
import { DefaultDateConfig } from '../../reducer/dateReducer';
import DateFactory from '../DateFactory/DateFactory';
import DateUl from './styles';

const DateTemplate = (): ReactElement => {
  const date = useSelector((store: { date: DefaultDateConfig }) => store.date);

  interface DateObjConfig {
    today: number;
    dateLists: number[][];
  }

  const { today, dateLists }: DateObjConfig = getDateObj(date);

  return (
    <DateUl>
      {dateLists.map(
        (dateList: number[], index: number): React.ReactElement => (
          <DateFactory
            key={index}
            dateList={dateList}
            today={today}
            isGray={index !== 1 ? true : false} // 0, 2 => last, next month. 1 = > current month.
          />
        ),
      )}
    </DateUl>
  );
};

export default DateTemplate;
