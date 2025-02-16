import { IconType } from "react-icons";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

type SocialLink = {
  href: string;
  icon: IconType;
  color: string; // This should be a valid Tailwind CSS class
};

export const SocialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com",
    icon: FaFacebook,
    color: "text-blue-500", // Valid Tailwind class
  },
  {
    href: "https://www.twitter.com",
    icon: FaTwitter,
    color: "text-green-500", // Valid Tailwind class
  },
  {
    href: "https://www.linkedin.com",
    icon: FaLinkedin,
    color: "text-gray-500", // Valid Tailwind class
  },
];
