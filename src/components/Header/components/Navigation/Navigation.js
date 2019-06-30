import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { constants, labels } from "../../../../config/defaults";
import { styleNav } from "./StyleNavigation";

const filteredNavItems = Object.keys(constants.routes).filter(
  route => route !== "HOME"
);

const { routes } = constants;

const Navigation = ({ pathname }) => {
  return (
    <nav>
      <ul className="menu-items-list">
        {filteredNavItems.map(route => (
          <li className="menu-item" key={route}>
            <Link href={routes[route]}>
              <a>{labels[route]}</a>
            </Link>
            <span
              className={`line-active ${
                pathname === routes[route] ? "active" : ""
              }`}
            />
          </li>
        ))}
      </ul>
      <style jsx>{styleNav}</style>
    </nav>
  );
};

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Navigation;
