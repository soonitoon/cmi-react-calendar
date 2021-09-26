import styled from 'styled-components';

interface IBtnContainer {
  marginBottom: number;
}

export const BtnContainer = styled.div<IBtnContainer>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

interface IDisplay {
  fontSize: number;
}

export const Display = styled.h2<IDisplay>`
  font-size: ${(props) => props.fontSize}px;
`;
