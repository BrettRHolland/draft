import { createGlobalStyle } from "styled-components";

import PoppinsBold from "../fonts/Poppins-Bold.ttf";
import PTSerifRegular from "../fonts/PTSerif-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Poppins Bold";
  src: url(${PoppinsBold}) format("truetype");
}

@font-face {
  font-family: "PT Serif Regular";
  src: url(${PTSerifRegular}) format("truetype");
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins Bold", sans-serif;
  line-height: 140%;
  margin-bottom: 1.25rem;
}

h1 {
  font-size: 2.25rem;
}

h2 {
  font-size: 2.125rem;
}

h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.375rem;
}
h6 {
  font-size: 1.25rem;
}

p,
div {
  font-family: "PT Serif Regular", serif;
  font-size: 1.25rem;
  line-height: 180%;
  margin-bottom: 1.25rem;
}

ul,
ol {
  padding-left: 2.5rem;
}
`;
