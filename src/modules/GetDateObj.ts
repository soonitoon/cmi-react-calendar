import { IDefaultDate } from "../reducer/dateReducer";

const getLastMonthList: Function = (dateState: IDefaultDate): number[] => {
  const month: number = dateState.month;
  const lastMonth: number = month === 0 ? 11 : month - 1;

  const lastMonthContext: IDefaultDate = {
    ...dateState,
    month: lastMonth,
  };

  const lastDate: number = getLastDateOfMonth(lastMonthContext);
  let dateList: number[];
  dateList = [];

  const firstDayContext: IDefaultDate = {
    ...dateState,
    date: 1,
  };

  for (let i: number = 0; i < getDay(firstDayContext); i++) {
    dateList.unshift(lastDate - i);
  }

  return dateList;
};

const getNextMonthList = (dateState: IDefaultDate): number[] => {
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

const getDay = (dateState: IDefaultDate): number => {
  const { year, month, date }: IDefaultDate = dateState;
  return new Date(year, month, date).getDay();
};

const getCurrentMonthList = (dateState: IDefaultDate): number[] => {
  let dateList: number[];
  dateList = [];

  for (let i: number = 1; i <= getLastDateOfMonth(dateState); i++) {
    dateList.push(i);
  }

  return dateList;
};

const getLastDateOfMonth = (dateState: IDefaultDate): number => {
  const { year, month } = dateState;

  return new Date(year, month + 1, 0).getDate(); // return last date of last month.
};

const getDateObj: Function = (dateState: IDefaultDate) => {
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
