export const INCREMENT_YEAR: string = 'CALENDAR/INCREMENT_YEAR';
export const DECREMENT_YEAR: string = 'CALENDAR/DECREMENT_YEAR';
export const INCREMENT_MONTH: string = 'CALENDAR/INCREMENT_MONTH';
export const DECREMENT_MONTH: string = 'CALENDAR/DECREMENT_MONTH';

interface ActionConfig {
  type: string;
}

export const incrementYear = (): ActionConfig => {
  return { type: INCREMENT_YEAR };
};

export const decrementYear = (): ActionConfig => {
  return { type: DECREMENT_YEAR };
};

export const incrementMonth = (): ActionConfig => {
  return { type: INCREMENT_MONTH };
};

export const decrementMonth = (): ActionConfig => {
  return { type: DECREMENT_MONTH };
};
