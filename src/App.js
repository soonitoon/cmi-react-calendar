import React, { useState } from "react";
import Controller from "./components/Controller.js";
import WeekBar from "./components/WeekBar.js";
import DateTemplate from "./components/DateTemplate.js";
import { DateContext, dateObj } from "./context/DateContext.js";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --main-font-family: "Roboto", sans-serif;
    --title-font-family: "Dancing Script", cursive;
    --main-background-color: #0f111b;
    --main-font-color: white;
    --point-skyblue-color: #09cefc;
    --sunday-red-color: #ee3b50;
    --not-current-date-color: grey;
  }

  #root {
    font-family: var(--main-font-family);
    font-size: 25px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--main-background-color);
    color: var(--main-font-color);
  }

  li:nth-child(7n + 1) {
    color: var(--sunday-red-color);
  }
`;

const Header = styled.header`
  font-family: var(--title-font-family);
  font-size: 70px;
  margin-bottom: 40px;
`;

const Footer = styled.footer`
  font-size: 14px;
`;

const App = () => {
  const [dateState, setDateState] = useState(dateObj);

  return (
    <>
      <GlobalStyle />
      <Header>Simple Calendar</Header>
      <DateContext.Provider value={{ dateState, setDateState }}>
        <Controller></Controller>
        <WeekBar></WeekBar>
        <DateTemplate></DateTemplate>
      </DateContext.Provider>
      <Footer>Hyuno Choi ⓒ {new Date().getFullYear()}</Footer>
    </>
  );
};

export default App;
