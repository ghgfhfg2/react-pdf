// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  * {
    box-sizing: inherit;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }


`;

export default GlobalStyles;
