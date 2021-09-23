import React, { useState } from "react";
import Controller from "./components/Controller/Controller";
import WeekBar from "./components/WeekBar/WeekBar";
import DateTemplate from "./components/DateTemplate/DateTemplate";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import CalendarFooter from "./components/CalendarFooter/CalendarFooter";
import { DateContext, dateObj, IDateObj } from "./context/DateContext";
import { GlobalStyle } from "./global-styles";

const App: React.FC = (): React.ReactElement => {
  const [dateState, setDateState] = useState<IDateObj>(dateObj.dateState);

  return (
    <>
      <GlobalStyle />
      <CalendarHeader></CalendarHeader>
      <DateContext.Provider value={{ dateState, setDateState }}>
        <Controller></Controller>
        <WeekBar></WeekBar>
        <DateTemplate></DateTemplate>
      </DateContext.Provider>
      <CalendarFooter></CalendarFooter>
    </>
  );
};

export default App;
