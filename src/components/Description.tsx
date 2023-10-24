import { type } from "os";
import React from "react";

type DescriptionProps = {
  children: string;
  gravity?: "center";
  className?: string;
};
function Description({ children, gravity, className }: DescriptionProps) {
  return (
    <p
      className={`text-lg text-secondary ${
        gravity === "center" && "text-center"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export default Description;
