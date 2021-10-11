// eslint-disable-next-line no-unused-vars
import styled, { createGlobalStyle } from 'styled-components';
import * as color from '../config/color';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    outline: none;
    border: none;
  }
  body {
    height: 100vh;
    background-color: ${color.VeryDarkBlue};
  }
`;

export default GlobalStyle;
