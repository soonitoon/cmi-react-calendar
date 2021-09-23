import styled from "styled-components";

const DateUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, minmax(90px, auto));
  grid-template-rows: repeat(6, minmax(60px, auto));
  text-align: center;
`;

export default DateUl;
