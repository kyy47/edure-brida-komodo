import React from "react";
import Edure from "./Edure";
import NavMenu from "./NavMenu";
import ButtonPrimary from "./ButtonPrimary";

function Navbar() {
  return (
    <header className="px-6.25  left-0 fixed top-0 right-0 h-10%  shadow-lg z-50 bg-white">
      <nav className="flex h-full justify-between items-center">
        <Edure />
        <NavMenu />
        <ButtonPrimary variant="small-outline">Sign Up</ButtonPrimary>
      </nav>
    </header>
  );
}

export default Navbar;
