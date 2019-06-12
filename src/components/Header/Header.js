import React, { useState, useEffect } from "react";
import Link from "next/link";

import HomeIcon from "../../../static/home.svg";
import BurgerIcon from "../../../static/burger.svg";
import Navigation from "./components/Navigation/Navigation";
import MobNavigation from "./components/MobNavigation/MobNavigation";
import Button from "../Button/Button";

import style from "./StyleHeader";

const useResizeHeader = setMobNavOpen => {
  const resizeHandler = () => {
    if (window.innerWidth > 499) setMobNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => removeEventListener("resize", resizeHandler);
  }, []);
};

const Header = () => {
  const [mobNavOpen, setMobNavOpen] = useState(false);
  const openNav = () => setMobNavOpen(true);
  const closeNav = () => setMobNavOpen(false);
  useResizeHeader(setMobNavOpen);

  return (
    <header>
      <Link href="/">
        <a data-visible={!mobNavOpen}>
          <HomeIcon />
        </a>
      </Link>

      <Button onClick={openNav} className="btn-icon">
        <BurgerIcon />
      </Button>
      <Navigation />
      <MobNavigation isOpen={mobNavOpen} handleClose={closeNav} />
      <style jsx>{style}</style>
    </header>
  );
};

export default Header;
