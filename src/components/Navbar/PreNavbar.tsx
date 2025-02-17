"use client";
import { SocialLinks } from "@/contents/SocialLinks/SocialLinks";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import AlertMotion from "../../../ui/AlertMotion";

const PreNavbar = () => {
  return (
    <div className=" bg-black p-4 text-sm hidden md:block ">
      <div className="lg:mx-auto  lg:container w-full flex justify-between items-start lg:px-16 relative ">
        <div className="flex md:gap-10  justify-start items-start gap-2 ">
          {/* Email */}
          <a
            href="mailto:info@stanfordinternational.com.au"
            className="flex justify-center items-center gap-2"
          >
            <HiOutlineMail className="text-xl text-white" />
            <p className="text-xs text-white">
              info@stanfordinternational.com.au
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:(02)91459597"
            className="flex justify-center items-center gap-2 text-white"
          >
            <AlertMotion />
            <p className="text-xs text-white">(02) 9145 9597</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-2">
          <p className="text-white">Follow us:</p>
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
                  <Icon className={`text-xs  group-hover:${value.color}`} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreNavbar;
