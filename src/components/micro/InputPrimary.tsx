import { type } from "os";
import React from "react";

type InputPrimaryProps = {
  placeholder: string;
  className?: string;
  variant?: "outline";
};
function InputPrimary({ placeholder, className, variant }: InputPrimaryProps) {
  if (variant == "outline") {
    return (
      <input
        className={`w-fit min-w-[200px] px-5 py-1 text-sm rounded-lg border-2 border-cranberry-500 ${className}`}
        placeholder={placeholder}
      />
    );
  }
  return (
    <input
      className={`w-fit min-w-[200px] px-5 py-3 text-sm rounded-lg ${className}`}
      placeholder={placeholder}
    />
  );
}

export default InputPrimary;
