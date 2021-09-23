import styled from "styled-components";
import { CSSVariables } from "../../global-styles";

const Week = styled.ul`
  margin-bottom: 30px;
  color: ${CSSVariables.pointSkyblueColor};
  display: grid;
  grid-template-columns: repeat(7, minmax(90px, auto));
  text-align: center;
`;

export default Week;
