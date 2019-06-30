import css from "styled-jsx/css";
import { colors } from "../../../../style/Variables";

const style = css`
  .home-icon {
    position: relative;
    height: 100%;
    width: auto;
  }

  .home-icon a {
    height: 100%;
    width: 30px;
    transition: fill 0.1s ease-in;
    fill: rgba(${colors.blackRGB}, 0.3);
  }

  .home-icon .svg-wrapper {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 30px;
    top: 50%;
    transform: translateY(-50%);
  }

  .home-icon a:hover {
    fill: rgba(${colors.blackRGB}, 0.45);
  }

  .underline {
    position: absolute;
    width: 100%;
    height: 2px;
    top: 100%;
    transform: translateY(-100%);
    background-color: rgba(${colors.blackRGB}, 0.5);
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  .underline.active {
    opacity: 1;
  }
`;

export default style;
