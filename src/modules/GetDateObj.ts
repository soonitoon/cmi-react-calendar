import { IDateObj } from "../context/DateContext";

const getLastMonthList: Function = (dateState: IDateObj): number[] => {
  const month: number = dateState.month;
  const lastMonth: number = month === 0 ? 11 : month - 1;

  const lastMonthContext: IDateObj = {
    ...dateState,
    month: lastMonth,
  };

  const lastDate: number = getLastDateOfMonth(lastMonthContext);
  let dateList: number[];
  dateList = [];

  const firstDayContext: IDateObj = {
    ...dateState,
    date: 1,
  };

  for (let i: number = 0; i < getDay(firstDayContext); i++) {
    dateList.unshift(lastDate - i);
  }

  return dateList;
};

const getNextMonthList = (dateState: IDateObj): number[] => {
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

const getDay = (dateState: IDateObj): number => {
  const { year, month, date }: IDateObj = dateState;
  return new Date(year, month, date).getDay();
};

const getCurrentMonthList = (dateState: IDateObj): number[] => {
  let dateList: number[];
  dateList = [];

  for (let i: number = 1; i <= getLastDateOfMonth(dateState); i++) {
    dateList.push(i);
  }

  return dateList;
};

const getLastDateOfMonth = (dateState: IDateObj): number => {
  const { year, month } = dateState;

  return new Date(year, month + 1, 0).getDate(); // return last date of last month.
};

const getDateObj: Function = (dateState: IDateObj) => {
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
