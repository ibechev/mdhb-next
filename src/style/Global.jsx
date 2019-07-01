import css from "styled-jsx/css";
import { fonts, colors } from "./Variables";

const Global = css.global`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    top: 0;
    left: 0;
  }

  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${colors.lightGrey};
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${fonts.saira};
    font-weight: ${fonts.weight.light};
    line-height: 1.5;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
    font-family: ${fonts.julius};
  }

  p {
    margin: 0;
    padding: 0;
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default Global;
