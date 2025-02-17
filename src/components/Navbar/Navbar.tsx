"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import DesktopNav from "./DesktopNav";
import BrandLogo from "../logo/BrandLogo";
import { MobileMenu } from "./MobileMenu";
import SideMotion from "../../../ui/SideMotion";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <div className="lg:mx-auto lg:container w-full flex justify-between items-center lg:px-20 px-4 pb-8 pt-6 mb-4 relative">
        <div className="absolute md:-right-[130px] lg:-right-8 lg:-top-36 -z-10 -right-[170px] -top-36 ">
          <SideMotion />
        </div>
        <BrandLogo />
        <DesktopNav />
        <button
          className=" md:hidden  duration-200"
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
