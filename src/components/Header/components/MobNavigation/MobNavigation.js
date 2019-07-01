import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { constants, labels } from "../../../../config/defaults";
import CloseIcon from "../../../../../static/close.svg";
import BurgerIcon from "../../../../../static/burger.svg";
import Button from "../../../Button/Button";

import style from "./StyleMobNavigation";

const { routes } = constants;
const navItems = Object.keys(routes);

const MobNavigation = ({ pathname }) => {
  const [mobNavOpen, setMobNavOpen] = useState(true);
  const openNav = () => setMobNavOpen(true);
  const closeNav = () => setMobNavOpen(false);

  useResizeHeader(setMobNavOpen);

  return (
    <div className="mob-navigation">
      <Button onClick={openNav} className="btn-icon">
        <BurgerIcon />
      </Button>
      <div className="menu" data-isopen={mobNavOpen}>
        <Button onClick={closeNav} className="btn-icon">
          <CloseIcon />
        </Button>
        <nav>
          <ul className="menu-items-list">
            {navItems.map(route => (
              <li key={route} className="menu-item">
                <span
                  className={`line-active ${
                    pathname === routes[route] ? "active" : ""
                  }`.trim()}
                />
                <Link href={routes[route]}>
                  <a
                    className={`${pathname === routes[route] ? "active" : ""}`}
                    onClick={closeNav}
                  >
                    {labels[route]}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="overlay" data-show={mobNavOpen} onClick={closeNav} />
      <style jsx>{style}</style>
    </div>
  );
};

const useResizeHeader = setMobNavOpen => {
  const resizeHandler = () => {
    if (window.innerWidth > 499) setMobNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => removeEventListener("resize", resizeHandler);
  }, []);
};

MobNavigation.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default MobNavigation;
