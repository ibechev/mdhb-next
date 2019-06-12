import css from "styled-jsx/css";
import { colors } from "../../../../style/Variables";

const style = css`
  @media only screen and (min-width: 500px) {
    .mob-navigation {
      display: none;
    }
  }

  .mob-navigation {
    position: fixed;
  }

  .menu {
    position: fixed;
    height: 100%;
    width: 80%;
    padding: 32px;
    top: 0;
    right: 0;
    left: auto;
    background-color: ${colors.white};
    box-shadow: unset;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  [data-isopen="true"] {
    box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.4);
    transform: translate3d(0, 0, 0);
  }

  .overlay {
    position: fixed;
    display: block;
    height: 100vh;
    width: 100%;
    z-index: -1;
    visibility: hidden;
  }

  .overlay[data-show="true"] {
    visibility: visible;
  }
`;

export default style;
