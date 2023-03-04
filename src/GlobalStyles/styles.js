import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Shantell Sans', cursive;
  }

  body {
    background: url("https://cdn.midjourney.com/9341eabb-879e-4911-9010-6c7632d0f32d/grid_0.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
  }
`