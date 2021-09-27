import React from 'react';
import { useSelector } from 'react-redux';
import { DefaultDateConfig } from '../../reducer/dateReducer';
import ChangeButton from '../ChangeButton/ChangeButton';
import { BtnContainer, Display } from './styles';

interface ContainerProps {
  type: string;
}

const Container = ({ type }: ContainerProps): React.ReactElement => {
  const date = useSelector((state: { date: DefaultDateConfig }) => state.date);

  const fontSize: number = type === 'YEAR' ? 50 : 40;
  const text: number = type === 'YEAR' ? date.year : date.month + 1;
  const marginBottom: number = type === 'YEAR' ? 0 : 20;

  return (
    <BtnContainer marginBottom={marginBottom}>
      <ChangeButton type={type} direction="DECREMENT" />
      <Display fontSize={fontSize}>{text}</Display>
      <ChangeButton type={type} direction="INCREMENT" />
    </BtnContainer>
  );
};

export default Container;
