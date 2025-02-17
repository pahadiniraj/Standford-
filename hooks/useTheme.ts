"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null); // Null to prevent flicker

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure it's running on the client
      const storedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      const preferredTheme = storedTheme || "light";

      setTheme(preferredTheme);
      document.documentElement.setAttribute("data-theme", preferredTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return { theme, toggleTheme };
}
