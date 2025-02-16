"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import DesktopNav from "./DesktopNav";
import BrandLogo from "../logo/BrandLogo";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <div className="md:mx-auto md:container w-full flex justify-between items-center md:px-20 p-4 overflow-hidden">
        <BrandLogo />
        <DesktopNav />
        <button
          className="text-white md:hidden hover:text-black duration-200"
          onClick={() => setShowNav(!showNav)}
        >
          <IoMenu className="text-3xl" />
        </button>
        <MobileMenu isOpen={showNav} onClose={() => setShowNav(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
