# cmi-react-calendar

![Simple Calendar Logo](https://drive.google.com/u/0/uc?id=1MH-imeS6GuGmk0RYXmZy4sdyDkB4AyH8&export=download)

Rebuild the calendar using React โ๏ธ

## About Repo ๐

- **CMI** ํ ์คํฐ๋ ๊ณผ์  ์ค 3์ฃผ์ฐจ์ ํด๋นํ๋ ๋ฆฌํฌ์งํ ๋ฆฌ์๋๋ค.
- ์์ธํ ์ค๋ช์ด ๋ด๊ธด **๊ณผ์  ๋ชจ์์ง**์ [๋งํฌ](https://soonitoon.github.io/cmi-study)์์ ํ์ธํด์ฃผ์ธ์!

## ํ๋ก์ ํธ ๊ฐ๋จ ์์ฝ ๐

### 3์ฃผ์ฐจ ๊ณผ์ 

#### ๊ณผ์  ์๊ตฌ ์ฌํญ

- 2์ฃผ์ฐจ์ `Valia JS` ๋ก ๋ง๋ค์๋ ์บ๋ฆฐ๋๋ฅผ `React`๋ก ๋ฆฌํํ ๋งํ๊ธฐ([1, 2์ฃผ์ฐจ ์ ์ฅ์](https://github.com/soonitoon/cmi-study)).
- `useContext`๋ฅผ ์ฌ์ฉํ ์ ์ญ์ํ๊ด๋ฆฌ, ํจ์ํ ์ปดํฌ๋ํธ ์ฌ์ฉํ๊ธฐ.

#### ํ๋ก์ ํธ ๊ตฌ์ฑ

- `/src`
  - `index.js`: `App` ์ปดํฌ๋ํธ ๋๋๋ง
  - `App.js`: ๋ฉ์ธ ์ปดํฌ๋ํธ
  - `/modules`
    - `DateChanger.js`: ๋ ์ง ๋ณ๊ฒฝ ๋ก์ง ๋ชจ๋
    - `GetDateList.js`: ์บ๋ฆฐ๋์ ํ์ํ  ๋ ์ง ์์ฑ ๋ชจ๋
  - `/context`
    - `DateContext.js`: ์ ์ญ ์ํ์ธ ๋, ์, ์ผ์ ์ ์
  - `/components`
    - `ChangeButton.js`: ์ฐ๋, ์ ๋ณ๊ฒฝ ๋ฒํผ ์ปดํฌ๋ํธ
    - `Container.js`: ๋ฒํผ ๋ฐ ์ฐ๋, ์ ํ์คํธ์ ๋ถ๋ชจ ์ปดํฌ๋ํธ
    - `Controller.js`: ์ฐ๋, ์ ์ปจํ์ด๋์ ๋ถ๋ชจ ์ปดํฌ๋ํธ
    - `DateFactory.js`: ๋ ์ง ๋ฆฌ์คํธ๋ฅผ ๋ง๋๋ ์ปดํฌ๋ํธ
    - `DateTemplate.js`: ๋ ์ง ๋ฆฌ์คํธ๋ค์ ๋ถ๋ชจ ์ปดํฌ๋ํธ
    - `WeekBar.js`: ์ผ์์ผ๋ถํฐ ํ ์์ผ๊น์ง๋ฅผ ๋ํ๋ด๋ ๋ง๋

### 4์ฃผ์ฐจ ๊ณผ์ 

#### ๊ณผ์  ์๊ตฌ ์ฌํญ

- 3์ฃผ์ฐจ ํ๋ก์ ํธ๋ฅผ `typescript`๋ก ๋ณํํ๊ธฐ.
- ์ปดํฌ๋ํธ์์ ๋ฐ๋ `props` ํ์์ `interface` ํน์ `type`์ผ๋ก ์ ์.
- ์ ์ญ์ํ๊ด๋ฆฌ์ `Redux` ์ฌ์ฉ.

#### ํ๋ก์ ํธ ๊ตฌ์ฑ

- `/src`
  - `index.tsx`: `App` ์ปดํฌ๋ํธ ๋๋๋ง ๋ฐ ๊ธ๋ก๋ฒ ์คํ์ผ, `Redux store` ์ ๊ณต
  - `App.tsx`: ๋ฉ์ธ ์ปดํฌ๋ํธ
  - `global-styles.ts`: ๊ธ๋ก๋ฒ ์คํ์ผ ์ ์
  - `/modules`
    - `GetDateObj.ts`: ์บ๋ฆฐ๋์ ํ์ํ  ๋ ์ง ์์ฑ ๋ชจ๋
  - `/reducer์
    - `dateReducer.ts`: ๋ ์ง ๋ณ๊ฒฝ `reducer` ์ ์
    - `index.ts`: `store` ์์ฑ ๋ฐ `redux dev tool` ์ฐ๊ฒฐ
  - `/actions`
    - `index.ts`: ๋ ์ง ๋ณ๊ฒฝ `action` ํจ์ ์ ์
  - `/components` (`styles.ts` ์๋ต)
    - `CalendarFooter`: ํธํฐ
    - `CalendarHeader`: ํค๋
    - `Controller.js`: ์ฐ๋, ์ ํ์ ๋ฐ ๋ณ๊ฒฝ ๋ฒํผ
    - `DateFactory.js`: ๋ ์ง ๋ฆฌ์คํธ๋ฅผ ๋ง๋๋ ์ปดํฌ๋ํธ
    - `DateTemplate.js`: ๋ ์ง ๋ฆฌ์คํธ๋ค์ ๋ถ๋ชจ ์ปดํฌ๋ํธ
    - `WeekBar.js`: ์ผ์์ผ๋ถํฐ ํ ์์ผ๊น์ง๋ฅผ ๋ํ๋ด๋ ๋ง๋

### ๋ก์ปฌ ์คํ

_! NPM์ด ์ค์น๋์ด ์์ด์ผ ํฉ๋๋ค._

1. `$ git clone https://github.com/soonitoon/cmi-react-calendar`
2. `$ cd ./cmi-react-calendar`
3. `$ npm i`
4. `$ npm start`

### License

> MTI
