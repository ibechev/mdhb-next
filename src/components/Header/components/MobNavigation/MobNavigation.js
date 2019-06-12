import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { constants, labels } from "../../../../config/defaults";
import CloseIcon from "../../../../../static/close.svg";
import Button from "../../../Button/Button";

import style from "./StyleMobNavigation";

const filteredNavItems = Object.keys(constants.routes).filter(
  route => route !== "HOME"
);

const MobNavigation = ({ isOpen = false, handleClose }) => {
  return (
    <div className="mob-navigation">
      <div className="menu" data-isopen={isOpen}>
        <Button onClick={handleClose} className="btn-icon">
          <CloseIcon />
        </Button>
        <nav>
          <ul>
            {filteredNavItems.map(route => (
              <li key={route}>
                <Link href={constants.routes[route]}>
                  <a>{labels[route]}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="overlay" data-show={isOpen} onClick={handleClose}></div>
      <style jsx>{style}</style>
    </div>
  );
};

MobNavigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default MobNavigation;
