import { type } from "os";
import React from "react";

type SizeVariant = "large" | "small" | "medium";
type TypeVariant = "minimal" | "outline" | "solid";
type ButtonPrimaryProps = {
  variant: `${SizeVariant}-${TypeVariant}`;
};
function ButtonPrimary({ variant }: ButtonPrimaryProps) {
  if (variant === "large-solid") {
    return (
      <div className="bg-cranberry-600 px-6 py-4 text-white rounded-lg font-normal text-2xl">
        ButtonPrimary
      </div>
    );
  } else if (variant === "large-outline") {
    return (
      <div className="border border-cranberry-600 px-6 py-4 text-cranberry-600 rounded-lg font-normal text-2xl">
        ButtonPrimary
      </div>
    );
  } else if (variant === "large-minimal") {
    return (
      <div className="px-6 py-4 text-cranberry-600 rounded-lg font-normal text-2xl">
        ButtonPrimary
      </div>
    );
  } else if (variant === "medium-solid") {
    return (
      <div className="bg-cranberry-600 px-6 py-4 text-white rounded-lg font-normal ">
        ButtonPrimary
      </div>
    );
  } else if (variant === "medium-outline") {
    return (
      <div className="border border-cranberry-600 px-6 py-4 text-cranberry-600 rounded-lg font-normal">
        ButtonPrimary
      </div>
    );
  } else if (variant === "medium-minimal") {
    return (
      <div className=" px-6 py-4 text-cranberry-600 rounded-lg font-normal text-base">
        ButtonPrimary
      </div>
    );
  } else if (variant === "small-solid") {
    return (
      <div className="bg-cranberry-600 px-6 py-4 text-white rounded-lg font-normal text-xs ">
        ButtonPrimary
      </div>
    );
  } else if (variant === "small-outline") {
    return (
      <div className="border border-cranberry-600 px-6 py-4 text-cranberry-600 rounded-lg font-normal text-xs">
        ButtonPrimary
      </div>
    );
  } else if (variant === "small-minimal") {
    return (
      <div className=" px-6 py-4 text-cranberry-600 rounded-lg font-normal text-xs">
        ButtonPrimary
      </div>
    );
  }
}
export default ButtonPrimary;
