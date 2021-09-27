import React, { ReactElement } from 'react';
import { CSSVariables } from '../../global-styles';
import DateLi from './styles';

interface DateFactoryProps {
  dateList: number[];
  today: number;
  isGray: boolean;
}

const DateFactory = ({
  dateList,
  today,
  isGray,
}: DateFactoryProps): ReactElement => {
  return (
    <>
      {dateList.map(
        (eachDate: number, index: number): React.ReactElement => (
          <DateLi
            key={index}
            today={eachDate === today ? CSSVariables.pointSkyblueColor : ''}
            isgray={isGray ? 'gray' : ''}
          >
            {eachDate}
          </DateLi>
        ),
      )}
    </>
  );
};

export default DateFactory;
