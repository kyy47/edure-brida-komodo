import React from "react";

type HeadingProps = {
  children: string;
  gravity?: "center";
  className?: string;
};
function Heading({ children, gravity, className }: HeadingProps) {
  return (
    <h2
      className={`text-5xl text-black font-semibold  ${
        gravity == "center" && "text-center"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export default Heading;
