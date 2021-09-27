import { DefaultDateConfig } from '../reducer/dateReducer';

const getDay = (dateState: DefaultDateConfig): number => {
  const { year, month, date }: DefaultDateConfig = dateState;
  return new Date(year, month, date).getDay();
};

const getLastDateOfMonth = (dateState: DefaultDateConfig): number => {
  const { year, month } = dateState;

  return new Date(year, month + 1, 0).getDate(); // return last date of last month.
};

const getLastMonthList: Function = (dateState: DefaultDateConfig): number[] => {
  const month: number = dateState.month;
  const lastMonth: number = month === 0 ? 11 : month - 1;

  const lastMonthContext: DefaultDateConfig = {
    ...dateState,
    month: lastMonth,
  };

  const lastDate: number = getLastDateOfMonth(lastMonthContext);
  let dateList: number[];
  dateList = [];

  const firstDayContext: DefaultDateConfig = {
    ...dateState,
    date: 1,
  };

  for (let i: number = 0; i < getDay(firstDayContext); i++) {
    dateList.unshift(lastDate - i);
  }

  return dateList;
};

const getNextMonthList = (dateState: DefaultDateConfig): number[] => {
  const lastDate: number = getLastDateOfMonth(dateState);
  dateState = {
    ...dateState,
    date: lastDate,
  };

  const lastDay: number = getDay(dateState);
  let dateList: number[];
  dateList = [];

  for (let i: number = 1; i <= 6 - lastDay; i++) {
    dateList.push(i);
  }

  return dateList;
};

const getCurrentMonthList = (dateState: DefaultDateConfig): number[] => {
  let dateList: number[];
  dateList = [];

  for (let i: number = 1; i <= getLastDateOfMonth(dateState); i++) {
    dateList.push(i);
  }

  return dateList;
};

const getDateObj: Function = (dateState: DefaultDateConfig) => {
  const realDate: Date = new Date();
  let today: number = -1;

  if (
    dateState.year === realDate.getFullYear() &&
    dateState.month === realDate.getMonth()
  ) {
    today = dateState.date;
  }

  const dateLists: number[][] = [
    getLastMonthList(dateState),
    getCurrentMonthList(dateState),
    getNextMonthList(dateState),
  ];

  return {
    today,
    dateLists,
  };
};

export default getDateObj;
