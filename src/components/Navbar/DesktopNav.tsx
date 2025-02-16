"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navDetails } from "@/contents/NavDetails/NavDetails";

const DesktopNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="hidden md:flex text-sm gap-10 justify-center items-center">
      {navDetails.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`hover:text-amber-500 transition-all duration-300 ${
            pathname === item.href
              ? "text-amber-500 font-semibold"
              : "text-black"
          }`}
        >
          {item.text}
        </Link>
      ))}

      <button
        onClick={() => router.push("/book")}
        className="text-black bg-white font-semibold py-2 px-6 rounded-md transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        Book Us
      </button>
    </div>
  );
};

export default DesktopNav;
