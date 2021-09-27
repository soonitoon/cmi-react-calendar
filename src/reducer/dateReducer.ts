import {
  DECREMENT_MONTH,
  DECREMENT_YEAR,
  INCREMENT_MONTH,
  INCREMENT_YEAR,
} from '../actions';

const date: Date = new Date();

export interface DefaultDateConfig {
  year: number;
  month: number;
  date: number;
}

const defaultDate: DefaultDateConfig = {
  year: date.getFullYear(),
  month: date.getMonth(),
  date: date.getDate(),
};

type DateReducerConfig = (
  state: DefaultDateConfig,
  action: { type: string },
) => DefaultDateConfig;

export const dateReducer: DateReducerConfig = (state = defaultDate, action) => {
  switch (action.type) {
    case INCREMENT_YEAR:
      return {
        ...state,
        year: state.year + 1,
      };

    case DECREMENT_YEAR:
      return {
        ...state,
        year: state.year === 0 ? 0 : state.year - 1,
      };

    case INCREMENT_MONTH:
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

    case DECREMENT_MONTH:
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
