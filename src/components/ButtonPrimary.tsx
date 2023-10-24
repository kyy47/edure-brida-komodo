import { type } from "os";
import React from "react";

type SizeVariant = "large" | "small" | "medium";
type TypeVariant = "minimal" | "outline" | "solid";
type ButtonPrimaryProps = {
  variant: `${SizeVariant}-${TypeVariant}`;
  children: string;
  className?: string;
};
function ButtonPrimary({ variant, children, className }: ButtonPrimaryProps) {
  if (variant === "large-solid") {
    return (
      <div
        className={`bg-cranberry-600 px-6 py-4 text-white rounded-lg font-normal text-2xl`}
      >
        {children}
      </div>
    );
  } else if (variant === "large-outline") {
    return (
      <div
        className="border-2 border-cranberry-600 px-6 py-4 text-black rounded-lg font-normal text-2xl hover:bg-cranberry-600 hover:text-white
      transition duration-300 ease-out hover:ease-in"
      >
        {children}
      </div>
    );
  } else if (variant === "large-minimal") {
    return (
      <div className="px-6 py-4 text-cranberry-600 rounded-lg font-normal text-2xl">
        {children}
      </div>
    );
  } else if (variant === "medium-solid") {
    return (
      <div className="bg-cranberry-600 px-6 py-4 text-white rounded-lg font-normal ">
        {children}
      </div>
    );
  } else if (variant === "medium-outline") {
    return (
      <div
        className={`border-2 border-cranberry-600 px-6 py-4 text-black rounded-lg font-semibold hover:bg-cranberry-600 cursor-pointer hover:text-white
      transition duration-300 ease-out hover:ease-in ${className}`}
      >
        {children}
      </div>
    );
  } else if (variant === "medium-minimal") {
    return (
      <div className=" px-6 py-4 text-cranberry-600 rounded-lg font-normal text-base">
        {children}
      </div>
    );
  } else if (variant === "small-solid") {
    return (
      <div className="bg-cranberry-600 px-6 py-4 text-white rounded-lg font-normal text-base ">
        {children}
      </div>
    );
  } else if (variant === "small-outline") {
    return (
      <div
        className={`border-2 border-cranberry-600 cursor-pointer px-6 py-2 text-black rounded-lg 
      font-semibold text-base hover:bg-cranberry-600 hover:text-white
      transition duration-300 ease-out hover:ease-in ${className}`}
      >
        {children}
      </div>
    );
  } else if (variant === "small-minimal") {
    return (
      <div className=" px-6 py-4 text-cranberry-600 rounded-lg font-normal text-base">
        {children}
      </div>
    );
  }
}
export default ButtonPrimary;
