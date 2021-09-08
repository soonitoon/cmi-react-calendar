const DateChanger = (event, context) => {
  const dateObj = context.dateState;
  const {
    target: { className },
  } = event;
  let newState;

  if (className === "down-year-btn") {
    newState = {
      ...dateObj,
      year: dateObj.year === 0 ? 0 : dateObj.year - 1,
    };
  }
  if (className === "up-year-btn") {
    newState = {
      ...dateObj,
      year: dateObj.year + 1,
    };
  }
  if (className === "down-month-btn") {
    if (dateObj.month === 0) {
      newState = {
        ...dateObj,
        month: 11,
        year: dateObj.year === 0 ? 0 : dateObj.year - 1,
      };
    } else {
      newState = {
        ...dateObj,
        month: dateObj.month - 1,
      };
    }
  }
  if (className === "up-month-btn") {
    if (dateObj.month === 11) {
      newState = {
        ...dateObj,
        month: 0,
        year: dateObj.year + 1,
      };
    } else {
      newState = {
        ...dateObj,
        month: dateObj.month + 1,
      };
    }
  }
  context.setDateState(newState);
};

export default DateChanger;
