import css from "styled-jsx/css";
import { colors } from "../../style/Variables";

const style = css`
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 32px;
    font-family: "Julius Sans One", sans-serif;
    background-color: ${colors.white};
  }

  header > a {
    height: 24px;
    width: 24px;
    transition: fill 0.1s ease-in;
    fill: rgba(${colors.blackRGB}, 0.6);
  }

  header > a:hover {
    fill: rgba(${colors.blackRGB}, 0.4);
  }

  header a[data-visible="false"] {
    visibility: hidden;
  }

  header > button {
    display: none;
  }
`;

export default style;
