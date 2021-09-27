import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import {
  INCREMENT_YEAR,
  DECREMENT_YEAR,
  INCREMENT_MONTH,
  DECREMENT_MONTH,
  incrementYear,
  decrementYear,
  incrementMonth,
  decrementMonth,
} from '../../actions';
import Button from './styles';

interface ChangeButtonProps {
  type: string;
  direction: string;
}

const ChangeButton = ({ type, direction }: ChangeButtonProps): ReactElement => {
  const btnName = `CALENDAR/${direction}_${type}`;
  const dispatch = useDispatch();

  const actionSelector = (name: string) => {
    switch (name) {
      case INCREMENT_YEAR:
        dispatch(incrementYear());
        break;
      case DECREMENT_YEAR:
        dispatch(decrementYear());
        break;
      case INCREMENT_MONTH:
        dispatch(incrementMonth());
        break;
      case DECREMENT_MONTH:
        dispatch(decrementMonth());
        break;
    }
  };

  return (
    <Button onClick={(): void => actionSelector(btnName)}>
      {direction === 'DECREMENT' ? '<' : '>'}
    </Button>
  );
};

export default ChangeButton;
