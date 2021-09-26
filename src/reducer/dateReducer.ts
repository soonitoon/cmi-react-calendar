const date: Date = new Date();

export interface IDefaultDate {
  year: number;
  month: number;
  date: number;
}

const defaultDate: IDefaultDate = {
  year: date.getFullYear(),
  month: date.getMonth(),
  date: date.getDate(),
};

type TDateReducer = (
  state: IDefaultDate,
  action: { type: string },
) => IDefaultDate;

export const dateReducer: TDateReducer = (state = defaultDate, action) => {
  switch (action.type) {
    case 'INCREMENT-YEAR':
      return {
        ...state,
        year: state.year + 1,
      };

    case 'DECREMENT-YEAR':
      return {
        ...state,
        year: state.year === 0 ? 0 : state.year - 1,
      };

    case 'INCREMENT-MONTH':
      if (state.month === 11) {
        return {
          ...state,
          month: 0,
          year: state.year + 1,
        };
      }
      return {
        ...state,
        month: state.month + 1,
      };

    case 'DECREMENT-MONTH':
      if (state.month === 0) {
        return {
          ...state,
          month: 11,
          year: state.year === 0 ? 0 : state.year - 1,
        };
      }
      return {
        ...state,
        month: state.month - 1,
      };

    default:
      return state;
  }
};
