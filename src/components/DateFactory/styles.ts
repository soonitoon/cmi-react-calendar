import styled from 'styled-components';

interface DateLiConfig {
  today: string;
  isgray: string;
}

const DateLi = styled.li<DateLiConfig>`
  color: ${(props) => props.today} !important;
  color: ${(props) => props.isgray} !important;
`;

export default DateLi;
