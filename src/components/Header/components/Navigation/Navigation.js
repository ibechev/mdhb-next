import React from "react";
import Link from "next/link";

import { constants, labels } from "../../../../config/defaults";
import { styleNav } from "./StyleNavigation";

const filteredNavItems = Object.keys(constants.routes).filter(
  route => route !== "HOME"
);

const Navigation = () => {
  return (
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
      <style jsx>{styleNav}</style>
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
