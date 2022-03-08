import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
body{
    margin: 0;
    padding: 0;
    background-color: #f2f2e9;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    overflow-x: hidden;
}
`;
