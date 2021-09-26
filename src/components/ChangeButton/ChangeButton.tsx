import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import changeCalendar from '../../actions';
import Button from './styles';

interface IChangeButton {
  type: string;
  direction: string;
}

const ChangeButton: React.FC<IChangeButton> = ({
  type,
  direction,
}): ReactElement => {
  const dispatch = useDispatch();
  const className = `${direction}-${type}`;

  return (
    <Button
      className={className}
      onClick={(): void => {
        dispatch(changeCalendar(className));
      }}
    >
      {direction === 'DECREMENT' ? '<' : '>'}
    </Button>
  );
};

export default ChangeButton;
