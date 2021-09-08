const getDateOfLastMonth = (DateContext) => {
  const month = DateContext.month;
  const lastMonth = month === 0 ? 11 : month - 1;

  const lastMonthContext = {
    ...DateContext,
    month: lastMonth,
  };

  const lastDate = getLastDateOfMonth(lastMonthContext);
  let dateList = [];

  const firstDayContext = {
    ...DateContext,
    date: 1,
  };

  for (let i = 0; i < getDay(firstDayContext); i++) {
    dateList.unshift(lastDate - i);
  }

  return dateList;
};

const getDateOfNextMonth = (DateContext) => {
  const lastDate = getLastDateOfMonth(DateContext);
  DateContext = {
    ...DateContext,
    date: lastDate,
  };

  const lastDay = getDay(DateContext);
  let dateList = [];

  for (let i = 1; i <= 6 - lastDay; i++) {
    dateList.push(i);
  }

  return dateList;
};

const getDay = (DateContext) => {
  const { year, month, date } = DateContext;
  return new Date(year, month, date).getDay();
};

const getDateOfMonth = (DateContext) => {
  const dateList = [];

  for (let i = 1; i <= getLastDateOfMonth(DateContext); i++) {
    dateList.push(i);
  }

  return dateList;
};

const getLastDateOfMonth = (DateContext) => {
  let { year, month } = DateContext;

  return new Date(year, month + 1, 0).getDate(); // return last date of last month.
};

const getDateObj = (DateContext) => {
  const realDate = new Date();
  let today = null;

  if (
    DateContext.year === realDate.getFullYear() &&
    DateContext.month === realDate.getMonth()
  ) {
    today = DateContext.date;
  }

  const dateList = [
    getDateOfLastMonth(DateContext),
    getDateOfMonth(DateContext),
    getDateOfNextMonth(DateContext),
  ];

  return {
    today,
    dateList,
  };
};

export default getDateObj;
