import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // ::: Font Setting
  // :: Basic(400, 500) & English Font(400, 500, 700) import
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
  // :: Korean Font import
  @font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  // :: Basic Font import
  :root {
    --bg-color: #F5ECE9;
    --red-color: #ff5442;
    --focus-color: #343740;
    --yellow-color: #ffeb33;
    --kakao-color: #423630;
    --text-color: #000000;
    --border-style: 2px solid #000000;
    --english-font:'Ubuntu', sans-serif;
    --korean-font:'SEBANG_Gothic_Bold';
    --basic-font:'IBM Plex Sans KR', sans-serif;
  }
  
  * {
    font-family: var(--basic-font);
    color: var(--text-color);
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  // :: 로고 폰트 기본 세팅
  /* h1 {
    font-family: var(--english-font);
    font-style: italic;
    font-weight: 700;
    font-size: 30px;
  }
  // :: 제목 폰트 기본 세팅 : 한글 기준
  h2, h3, h4, h5 {
    font-family: var(--basic-font);
    font-weight: 700;
    font-size: 0.8rem;
  } */
  
  ul li, ol li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
`;

export default GlobalStyle;
