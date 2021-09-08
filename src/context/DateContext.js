import React from "react";

const newDate = new Date();

export let dateObj = {
  year: newDate.getFullYear(),
  month: newDate.getMonth(),
  date: newDate.getDate(),
};

export const DateContext = React.createContext();
