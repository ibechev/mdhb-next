import React from "react";
import PropTypes from "prop-types";

import HomeIcon from "./components/HomeIcon/HomeIcon";
import Navigation from "./components/Navigation/Navigation";
import MobNavigation from "./components/MobNavigation/MobNavigation";

import style from "./StyleHeader";

const Header = ({ pathname }) => {
  return (
    <header>
      <HomeIcon pathname={pathname} />
      <Navigation pathname={pathname} />
      <MobNavigation pathname={pathname} />
      <style jsx>{style}</style>
    </header>
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Header;
