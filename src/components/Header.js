import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/search" className="item">
        Search
      </Link>
      <Link href="translator" className="item">
        Translator
      </Link>
    </div>
  );
};

export default Header;
