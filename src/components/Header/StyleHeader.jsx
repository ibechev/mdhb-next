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
    height: 64px;
    padding: 0 32px;
    font-family: "Julius Sans One", sans-serif;
    background-color: ${colors.white};
  }
`;

export default style;
