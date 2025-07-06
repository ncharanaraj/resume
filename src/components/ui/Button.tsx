import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  buttonClass?: string;
};

const Button: React.FC<ButtonProps> = ({ children, variant, buttonClass }) => {
  return (
    <button className={`cursor-pointer text-sm p-2 ${buttonClass} ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
