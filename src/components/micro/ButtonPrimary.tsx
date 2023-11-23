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
      <button
        className={`bg-cranberry-600 px-6 py-4 text-white rounded-lg font-normal text-2xl w-fit`}
      >
        {children}
      </button>
    );
  } else if (variant === "large-outline") {
    return (
      <button
        className="border-2 border-cranberry-600 px-6 py-4 text-black rounded-lg font-normal text-2xl hover:bg-cranberry-600 hover:text-white
      transition duration-300 ease-out hover:ease-in w-fit"
      >
        {children}
      </button>
    );
  } else if (variant === "large-minimal") {
    return (
      <button className="px-6 py-4 text-cranberry-600 rounded-lg font-normal text-2xl w-fit">
        {children}
      </button>
    );
  } else if (variant === "medium-solid") {
    return (
      <button className="bg-cranberry-600 px-6 py-4 text-white rounded-lg font-normal  w-fit">
        {children}
      </button>
    );
  } else if (variant === "medium-outline") {
    return (
      <button
        className={`border-2 border-cranberry-600 px-6 py-4 text-black rounded-lg font-semibold hover:bg-cranberry-600 cursor-pointer hover:text-white
      transition duration-300 ease-out hover:ease-in ${className} w-fit`}
      >
        {children}
      </button>
    );
  } else if (variant === "medium-minimal") {
    return (
      <button className=" px-6 py-4 text-cranberry-600 rounded-lg font-normal text-base w-fit">
        {children}
      </button>
    );
  } else if (variant === "small-solid") {
    return (
      <button className="bg-cranberry-600 px-6 py-3 text-white rounded-lg font-semibold text-sm w-fit">
        {children}
      </button>
    );
  } else if (variant === "small-outline") {
    return (
      <button
        className={`border-2 border-cranberry-600 cursor-pointer px-6 py-2 text-black rounded-lg 
      font-semibold text-sm hover:bg-cranberry-600 hover:text-white
      transition duration-300 ease-out hover:ease-in ${className} w-fit`}
      >
        {children}
      </button>
    );
  } else if (variant === "small-minimal") {
    return (
      <button className=" px-6 py-4 text-cranberry-600 rounded-lg font-normal text-base w-fit">
        {children}
      </button>
    );
  }
}
export default ButtonPrimary;
