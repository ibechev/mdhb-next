import React from "react";
import Link from "next/link";

import style from "./Style";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>Home </a>
      </Link>
      <Link href="/services">
        <a>Services </a>
      </Link>
      <Link href="/gallery">
        <a>Gallery </a>
      </Link>
      <Link href="/contact">
        <a>Contact </a>
      </Link>
      <Link href="/about">
        <a>About </a>
      </Link>

      <style jsx>{style}</style>
    </header>
  );
};

export default Header;
