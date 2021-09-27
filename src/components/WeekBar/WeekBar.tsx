import React, { ReactElement } from 'react';
import Week from './styles';

const WeekBar = (): ReactElement => {
  const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Week>
      {days.map(
        (day: string): React.ReactElement => (
          <li key={day}>{day}</li>
        ),
      )}
    </Week>
  );
};

export default WeekBar;
