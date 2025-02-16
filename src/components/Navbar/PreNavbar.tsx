"use client";
import { SocialLinks } from "@/assets/SocialLinks/SocialLinks";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import AlertMotion from "../../../ui/AlertMotion";

const PreNavbar = () => {
  return (
    <div className="text-white bg-black p-4 text-xl">
      <div className="mx-auto container w-full flex justify-between">
        <div className="flex gap-10">
          {/* Email */}
          <a
            href="mailto:info@stanfordinternational.com.au"
            className="flex justify-center items-center gap-3"
          >
            <HiOutlineMail className="text-3xl" />
            <p>info@stanfordinternational.com.au</p>
          </a>

          {/* Phone */}
          <a
            href="tel:(02)91459597"
            className="flex justify-center items-center gap-3"
          >
            <AlertMotion />
            <p>(02) 9145 9597</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-3">
          <p>Follow us:</p>
          <div className="flex justify-between items-center mt-1">
            {SocialLinks.map((value, index) => {
              const Icon = value.icon;
              return (
                <a
                  key={index}
                  href={value.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center bg-yellow-400  text-black rounded-full p-2 mr-3 transition duration-200"
                >
                  <Icon className={`text-lg  group-hover:${value.color}`} />
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
