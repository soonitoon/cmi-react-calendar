import React from 'react';
import { Header } from './Header.styles';

const CalendarHeader = (): React.ReactElement => {
  const headerText: string = 'Simple Calendar';

  return <Header>{headerText}</Header>;
};

export default CalendarHeader;
