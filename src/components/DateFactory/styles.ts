import styled from 'styled-components';

interface IDateLi {
  today: string;
  isgray: string;
}

const DateLi = styled.li<IDateLi>`
  color: ${(props) => props.today} !important;
  color: ${(props) => props.isgray} !important;
`;

export default DateLi;
