# cmi-react-calendar

Rebuild the calendar using React⚛️

## About Repo 📚

- **CMI** 팀 스터디 과제 중 3주차에 해당하는 리포지토리입니다.
- 자세한 설명이 담긴 **과제 모음집**은 [링크](https://soonitoon.github.io/cmi-study)에서 확인해주세요!

## 프로젝트 간단 요약 📝

### 과제 요구 사항

- 2주차에 `Valia JS` 로 만들었던 캘린더를 `React`로 리펙토링하기([1, 2주차 저장소](https://github.com/soonitoon/cmi-study)).
- `useContext`를 사용한 전역상태관리, 함수형 컴포넌트 사용하기.

### 프로젝트 구성

- `/src`
  - `index.js`: `App` 컴포넌트 랜더링
  - `App.js`: 메인 컴포넌트
  - `/modules`
    - `DateChanger.js`: 날짜 변경 로직 모듈
    - `GetDateList.js`: 캘린더에 표시할 날짜 생성 모듈
  - `/context`
    - `DateContext.js`: 전역 상태인 년, 월, 일을 정의
  - `/components`
    - `ChangeButton.js`: 연도, 월 변경 버튼 컴포넌트
    - `Container.js`: 버튼 및 연도, 월 텍스트의 부모 컴포넌트
    - `Controller.js`: 연도, 월 컨테이너의 부모 컴포넌트
    - `DateFactory.js`: 날짜 리스트를 만드는 컴포넌트
    - `DateTemplate.js`: 날짜 리스트들의 부모 컴포넌트
    - `WeekBar.js`: 일요일부터 토요일까지를 나타내는 막대

### 로컬 실행

_! NPM이 설치되어 있어야 합니다._

1. `$ git clone https://github.com/soonitoon/cmi-react-calendar`
2. `$ cd ./cmi-react-calendar`
3. `$ npm i`
4. `$ npm start`
