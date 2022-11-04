import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: none;
  }

  html, body, #root {
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    overscroll-behavior: none;
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  strong {
    font-weight: 700;
  }
`;
