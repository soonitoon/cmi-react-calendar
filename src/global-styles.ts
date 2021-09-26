import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface ICSSVariables {
  mainFontFamily: string;
  titleFontFamily: string;
  mainBackgroundColor: string;
  mainFontColor: string;
  pointSkyblueColor: string;
  sundayRedColor: string;
  notCurrentDateColor: string;
}

export const CSSVariables: ICSSVariables = {
  mainFontFamily: '"Roboto", sans-serif',
  titleFontFamily: '"Dancing Script", cursive',
  mainBackgroundColor: '#0f111b',
  mainFontColor: 'white',
  pointSkyblueColor: '#09cefc',
  sundayRedColor: '#ee3b50',
  notCurrentDateColor: 'grey',
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    font-family: ${CSSVariables.mainFontFamily};
    font-size: 25px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${CSSVariables.mainBackgroundColor};
    color: ${CSSVariables.mainFontColor};
  }

  li:nth-child(7n + 1) {
    color: ${CSSVariables.sundayRedColor};
  }
`;
