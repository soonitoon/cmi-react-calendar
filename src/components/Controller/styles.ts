import styled from 'styled-components';
import { CSSVariables } from '../../global-styles';

interface BtnContainerConfig {
  marginBottom: number;
}

export const BtnContainer = styled.div<BtnContainerConfig>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

interface DisplayConfig {
  fontSize: number;
}

export const Display = styled.h2<DisplayConfig>`
  font-size: ${(props) => props.fontSize}px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: transparent;
  font-size: 30px;
  color: ${CSSVariables.pointSkyblueColor};
`;
