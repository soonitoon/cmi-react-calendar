import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultDateConfig } from '../../reducer/dateReducer';
import { BtnContainer, Button, Display } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  decrementMonth,
  decrementYear,
  incrementMonth,
  incrementYear,
} from '../../actions';

const Controller = (): React.ReactElement => {
  const date = useSelector((state: { date: DefaultDateConfig }) => state.date);
  const dispatch = useDispatch();

  const yearStyleValues = {
    marginBottom: 0,
    fontSize: 50,
  };

  const monthStyleValues = {
    marginBottom: 20,
    fontSize: 40,
  };

  return (
    <>
      <BtnContainer marginBottom={yearStyleValues.marginBottom}>
        <Button
          onClick={() => {
            dispatch(decrementYear());
          }}
        >
          <FiChevronLeft />
        </Button>
        <Display fontSize={yearStyleValues.fontSize}>{date.year}</Display>
        <Button
          onClick={() => {
            dispatch(incrementYear());
          }}
        >
          <FiChevronRight />
        </Button>
      </BtnContainer>
      <BtnContainer marginBottom={monthStyleValues.marginBottom}>
        <Button
          onClick={() => {
            dispatch(decrementMonth());
          }}
        >
          <FiChevronLeft />
        </Button>
        <Display fontSize={monthStyleValues.fontSize}>{date.month + 1}</Display>
        <Button
          onClick={() => {
            dispatch(incrementMonth());
          }}
        >
          <FiChevronRight />
        </Button>
      </BtnContainer>
    </>
  );
};

export default Controller;
