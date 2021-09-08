import React, { useState } from "react";
import Controller from "./components/Controller.js";
import WeekBar from "./components/WeekBar.js";
import DateTemplate from "./components/DateTemplate.js";
import { DateContext, dateObj } from "./context/DateContext.js";
import "./CSS/App.css";

const App = () => {
  const [dateState, setDateState] = useState(dateObj);

  return (
    <>
      <header>Simple Calendar</header>
      <DateContext.Provider value={{ dateState, setDateState }}>
        <Controller></Controller>
        <WeekBar></WeekBar>
        <DateTemplate></DateTemplate>
      </DateContext.Provider>
      <footer>Hyuno Choi ⓒ {new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
