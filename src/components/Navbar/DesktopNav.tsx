"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navDetails } from "@/contents/NavDetails/NavDetails";
import { ThemeToggle } from "../Theme/ThemeToggle";

const DesktopNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="md:flex lg:gap-10 md:gap-12 justify-center items-center hidden">
      <div className=" md:flex md:text-sm lg:text-base lg:gap-8 md:gap-5 justify-center items-center">
        {navDetails.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-amber-500 transition-all duration-300 font-medium ${
              pathname === item.href ? "text-amber-500 font-semibold" : ""
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={() => router.push("/book")}
          className="text-black bg-white font-semibold lg:py-2 md:py-2 md:px-3 lg:px-6 rounded-md transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Book Us
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DesktopNav;
