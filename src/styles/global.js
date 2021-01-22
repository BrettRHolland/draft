import { createGlobalStyle } from "styled-components";

import PoppinsRegular from "../fonts/Poppins-Regular.ttf";
import PoppinsBold from "../fonts/Poppins-Bold.ttf";
import PoppinsBoldItalic from "../fonts/Poppins-BoldItalic.ttf";
import PTSerifRegular from "../fonts/PTSerif-Regular.ttf";
import PTSerifBold from "../fonts/PTSerif-Bold.ttf";
import PTSerifItalic from "../fonts/PTSerif-Italic.ttf";
import PTSerifBoldItalic from "../fonts/PTSerif-BoldItalic.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsBoldItalic}) format("truetype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "PT Serif";
    src: url(${PTSerifRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "PT Serif";
    src: url(${PTSerifBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "PT Serif";
    src: url(${PTSerifItalic}) format("truetype");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "PT Serif";
    src: url(${PTSerifBoldItalic}) format("truetype");
    font-weight: 700;
    font-style: italic;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    font-family: "PT Serif", serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
  }
`;
