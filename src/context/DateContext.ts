import React from "react";

const newDate: Date = new Date();

export interface IDateObj {
  year: number;
  month: number;
  date: number;
}

export interface IDateContext {
  dateState: IDateObj;
  setDateState: (newState: IDateObj) => void;
}

export const dateObj: IDateContext = {
  dateState: {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
    date: newDate.getDate(),
  },
  setDateState: () => {},
};

export const DateContext: React.Context<IDateContext> =
  React.createContext<IDateContext>(dateObj);
