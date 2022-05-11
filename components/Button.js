import React from "react";

const Button = ({
  style: overrideStyle,
  variant = "normal",
  size = "medium",
  children,
  ...rest
}) => {
  const style = { ...defaultStyle, ...overrideStyle };

  return (
    <button
      className={`${style.root} ${style.default} ${style.variant[variant]} ${style.size[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

const defaultStyle = {
  root: "",
  default:
    "px-4 text-center text-base font-semibold rounded-lg flex items-center space-x-1",
  size: {
    small: `py-1`,
    medium: `py-2`,
    large: `py-4`,
  },
  variant: {
    normal: `bg-transparent text-indigo-500 hover:underline`,
    outlined: `uppercase shadow-md hover:bg-indigo-800 text-indigo-500 hover:text-white border-2 border-indigo-900`,
    contained: `uppercase shadow-md bg-indigo-600 hover:bg-indigo-700 text-white`,
  },
};

export default Button;
