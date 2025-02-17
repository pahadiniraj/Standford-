"use client";

import { useTheme } from "../../../hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`  ${
        theme === "dark" ? "bg-white" : "bg-black"
      } rounded-full h-7 w-7 duration-200`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? "☀️ " : "🌙"}
    </button>
  );
};
