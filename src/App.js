import React from "react";
import Controller from "./components/Controller.js";
import WeekBar from "./components/WeekBar.js";
import DateTemplate from "./components/DateTemplate.js";
import "./CSS/App.css";

const App = () => {
  return (
    <>
      <header>Simple Calendar</header>
      <Controller></Controller>
      <WeekBar></WeekBar>
      <DateTemplate></DateTemplate>
      <footer>Hyuno Choi ⓒ {new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
