import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  buttonClass?: string;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  buttonClass,
  href,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`cursor-pointer text-sm p-2 ${buttonClass} ${variant}`}
    >
      {children}
    </a>
  );
};

export default Button;
