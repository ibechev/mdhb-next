import css from "styled-jsx/css";
import { colors } from "../../../../style/Variables";

const style = css`
  .mob-navigation {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
  }

  @media only screen and (min-width: 500px) {
    .mob-navigation {
      display: none;
    }
  }

  .menu {
    position: fixed;
    height: 100%;
    width: 85%;
    padding: 32px;
    top: 0;
    right: 0;
    left: auto;
    background-color: ${colors.white};
    box-shadow: unset;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  [data-isopen="true"] {
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.3);
    transform: translate3d(0, 0, 0);
  }

  .menu-items-list {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 32px;
  }

  .menu-item {
    display: flex;
    font-size: 24px;
    height: 64px;
    color: rgba(${colors.blackRGB}, 0.5);
  }

  .line-active {
    display: inline-block;
    height: 100%;
    width: 2px;
    background-color: rgba(${colors.blackRGB}, 0.5);
    opacity: 0;
  }

  .line-active.active {
    opacity: 1;
  }

  .menu-item a {
    height: 100%;
    padding: 0 30px;
    line-height: 64px;
  }

  .overlay {
    position: fixed;
    display: block;
    height: 100vh;
    width: 100%;
    z-index: -1;
    visibility: hidden;
    transition: background-color 0.15s ease-in-out;
    background-color: transparent;
  }

  .overlay[data-show="true"] {
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default style;
