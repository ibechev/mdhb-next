import css from "styled-jsx/css";
import { colors } from "../../../../style/Variables";

export const styleNav = css`
  @media only screen and (max-width: 499px) {
    nav {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    color: rgba(${colors.blackRGB}, 0.6);
    letter-spacing: 1px;
    text-transform: capitalize;
    transition: color 0.1s ease-in;
  }

  li:hover {
    color: rgba(${colors.blackRGB}, 0.4);
  }

  li:not(:last-child) {
    margin-right: 16px;
  }
`;
