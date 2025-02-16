import { IconType } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

type SocialLink = {
  href: string;
  icon: IconType;
  color: string;
};

export const SocialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com",
    icon: FaInstagram,
    color: "text-green-500",
  },
  {
    href: "https://www.facebook.com",
    icon: FaFacebook,
    color: "text-blue-500",
  },
  {
    href: "https://www.ticktok.com",
    icon: FaTiktok,
    color: "text-gray-500",
  },
];
