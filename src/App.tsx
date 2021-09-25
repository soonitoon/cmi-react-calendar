import React from "react";
import Controller from "./components/Controller/Controller";
import WeekBar from "./components/WeekBar/WeekBar";
import DateTemplate from "./components/DateTemplate/DateTemplate";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import CalendarFooter from "./components/CalendarFooter/CalendarFooter";

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <CalendarHeader></CalendarHeader>
      <Controller></Controller>
      <WeekBar></WeekBar>
      <DateTemplate></DateTemplate>
      <CalendarFooter></CalendarFooter>
    </>
  );
};

export default App;
