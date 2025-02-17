import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 font-semibold  bg-yellow-400 rounded hover:bg-yellow-500    ${className} rounded-md transition-transform duration-300 hover:scale-105 active:scale-95`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
