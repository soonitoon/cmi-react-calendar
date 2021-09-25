type TchangeCalendar = (btnName: string) => { type: string };

const changeCalendar: TchangeCalendar = (btnName) => {
  return { type: `${btnName}` };
};

export default changeCalendar;
