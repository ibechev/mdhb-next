import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import style from "./StyleHomeIcon";

import HomeIconSvg from "../../../../../static/home.svg";

const HomeIcon = ({ pathname }) => {
  return (
    <div className="home-icon">
      <Link href="/">
        <a>
          <span className="svg-wrapper">
            <HomeIconSvg />
          </span>
        </a>
      </Link>
      <span
        className={`underline ${pathname === "/" ? "active" : ""}`.trim()}
      />
      <style jsx>{style}</style>
    </div>
  );
};

HomeIcon.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default HomeIcon;
