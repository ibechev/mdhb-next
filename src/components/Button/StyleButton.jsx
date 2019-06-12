import css from "styled-jsx/css";
import { colors } from "../../style/Variables";

const style = css`
  button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  .btn-icon {
    height: 24px;
    width: 24px;
    transition: fill 0.1s ease-in;
    fill: rgba(${colors.blackRGB}, 0.6);
  }

  .btn-icon:hover {
    fill: rgba(${colors.blackRGB}, 0.4);
  }
`;

export default style;
