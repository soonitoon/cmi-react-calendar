import React from 'react';
import Controller from './components/Controller/Controller';
import WeekBar from './components/WeekBar/WeekBar';
import DateTemplate from './components/DateTemplate/DateTemplate';
import CalendarHeader from './components/CalendarHeader/CalendarHeader';
import CalendarFooter from './components/CalendarFooter/CalendarFooter';

const App = (): React.ReactElement => (
  <>
    <CalendarHeader />
    <Controller />
    <WeekBar />
    <DateTemplate />
    <CalendarFooter />
  </>
);

export default App;
