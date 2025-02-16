"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import BrandLogo from "../logo/BrandLogo";
import { navDetails } from "@/contents/NavDetails/NavDetails";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowDropRightFill } from "react-icons/ri";
import { SocialLinks } from "@/contents/SocialLinks/SocialLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="nav"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.5,
          }}
          className="fixed inset-0 bg-black opacity-90 z-50 md:hidden"
        >
          <button
            onClick={onClose}
            className="text-white absolute right-4 top-6 scale-150"
          >
            <IoClose className="text-2xl" />
          </button>

          {/* Logo Section */}
          <div className="mx-4 mb-8 pb-4 py-4  border-b border-slate-400 ">
            <BrandLogo color="white" />
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="space-y-6">
              {navDetails.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-amber-500 transition-all duration-300 justify-start items-center w-full px-4 flex gap-2 ${
                      pathname === item.href
                        ? "text-amber-500 font-semibold"
                        : "text-white"
                    }`}
                    onClick={onClose} // Close the menu when a link is clicked
                  >
                    <span>
                      <RiArrowDropRightFill />
                    </span>{" "}
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-full flex justify-center items-center flex-col mt-10  relative ">
            {/* Social Links */}
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex justify-between items-center mt-1">
                {SocialLinks.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <a
                      key={index}
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center bg-yellow-400  text-black rounded-full p-1 mr-3 transition duration-200"
                    >
                      <Icon
                        className={`text-2xl  group-hover:${value.color}`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
