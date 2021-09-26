import React from 'react';
import { Footer } from './CalendarFooter.styles';

const CalendarFooter: React.FC = (): React.ReactElement => {
  const name: string = 'Hyuno Choi';
  const footerText: string = `${name} ⓒ ${new Date().getFullYear()}`;

  return <Footer>{footerText}</Footer>;
};

export default CalendarFooter;
