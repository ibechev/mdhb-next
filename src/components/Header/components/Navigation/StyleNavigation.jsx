import css from "styled-jsx/css";
import { colors } from "../../../../style/Variables";

export const styleNav = css`
  nav {
    height: 100%;
  }

  @media only screen and (max-width: 499px) {
    nav {
      display: none;
    }
  }

  .menu-items-list {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .menu-item {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: rgba(${colors.blackRGB}, 0.5);
    transition: color 0.1s ease-in;
  }

  .menu-item:hover {
    color: rgba(${colors.blackRGB}, 0.8);
  }

  .menu-item:not(:last-child) {
    margin-right: 32px;
  }

  .menu-item a {
    height: 100%;
    line-height: 64px;
  }

  .line-active {
    position: absolute;
    display: inline-block;
    top: 100%;
    transform: translateY(-100%);
    width: 100%;
    height: 2px;
    background-color: rgba(${colors.blackRGB}, 0.5);
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  .line-active.active {
    opacity: 1;
  }
`;
